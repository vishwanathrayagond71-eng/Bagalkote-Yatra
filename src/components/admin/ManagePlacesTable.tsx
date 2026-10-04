'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye, 
  Plus, 
  AlertTriangle, 
  Check, 
  X,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { TouristPlace, Language } from '@/types';
import { usePlacesStore } from '@/store/placesStore';
import { useTranslation } from '@/store/languageStore';

interface ManagePlacesTableProps {
  onEditPlace: (place: TouristPlace) => void;
  onAddNew: () => void;
}

export const ManagePlacesTable: React.FC<ManagePlacesTableProps> = ({ onEditPlace, onAddNew }) => {
  const { places, deletePlace, updatePlace } = usePlacesStore();
  const { t, language } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [deleteCandidate, setDeleteCandidate] = useState<TouristPlace | null>(null);

  const filteredPlaces = places.filter((p) => {
    const matchesSearch =
      p.title.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.title.kn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.title.hi.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || p.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const handleDeleteConfirm = () => {
    if (deleteCandidate) {
      deletePlace(deleteCandidate.id);
      setDeleteCandidate(null);
    }
  };

  const toggleStatus = (place: TouristPlace) => {
    const newStatus = place.status === 'published' ? 'draft' : 'published';
    updatePlace(place.id, { status: newStatus });
  };

  return (
    <div className="space-y-6">
      
      {/* Top Filter & Action Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={language === 'kn' ? 'ಸ್ಥಳದ ಹೆಸರಿನಿಂದ ಹುಡುಕಿ (ಕನ್ನಡ/English/Hindi)...' : language === 'hi' ? 'स्थान के नाम से खोजें (हिन्दी/English/ಕನ್ನಡ)...' : 'Search by English, Kannada or Hindi name...'}
            className="w-full bg-stone-900 border border-stone-700/80 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder-stone-400 focus:outline-none focus:border-amber-400"
          />
        </div>

        {/* Category Filter & Add Button */}
        <div className="flex items-center space-x-3">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="bg-stone-900 border border-stone-700/80 rounded-xl px-3 py-2 text-xs sm:text-sm text-stone-300 focus:outline-none focus:border-amber-400"
          >
            <option value="all">{t.categories.all}</option>
            <option value="historic">{t.categories.historic}</option>
            <option value="religious">{t.categories.religious}</option>
            <option value="nature">{t.categories.nature}</option>
            <option value="wildlife">{t.categories.wildlife}</option>
            <option value="fort">{t.categories.fort}</option>
            <option value="dam">{t.categories.dam}</option>
            <option value="museum">{t.categories.museum}</option>
            <option value="cultural">{t.categories.cultural}</option>
          </select>

          <button
            onClick={onAddNew}
            className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-sandstone-600 to-amber-500 hover:from-sandstone-500 hover:to-amber-400 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-sandstone-900/50 shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>{t.admin.addPlace}</span>
          </button>
        </div>

      </div>

      {/* Table Container */}
      <div className="glass-card rounded-2xl border border-sandstone-500/20 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-stone-950/80 border-b border-stone-800 text-stone-400 font-medium uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3.5 px-4">
                  {language === 'kn' ? 'ಪ್ರವಾಸಿ ತಾಣ / ಹೆಸರು' : language === 'hi' ? 'पर्यटन स्थल / नाम' : 'Place / Destination'}
                </th>
                <th className="py-3.5 px-4">
                  {language === 'kn' ? 'ಕನ್ನಡ / हिन्दी ಹೆಸರು' : language === 'hi' ? 'क्षेत्रीय नाम (कನ್ನಡ / हिन्दी)' : 'Regional Names'}
                </th>
                <th className="py-3.5 px-4">
                  {language === 'kn' ? 'ವಿಭಾಗ' : language === 'hi' ? 'श्रेणी' : 'Category'}
                </th>
                <th className="py-3.5 px-4">
                  {language === 'kn' ? 'ಸ್ಥಿತಿ' : language === 'hi' ? 'स्थिति' : 'Status'}
                </th>
                <th className="py-3.5 px-4 text-center">
                  {language === 'kn' ? 'ಚಿತ್ರಗಳು' : language === 'hi' ? 'फ़ोटो' : 'Photos'}
                </th>
                <th className="py-3.5 px-4 text-right">
                  {t.admin.actions}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800/60">
              {filteredPlaces.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-stone-500">
                    {language === 'kn' ? 'ಯಾವುದೇ ಪ್ರವಾಸಿ ತಾಣ ಕಂಡುಬಂದಿಲ್ಲ.' : language === 'hi' ? 'कोई पर्यटन स्थल नहीं मिला।' : 'No tourist destinations found matching your criteria.'}
                  </td>
                </tr>
              ) : (
                filteredPlaces.map((place) => (
                  <tr key={place.id} className="hover:bg-white/[0.02] transition-colors">
                    
                    {/* Thumbnail + Name in Active Language */}
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-10 rounded-lg overflow-hidden bg-stone-800 shrink-0">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={place.featuredImage}
                            alt={place.title.en}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <span className="font-semibold text-white block line-clamp-1">
                            {place.title[language] || place.title.en}
                          </span>
                          <span className="text-[11px] text-stone-500 line-clamp-1">
                            /destinations/{place.slug}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Regional Names (Kannada & Hindi) */}
                    <td className="py-3 px-4 text-stone-300">
                      <div className="text-xs font-serif font-medium text-amber-200">
                        {place.title.kn || '—'}
                      </div>
                      <div className="text-[11px] text-stone-400 mt-0.5">
                        {place.title.hi || '—'}
                      </div>
                    </td>

                    {/* Category */}
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-stone-900 border border-stone-800 text-amber-300">
                        {(t.categories as Record<string, string>)[place.category] || place.category}
                      </span>
                    </td>

                    {/* Status Pill Toggle */}
                    <td className="py-3 px-4">
                      <button
                        onClick={() => toggleStatus(place)}
                        className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border transition-all ${
                          place.status === 'published'
                            ? 'bg-emerald-950/80 border-emerald-500/50 text-emerald-300 hover:bg-emerald-900'
                            : 'bg-amber-950/80 border-amber-500/50 text-amber-300 hover:bg-amber-900'
                        }`}
                        title="Click to toggle Status"
                      >
                        {place.status === 'published' ? t.admin.publishedPlaces : t.admin.draftPlaces}
                      </button>
                    </td>

                    {/* Photos Count */}
                    <td className="py-3 px-4 text-center text-stone-400">
                      {place.gallery?.length || 1}
                    </td>

                    {/* Action Buttons */}
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        {/* View Preview */}
                        <Link
                          href={`/destinations/${place.slug}`}
                          target="_blank"
                          className="p-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-white border border-stone-700/60 transition-colors"
                          title="View on Live Site"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </Link>

                        {/* Edit Place */}
                        <button
                          onClick={() => onEditPlace(place)}
                          className="p-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 transition-colors"
                          title="Edit Destination"
                        >
                          <Edit className="w-3.5 h-3.5" />
                        </button>

                        {/* Delete Place */}
                        <button
                          onClick={() => setDeleteCandidate(place)}
                          className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 transition-colors"
                          title="Delete Place"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>

                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteCandidate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="glass-card max-w-md w-full rounded-2xl p-6 border border-red-500/40 shadow-2xl">
            <div className="flex items-center space-x-3 text-red-400 mb-4">
              <AlertTriangle className="w-6 h-6 shrink-0" />
              <h3 className="text-lg font-bold text-white">
                {language === 'kn' ? 'ತಾಣವನ್ನು ಅಳಿಸುವುದೇ?' : language === 'hi' ? 'क्या आप इस स्थल को हटाना चाहते हैं?' : 'Delete Destination?'}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6">
              {language === 'kn'
                ? `ನೀವು "${deleteCandidate.title.kn || deleteCandidate.title.en}" ಅನ್ನು ನಿಜವಾಗಿಯೂ ಅಳಿಸಲು ಬಯಸುವಿರಾ? ಇದು ಲೈವ್ ವೆಬ್‌ಸೈಟ್‌ನಿಂದ ತಕ್ಷಣ ತೆಗೆದುಹಾಕಲ್ಪಡುತ್ತದೆ.`
                : language === 'hi'
                ? `क्या आप वास्तव में "${deleteCandidate.title.hi || deleteCandidate.title.en}" को हटाना चाहते हैं? यह सार्वजनिक वेबसाइट से हटा दिया जाएगा।`
                : `Are you sure you want to delete "${deleteCandidate.title.en}"? This will remove it from the live catalog.`}
            </p>
            <div className="flex items-center justify-end space-x-3">
              <button
                onClick={() => setDeleteCandidate(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-stone-300 hover:bg-stone-800"
              >
                {language === 'kn' ? 'ರದ್ದುಮಾಡಿ' : language === 'hi' ? 'रद्द करें' : 'Cancel'}
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-semibold shadow-lg shadow-red-950"
              >
                {language === 'kn' ? 'ಹೌದು, ಅಳಿಸಿ' : language === 'hi' ? 'हाँ, हटाएं' : 'Yes, Delete'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
