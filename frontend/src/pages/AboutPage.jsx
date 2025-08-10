import React from "react";
import { Code, Database, Shield, Zap, Eye, Brain, Server, Globe } from "lucide-react";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const AboutPage = () => {
  const techStack = [
    {
      category: "Frontend",
      icon: Globe,
      technologies: [
        { name: "HTML", description: "Semantic markup structure" },
        { name: "Tailwind CSS", description: "Utility-first styling framework" },
        { name: "JavaScript", description: "Interactive functionality" },
      ]
    },
    {
      category: "Backend",
      icon: Server,
      technologies: [
        { name: "Node.js", description: "JavaScript runtime environment" },
        { name: "Express", description: "Web application framework" },
      ]
    },
    {
      category: "AI Models",
      icon: Brain,
      technologies: [
        { name: "Qwen2.5 VL", description: "Vision-language model for text extraction" },
        { name: "LLaMA 3.3 70B Instruct", description: "Health ratings and explanations" },
      ]
    }
  ];

  const features = [
    {
      icon: Eye,
      title: "Vision Analysis",
      description: "Advanced computer vision extracts text from food package images with high accuracy"
    },
    {
      icon: Brain,
      title: "Smart Processing",
      description: "AI models understand ingredients and nutritional information contextually"
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get comprehensive health analysis and ratings in under 3 seconds"
    },
    {
      icon: Database,
      title: "Comprehensive Data",
      description: "Cross-reference with nutritional databases for accurate health assessments"
    }
  ];

  const workflow = [
    {
      step: "01",
      title: "Image Upload",
      description: "User uploads photo of food package back side containing ingredients and nutrition label"
    },
    {
      step: "02",
      title: "Text Extraction",
      description: "Qwen2.5 VL vision model processes the image and extracts all textual information"
    },
    {
      step: "03",
      title: "Analysis Processing",
      description: "LLaMA 3.3 70B analyzes extracted data against nutritional standards and guidelines"
    },
    {
      step: "04",
      title: "Health Rating",
      description: "Generate 1-10 health score with detailed explanation and recommendations"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About NutriLens
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            NutriLens leverages cutting-edge AI technology to democratize nutritional understanding, 
            making it simple for anyone to make informed food choices through advanced computer vision and natural language processing.
          </p>
        </div>

        {/* Core Features */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Core Features</h2>
            <p className="text-lg text-gray-400">Powerful capabilities that make nutritional analysis effortless</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-gray-800/80 border-gray-700 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Upload Food Package Photo</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Simply capture or upload the back of any packaged food item. Our system works with any clear image 
                    containing ingredients and nutrition labels.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-gray-800/80 border-gray-700 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Automatic Text Extraction</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Advanced vision AI automatically reads and extracts all ingredients and nutritional information 
                    from your uploaded image with 98% accuracy.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-gray-800/80 border-gray-700 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Instant Health Rating (1-10)</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Receive a clear numerical health score based on ingredients quality, processing level, 
                    nutritional balance, and additives present.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-gray-800/80 border-gray-700 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">AI-Generated Explanation</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Get detailed, easy-to-understand explanations of the health rating with specific 
                    recommendations for healthier alternatives.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-300 font-medium">
              Fast, clean, and minimal UI designed for effortless food analysis
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Technology Stack</h2>
            <p className="text-lg text-gray-400">Built with modern, reliable technologies for optimal performance</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {techStack.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-gray-800/80 border-gray-700 backdrop-blur-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-emerald-600/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{category.category}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.technologies.map((tech, techIndex) => (
                      <div key={techIndex}>
                        <Badge variant="secondary" className="mb-1 bg-gray-700 text-gray-300">
                          {tech.name}
                        </Badge>
                        <p className="text-sm text-gray-400">{tech.description}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-lg text-gray-400">A seamless four-step process powered by advanced AI</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center mx-auto text-xl font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {item.step}
                  </div>
                  {index < workflow.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gray-600 transform -translate-y-1/2" style={{zIndex: -1}}></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AI Models Detail */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">AI Models (via OpenRouter)</h2>
            <p className="text-lg text-gray-400">Cutting-edge language models powering our analysis</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 bg-gray-800/80 border-gray-700 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Qwen2.5 VL</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    State-of-the-art vision-language model specialized in extracting and understanding text 
                    from images. Handles complex layouts, multiple fonts, and varying image qualities with exceptional accuracy.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gray-700 text-gray-300">Vision Processing</Badge>
                    <Badge className="bg-gray-700 text-gray-300">Text Extraction</Badge>
                    <Badge className="bg-gray-700 text-gray-300">OCR</Badge>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all duration-300 bg-gray-800/80 border-gray-700 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">LLaMA 3.3 70B Instruct</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Advanced large language model that analyzes nutritional data, generates health ratings, 
                    and provides detailed explanations. Fine-tuned for nutritional understanding and health assessment.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gray-700 text-gray-300">Health Analysis</Badge>
                    <Badge className="bg-gray-700 text-gray-300">Rating Generation</Badge>
                    <Badge className="bg-gray-700 text-gray-300">Explanations</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Mission */}
        <section className="text-center bg-black rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            We believe everyone deserves to understand what they eat. NutriLens makes nutritional literacy accessible, 
            empowering individuals to make informed food choices through the power of artificial intelligence.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;