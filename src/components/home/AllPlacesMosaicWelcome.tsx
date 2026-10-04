'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  MapPin, 
  ArrowRight, 
  Award, 
  Landmark, 
  Compass, 
  Eye, 
  ZoomIn, 
  Waves, 
  Mountain,
  ShieldCheck,
  Star,
  CheckCircle2,
  Filter
} from 'lucide-react';
import { useTranslation } from '@/store/languageStore';
import { usePlacesStore } from '@/store/placesStore';
import { LightboxModal } from '@/components/layout/LightboxModal';

export const AllPlacesMosaicWelcome: React.FC = () => {
  const { t, language } = useTranslation();
  const { places } = usePlacesStore();

  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filterTabs = [
    { id: 'all', label: language === 'kn' ? 'ಎಲ್ಲಾ ೧೫ ತಾಣಗಳು' : language === 'hi' ? 'सभी 15 स्थल' : 'All 15 Places' },
    { id: 'unesco_heritage', label: language === 'kn' ? 'ಯುನೆಸ್ಕೋ & ಗುಹೆಗಳು' : language === 'hi' ? 'यूनेस्को व गुफाएं' : 'UNESCO & Cave Temples' },
    { id: 'sacred_temples', label: language === 'kn' ? 'ಪವಿತ್ರ ತೀರ್ಥಕ್ಷೇತ್ರಗಳು' : language === 'hi' ? 'पवित्र तीर्थ स्थल' : 'Sacred Temples & Tanks' },
    { id: 'nature_dam', label: language === 'kn' ? 'ಅಣೆಕಟ್ಟು & ಪ್ರಕೃತಿ' : language === 'hi' ? 'बांध व वन्यजीव' : 'Dams, Lakes & Wildlife' },
    { id: 'forts_crafts', label: language === 'kn' ? 'ಕೋಟೆ & ಕೈಮಗ್ಗ' : language === 'hi' ? 'किले व हथकरघा' : 'Forts & Handlooms' },
  ];

  const filteredPlaces = places.filter((place) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'unesco_heritage') {
      return ['badami-cave-temples', 'pattadakal-monuments', 'aihole-monuments', 'badami-archaeological-museum'].includes(place.slug);
    }
    if (activeFilter === 'sacred_temples') {
      return ['mahakuta-temple', 'kudalasangama', 'banashankari-temple'].includes(place.slug);
    }
    if (activeFilter === 'nature_dam') {
      return ['agastya-lake', 'almatti-dam', 'yadahalli-chinkara-sanctuary', 'navanagar-garden-district-center'].includes(place.slug);
    }
    if (activeFilter === 'forts_crafts') {
      return ['badami-fort', 'guledagudda-fort-falls', 'ilkal-heritage-town', 'jamakhandi-heritage'].includes(place.slug);
    }
    return true;
  });

  const allPlacePhotos = places.map((p) => p.featuredImage);

  const handleOpenPhoto = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="py-20 relative bg-gradient-to-b from-[#0a0807] via-[#120e0c] to-[#0a0807] border-t border-stone-800/80 overflow-hidden">
      
      {/* Decorative Atmosphere Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-sandstone-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title & Visual Welcome Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-sandstone-950/90 border border-sandstone-600/50 text-amber-300 text-xs font-semibold mb-4 shadow-xl">
            <Sparkles className="w-4 h-4 text-amber-400 animate-spin-slow" />
            <span>
              {language === 'kn' 
                ? 'ಅಖಂಡ ಬಾಗಲಕೋಟೆ ದರ್ಶನ • ೧೫ ಪ್ರಮುಖ ತಾಣಗಳ ಮಹಾಸಂಗಮ' 
                : language === 'hi' 
                ? 'संपूर्ण बागलकोट दर्शन • सभी 15 प्रमुख आकर्षण' 
                : 'Grand Welcome Showcase • All 15 Iconic Wonders Combined'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-black text-white tracking-tight leading-tight">
            {language === 'kn' ? (
              <>ಬಾಗಲಕೋಟೆ ಜಿಲ್ಲೆಯ <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-sandstone-300">೧೫ ವಿಸ್ಮಯಗಳ</span> ಛಾಯಾಚಿತ್ರ ಮಂಡಲ</>
            ) : language === 'hi' ? (
              <>बागलकोट जिले के <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-sandstone-300">सभी 15 आश्चर्य</span> एक नजर में</>
            ) : (
              <>Every Iconic Landmark of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-sandstone-300">Bagalkote District</span></>
            )}
          </h2>

          <p className="mt-4 text-xs sm:text-base text-stone-300 max-w-2xl mx-auto leading-relaxed">
            {language === 'kn'
              ? '6ನೇ ಶತಮಾನದ ಗುಹಾಂತರ ಶಿಲ್ಪಗಳು, ಯುನೆಸ್ಕೋ ಪಾರಂಪರಿಕ ಪಟ್ಟದಕಲ್ಲು, ನದಿಗಳ ಪವಿತ್ರ ಸಂಗಮ ಕೂಡಲಸಂಗಮ, ಆಲಮಟ್ಟಿ ಅಣೆಕಟ್ಟು ಹಾಗೂ ಇಳಕಲ್ ಕೈಮಗ್ಗ — ಪ್ರತಿಯೊಂದು ತಾಣದ ನೈಜ ಛಾಯಾಚಿತ್ರಗಳು ಇಲ್ಲಿವೆ.'
              : language === 'hi'
              ? '6वीं शताब्दी की शैल-उत्कीर्ण गुफाएं, यूनेस्को धरोहर पट्टदकल, कूडलसंगम का पावन संगम, अलमट्टी बांध और इलकल साड़ियां — जिले के हर एक पर्यटन स्थल की असली तस्वीरें।'
              : 'From 6th-century rock-cut cave sanctums and UNESCO World Heritage temples to mighty river confluences, giant reservoirs, and wildlife sanctuaries — discover all 15 authentic landmarks.'}
          </p>

          {/* Quick Counter Banner */}
          <div className="mt-6 inline-flex items-center space-x-4 px-5 py-2 rounded-2xl bg-black/50 border border-sandstone-500/30 text-xs text-amber-200 backdrop-blur-md">
            <span className="flex items-center space-x-1.5 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{places.length} Verified Destinations</span>
            </span>
            <span className="text-stone-600">|</span>
            <span>1 UNESCO Heritage Site</span>
            <span className="text-stone-600">|</span>
            <span>100% Genuine Heritage Photos</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center space-x-2 pb-8 overflow-x-auto scrollbar-none mb-4">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 border ${
                activeFilter === tab.id
                  ? 'bg-gradient-to-r from-sandstone-600 to-amber-500 text-stone-950 font-bold border-amber-300 shadow-lg shadow-amber-500/20 scale-105'
                  : 'glass-panel text-stone-300 border-stone-800 hover:text-white hover:bg-stone-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* The Grand 15-Place Mosaic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPlaces.map((place, index) => {
            const isFeaturedBig = index === 0 || index === 1; // Give Badami & Pattadakal premium visual prominence if in 'all' view

            return (
              <div
                key={place.id}
                className={`group relative rounded-3xl overflow-hidden glass-card border border-sandstone-500/25 hover:border-amber-400/60 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sandstone-950/80 flex flex-col justify-between ${
                  isFeaturedBig && activeFilter === 'all' ? 'sm:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Photo Container */}
                <div className={`relative w-full overflow-hidden bg-stone-900 ${
                  isFeaturedBig && activeFilter === 'all' ? 'aspect-[16/10]' : 'aspect-[4/3]'
                }`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={place.featuredImage}
                    alt={place.title.en}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Multilayered Gradient for Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-black/20 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-black/70 border border-sandstone-500/40 text-amber-300 backdrop-blur-md uppercase tracking-wider flex items-center space-x-1">
                      {place.category === 'historic' && <Award className="w-3 h-3 text-amber-400" />}
                      {place.category === 'religious' && <Landmark className="w-3 h-3 text-amber-400" />}
                      {place.category === 'nature' && <Waves className="w-3 h-3 text-emerald-400" />}
                      {place.category === 'wildlife' && <Compass className="w-3 h-3 text-emerald-400" />}
                      {place.category === 'fort' && <Mountain className="w-3 h-3 text-orange-400" />}
                      <span>{place.category}</span>
                    </span>

                    {/* Lightbox Zoom Icon */}
                    <button
                      onClick={(e) => handleOpenPhoto(index, e)}
                      className="p-1.5 rounded-full bg-black/60 hover:bg-amber-500 text-stone-300 hover:text-stone-950 transition-colors backdrop-blur-md border border-white/10"
                      title="Enlarge photo"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Bottom Image Overlay Details */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[11px] font-bold text-amber-300 uppercase tracking-widest block mb-0.5">
                      {place.title.kn ? `${place.title.kn} • ` : ''}{place.category.toUpperCase()}
                    </span>
                    <h3 className="text-base sm:text-xl font-serif font-black text-white leading-snug drop-shadow-md group-hover:text-amber-200 transition-colors">
                      {place.title[language] || place.title.en}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <p className="text-xs text-stone-300 leading-relaxed line-clamp-2">
                      {place.shortDescription[language] || place.shortDescription.en}
                    </p>

                    {/* Highlights bullet chips */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {(place.highlights || []).slice(0, 2).map((hl, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded text-[10px] bg-stone-900 border border-stone-800 text-stone-400"
                        >
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between">
                    <span className="text-[11px] text-stone-400 flex items-center space-x-1">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      <span className="font-bold text-stone-200">{place.rating || 4.8}</span>
                      <span>({place.reviewsCount || 150}+)</span>
                    </span>

                    <Link
                      href={`/destinations/${place.slug}`}
                      className="inline-flex items-center space-x-1 text-xs font-bold text-amber-400 group-hover:text-amber-300 group-hover:translate-x-1 transition-all"
                    >
                      <span>{t.destinations.viewDetails.split('&')[0]}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Explorer Action */}
        <div className="mt-14 text-center">
          <Link
            href="/destinations"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-sandstone-600 via-amber-500 to-amber-600 hover:from-sandstone-500 hover:to-amber-400 text-stone-950 font-black text-sm sm:text-base shadow-2xl shadow-amber-500/25 transition-all hover:scale-105 active:scale-95"
          >
            <Compass className="w-5 h-5 fill-stone-950" />
            <span>
              {language === 'kn' ? 'ಎಲ್ಲಾ ೧೫ ತಾಣಗಳ ಸಂಪೂರ್ಣ ಗೈಡ್ ನೋಡಿ' : language === 'hi' ? 'सभी 15 स्थलों की संपूर्ण मार्गदर्शिका देखें' : 'Explore All 15 Destinations in Full Detail'}
            </span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

      </div>

      {/* Lightbox for Enlarge */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={allPlacePhotos}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % allPlacePhotos.length)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + allPlacePhotos.length) % allPlacePhotos.length)}
      />

    </section>
  );
};
