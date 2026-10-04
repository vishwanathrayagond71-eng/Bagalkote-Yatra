'use client';

import React from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUp, 
  Heart, 
  ExternalLink,
  ShieldCheck,
  Compass,
  Sparkles
} from 'lucide-react';
import { useTranslation } from '@/store/languageStore';
import { useContactsStore } from '@/store/contactsStore';

export const Footer: React.FC = () => {
  const { t, language, setLanguage } = useTranslation();
  const { contacts } = useContactsStore();
  const primaryContact = contacts[0] || null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-stone-950 via-[#100c0a] to-[#0a0807] text-stone-300 pt-16 pb-10 border-t border-sandstone-900/60 overflow-hidden">
      {/* Decorative Chalukyan background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sandstone-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-heritage-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Quote Ribbon */}
        <div className="mb-12 pb-8 border-b border-stone-800/80 text-center">
          <p className="font-serif italic text-base sm:text-lg text-amber-200/90 max-w-3xl mx-auto">
            {t.footer.chalukyaQuote}
          </p>
          <span className="inline-block mt-2 text-xs uppercase tracking-widest text-sandstone-400 font-medium">
            — Badami Chalukyan Royal Inscription, 7th Century CE
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          
          {/* Col 1: District Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sandstone-500 to-heritage-gold flex items-center justify-center shadow-lg">
                <span className="text-xl font-serif text-white font-bold">ಬಾ</span>
              </div>
              <div>
                <span className="font-serif tracking-widest text-lg font-bold text-white block">
                  BAGALKOTE YATRA
                </span>
                <span className="text-xs tracking-wider text-sandstone-400 font-medium">
                  {language === 'kn' ? 'ಬಾಗಲಕೋಟೆ ಯಾತ್ರೆ • ಅಧಿಕೃತ ಪೋರ್ಟಲ್' : language === 'hi' ? 'बागलकोट यात्रा • आधिकारिक पोर्टल' : 'Official Heritage & Tourism Portal'}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              {t.footer.aboutText}
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium bg-sandstone-950 border border-sandstone-700/50 text-amber-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.footer.govBadge}</span>
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-300 font-serif">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                  <span className="text-sandstone-500">›</span>
                  <span>{t.nav.home}</span>
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                  <span className="text-sandstone-500">›</span>
                  <span>{t.nav.destinations}</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                  <span className="text-sandstone-500">›</span>
                  <span>{t.nav.about}</span>
                </Link>
              </li>
              <li>
                <Link href="/plan-trip" className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                  <span className="text-sandstone-500">›</span>
                  <span>{t.nav.planTrip}</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                  <span className="text-sandstone-500">›</span>
                  <span>{t.nav.gallery}</span>
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                  <span className="text-sandstone-500">›</span>
                  <span>{t.nav.festivals}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Heritage Destinations */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-300 font-serif">
              {t.footer.categories}
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <Link href="/destinations/badami-cave-temples" className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                  <span className="text-sandstone-500">•</span>
                  <span>Badami Cave Temples</span>
                </Link>
              </li>
              <li>
                <Link href="/destinations/pattadakal-monuments" className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                  <span className="text-sandstone-500">•</span>
                  <span>Pattadakal UNESCO Site</span>
                </Link>
              </li>
              <li>
                <Link href="/destinations/aihole-monuments" className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                  <span className="text-sandstone-500">•</span>
                  <span>Aihole Temple Complex</span>
                </Link>
              </li>
              <li>
                <Link href="/destinations/kudalasangama" className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                  <span className="text-sandstone-500">•</span>
                  <span>Kudalasangama Pilgrimage</span>
                </Link>
              </li>
              <li>
                <Link href="/destinations/almatti-dam" className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                  <span className="text-sandstone-500">•</span>
                  <span>Almatti Dam & Gardens</span>
                </Link>
              </li>
              <li>
                <Link href="/destinations/banashankari-temple" className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                  <span className="text-sandstone-500">•</span>
                  <span>Banashankari Devi Temple</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Helpline & Contacts */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-300 font-serif">
              {t.footer.contactInfo}
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-stone-400">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-sandstone-400 shrink-0 mt-0.5" />
                <span>{primaryContact ? (primaryContact.officeLocation[language] || primaryContact.officeLocation.en) : 'Navanagar, Bagalkote - 587103, Karnataka'}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-sandstone-400 shrink-0" />
                <a href={`tel:${primaryContact?.phone}`} className="text-amber-300 font-medium hover:underline">
                  {primaryContact ? primaryContact.phone : '+91 8354 235123'}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-sandstone-400 shrink-0" />
                <a href={`mailto:${primaryContact?.email}`} className="hover:text-white underline">
                  {primaryContact ? primaryContact.email : 'tourism-bgk@karnataka.gov.in'}
                </a>
              </div>
            </div>

            {/* Language Quick Pills */}
            <div className="pt-2">
              <div className="text-xs text-stone-400 mb-2">Switch Language / ಭಾಷೆ:</div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2.5 py-1 text-xs rounded border transition-colors ${
                    language === 'en'
                      ? 'bg-sandstone-600 text-white border-sandstone-500'
                      : 'border-stone-800 text-stone-400 hover:text-white'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage('kn')}
                  className={`px-2.5 py-1 text-xs rounded border transition-colors ${
                    language === 'kn'
                      ? 'bg-sandstone-600 text-white border-sandstone-500 font-semibold'
                      : 'border-stone-800 text-stone-400 hover:text-white'
                  }`}
                >
                  ಕನ್ನಡ
                </button>
                <button
                  onClick={() => setLanguage('hi')}
                  className={`px-2.5 py-1 text-xs rounded border transition-colors ${
                    language === 'hi'
                      ? 'bg-sandstone-600 text-white border-sandstone-500 font-semibold'
                      : 'border-stone-800 text-stone-400 hover:text-white'
                  }`}
                >
                  हिन्दी
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <div>
            © {new Date().getFullYear()} Bagalkote District Tourism Administration. {t.nav.allRights}.
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/admin/login" className="hover:text-amber-400 transition-colors flex items-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5 text-sandstone-400" />
              <span>Admin Portal</span>
            </Link>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 text-stone-400 hover:text-amber-300 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
