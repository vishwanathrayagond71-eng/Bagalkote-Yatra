'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ShieldCheck, 
  LayoutDashboard, 
  Landmark, 
  PlusCircle, 
  LogOut, 
  Eye, 
  Sparkles,
  BarChart3,
  MessageSquare,
  Compass,
  CheckCircle2,
  RefreshCw,
  Phone
} from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { usePlacesStore } from '@/store/placesStore';
import { useTranslation } from '@/store/languageStore';
import { TouristPlace, Language } from '@/types';
import { DashboardOverview } from '@/components/admin/DashboardOverview';
import { ManagePlacesTable } from '@/components/admin/ManagePlacesTable';
import { AddPlaceForm } from '@/components/admin/AddPlaceForm';
import { OfficialContactsEditor } from '@/components/admin/OfficialContactsEditor';

export default function AdminDashboardPage() {
  const router = useRouter();
  const { isAuthenticated, user, logout } = useAuthStore();
  const { resetToDefaults, places } = usePlacesStore();
  const { t, language, setLanguage } = useTranslation();

  const [activeTab, setActiveTab] = useState<'overview' | 'manage' | 'add' | 'edit' | 'contacts'>('overview');
  const [editingPlace, setEditingPlace] = useState<TouristPlace | null>(null);

  // Authentication Guard
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/admin/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center bg-stone-950 text-stone-400">
        Authenticating Curator Session...
      </div>
    );
  }

  const handleEditPlace = (place: TouristPlace) => {
    setEditingPlace(place);
    setActiveTab('edit');
  };

  const handleAddNew = () => {
    setEditingPlace(null);
    setActiveTab('add');
  };

  const handleLogout = () => {
    logout();
    router.push('/admin/login');
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'kn', label: 'ಕನ್ನಡ' },
    { code: 'hi', label: 'हिन्दी' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#0d0a08] text-stone-200">
      
      {/* Top Admin Bar */}
      <div className="bg-stone-900/80 border-b border-stone-800 px-4 sm:px-6 lg:px-8 py-3.5 sticky top-16 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          
          {/* User Profile Pill */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sandstone-600 to-amber-500 flex items-center justify-center text-white font-bold shadow-md">
              <ShieldCheck className="w-5 h-5 text-amber-200" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-sm text-white">{user.name}</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/20 border border-amber-500/40 text-amber-300">
                  {user.role}
                </span>
              </div>
              <span className="text-xs text-stone-400">{user.email}</span>
            </div>
          </div>

          {/* Language Switcher + Quick Actions & Logout */}
          <div className="flex items-center flex-wrap gap-2 sm:gap-3 self-end sm:self-center">
            {/* Admin Language Switcher */}
            <div className="flex items-center p-1 rounded-xl bg-stone-950/90 border border-stone-700/80">
              <span className="text-[10px] text-stone-400 font-semibold px-2 uppercase tracking-wider hidden sm:inline">
                Language:
              </span>
              <div className="flex space-x-1">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLanguage(l.code)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                      language === l.code
                        ? 'bg-amber-500 text-stone-950 shadow-md font-bold'
                        : 'text-stone-400 hover:text-white hover:bg-stone-800'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            <Link
              href="/"
              target="_blank"
              className="px-3 py-1.5 rounded-xl glass-panel hover:bg-stone-800 text-stone-300 text-xs font-semibold border border-stone-700 flex items-center space-x-1.5 transition-colors"
            >
              <Eye className="w-3.5 h-3.5 text-amber-400" />
              <span>{language === 'kn' ? 'ಮುಖಪುಟ' : language === 'hi' ? 'लाइव साइट' : 'Live Site'}</span>
            </Link>

            <button
              onClick={handleLogout}
              className="px-3 py-1.5 rounded-xl bg-red-950/60 hover:bg-red-900/80 text-red-300 border border-red-800 text-xs font-semibold flex items-center space-x-1.5 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>{t.admin.logoutBtn}</span>
            </button>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        
        {/* Navigation Tabs Header */}
        <div className="flex items-center space-x-2 border-b border-stone-800 pb-4 mb-8 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'overview'
                ? 'bg-sandstone-600 text-white shadow-lg shadow-sandstone-900/60'
                : 'text-stone-400 hover:text-white hover:bg-stone-900'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>{t.admin.dashboard}</span>
          </button>

          <button
            onClick={() => setActiveTab('manage')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'manage'
                ? 'bg-sandstone-600 text-white shadow-lg shadow-sandstone-900/60'
                : 'text-stone-400 hover:text-white hover:bg-stone-900'
            }`}
          >
            <Landmark className="w-4 h-4" />
            <span>{t.admin.managePlaces} ({places.length})</span>
          </button>

          <button
            onClick={handleAddNew}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'add'
                ? 'bg-sandstone-600 text-white shadow-lg shadow-sandstone-900/60'
                : 'text-stone-400 hover:text-white hover:bg-stone-900'
            }`}
          >
            <PlusCircle className="w-4 h-4 text-amber-300" />
            <span>{t.admin.addPlace}</span>
          </button>

          <button
            onClick={() => setActiveTab('contacts')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'contacts'
                ? 'bg-sandstone-600 text-white shadow-lg shadow-sandstone-900/60'
                : 'text-stone-400 hover:text-white hover:bg-stone-900'
            }`}
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>{language === 'kn' ? 'ಅಧಿಕೃತ ಸಂಪರ್ಕಗಳು' : language === 'hi' ? 'आधिकारिक संपर्क' : 'Official Contacts (3)'}</span>
          </button>

          {activeTab === 'edit' && editingPlace && (
            <div className="flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-amber-600/30 border border-amber-500/40 text-amber-300 whitespace-nowrap">
              <span>{t.admin.editPlace}: {editingPlace.title[language] || editingPlace.title.en}</span>
            </div>
          )}
        </div>

        {/* Tab Contents */}
        {activeTab === 'overview' && (
          <DashboardOverview onAddNew={handleAddNew} onEditPlace={handleEditPlace} />
        )}

        {activeTab === 'manage' && (
          <ManagePlacesTable onAddNew={handleAddNew} onEditPlace={handleEditPlace} />
        )}

        {activeTab === 'add' && (
          <AddPlaceForm isEditMode={false} />
        )}

        {activeTab === 'edit' && editingPlace && (
          <AddPlaceForm initialPlace={editingPlace} isEditMode={true} />
        )}

        {activeTab === 'contacts' && (
          <OfficialContactsEditor />
        )}

      </div>

    </div>
  );
}
