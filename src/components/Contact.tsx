import React from 'react';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Column - Content */}
          <div className="space-y-12">
            <div>
              <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
                Let's Create Something Beautiful
              </h2>
              <div className="w-16 h-px bg-amber-600 mb-8"></div>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                Ready to adorn your hands with intricate henna artistry? Whether it's for your wedding day, 
                a festival celebration, or a special moment you want to commemorate, I'd love to create 
                something beautiful for you.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-amber-600 p-3 rounded-full flex-shrink-0">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-900 mb-1">Email</p>
                  <a 
                    href="mailto:hello@hennaartist.com" 
                    className="text-gray-600 hover:text-amber-600 transition-colors font-light"
                  >
                    hello@hennaartist.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="bg-amber-600 p-3 rounded-full flex-shrink-0">
                  <Instagram size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-900 mb-1">Instagram</p>
                  <a 
                    href="https://instagram.com/yourhennaartist" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-amber-600 transition-colors font-light"
                  >
                    @yourhennaartist
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="bg-amber-600 p-3 rounded-full flex-shrink-0">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-900 mb-1">Location</p>
                  <p className="text-gray-600 font-light">New York City & Tri-State Area</p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-light text-gray-900 mb-6">Services</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <p className="text-gray-700">• Bridal Henna</p>
                  <p className="text-gray-700">• Festival Designs</p>
                  <p className="text-gray-700">• Party Bookings</p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700">• Contemporary Art</p>
                  <p className="text-gray-700">• Traditional Patterns</p>
                  <p className="text-gray-700">• Custom Designs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white p-12 shadow-sm">
            <h3 className="text-3xl font-light text-gray-900 mb-8">Book Your Session</h3>
            
            <form className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-3">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-amber-600 focus:ring-0 bg-transparent text-gray-900 placeholder-gray-400"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-3">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-amber-600 focus:ring-0 bg-transparent text-gray-900 placeholder-gray-400"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-amber-600 focus:ring-0 bg-transparent text-gray-900 placeholder-gray-400"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-3">
                  Event Type
                </label>
                <select
                  id="eventType"
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-amber-600 focus:ring-0 bg-transparent text-gray-900"
                >
                  <option value="">Select event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="festival">Festival</option>
                  <option value="party">Party</option>
                  <option value="personal">Personal Session</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-3">
                  Tell me about your vision
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-amber-600 focus:ring-0 bg-transparent text-gray-900 placeholder-gray-400 resize-none"
                  placeholder="Describe your event, preferred design style, and any special requests..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-4 text-lg font-light tracking-wide hover:bg-gray-800 transition-colors duration-300"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;