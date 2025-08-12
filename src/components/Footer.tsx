import React from 'react';
import { Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-3xl font-light text-gray-900">Henna Artist</h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Creating beautiful henna designs that celebrate tradition and embrace contemporary artistry.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-medium text-gray-900">Quick Links</h4>
            <div className="space-y-3">
              <a href="#about" className="block text-gray-600 hover:text-amber-600 transition-colors font-light">About</a>
              <a href="#gallery" className="block text-gray-600 hover:text-amber-600 transition-colors font-light">Portfolio</a>
              <a href="#contact" className="block text-gray-600 hover:text-amber-600 transition-colors font-light">Contact</a>
            </div>
          </div>
          
          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-medium text-gray-900">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="mailto:hello@hennaartist.com"
                className="p-3 bg-gray-100 hover:bg-amber-600 hover:text-white transition-colors rounded-full"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://instagram.com/yourhennaartist"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 hover:bg-amber-600 hover:text-white transition-colors rounded-full"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-16 pt-8 text-center">
          <p className="text-gray-500 font-light">
            © 2024 Henna Artist. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;