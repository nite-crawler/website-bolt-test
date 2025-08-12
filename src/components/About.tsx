import React from 'react';
import { MapPin, Palette, Heart, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-24">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
            About the Artist
          </h2>
          <div className="w-16 h-px bg-amber-600 mb-8"></div>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Creating intricate henna designs that honor tradition while embracing contemporary beauty.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Content */}
          <div className="space-y-12">
            <div className="flex items-start space-x-4">
              <MapPin className="text-amber-600 mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="text-lg font-medium text-gray-900 mb-2">Based in New York City</p>
                <p className="text-gray-600 font-light">Serving the tri-state area and destination events</p>
              </div>
            </div>
            
            <div className="space-y-8 text-lg text-gray-700 font-light leading-relaxed">
              <p>
                My journey with henna began over a decade ago, rooted in cultural heritage and 
                driven by an unwavering passion for this ancient art form. Each design I create 
                tells a story—whether it's the intricate patterns of a bride's hands or the 
                delicate florals adorning festival celebrations.
              </p>
              
              <p>
                Using only the finest natural henna paste, I specialize in both traditional 
                motifs and contemporary interpretations. My work ranges from elaborate bridal 
                designs to minimalist modern patterns, always crafted with meticulous attention 
                to detail and respect for the cultural significance of this beautiful art.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-light text-gray-900 mb-2">10+</div>
                <div className="text-sm text-gray-600 font-light tracking-wide">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-gray-900 mb-2">500+</div>
                <div className="text-sm text-gray-600 font-light tracking-wide">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-gray-900 mb-2">100%</div>
                <div className="text-sm text-gray-600 font-light tracking-wide">Natural Henna</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-amber-50 to-amber-100 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-8xl opacity-20">🤲</div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-8 right-8 bg-white p-6 shadow-lg">
                <Palette className="text-amber-600 mb-2" size={24} />
                <p className="text-sm font-medium text-gray-900">Natural Henna</p>
                <p className="text-xs text-gray-600">Premium Quality</p>
              </div>
              
              <div className="absolute bottom-8 left-8 bg-white p-6 shadow-lg">
                <Award className="text-amber-600 mb-2" size={24} />
                <p className="text-sm font-medium text-gray-900">Custom Designs</p>
                <p className="text-xs text-gray-600">Every Occasion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;