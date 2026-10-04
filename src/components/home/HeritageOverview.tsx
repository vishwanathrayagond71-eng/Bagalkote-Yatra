'use client';

import React from 'react';
import Link from 'next/link';
import { Landmark, Compass, Award, Sparkles, Feather, ArrowUpRight } from 'lucide-react';
import { useTranslation } from '@/store/languageStore';

export const HeritageOverview: React.FC = () => {
  const { t, language } = useTranslation();

  const highlights = [
    {
      title: t.highlights.card1Title,
      desc: t.highlights.card1Desc,
      icon: Award,
      badge: 'UNESCO',
      color: 'from-amber-500/20 via-sandstone-500/10 to-transparent',
      borderColor: 'border-amber-500/30',
      iconColor: 'text-amber-400',
      link: '/destinations/pattadakal-monuments',
    },
    {
      title: t.highlights.card2Title,
      desc: t.highlights.card2Desc,
      icon: Landmark,
      badge: 'Architecture Lab',
      color: 'from-sandstone-500/20 via-orange-500/10 to-transparent',
      borderColor: 'border-sandstone-500/30',
      iconColor: 'text-sandstone-400',
      link: '/destinations/aihole-monuments',
    },
    {
      title: t.highlights.card3Title,
      desc: t.highlights.card3Desc,
      icon: Compass,
      badge: '6th Century CE',
      color: 'from-orange-500/20 via-red-500/10 to-transparent',
      borderColor: 'border-orange-500/30',
      iconColor: 'text-orange-400',
      link: '/destinations/badami-cave-temples',
    },
    {
      title: t.highlights.card4Title,
      desc: t.highlights.card4Desc,
      icon: Feather,
      badge: 'GI Tag & Spirit',
      color: 'from-emerald-500/20 via-teal-500/10 to-transparent',
      borderColor: 'border-emerald-500/30',
      iconColor: 'text-emerald-400',
      link: '/destinations/ilkal-heritage-town',
    },
  ];

  return (
    <section className="py-20 relative bg-[#0f0c0a] border-y border-stone-800/80 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-sandstone-950/80 border border-sandstone-600/40 text-amber-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.highlights.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            {t.highlights.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-400">
            {t.highlights.subtitle}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                href={item.link}
                className={`group relative p-6 rounded-2xl glass-panel border ${item.borderColor} bg-gradient-to-b ${item.color} flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl transition-all duration-300`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-stone-900/80 border border-stone-700/60 group-hover:scale-110 transition-transform">
                      <Icon className={`w-6 h-6 ${item.iconColor}`} />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-stone-900 border border-stone-800 text-stone-400">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-stone-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-300">
                  <span>Explore Heritage</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>

    </section>
  );
};
