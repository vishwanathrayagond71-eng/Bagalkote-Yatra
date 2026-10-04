'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Landmark, 
  CheckCircle2, 
  Clock, 
  Image as ImageIcon, 
  Plus, 
  Eye, 
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  Users
} from 'lucide-react';
import { usePlacesStore } from '@/store/placesStore';
import { useTranslation } from '@/store/languageStore';
import { TouristPlace } from '@/types';

interface DashboardOverviewProps {
  onAddNew: () => void;
  onEditPlace: (place: TouristPlace) => void;
}

export const DashboardOverview: React.FC<DashboardOverviewProps> = ({ onAddNew, onEditPlace }) => {
  const { places } = usePlacesStore();
  const { t, language } = useTranslation();

  const totalPlaces = places.length;
  const publishedPlaces = places.filter((p) => p.status === 'published').length;
  const draftPlaces = places.filter((p) => p.status === 'draft').length;
  const totalPhotos = places.reduce((acc, p) => acc + (p.gallery?.length || 1), 0);

  // Group by category
  const categoryCounts = places.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="space-y-8">
      
      {/* 4 Metric Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        
        <div className="glass-card p-5 rounded-2xl border border-sandstone-500/20 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
              {t.admin.totalPlaces}
            </span>
            <div className="p-2.5 rounded-xl bg-sandstone-950/80 border border-sandstone-600/40 text-amber-400">
              <Landmark className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-serif font-bold text-white">{totalPlaces}</span>
            <span className="text-xs text-stone-400 block mt-1">
              {language === 'kn' ? 'ಸಕ್ರಿಯ ಪ್ರವಾಸಿ ತಾಣಗಳು' : language === 'hi' ? 'सक्रिय पर्यटन स्थल' : 'Active places in catalog'}
            </span>
          </div>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-emerald-500/20 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              {t.admin.publishedPlaces}
            </span>
            <div className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-600/40 text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-serif font-bold text-emerald-300">{publishedPlaces}</span>
            <span className="text-xs text-stone-400 block mt-1">
              {language === 'kn' ? 'ಸಾರ್ವಜನಿಕರಿಗೆ ಲಭ್ಯವಿದೆ' : language === 'hi' ? 'सार्वजनिक रूप से दृश्यमान' : 'Visible to public tourists'}
            </span>
          </div>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-amber-500/20 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              {t.admin.draftPlaces}
            </span>
            <div className="p-2.5 rounded-xl bg-amber-950/80 border border-amber-600/40 text-amber-400">
              <Clock className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-serif font-bold text-amber-300">{draftPlaces}</span>
            <span className="text-xs text-stone-400 block mt-1">
              {language === 'kn' ? 'ಪ್ರಕಟಣೆ ಬಾಕಿ ಇದೆ' : language === 'hi' ? 'प्रकाशन प्रक्रिया में' : 'Pending publication'}
            </span>
          </div>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-sandstone-500/20 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
              {t.admin.totalPhotos}
            </span>
            <div className="p-2.5 rounded-xl bg-sandstone-950/80 border border-sandstone-600/40 text-sandstone-400">
              <ImageIcon className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-serif font-bold text-white">{totalPhotos}</span>
            <span className="text-xs text-stone-400 block mt-1">
              {language === 'kn' ? 'ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಛಾಯಾಚಿತ್ರಗಳು' : language === 'hi' ? 'उच्च-रिज़ॉल्यूशन तस्वीरें' : 'Curated photographic assets'}
            </span>
          </div>
        </div>

      </div>

      {/* Quick Action & Category Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Category Distribution */}
        <div className="lg:col-span-2 glass-card p-6 rounded-2xl border border-stone-800 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-serif font-bold text-white">
              {language === 'kn' ? 'ವಿಭಾಗವಾರು ಹಂಚಿಕೆ' : language === 'hi' ? 'श्रेणी वितरण' : 'Category Distribution'}
            </h3>
            <span className="text-xs text-stone-400">
              {language === 'kn' ? 'ಒಟ್ಟು ಒಳಗೊಂಡಿರುವ ತಾಣಗಳು' : language === 'hi' ? 'कैटलॉग कवरेज' : 'Catalog Coverage'}
            </span>
          </div>

          <div className="space-y-3 pt-2">
            {Object.entries(categoryCounts).map(([cat, count]) => {
              const percentage = Math.round((count / totalPlaces) * 100);
              const catLabel = (t.categories as Record<string, string>)[cat] || cat;
              return (
                <div key={cat} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="capitalize text-stone-300 font-medium">{catLabel}</span>
                    <span className="text-stone-400">
                      {count} {language === 'kn' ? 'ತಾಣಗಳು' : language === 'hi' ? 'स्थान' : 'places'} ({percentage}%)
                    </span>
                  </div>
                  <div className="w-full bg-stone-900 rounded-full h-2 overflow-hidden border border-stone-800">
                    <div
                      className="bg-gradient-to-r from-sandstone-600 to-amber-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Actions Card */}
        <div className="glass-card p-6 rounded-2xl border border-stone-800 flex flex-col justify-between space-y-6">
          <div>
            <h3 className="text-base font-serif font-bold text-white mb-2">
              {language === 'kn' ? 'ನಿರ್ವಾಹಕರ ತ್ವರಿತ ಕ್ರಿಯೆಗಳು' : language === 'hi' ? 'त्वरित व्यवस्थापन' : 'Curator Quick Actions'}
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              {language === 'kn' 
                ? 'ಹೊಸ ಪ್ರವಾಸಿ ತಾಣ ಸೇರಿಸಿ, ಪ್ರವೇಶ ಶುಲ್ಕ ಹಾಗೂ ಸಮಯ ನವೀಕರಿಸಿ ಅಥವಾ ಸಾರ್ವಜನಿಕ ವೆಬ್‌ಸೈಟ್ ಪೂರ್ವವೀಕ್ಷಣೆ ಮಾಡಿ.' 
                : language === 'hi'
                ? 'नया पर्यटन स्थल जोड़ें, शुल्क व समय अद्यतन करें या सार्वजनिक वेबसाइट का पूर्वावलोकन करें।'
                : 'Create new tourist locations, update entry fees, or preview live updates directly.'}
            </p>
          </div>

          <div className="space-y-3">
            <button
              onClick={onAddNew}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-sandstone-600 to-amber-500 hover:from-sandstone-500 hover:to-amber-400 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-sandstone-900/50 flex items-center justify-center space-x-2 transition-all hover:scale-102"
            >
              <Plus className="w-4 h-4" />
              <span>{t.admin.addPlace}</span>
            </button>

            <Link
              href="/"
              target="_blank"
              className="w-full py-2.5 px-4 rounded-xl glass-panel hover:bg-stone-800 text-stone-300 text-xs font-semibold border border-stone-700 flex items-center justify-center space-x-2 transition-colors"
            >
              <Eye className="w-4 h-4 text-amber-400" />
              <span>{language === 'kn' ? 'ವೆಬ್‌ಸೈಟ್ ಪೂರ್ವವೀಕ್ಷಣೆ' : language === 'hi' ? 'वेबसाइट पूर्वावलोकन' : 'Preview Public Website'}</span>
            </Link>
          </div>
        </div>

      </div>

      {/* Recently Updated Places */}
      <div className="glass-card p-6 rounded-2xl border border-stone-800 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-serif font-bold text-white">
            {t.admin.recentPlaces}
          </h3>
          <span className="text-xs text-amber-400">
            {language === 'kn' ? `ಒಟ್ಟು: ${totalPlaces}` : language === 'hi' ? `कुल: ${totalPlaces}` : `Total: ${totalPlaces}`}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {places.slice(0, 6).map((place) => (
            <div
              key={place.id}
              className="p-3 rounded-xl bg-stone-900/60 border border-stone-800 flex items-center justify-between space-x-3 hover:border-sandstone-500/50 transition-colors"
            >
              <div className="flex items-center space-x-3 truncate">
                <div className="w-12 h-10 rounded-lg overflow-hidden shrink-0 bg-stone-800">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={place.featuredImage}
                    alt={place.title.en}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="truncate">
                  <span className="font-semibold text-white text-xs block truncate">
                    {place.title[language] || place.title.en}
                  </span>
                  <span className="text-[10px] text-stone-500 capitalize">
                    {(t.categories as Record<string, string>)[place.category] || place.category} • {place.status === 'published' ? t.admin.publishedPlaces : t.admin.draftPlaces}
                  </span>
                </div>
              </div>

              <button
                onClick={() => onEditPlace(place)}
                className="px-2.5 py-1 rounded-lg text-xs font-medium text-amber-400 hover:bg-amber-400/10 transition-colors shrink-0"
              >
                {t.admin.editPlace}
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
