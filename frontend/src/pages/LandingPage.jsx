import React from "react";
import { Link } from "react-router-dom";
import { Scan, Zap, Shield, Clock } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

const LandingPage = () => {
  const features = [
    {
      icon: Scan,
      title: "Instant Analysis",
      description: "Upload a photo of any food package and get instant nutritional insights"
    },
    {
      icon: Zap,
      title: "AI-Powered",
      description: "Advanced vision models extract and analyze ingredients automatically"
    },
    {
      icon: Shield,
      title: "Health Rating",
      description: "Get a clear 1-10 healthiness score with detailed explanations"
    },
    {
      icon: Clock,
      title: "Quick Results",
      description: "Receive comprehensive analysis in seconds, not minutes"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
                  Know What You
                  <span className="text-emerald-400 block">Eat</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                  AI-powered nutritional analysis that reveals the truth behind every packaged food. 
                  Just snap a photo and discover what's really in your food.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/scan">
                  <Button 
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 group"
                  >
                    <Scan className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Scan the Pack
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="border-2 border-gray-600 hover:border-emerald-400 hover:text-emerald-400 text-gray-300 bg-transparent px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">10K+</div>
                  <div className="text-sm text-gray-400">Products Analyzed</div>
                </div>
                <div className="w-px h-12 bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-sm text-gray-400">Accuracy Rate</div>
                </div>
              </div>
            </div>

            {/* Right 3D Visual */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Main 3D Food Package */}
                <div className="absolute inset-0 transform hover:scale-110 transition-all duration-700 hover:rotate-y-12 cursor-pointer group">
                  <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-3xl shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-500">
                    <div className="p-8 h-full flex flex-col justify-center items-center text-white">
                      <Scan className="w-16 h-16 mb-4 animate-pulse" />
                      <div className="text-xl font-bold mb-2">NutriLens</div>
                      <div className="text-sm opacity-90 text-center">
                        AI Vision Analysis
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gray-800 border border-gray-700 rounded-full shadow-lg flex items-center justify-center animate-bounce">
                  <span className="text-2xl">🥗</span>
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce" style={{animationDelay: '0.5s'}}>
                  <Zap className="w-8 h-8 text-gray-900" />
                </div>
                <div className="absolute top-1/2 -right-8 w-12 h-12 bg-emerald-900/80 rounded-full shadow-lg flex items-center justify-center animate-bounce" style={{animationDelay: '1s'}}>
                  <span className="text-xl text-emerald-300">✓</span>
                </div>

                {/* Scan Lines Effect */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  <div className="absolute w-full h-1 bg-emerald-300 animate-ping top-1/4 opacity-60"></div>
                  <div className="absolute w-full h-1 bg-emerald-300 animate-ping top-2/4 opacity-60" style={{animationDelay: '0.3s'}}></div>
                  <div className="absolute w-full h-1 bg-emerald-300 animate-ping top-3/4 opacity-60" style={{animationDelay: '0.6s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI technology makes nutritional analysis simple, fast, and accurate
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-gray-700 bg-gray-800/80 backdrop-blur-sm"
                >
                  <div className="w-16 h-16 bg-emerald-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 transform hover:rotate-12 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Make Informed Food Choices?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of users who trust NutriLens for their nutritional insights
          </p>
          <Link to="/scan">
            <Button 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 text-xl font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 group"
            >
              <Scan className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
              Start Scanning Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;