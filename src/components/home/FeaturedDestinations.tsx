'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Compass, ArrowRight, Sparkles } from 'lucide-react';
import { useTranslation } from '@/store/languageStore';
import { usePlacesStore } from '@/store/placesStore';
import { DestinationCard } from '@/components/destinations/DestinationCard';

export const FeaturedDestinations: React.FC = () => {
  const { t, language } = useTranslation();
  const { places } = usePlacesStore();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: t.categories.all },
    { key: 'historic', label: t.categories.historic },
    { key: 'religious', label: t.categories.religious },
    { key: 'nature', label: t.categories.nature },
    { key: 'wildlife', label: t.categories.wildlife },
    { key: 'fort', label: t.categories.fort },
    { key: 'dam', label: t.categories.dam },
  ];

  // Filter only published places
  const published = places.filter((p) => p.status === 'published');
  const filtered = activeCategory === 'all'
    ? published.slice(0, 6) // show top 6 on home page
    : published.filter((p) => p.category === activeCategory).slice(0, 6);

  return (
    <section className="py-20 relative bg-[#0a0807] overflow-hidden">
      
      {/* Background sandstone ambient accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sandstone-700/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-sandstone-950/90 border border-sandstone-600/50 text-amber-300 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.highlights.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              {t.destinations.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-300 leading-relaxed">
              {t.destinations.subtitle}
            </p>
          </div>

          <Link
            href="/destinations"
            className="inline-flex items-center space-x-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors group shrink-0"
          >
            <span>{t.destinations.viewAll}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat.key
                  ? 'bg-gradient-to-r from-sandstone-600 to-amber-500 text-white shadow-lg shadow-sandstone-900/70 border border-amber-400/50 scale-102'
                  : 'glass-panel text-stone-300 hover:text-white hover:bg-stone-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((place) => (
            <DestinationCard key={place.id} place={place} />
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-14 text-center">
          <Link
            href="/destinations"
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-sandstone-700 via-sandstone-600 to-amber-500 hover:from-sandstone-600 hover:to-amber-400 text-white font-bold text-sm shadow-xl shadow-sandstone-950/70 border border-amber-400/40 transition-all hover:scale-105"
          >
            <Compass className="w-4 h-4 text-amber-200" />
            <span>{t.destinations.viewAll} ({published.length} Places)</span>
          </Link>
        </div>

      </div>

    </section>
  );
};
