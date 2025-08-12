import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-amber-600 rounded-full"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 border border-amber-600 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-amber-600 rounded-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-gray-900 leading-none tracking-tight">
              Henna
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-amber-600 leading-tight">
              Artistry
            </h2>
          </div>
          
          {/* Subtitle */}
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
              Traditional and contemporary henna designs for life's most beautiful moments
            </p>
            <div className="w-24 h-px bg-amber-600 mx-auto"></div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <button 
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-4 bg-gray-900 text-white text-lg font-light tracking-wide hover:bg-gray-800 transition-all duration-300 group"
            >
              View Portfolio
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-4 border border-gray-900 text-gray-900 text-lg font-light tracking-wide hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              Book Session
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-amber-600 transition-colors animate-bounce"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;