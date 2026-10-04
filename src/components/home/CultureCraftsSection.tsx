'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Utensils, Scissors, ArrowRight, ShieldCheck } from 'lucide-react';
import { useTranslation } from '@/store/languageStore';

export const CultureCraftsSection: React.FC = () => {
  const { t, language } = useTranslation();

  return (
    <section className="py-20 relative bg-stone-950 border-t border-stone-850 overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-sandstone-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-sandstone-950/80 border border-sandstone-600/40 text-amber-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.cuisine.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            {t.cuisine.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-400">
            {t.cuisine.subtitle}
          </p>
        </div>

        {/* 2 Big Feature Cards: Ilkal Sarees & Jolada Rotti */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: GI-Tagged Ilkal Sarees */}
          <div className="group rounded-3xl glass-card overflow-hidden border border-sandstone-500/20 hover:border-sandstone-500/50 transition-all duration-300 flex flex-col">
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Weaving_ilkal_saree.jpg/1280px-Weaving_ilkal_saree.jpg"
                alt="Ilkal Saree Weaving"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sandstone-900/90 border border-sandstone-500/50 text-amber-300 backdrop-blur-md">
                  GI-Tagged Craft (2006)
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-sandstone-400 text-xs font-medium uppercase tracking-wider mb-2">
                  <Scissors className="w-4 h-4 text-amber-400" />
                  <span>1,200 Years of Weaving Excellence</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-3">
                  {t.cuisine.ilkalTitle}
                </h3>
                <p className="text-sm text-stone-300 leading-relaxed">
                  {t.cuisine.ilkalDesc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center justify-between">
                <span className="text-xs text-stone-400">Guledagudd Khana & Kasuti Embroidery</span>
                <Link
                  href="/destinations/ilkal-heritage-town"
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300"
                >
                  <span>Explore Ilkal Town</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: North Karnataka Jolada Rotti Feast */}
          <div className="group rounded-3xl glass-card overflow-hidden border border-sandstone-500/20 hover:border-sandstone-500/50 transition-all duration-300 flex flex-col">
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80"
                alt="North Karnataka Food Feast"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 backdrop-blur-md">
                  Authentic Culinary Heritage
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-emerald-400 text-xs font-medium uppercase tracking-wider mb-2">
                  <Utensils className="w-4 h-4 text-emerald-400" />
                  <span>Uttara Karnataka Traditional Oota</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-3">
                  {t.cuisine.foodTitle}
                </h3>
                <p className="text-sm text-stone-300 leading-relaxed">
                  {t.cuisine.foodDesc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center justify-between">
                <span className="text-xs text-stone-400">Yennegai • Girmit • Shenga Holige</span>
                <Link
                  href="/about#gastronomy"
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300"
                >
                  <span>Culinary Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
