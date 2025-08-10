import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Scan, Home, Info, Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Scan", path: "/scan", icon: Scan },
    { name: "About", path: "/about", icon: Info },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <Scan className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              NutriLens
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`group flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-emerald-600/20 text-emerald-400"
                        : "text-gray-300 hover:text-emerald-400 hover:bg-emerald-600/10"
                    }`}
                  >
                    <Icon className="w-4 h-4 transform group-hover:scale-110 transition-transform duration-200" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-emerald-400 hover:bg-emerald-600/10 transition-colors duration-200"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-emerald-600/20 text-emerald-400"
                      : "text-gray-300 hover:text-emerald-400 hover:bg-emerald-600/10"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;