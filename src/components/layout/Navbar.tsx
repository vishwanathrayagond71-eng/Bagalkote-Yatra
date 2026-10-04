'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Globe, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  MapPin, 
  Sparkles, 
  ShieldCheck, 
  ChevronDown,
  Compass,
  Calendar,
  Image as ImageIcon,
  Info,
  Phone,
  Bookmark
} from 'lucide-react';
import { useTranslation } from '@/store/languageStore';
import { useThemeStore } from '@/store/themeStore';
import { useAuthStore } from '@/store/authStore';
import { usePlacesStore } from '@/store/placesStore';
import { Language } from '@/types';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { language, setLanguage, t } = useTranslation();
  const { theme, toggleTheme } = useThemeStore();
  const { isAuthenticated } = useAuthStore();
  const { bookmarks } = usePlacesStore();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: { code: Language; label: string; native: string }[] = [
    { code: 'en', label: 'English', native: 'EN' },
    { code: 'kn', label: 'ಕನ್ನಡ', native: 'ಕನ್ನಡ' },
    { code: 'hi', label: 'हिन्दी', native: 'हिन्दी' },
  ];

  const navLinks = [
    { href: '/', label: t.nav.home, icon: Compass },
    { href: '/destinations', label: t.nav.destinations, icon: MapPin },
    { href: '/about', label: t.nav.about, icon: Info },
    { href: '/plan-trip', label: t.nav.planTrip, icon: Sparkles },
    { href: '/gallery', label: t.nav.gallery, icon: ImageIcon },
    { href: '/events', label: t.nav.festivals, icon: Calendar },
    { href: '/contact', label: t.nav.contact, icon: Phone },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-panel shadow-2xl shadow-black/40 py-2.5 border-b border-sandstone-500/20'
          : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Chalukya Emblem */}
          <Link href="/" className="flex items-center space-x-3 group shrink-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-sandstone-500 via-sandstone-600 to-amber-500 flex items-center justify-center shadow-lg shadow-sandstone-700/40 group-hover:scale-105 transition-transform duration-300 border border-amber-400/30">
              <span className="text-xl sm:text-2xl font-serif text-white font-bold">ಬಾ</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif tracking-widest text-lg sm:text-xl font-black bg-gradient-to-r from-amber-200 via-amber-300 to-sandstone-300 bg-clip-text text-transparent">
                BAGALKOTE YATRA
              </span>
              <span className="text-[10px] sm:text-xs tracking-wider uppercase text-sandstone-400 font-semibold">
                {language === 'kn' ? 'ಬಾಗಲಕೋಟೆ ಯಾತ್ರೆ' : language === 'hi' ? 'बागलकोट यात्रा' : 'Heritage & Tourism Portal'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 relative ${
                    active
                      ? 'text-amber-300 font-bold bg-sandstone-950/60 shadow-inner border border-sandstone-500/30'
                      : 'text-stone-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-amber-400 to-sandstone-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Controls: Direct Language Switcher Pills, Theme, Bookmarks & Admin */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* DIRECT LANGUAGE SWITCHER PILLS (No hidden dropdown - instant 1-click switch!) */}
            <div className="flex items-center p-1 rounded-xl bg-stone-900/90 border border-sandstone-500/40 shadow-inner">
              <Globe className="w-3.5 h-3.5 text-amber-400 ml-1.5 mr-1 hidden sm:block animate-pulse" />
              {languages.map((l) => {
                const isSelected = language === l.code;
                return (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => setLanguage(l.code)}
                    className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${
                      isSelected
                        ? 'bg-gradient-to-r from-sandstone-600 to-amber-500 text-white shadow-md shadow-sandstone-950 scale-105'
                        : 'text-stone-400 hover:text-white hover:bg-white/5'
                    }`}
                    title={`Switch to ${l.label}`}
                  >
                    {l.native}
                  </button>
                );
              })}
            </div>

            {/* Dark / Light Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-stone-900/80 hover:bg-stone-800 border border-sandstone-500/30 text-amber-400 hover:text-amber-300 transition-all shadow-sm"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Bookmarks Counter */}
            {bookmarks.length > 0 && (
              <Link
                href="/destinations?filter=bookmarked"
                className="hidden sm:flex items-center space-x-1 px-2.5 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs font-medium hover:bg-amber-500/20 transition-all"
                title="Saved Places"
              >
                <Bookmark className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{bookmarks.length}</span>
              </Link>
            )}

            {/* Admin Portal Button */}
            <Link
              href={isAuthenticated ? '/admin/dashboard' : '/admin/login'}
              className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-sandstone-700 to-sandstone-600 hover:from-sandstone-600 hover:to-sandstone-500 text-white text-xs font-semibold border border-sandstone-400/30 shadow-md shadow-sandstone-950/60 transition-all"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
              <span>{isAuthenticated ? 'Admin' : t.nav.admin}</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-stone-900/80 border border-sandstone-500/30 text-stone-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-t border-sandstone-500/20 mt-3 px-4 py-4 space-y-3 animate-in slide-in-from-top duration-300 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    active
                      ? 'bg-sandstone-600/40 text-amber-300 font-bold border border-sandstone-500/30'
                      : 'text-stone-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4 text-amber-400" />
                  <span>{link.label}</span>
                </Link>
              );
            })}

            <div className="pt-2 border-t border-stone-800">
              <Link
                href={isAuthenticated ? '/admin/dashboard' : '/admin/login'}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-2 px-3 py-2.5 rounded-xl text-sm bg-gradient-to-r from-sandstone-700 to-sandstone-600 text-white font-medium"
              >
                <ShieldCheck className="w-4 h-4 text-amber-300" />
                <span>{isAuthenticated ? 'Admin Dashboard' : t.nav.admin}</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
