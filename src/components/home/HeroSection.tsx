'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Search, 
  MapPin, 
  Sparkles, 
  Compass, 
  Award, 
  ArrowRight,
  Landmark, 
  Shield, 
  Eye, 
  Users, 
  Globe, 
  Camera, 
  ChevronLeft,
  ChevronRight,
  Pause,
  Play
} from 'lucide-react';
import { useTranslation } from '@/store/languageStore';
import { usePlacesStore } from '@/store/placesStore';
import { Language } from '@/types';

export const HeroSection: React.FC = () => {
  const router = useRouter();
  const { t, language, setLanguage } = useTranslation();
  const { places } = usePlacesStore();

  const [searchTerm, setSearchTerm] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance hero background every 5.5s
  useEffect(() => {
    if (!isAutoPlaying || places.length === 0) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % places.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isAutoPlaying, places.length]);

  const currentPlace = places[activeIndex] || places[0];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/destinations?search=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      router.push('/destinations');
    }
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % places.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + places.length) % places.length);
  };

  const handleSelectThumbnail = (index: number) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
  };

  return (
    <section className="relative min-h-[105vh] flex flex-col justify-between pt-24 pb-12 overflow-hidden">
      
      {/* Dynamic Background Image: Genuine photo of the selected Bagalkote Place */}
      <div 
        key={currentPlace?.id}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-out"
        style={{
          backgroundImage: `url('${currentPlace?.featuredImage || `/images/destinations/${currentPlace?.slug}.jpg` || '/images/destinations/badami-cave-temples.jpg'}')`,
        }}
      >
        {/* Clean, balanced cinematic gradient that preserves full photo clarity, sharpness & vibrancy */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-[#0a0807] pointer-events-none" />
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />
      </div>

      {/* Subtle Warm Atmospheric Ambient Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-sandstone-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center flex-1 justify-center mt-6">
        
        {/* Active Place Location Beacon */}
        <Link
          href={`/destinations/${currentPlace?.slug}`}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel border border-amber-400/50 text-amber-300 text-xs sm:text-sm font-semibold mb-4 shadow-2xl hover:scale-105 transition-all group"
        >
          <MapPin className="w-4 h-4 text-amber-400 animate-bounce" />
          <span className="text-stone-300">
            {language === 'kn' ? 'ಪ್ರಸ್ತುತ ವೀಕ್ಷಣೆ:' : language === 'hi' ? 'वर्तमान दृश्य:' : 'Now Viewing:'}
          </span>
          <span className="font-bold text-white group-hover:text-amber-200 underline decoration-amber-400 underline-offset-2">
            {currentPlace?.title[language] || currentPlace?.title.en}
          </span>
          <span className="text-sandstone-500">•</span>
          <span className="text-[11px] uppercase tracking-wider text-amber-300 font-serif">
            {currentPlace?.category}
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
        </Link>

        {/* Primary Cinematic Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-black tracking-tight text-white max-w-5xl leading-tight sm:leading-none mb-3">
          <span className="block text-amber-100/90 text-xl sm:text-2xl md:text-3xl font-light tracking-widest uppercase mb-2">
            {t.hero.title1}
          </span>
          <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-sandstone-300 bg-clip-text text-transparent drop-shadow-2xl">
            {t.hero.title2}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-2 text-sm sm:text-base md:text-lg text-stone-300 max-w-3xl mx-auto leading-relaxed font-normal">
          {t.hero.subtitle}
        </p>

        {/* Direct Language Switch Bar Right on the Hero */}
        <div className="mt-5 flex items-center space-x-2 p-1 rounded-2xl bg-black/60 backdrop-blur-md border border-sandstone-500/40 shadow-xl">
          <span className="text-xs text-stone-400 px-2 flex items-center space-x-1">
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Language / ಭಾಷೆ:</span>
          </span>
          <button
            onClick={() => setLanguage('kn')}
            className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
              language === 'kn'
                ? 'bg-gradient-to-r from-sandstone-600 to-amber-500 text-white shadow-lg scale-105'
                : 'text-stone-300 hover:text-white'
            }`}
          >
            ಕನ್ನಡ
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
              language === 'en'
                ? 'bg-gradient-to-r from-sandstone-600 to-amber-500 text-white shadow-lg scale-105'
                : 'text-stone-300 hover:text-white'
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLanguage('hi')}
            className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
              language === 'hi'
                ? 'bg-gradient-to-r from-sandstone-600 to-amber-500 text-white shadow-lg scale-105'
                : 'text-stone-300 hover:text-white'
            }`}
          >
            हिन्दी
          </button>
        </div>

        {/* Quick Search Bar */}
        <form
          onSubmit={handleSearch}
          className="mt-6 w-full max-w-2xl flex items-center glass-panel rounded-2xl p-1.5 sm:p-2 border border-sandstone-500/50 shadow-2xl shadow-black/80 focus-within:border-amber-400 transition-all"
        >
          <div className="flex items-center pl-3 text-amber-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t.nav.searchPlaceholder}
            className="w-full bg-transparent px-3 py-2 text-sm sm:text-base text-white placeholder-stone-400 focus:outline-none"
          />
          <button
            type="submit"
            className="flex items-center space-x-1 px-4 sm:px-6 py-2.5 rounded-xl bg-gradient-to-r from-sandstone-600 via-sandstone-500 to-amber-500 text-white font-semibold text-xs sm:text-sm hover:opacity-95 transition-opacity shadow-lg shadow-sandstone-700/50 shrink-0"
          >
            <span>{t.nav.explore}</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </form>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/destinations"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-sandstone-700 via-sandstone-600 to-amber-600 hover:from-sandstone-600 hover:to-amber-500 text-white text-sm font-bold border border-amber-400/40 shadow-xl shadow-sandstone-950/70 flex items-center space-x-2 transition-all hover:scale-105"
          >
            <Compass className="w-4 h-4 text-amber-200" />
            <span>{t.hero.exploreBtn}</span>
          </Link>

          <Link
            href="/plan-trip"
            className="px-6 py-3 rounded-xl glass-panel hover:bg-white/10 text-stone-200 hover:text-white text-sm font-semibold border border-stone-700/80 flex items-center space-x-2 transition-all hover:scale-105"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{t.hero.planBtn}</span>
          </Link>

          <Link
            href="/gallery"
            className="px-6 py-3 rounded-xl glass-panel hover:bg-white/10 text-amber-300 hover:text-amber-200 text-sm font-semibold border border-amber-500/40 flex items-center space-x-2 transition-all hover:scale-105"
          >
            <Camera className="w-4 h-4 text-amber-400" />
            <span>{t.nav.gallery}</span>
          </Link>
        </div>

      </div>

      {/* COMBINED 15-PLACE INTERACTIVE PHOTO FILMSTRIP BAR (Hero Bottom) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8">
        
        <div className="p-3 sm:p-4 rounded-3xl glass-card border border-sandstone-500/30 backdrop-blur-xl shadow-2xl bg-black/60 space-y-2">
          
          <div className="flex items-center justify-between px-2 text-xs">
            <span className="font-semibold text-amber-300 flex items-center space-x-1.5 uppercase tracking-wider text-[11px]">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>
                {language === 'kn' ? '೧೫ ತಾಣಗಳ ಛಾಯಾಚಿತ್ರ ಗ್ಯಾಲರಿ (ಕ್ಲಿಕ್ ಮಾಡಿ ಬದಲಾಯಿಸಿ):' : language === 'hi' ? 'सभी 15 स्थलों की तस्वीरें (क्लिक करके बदलें):' : 'All 15 Destination Photos (Click to switch view):'}
              </span>
            </span>

            {/* Play/Pause & Arrows */}
            <div className="flex items-center space-x-1.5 text-stone-400">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="p-1 rounded-lg hover:bg-stone-800 text-stone-300"
                title={isAutoPlaying ? 'Pause Auto-slide' : 'Resume Auto-slide'}
              >
                {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={handlePrev}
                className="p-1 rounded-lg hover:bg-stone-800 text-stone-300"
                title="Previous photo"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-1 rounded-lg hover:bg-stone-800 text-stone-300"
                title="Next photo"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Scrollable Photo Strip of all 15 Places */}
          <div className="flex items-center space-x-2.5 overflow-x-auto scrollbar-none py-1 px-1">
            {places.map((place, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={place.id}
                  onClick={() => handleSelectThumbnail(idx)}
                  className={`group relative w-20 sm:w-24 h-14 sm:h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all duration-300 focus:outline-none ${
                    isSelected
                      ? 'border-amber-400 ring-2 ring-amber-400/50 scale-105 shadow-lg shadow-amber-500/20'
                      : 'border-stone-800/80 hover:border-stone-500 opacity-60 hover:opacity-100'
                  }`}
                  title={place.title[language] || place.title.en}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={place.featuredImage}
                    alt={place.title.en}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <span className="absolute bottom-0.5 left-1 right-1 text-[9px] font-bold text-white truncate text-center block">
                    {place.title[language]?.split(' ')[0] || place.title.en.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

      </div>

      {/* Bottom Sandstone Arch Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#0a0807] to-transparent pointer-events-none" />
    </section>
  );
};
