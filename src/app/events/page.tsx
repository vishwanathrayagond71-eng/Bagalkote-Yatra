'use client';

import React from 'react';
import { Calendar, MapPin, Sparkles, CheckCircle2, Clock } from 'lucide-react';
import { useTranslation } from '@/store/languageStore';
import { festivalsData } from '@/data/extras';

export default function EventsPage() {
  const { t, language } = useTranslation();

  return (
    <div className="pt-28 pb-20 min-h-screen bg-stone-950 text-stone-200">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-sandstone-950/80 border border-sandstone-600/40 text-amber-300 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Living Traditions & Celebrations</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
          {t.festivals.title}
        </h1>
        <p className="mt-3 text-sm sm:text-base text-stone-400 max-w-2xl mx-auto">
          {t.festivals.subtitle}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {festivalsData.map((event, idx) => (
          <div
            key={event.id}
            className={`rounded-3xl glass-card overflow-hidden border border-sandstone-500/20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image Column (5 Cols) */}
            <div className="lg:col-span-5 relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden border border-stone-700">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={event.image}
                alt={event.name.en}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/80 backdrop-blur-md text-amber-300 border border-white/10 flex items-center space-x-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{event.month}</span>
                </span>
              </div>
            </div>

            {/* Content Column (7 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center space-x-2 text-xs text-amber-400 font-semibold">
                <MapPin className="w-4 h-4" />
                <span>{event.location[language] || event.location.en}</span>
                <span>•</span>
                <span>{event.date}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                {event.name[language] || event.name.en}
              </h2>

              <p className="text-sm text-stone-300 leading-relaxed">
                {event.description[language] || event.description.en}
              </p>

              {/* Highlights */}
              <div className="pt-2 border-t border-stone-800/80">
                <span className="text-xs font-bold uppercase tracking-wider text-sandstone-400 block mb-2">
                  Festival Highlights:
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs text-stone-300">
                  {event.highlights.map((hl, i) => (
                    <div key={i} className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
