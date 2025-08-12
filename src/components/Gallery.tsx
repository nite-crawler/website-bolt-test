import React, { useState, useEffect } from 'react';

interface Artwork {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

const Gallery: React.FC = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Bridal', 'Festival', 'Contemporary', 'Traditional'];

  useEffect(() => {
    const hennaDesigns: Artwork[] = [
      {
        id: 1,
        title: "Bridal Elegance",
        category: "Bridal",
        imageUrl: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Intricate bridal design featuring traditional paisley motifs"
      },
      {
        id: 2,
        title: "Mandala Dreams",
        category: "Contemporary",
        imageUrl: "https://images.pexels.com/photos/1021689/pexels-photo-1021689.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Geometric mandala with modern interpretation"
      },
      {
        id: 3,
        title: "Floral Symphony",
        category: "Festival",
        imageUrl: "https://images.pexels.com/photos/1021691/pexels-photo-1021691.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Delicate floral patterns for celebration"
      },
      {
        id: 4,
        title: "Arabic Grace",
        category: "Traditional",
        imageUrl: "https://images.pexels.com/photos/1021692/pexels-photo-1021692.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Bold Arabic-style flowing design"
      },
      {
        id: 5,
        title: "Minimalist Beauty",
        category: "Contemporary",
        imageUrl: "https://images.pexels.com/photos/1021690/pexels-photo-1021690.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Clean, modern finger designs"
      },
      {
        id: 6,
        title: "Festival Joy",
        category: "Festival",
        imageUrl: "https://images.pexels.com/photos/1021688/pexels-photo-1021688.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Vibrant celebration patterns"
      }
    ];
    
    setArtworks(hennaDesigns);
  }, []);

  const filteredArtworks = selectedCategory === 'All' 
    ? artworks 
    : artworks.filter(artwork => artwork.category === selectedCategory);

  return (
    <section id="gallery" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight">
            Portfolio
          </h2>
          <div className="w-16 h-px bg-amber-600 mb-8"></div>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            A curated collection of henna artistry spanning traditional and contemporary designs.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-16 justify-center lg:justify-start">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 text-sm font-light tracking-wide transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gray-900 text-white'
                  : 'border border-gray-300 text-gray-700 hover:border-gray-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((design, index) => (
            <div 
              key={design.id} 
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/5] overflow-hidden bg-gray-100 mb-6">
                <img 
                  src={design.imageUrl} 
                  alt={design.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-light text-gray-900">{design.title}</h3>
                  <span className="text-sm text-amber-600 font-light">{design.category}</span>
                </div>
                <p className="text-gray-600 font-light text-sm leading-relaxed">
                  {design.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-20">
          <button className="px-12 py-4 border border-gray-900 text-gray-900 text-lg font-light tracking-wide hover:bg-gray-900 hover:text-white transition-all duration-300">
            View More Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;