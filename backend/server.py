
import os
import base64
import requests
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from dotenv import load_dotenv
from werkzeug.utils import secure_filename
from werkzeug.exceptions import RequestEntityTooLarge

# Load environment variables
load_dotenv()
OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")
if not OPENROUTER_API_KEY:
    raise RuntimeError("OPENROUTER_API_KEY is missing from .env file!")

# Flask app setup
app = Flask(__name__, static_folder="../frontend/build", static_url_path="/")
CORS(app, resources={r"/analyze-food": {"origins": "*"}})

# Config for file uploads
app.config['MAX_CONTENT_LENGTH'] = 5 * 1024 * 1024  # 5 MB

ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "webp"}
def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS

# Prompt for LLaMA analysis
ANALYSIS_PROMPT = """
**IMPORTANT:**  
1. **Start your response with:** "Rating: X/10" where X is the rating.  

**Review the food label and consider the following:**

**Recommendation:** Should the user eat this regularly, occasionally, or avoid it?
"""

def call_openrouter(model, messages, temperature=0.3, max_tokens=500):
    """Generic function to call OpenRouter API"""
    url = "https://openrouter.ai/api/v1/chat/completions"
    headers = {"Authorization": f"Bearer {OPENROUTER_API_KEY}"}
    payload = {
        "model": model,
        "messages": messages,
        "temperature": temperature,
        "max_tokens": max_tokens
    }
    resp = requests.post(url, json=payload, headers=headers)
    resp.raise_for_status()
    return resp.json()["choices"][0]["message"]["content"]

@app.route("/analyze-food", methods=["POST"])
def analyze_food():
    try:
        # Check file
        if "image" not in request.files:
            return jsonify({"error": "No file uploaded"}), 400
        
        file = request.files["image"]
        if file.filename == "":
            return jsonify({"error": "No selected file"}), 400
        
        if not allowed_file(file.filename):
            return jsonify({"error": "Unsupported file type. Only images allowed."}), 415

        # Read image as Base64
        image_bytes = file.read()
        image_base64 = base64.b64encode(image_bytes).decode("utf-8")

        # Step 1: Qwen2.5 VL extraction
        extracted_text = call_openrouter(
            model="qwen/qwen2.5-vl-72b-instruct:free",
            messages=[
                {
                    "role": "user",
                    "content": [
                        {"type": "text", "text": "Extract the food label details in a plain text format."},
                        {"type": "image_url", "image_url": {"url": f"data:image/jpeg;base64,{image_base64}"}}
                    ]
                }
            ],
            temperature=0.1,
            max_tokens=2000
        )

        # Step 2: LLaMA 3.3 rating
        analysis_text = call_openrouter(
            model="meta-llama/llama-3.3-70b-instruct:free",
            messages=[
                {
                    "role": "user",
                    "content": f"{ANALYSIS_PROMPT}\n\nFood Label Details:\n{extracted_text}"
                }
            ],
            temperature=0.3,
            max_tokens=500
        )

        return jsonify({
            "analysis": analysis_text
        })

    except RequestEntityTooLarge:
        return jsonify({"error": "Uploaded file is too large. Max: 5MB"}), 413
    except requests.exceptions.RequestException as e:
        return jsonify({"error": "API request failed", "details": str(e)}), 500
    except Exception as e:
        print("Analysis failed:", e)
        return jsonify({"error": "Analysis failed", "details": str(e)}), 500

# Serve React frontend in production
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_frontend(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, "index.html")

if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
