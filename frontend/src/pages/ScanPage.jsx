import React, { useState } from "react";
import { Camera } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Dialog } from "../components/ui/dialog";
import { toast } from "../hooks/use-toast";

// Clean, single ScanPage component
const ScanPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [cameraImage, setCameraImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file));
      setCameraImage(null);
    }
  };

  // Camera modal logic
  const openCamera = () => {
    setShowCamera(true);
    setCameraImage(null);
  };
  const closeCamera = () => {
    setShowCamera(false);
  };
  const handleCapture = () => {
    setCameraImage("https://via.placeholder.com/300x200?text=Camera+Image");
    setImagePreview(null);
    setShowCamera(false);
  };

  // Analyze image by sending to backend
  const handleAnalyze = async () => {
    setLoading(true);
    setResult(null);
    let imageData;
    if (selectedFile) {
      imageData = selectedFile;
    } else if (cameraImage) {
      // If you use real camera capture, convert dataURL to File
      setLoading(false);
      toast({ title: "Camera upload not implemented." });
      return;
    } else {
      toast({ title: "No image selected." });
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("image", imageData);

    try {
      const response = await fetch("http://localhost:5000/analyze-food", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (response.ok) {
        setResult(data.analysis || "No analysis result.");
      } else {
        setResult(data.error || "Error analyzing image.");
      }
    } catch (err) {
      setResult("Error: " + err.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20 pb-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="p-8 text-center bg-gray-800/80 border-gray-700 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-4 text-white">Scan Food Pack</h2>
          <div className="flex flex-col items-center gap-6">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mb-2 block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-700 file:text-white hover:file:bg-emerald-800"
            />
            <div className="flex gap-4 w-full justify-center">
              <Button onClick={openCamera} variant="secondary" className="flex items-center gap-2 px-6 py-2 rounded-lg shadow bg-emerald-700 hover:bg-emerald-800 text-white font-semibold">
                <Camera size={20} /> Use Camera
              </Button>
              <Button onClick={handleAnalyze} disabled={loading || (!selectedFile && !cameraImage)} variant="default" className="px-6 py-2 rounded-lg shadow bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
                {loading ? "Analyzing..." : "Analyze"}
              </Button>
            </div>
            {imagePreview && (
              <img src={imagePreview} alt="Preview" className="rounded shadow mb-2 w-64 h-40 object-cover border-2 border-emerald-700" />
            )}
            {cameraImage && (
              <img src={cameraImage} alt="Camera" className="rounded shadow mb-2 w-64 h-40 object-cover border-2 border-emerald-700" />
            )}
            {result && (
              <div className={`mt-4 font-semibold ${result.toLowerCase().includes('error') ? 'text-red-400' : 'text-green-400'}`}>{result}</div>
            )}
          </div>
        </Card>
        {/* Camera Modal */}
        {showCamera && (
          <Dialog open={showCamera} onOpenChange={closeCamera}>
            <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-lg font-bold mb-4 text-white">Camera</h3>
                <div className="mb-4">
                  <img src="https://via.placeholder.com/300x200?text=Camera+Preview" alt="Camera Preview" className="rounded w-72 h-48 object-cover" />
                </div>
                <Button onClick={handleCapture} className="mr-2">Click Image</Button>
                <Button variant="outline" onClick={closeCamera}>Cancel</Button>
              </div>
            </div>
          </Dialog>
        )}
      </div>
    </div>
  );
};

export default ScanPage;