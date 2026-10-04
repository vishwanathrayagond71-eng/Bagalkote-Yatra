'use client';

import React, { useState } from 'react';
import { Sparkles, ZoomIn, Eye, Filter } from 'lucide-react';
import { useTranslation } from '@/store/languageStore';
import { usePlacesStore } from '@/store/placesStore';
import { LightboxModal } from '@/components/layout/LightboxModal';

export default function GalleryPage() {
  const { t, language } = useTranslation();
  const { places } = usePlacesStore();

  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Compile all photos across places
  const allImages = places.flatMap((place) =>
    (place.gallery || [place.featuredImage]).map((url) => ({
      url,
      title: place.title[language] || place.title.en,
      category: place.category,
      placeSlug: place.slug,
    }))
  );

  const filteredImages = activeCategory === 'all'
    ? allImages
    : allImages.filter((img) => img.category === activeCategory);

  const galleryUrls = filteredImages.map((img) => img.url);

  return (
    <div className="pt-28 pb-20 min-h-screen bg-stone-950 text-stone-200">
      
      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={galleryUrls}
        currentIndex={photoIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setPhotoIndex((p) => (p > 0 ? p - 1 : galleryUrls.length - 1))}
        onNext={() => setPhotoIndex((p) => (p < galleryUrls.length - 1 ? p + 1 : 0))}
        title={filteredImages[photoIndex]?.title}
      />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-sandstone-950/80 border border-sandstone-600/40 text-amber-300 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Visual Heritage Archive</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
          Heritage Photo Gallery
        </h1>
        <p className="mt-3 text-sm sm:text-base text-stone-400 max-w-2xl mx-auto">
          High-definition photography of 6th-century rock shrines, UNESCO stone carvings, serene lake reflections, and wildlife sanctuaries of Bagalkote.
        </p>

        {/* Category Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {['all', 'historic', 'religious', 'nature', 'fort', 'dam', 'wildlife'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-sandstone-600 text-white font-semibold shadow-lg shadow-sandstone-900/60 border border-sandstone-400/50'
                  : 'glass-panel text-stone-400 hover:text-white hover:bg-stone-900'
              }`}
            >
              {cat === 'all' ? 'All Photographs' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry / Grid Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => {
                setPhotoIndex(idx);
                setLightboxOpen(true);
              }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group bg-stone-900 border border-stone-800/80 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="text-xs font-bold text-white line-clamp-1 font-serif drop-shadow">
                  {img.title}
                </span>
                <ZoomIn className="w-4 h-4 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
