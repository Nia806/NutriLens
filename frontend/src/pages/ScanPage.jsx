import React, { useState, useCallback } from "react";
import { Upload, Scan, Camera, Image, AlertCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Alert, AlertDescription } from "../components/ui/alert";
import { Progress } from "../components/ui/progress";
import mockData from "../data/mockData";

const ScanPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (file) => {
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setAnalysisResult(null);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const analyzeImage = async () => {
    if (!selectedFile) return;

    setIsAnalyzing(true);
    setProgress(0);

    // Simulate analysis progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return prev;
        }
        return prev + Math.random() * 20;
      });
    }, 200);

    // Simulate API delay
    setTimeout(() => {
      clearInterval(progressInterval);
      setProgress(100);
      
      // Use mock data for demonstration
      setAnalysisResult(mockData.sampleAnalysis);
      setIsAnalyzing(false);
    }, 3000);
  };

  const HealthRating = ({ score }) => {
    const getColor = (score) => {
      if (score >= 8) return "text-green-400 bg-green-900/30 border-green-400/50";
      if (score >= 6) return "text-yellow-400 bg-yellow-900/30 border-yellow-400/50";
      if (score >= 4) return "text-orange-400 bg-orange-900/30 border-orange-400/50";
      return "text-red-400 bg-red-900/30 border-red-400/50";
    };

    return (
      <div className={`inline-flex items-center px-4 py-2 rounded-full font-bold text-lg border ${getColor(score)}`}>
        {score}/10
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Scan Food Package
          </h1>
          <p className="text-xl text-gray-300">
            Upload a photo of the back of any food package to get instant nutritional analysis
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="space-y-6">
            <Card className="p-8 bg-gray-800/80 border-gray-700 backdrop-blur-sm">
              <div
                className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 ${
                  dragActive
                    ? "border-emerald-400 bg-emerald-600/10"
                    : "border-gray-600 hover:border-emerald-400 hover:bg-emerald-600/5"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                {previewUrl ? (
                  <div className="space-y-4">
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="max-w-full max-h-64 mx-auto rounded-lg shadow-lg"
                    />
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSelectedFile(null);
                        setPreviewUrl(null);
                        setAnalysisResult(null);
                      }}
                      className="mt-4 border-gray-600 text-gray-300 hover:text-white hover:border-emerald-400"
                    >
                      Choose Different Image
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="w-20 h-20 bg-emerald-600/20 rounded-full flex items-center justify-center mx-auto mb-6 transform hover:rotate-12 transition-transform duration-300">
                      <Upload className="w-10 h-10 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-white mb-2">
                        Drop your image here, or click to browse
                      </p>
                      <p className="text-gray-400 mb-4">
                        Supports JPG, PNG, WebP formats
                      </p>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileInput}
                      className="hidden"
                      id="file-input"
                    />
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <label htmlFor="file-input">
                        <Button className="bg-emerald-600 hover:bg-emerald-700 cursor-pointer">
                          <Image className="w-4 h-4 mr-2" />
                          Choose File
                        </Button>
                      </label>
                      <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:border-emerald-400">
                        <Camera className="w-4 h-4 mr-2" />
                        Use Camera
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {selectedFile && !analysisResult && (
                <div className="mt-6">
                  <Button
                    onClick={analyzeImage}
                    disabled={isAnalyzing}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-3 transform hover:scale-105 transition-all duration-300"
                  >
                    {isAnalyzing ? (
                      <>
                        <Scan className="w-5 h-5 mr-2 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Scan className="w-5 h-5 mr-2" />
                        Analyze Package
                      </>
                    )}
                  </Button>
                </div>
              )}

              {isAnalyzing && (
                <div className="mt-6 space-y-3">
                  <div className="flex justify-between text-sm text-gray-300">
                    <span>Analyzing nutritional content...</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <p className="text-sm text-gray-400 text-center">
                    Extracting ingredients and nutrition information
                  </p>
                </div>
              )}
            </Card>

            <Alert className="bg-gray-800/60 border-gray-700">
              <AlertCircle className="h-4 w-4 text-emerald-400" />
              <AlertDescription className="text-gray-300">
                For best results, ensure the ingredients list and nutrition label are clearly visible in your photo.
              </AlertDescription>
            </Alert>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {analysisResult ? (
              <Card className="p-8 bg-gray-800/80 border-gray-700 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Analysis Results
                    </h2>
                    <div className="flex justify-center mb-6">
                      <HealthRating score={analysisResult.healthScore} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Health Assessment
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {analysisResult.explanation}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Key Findings
                    </h3>
                    <ul className="space-y-2">
                      {analysisResult.keyFindings.map((finding, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-300">{finding}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Recommendations
                    </h3>
                    <ul className="space-y-2">
                      {analysisResult.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-300">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ) : (
              <Card className="p-8 text-center bg-gray-800/80 border-gray-700 backdrop-blur-sm">
                <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Scan className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Ready to Analyze
                </h3>
                <p className="text-gray-400">
                  Upload an image to get started with nutritional analysis
                </p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanPage;