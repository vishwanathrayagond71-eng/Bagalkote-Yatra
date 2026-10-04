'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Clock, 
  Ticket, 
  Calendar, 
  Plane, 
  Train, 
  Car, 
  Share2, 
  Bookmark, 
  ArrowLeft, 
  Sparkles, 
  Compass, 
  ExternalLink,
  CheckCircle2,
  ZoomIn,
  Landmark,
  ShieldCheck,
  Star
} from 'lucide-react';
import { TouristPlace, Language } from '@/types';
import { useTranslation } from '@/store/languageStore';
import { usePlacesStore } from '@/store/placesStore';
import { useReviewsStore } from '@/store/reviewsStore';
import { LightboxModal } from '@/components/layout/LightboxModal';
import { DestinationCard } from '@/components/destinations/DestinationCard';

interface DestinationDetailViewProps {
  place: TouristPlace;
}

export const DestinationDetailView: React.FC<DestinationDetailViewProps> = ({ place }) => {
  const { language, t } = useTranslation();
  const { places, bookmarks, toggleBookmark } = usePlacesStore();
  const { reviews } = useReviewsStore();

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const isBookmarked = bookmarks.includes(place.id);

  // Gallery array
  const galleryImages = [place.featuredImage, ...(place.gallery || [])].filter(
    (val, idx, arr) => arr.indexOf(val) === idx
  );

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: place.title[language] || place.title.en,
        text: place.tagline[language] || place.tagline.en,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Nearby places from store
  const nearbyPlaces = places
    .filter((p) => p.id !== place.id && p.status === 'published')
    .slice(0, 3);

  return (
    <article className="min-h-screen bg-stone-950 text-stone-200 pb-20">
      
      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={galleryImages}
        currentIndex={photoIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setPhotoIndex((p) => (p > 0 ? p - 1 : galleryImages.length - 1))}
        onNext={() => setPhotoIndex((p) => (p < galleryImages.length - 1 ? p + 1 : 0))}
        title={place.title[language] || place.title.en}
      />

      {/* Cinematic Hero Header */}
      <div className="relative h-[65vh] min-h-[450px] w-full overflow-hidden bg-stone-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={place.featuredImage}
          alt={place.title[language] || place.title.en}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-black/40" />

        {/* Top Floating Navigation */}
        <div className="absolute top-24 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <Link
              href="/destinations"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/10 text-xs font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t.destinations.viewAll}</span>
            </Link>

            <div className="flex items-center space-x-2">
              <button
                onClick={handleShare}
                className="p-2 rounded-xl bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/10 transition-colors"
                title="Share Place"
              >
                <Share2 className="w-4 h-4" />
              </button>

              <button
                onClick={() => toggleBookmark(place.id)}
                className={`p-2 rounded-xl backdrop-blur-md border transition-all ${
                  isBookmarked
                    ? 'bg-amber-500 text-stone-950 border-amber-400'
                    : 'bg-black/60 text-white border-white/10 hover:border-amber-400'
                }`}
                title="Save Place"
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Hero Title Container */}
        <div className="absolute bottom-10 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-3">
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-sandstone-950/90 border border-sandstone-500/50 text-amber-300 backdrop-blur-md">
                  {place.category}
                </span>
                <span className="flex items-center space-x-1 text-xs text-amber-300 bg-black/60 px-2.5 py-1 rounded-full border border-white/10">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-bold">{place.rating || 4.8}</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
                {place.title[language] || place.title.en}
              </h1>

              {/* Sub-titles in other languages */}
              <div className="flex flex-wrap items-center gap-3 text-sm text-sandstone-300 font-serif">
                {language !== 'kn' && place.title.kn && (
                  <span className="px-2.5 py-0.5 rounded bg-black/40 border border-white/5">
                    {place.title.kn}
                  </span>
                )}
                {language !== 'hi' && place.title.hi && (
                  <span className="px-2.5 py-0.5 rounded bg-black/40 border border-white/5">
                    {place.title.hi}
                  </span>
                )}
              </div>

              <p className="text-sm sm:text-base text-stone-300 font-normal leading-relaxed">
                {place.tagline[language] || place.tagline.en}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* Quick Facts Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl glass-card border border-sandstone-500/20 mb-12 shadow-xl">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-sandstone-950 border border-sandstone-600/40 text-amber-400 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-stone-400 uppercase tracking-wider block font-semibold">
                {t.destinations.timings}
              </span>
              <span className="text-xs sm:text-sm font-medium text-white block">
                {place.timings[language] || place.timings.en}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-sandstone-950 border border-sandstone-600/40 text-amber-400 shrink-0">
              <Ticket className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-stone-400 uppercase tracking-wider block font-semibold">
                {t.destinations.entryFee}
              </span>
              <span className="text-xs sm:text-sm font-medium text-white block">
                {place.entryFee.indian}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-sandstone-950 border border-sandstone-600/40 text-amber-400 shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-stone-400 uppercase tracking-wider block font-semibold">
                {t.destinations.bestTime}
              </span>
              <span className="text-xs sm:text-sm font-medium text-white block truncate">
                {place.bestTimeToVisit[language] || place.bestTimeToVisit.en}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-sandstone-950 border border-sandstone-600/40 text-amber-400 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-stone-400 uppercase tracking-wider block font-semibold">
                {t.destinations.coordinates}
              </span>
              <span className="text-xs sm:text-sm font-medium text-amber-300 block">
                {place.coordinates.lat.toFixed(4)}° N, {place.coordinates.lng.toFixed(4)}° E
              </span>
            </div>
          </div>
        </div>

        {/* 2-Column Body Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Content (2 Cols) */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Detailed Description */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white flex items-center space-x-2">
                <Landmark className="w-5 h-5 text-amber-400" />
                <span>Overview & Cultural Experience</span>
              </h2>
              <div className="prose prose-invert max-w-none text-stone-300 leading-relaxed text-sm sm:text-base space-y-4">
                <p>{place.description[language] || place.description.en}</p>
              </div>
            </section>

            {/* History & Significance */}
            <section className="p-6 rounded-2xl glass-card border border-sandstone-500/20 space-y-3">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-amber-300">
                {t.destinations.historyTitle}
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                {place.history[language] || place.history.en}
              </p>
            </section>

            {/* Architectural Highlights */}
            {place.architecture && (
              <section className="space-y-3">
                <h3 className="text-lg sm:text-xl font-serif font-bold text-white flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  <span>{t.destinations.architectureTitle}</span>
                </h3>
                <p className="text-sm text-stone-300 leading-relaxed">
                  {place.architecture[language] || place.architecture.en}
                </p>
              </section>
            )}

            {/* High-Resolution Photo Gallery */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
                  {t.destinations.gallery}
                </h3>
                <span className="text-xs text-amber-400">{galleryImages.length} Photographs</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {galleryImages.map((imgUrl, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setPhotoIndex(idx);
                      setLightboxOpen(true);
                    }}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group bg-stone-900 border border-stone-800 hover:border-amber-500/50 transition-all"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imgUrl}
                      alt={`Photo ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ZoomIn className="w-6 h-6 text-white drop-shadow" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* How to Reach Breakdown */}
            <section className="space-y-4">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
                {t.destinations.howToReach}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl glass-card border border-stone-800 space-y-2">
                  <div className="flex items-center space-x-2 text-amber-400">
                    <Plane className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase">{t.destinations.byAir}</span>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {place.howToReach.byAir}
                  </p>
                </div>

                <div className="p-4 rounded-xl glass-card border border-stone-800 space-y-2">
                  <div className="flex items-center space-x-2 text-amber-400">
                    <Train className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase">{t.destinations.byTrain}</span>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {place.howToReach.byTrain}
                  </p>
                </div>

                <div className="p-4 rounded-xl glass-card border border-stone-800 space-y-2">
                  <div className="flex items-center space-x-2 text-amber-400">
                    <Car className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase">{t.destinations.byRoad}</span>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {place.howToReach.byRoad}
                  </p>
                </div>
              </div>
            </section>

            {/* Interactive Google Map Embed */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-serif font-bold text-white flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-amber-400" />
                  <span>{t.destinations.interactiveMap}</span>
                </h3>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${place.coordinates.lat},${place.coordinates.lng}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center space-x-1"
                >
                  <span>{t.destinations.directions}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden border border-sandstone-500/30 shadow-2xl">
                <iframe
                  src={place.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${place.title.en} Map Location`}
                />
              </div>
            </section>

          </div>

          {/* Sidebar (1 Col) */}
          <div className="space-y-8">
            
            {/* Key Highlights Card */}
            <div className="glass-card p-6 rounded-2xl border border-sandstone-500/20 space-y-4">
              <h3 className="text-base font-serif font-bold text-white">
                Place Highlights
              </h3>
              <ul className="space-y-2.5">
                {(place.highlights || []).map((hl, i) => (
                  <li key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-stone-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nearby Attractions */}
            <div className="glass-card p-6 rounded-2xl border border-sandstone-500/20 space-y-4">
              <h3 className="text-base font-serif font-bold text-white">
                {t.destinations.nearby}
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-300">
                {(place.nearbyAttractions || []).map((att, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <span className="text-amber-400">•</span>
                    <span>{att}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommended Tour Guide Assistance */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-sandstone-950 via-stone-900 to-amber-950/40 border border-sandstone-500/40 space-y-3">
              <div className="flex items-center space-x-2 text-amber-400">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Certified ASI Guide</span>
              </div>
              <h4 className="text-base font-serif font-bold text-white">
                Need a Local Heritage Guide?
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                Connect with ASI licensed multilingual guides for an enriching architectural walkthrough.
              </p>
              <Link
                href="/contact"
                className="inline-block w-full text-center py-2.5 rounded-xl bg-gradient-to-r from-sandstone-600 to-amber-500 hover:from-sandstone-500 hover:to-amber-400 text-white font-semibold text-xs transition-all shadow-lg"
              >
                Inquire for Official Guide
              </Link>
            </div>

          </div>

        </div>

        {/* Place-Specific User Reviews & Ratings */}
        <div className="mt-16 pt-10 border-t border-stone-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mb-1">
                {language === 'kn' ? 'ಪ್ರವಾಸಿಗರ ವಿಮರ್ಶೆಗಳು' : language === 'hi' ? 'यात्री समीक्षाएं' : 'Visitor Reviews'}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                {language === 'kn' ? `${place.title.kn || place.title.en} ತಾಣದ ವಿಮರ್ಶೆಗಳು` : language === 'hi' ? `${place.title.hi || place.title.en} की समीक्षाएं` : `Traveler Reviews for ${place.title.en}`}
              </h3>
            </div>

            <div className="flex items-center space-x-2 text-xs text-amber-400">
              <Star className="w-4 h-4 fill-amber-400" />
              <span className="font-bold text-base text-white">{place.rating || 4.9}</span>
              <span className="text-stone-400">({place.reviewsCount || 120}+ reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews
              .filter((r) => r.destinationSlug === place.slug || r.destinationSlug.includes(place.slug.split('-')[0]))
              .slice(0, 2)
              .concat(
                reviews
                  .filter((r) => r.destinationSlug !== place.slug)
                  .slice(0, Math.max(0, 2 - reviews.filter((r) => r.destinationSlug === place.slug).length))
              )
              .map((rev) => (
                <div
                  key={rev.id}
                  className="glass-card p-6 rounded-2xl border border-stone-800 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={rev.avatar}
                        alt={rev.author}
                        className="w-10 h-10 rounded-full object-cover border border-amber-500/30"
                      />
                      <div>
                        <div className="flex items-center space-x-1.5">
                          <span className="font-bold text-xs text-white">{rev.author}</span>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        </div>
                        <span className="text-[10px] text-stone-400 block">{rev.location} • {rev.date}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-0.5 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-stone-700'}`}
                        />
                      ))}
                    </div>
                  </div>

                  <h5 className="text-xs sm:text-sm font-serif font-bold text-white">
                    {rev.title[language] || rev.title.en}
                  </h5>

                  <p className="text-xs text-stone-300 leading-relaxed">
                    {rev.comment[language] || rev.comment.en}
                  </p>
                </div>
              ))}
          </div>
        </div>

        {/* Nearby Places Cards */}
        {nearbyPlaces.length > 0 && (
          <div className="mt-16 pt-12 border-t border-stone-800">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-6">
              More Iconic Places to Explore
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {nearbyPlaces.map((np) => (
                <DestinationCard key={np.id} place={np} />
              ))}
            </div>
          </div>
        )}

      </div>

    </article>
  );
};
