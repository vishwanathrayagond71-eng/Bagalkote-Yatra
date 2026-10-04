'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Clock, 
  Ticket, 
  Star, 
  Bookmark, 
  ArrowUpRight, 
  Calendar,
  Image as ImageIcon
} from 'lucide-react';
import { TouristPlace } from '@/types';
import { useTranslation } from '@/store/languageStore';
import { usePlacesStore } from '@/store/placesStore';

interface DestinationCardProps {
  place: TouristPlace;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ place }) => {
  const { language, t } = useTranslation();
  const { bookmarks, toggleBookmark } = usePlacesStore();
  const [imgError, setImgError] = useState(false);

  const isBookmarked = bookmarks.includes(place.id);

  // Category labels with color styles
  const categoryStyles: Record<string, { bg: string; text: string; label: string }> = {
    historic: { bg: 'bg-sandstone-950/90 border-sandstone-500/50', text: 'text-amber-300', label: t.categories.historic },
    religious: { bg: 'bg-amber-950/90 border-amber-500/50', text: 'text-amber-200', label: t.categories.religious },
    nature: { bg: 'bg-emerald-950/90 border-emerald-500/50', text: 'text-emerald-300', label: t.categories.nature },
    wildlife: { bg: 'bg-teal-950/90 border-teal-500/50', text: 'text-teal-300', label: t.categories.wildlife },
    fort: { bg: 'bg-orange-950/90 border-orange-500/50', text: 'text-orange-300', label: t.categories.fort },
    dam: { bg: 'bg-blue-950/90 border-blue-500/50', text: 'text-blue-300', label: t.categories.dam },
    museum: { bg: 'bg-purple-950/90 border-purple-500/50', text: 'text-purple-300', label: t.categories.museum },
    cultural: { bg: 'bg-rose-950/90 border-rose-500/50', text: 'text-rose-300', label: t.categories.cultural },
  };

  const style = categoryStyles[place.category] || categoryStyles.historic;

  // Fallback image if needed
  const displayImage = imgError
    ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Bhutanatha_group_of_temples%2C_Badami.jpg/1280px-Bhutanatha_group_of_temples%2C_Badami.jpg'
    : place.featuredImage;

  return (
    <div className="group relative rounded-2xl glass-card overflow-hidden flex flex-col border border-sandstone-500/30 hover:border-amber-500/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sandstone-950/90">
      
      {/* Image Container with Zoom & Overlays */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={displayImage}
          alt={place.title[language] || place.title.en}
          onError={() => setImgError(true)}
          className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Gradient shadow for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />

        {/* Top Badges: Category & Bookmark */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider backdrop-blur-md border ${style.bg} ${style.text}`}>
            {style.label}
          </span>

          <button
            onClick={(e) => {
              e.preventDefault();
              toggleBookmark(place.id);
            }}
            className={`p-2 rounded-full backdrop-blur-md border transition-all ${
              isBookmarked
                ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-md shadow-amber-500/40'
                : 'bg-stone-900/80 text-stone-200 border-stone-700/80 hover:text-amber-400 hover:border-amber-400'
            }`}
            title={isBookmarked ? 'Remove Bookmark' : 'Save to Bookmarks'}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Rating and Reviews */}
        <div className="absolute bottom-3 left-3 flex items-center space-x-1.5 px-2.5 py-0.5 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-xs text-amber-300">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span className="font-bold">{place.rating || 4.8}</span>
          <span className="text-stone-400 text-[10px]">({place.reviewsCount || 500}+)</span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        <div>
          {/* Destination Name in active language */}
          <h3 className="text-lg sm:text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
            {place.title[language] || place.title.en}
          </h3>

          {/* Secondary Title in Kannada if English is active */}
          {language !== 'kn' && place.title.kn && (
            <span className="text-xs text-sandstone-300/80 font-serif block mt-0.5">
              {place.title.kn}
            </span>
          )}

          {/* Tagline */}
          <p className="mt-1.5 text-xs text-stone-400 line-clamp-2 leading-relaxed">
            {place.tagline[language] || place.tagline.en}
          </p>
        </div>

        {/* Practical Quick Info Pills */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-stone-800/80 text-[11px] text-stone-300">
          <div className="flex items-center space-x-1.5 truncate">
            <Ticket className="w-3.5 h-3.5 text-sandstone-400 shrink-0" />
            <span className="truncate">{place.entryFee.indian}</span>
          </div>
          <div className="flex items-center space-x-1.5 truncate">
            <Clock className="w-3.5 h-3.5 text-sandstone-400 shrink-0" />
            <span className="truncate">{place.timings[language] || place.timings.en}</span>
          </div>
        </div>

        {/* Action Link Footer */}
        <div className="pt-2 flex items-center justify-between">
          <span className="text-[11px] text-amber-400/90 font-medium flex items-center space-x-1 truncate max-w-[160px]">
            <Calendar className="w-3 h-3 shrink-0" />
            <span className="truncate">{place.bestTimeToVisit[language] || place.bestTimeToVisit.en}</span>
          </span>

          <Link
            href={`/destinations/${place.slug}`}
            className="inline-flex items-center space-x-1 text-xs font-bold text-amber-300 group-hover:text-amber-200 transition-colors px-3 py-1.5 rounded-xl bg-sandstone-950/80 hover:bg-sandstone-800 border border-sandstone-600/50 shadow"
          >
            <span>{t.destinations.viewDetails}</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

      </div>

    </div>
  );
};
