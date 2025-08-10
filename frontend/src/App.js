import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import ScanPage from "./pages/ScanPage";
import AboutPage from "./pages/AboutPage";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App min-h-screen bg-gray-900">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/scan" element={<ScanPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;