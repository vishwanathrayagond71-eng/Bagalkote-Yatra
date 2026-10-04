'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Calendar, Clock, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTranslation } from '@/store/languageStore';
import { itinerariesData } from '@/data/extras';

export const TripPlannerTeaser: React.FC = () => {
  const { t, language } = useTranslation();

  return (
    <section className="py-20 relative bg-[#0f0c0a] border-t border-stone-800/80 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-sandstone-950/80 border border-sandstone-600/40 text-amber-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.itinerary.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            {t.itinerary.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-400">
            {t.itinerary.subtitle}
          </p>
        </div>

        {/* 3 Itineraries Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {itinerariesData.map((itin) => (
            <div
              key={itin.id}
              className="rounded-2xl glass-card overflow-hidden border border-sandstone-500/20 hover:border-amber-500/50 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={itin.image}
                  alt={itin.title[language] || itin.title.en}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />
                
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-stone-900/90 border border-amber-500/40 text-amber-300 backdrop-blur-md flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>{itin.duration}</span>
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-serif font-bold text-white mb-2">
                    {itin.title[language] || itin.title.en}
                  </h3>
                  <p className="text-xs text-stone-400 leading-relaxed mb-4">
                    {itin.tagline[language] || itin.tagline.en}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-stone-800/80">
                    <span className="text-[11px] font-semibold text-sandstone-400 uppercase tracking-wider block">
                      Places Covered:
                    </span>
                    {itin.days[0].places.slice(0, 4).map((place, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-stone-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="truncate">{place}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-800/80">
                  <Link
                    href={`/plan-trip#${itin.id}`}
                    className="w-full py-2.5 rounded-xl bg-sandstone-950/80 hover:bg-sandstone-800 border border-sandstone-600/40 text-amber-300 hover:text-amber-200 text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors"
                  >
                    <span>{t.itinerary.viewItinerary}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
