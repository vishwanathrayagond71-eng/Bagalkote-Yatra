'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  Search, 
  Filter, 
  MapPin, 
  LayoutGrid, 
  Map, 
  Bookmark, 
  Sparkles,
  RotateCcw,
  ArrowRight
} from 'lucide-react';
import { useTranslation } from '@/store/languageStore';
import { usePlacesStore } from '@/store/placesStore';
import { DestinationCard } from '@/components/destinations/DestinationCard';
import { PlaceCategory } from '@/types';

function DestinationsContent() {
  const searchParams = useSearchParams();
  const { t, language } = useTranslation();
  const { places, bookmarks } = usePlacesStore();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [onlyBookmarked, setOnlyBookmarked] = useState(false);

  useEffect(() => {
    const q = searchParams.get('search');
    if (q) setSearchTerm(q);

    const f = searchParams.get('filter');
    if (f === 'bookmarked') setOnlyBookmarked(true);
  }, [searchParams]);

  const categories = [
    { key: 'all', label: t.categories.all },
    { key: 'historic', label: t.categories.historic },
    { key: 'religious', label: t.categories.religious },
    { key: 'nature', label: t.categories.nature },
    { key: 'wildlife', label: t.categories.wildlife },
    { key: 'fort', label: t.categories.fort },
    { key: 'dam', label: t.categories.dam },
    { key: 'museum', label: t.categories.museum },
    { key: 'cultural', label: t.categories.cultural },
  ];

  // Filtering places
  const publishedPlaces = places.filter((p) => p.status === 'published');
  const filtered = publishedPlaces.filter((p) => {
    const matchesCategory = selectedCat === 'all' || p.category === selectedCat;
    const matchesSearch =
      searchTerm.trim() === '' ||
      p.title.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.title.kn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.title.hi.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.tagline.en.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBookmark = !onlyBookmarked || bookmarks.includes(p.id);

    return matchesCategory && matchesSearch && matchesBookmark;
  });

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCat('all');
    setOnlyBookmarked(false);
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-stone-950 text-stone-200">
      
      {/* Top Banner Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-sandstone-950/80 border border-sandstone-600/40 text-amber-300 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Bagalkote Heritage Circuit</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
          {t.destinations.title}
        </h1>
        <p className="mt-3 text-sm sm:text-base text-stone-400 max-w-2xl mx-auto">
          {t.destinations.subtitle}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Controls Toolbar: Search, Category, View Toggle */}
        <div className="p-4 rounded-2xl glass-card border border-sandstone-500/20 mb-8 space-y-4 shadow-xl">
          
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t.destinations.search}
                className="w-full bg-stone-900 border border-stone-700/80 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-stone-400 focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* View Mode Toggle & Bookmarked Toggle */}
            <div className="flex items-center space-x-2 shrink-0">
              <button
                onClick={() => setOnlyBookmarked(!onlyBookmarked)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold border flex items-center space-x-1.5 transition-all ${
                  onlyBookmarked
                    ? 'bg-amber-500 text-stone-950 border-amber-400'
                    : 'bg-stone-900 text-stone-300 border-stone-700/80 hover:text-white'
                }`}
              >
                <Bookmark className={`w-3.5 h-3.5 ${onlyBookmarked ? 'fill-current' : ''}`} />
                <span>Saved ({bookmarks.length})</span>
              </button>

              <div className="flex items-center p-1 rounded-xl bg-stone-900 border border-stone-700/80">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-lg text-xs font-medium transition-all ${
                    viewMode === 'grid'
                      ? 'bg-sandstone-600 text-white shadow'
                      : 'text-stone-400 hover:text-white'
                  }`}
                  title="Grid View"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('map')}
                  className={`p-1.5 rounded-lg text-xs font-medium transition-all ${
                    viewMode === 'map'
                      ? 'bg-sandstone-600 text-white shadow'
                      : 'text-stone-400 hover:text-white'
                  }`}
                  title="Map View"
                >
                  <Map className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none pt-2 border-t border-stone-800/80">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setSelectedCat(c.key)}
                className={`px-3.5 py-1.5 rounded-xl text-xs whitespace-nowrap transition-all ${
                  selectedCat === c.key
                    ? 'bg-sandstone-600 text-white font-semibold shadow border border-sandstone-400/40'
                    : 'bg-stone-900/60 text-stone-400 hover:text-white hover:bg-stone-800'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

        </div>

        {/* View Mode: GRID vs MAP */}
        {viewMode === 'grid' ? (
          <div>
            {filtered.length === 0 ? (
              <div className="text-center py-16 px-4 rounded-2xl glass-card border border-stone-800">
                <p className="text-base text-stone-400 mb-4">{t.destinations.noResults}</p>
                <button
                  onClick={handleResetFilters}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-sandstone-600 hover:bg-sandstone-500 text-white text-xs font-semibold"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{t.destinations.resetFilters}</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filtered.map((place) => (
                  <DestinationCard key={place.id} place={place} />
                ))}
              </div>
            )}
          </div>
        ) : (
          /* District Map Overview */
          <div className="glass-card rounded-2xl p-6 border border-sandstone-500/20 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-serif font-bold text-white">
                  Bagalkote Tourist Locations Map
                </h3>
                <p className="text-xs text-stone-400">
                  Interactive view of destinations across Badami, Pattadakal, Aihole, and Almatti basins.
                </p>
              </div>
              <span className="text-xs text-amber-400 font-semibold">
                {filtered.length} Locations Marked
              </span>
            </div>

            <div className="aspect-[16/9] w-full rounded-xl overflow-hidden border border-stone-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d489504.62923058815!2d75.35!3d16.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb7759b3f36a469%3A0x6b4ef8fa59389be8!2sBagalkot%20District%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Bagalkote Tourist Locations Map"
              />
            </div>

            {/* Quick list below map */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-4">
              {filtered.map((p) => (
                <div key={p.id} className="p-3 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-between">
                  <div className="truncate pr-2">
                    <span className="text-xs font-semibold text-white block truncate">
                      {p.title[language] || p.title.en}
                    </span>
                    <span className="text-[10px] text-stone-500">
                      {p.coordinates.lat.toFixed(2)}° N, {p.coordinates.lng.toFixed(2)}° E
                    </span>
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${p.coordinates.lat},${p.coordinates.lng}`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 text-xs shrink-0"
                    title="Directions"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
}

export default function DestinationsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-32 text-center text-stone-400">Loading destinations...</div>}>
      <DestinationsContent />
    </Suspense>
  );
}
