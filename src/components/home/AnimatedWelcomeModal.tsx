'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  Compass, 
  MapPin, 
  Landmark, 
  Award, 
  ArrowRight, 
  X, 
  Volume2, 
  VolumeX,
  CheckCircle2,
  Globe2,
  ChevronRight
} from 'lucide-react';
import { useTranslation } from '@/store/languageStore';
import { Language } from '@/types';
import { triggerConfetti } from '@/lib/utils';

export const AnimatedWelcomeModal: React.FC = () => {
  const { t, language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed in this session
    const dismissed = sessionStorage.getItem('bagalkote_welcome_dismissed');
    if (!dismissed) {
      // Show after a gentle 400ms delay for maximum dramatic animated entry
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    sessionStorage.setItem('bagalkote_welcome_dismissed', 'true');
  };

  const handleEnterExperience = () => {
    triggerConfetti();
    handleDismiss();
  };

  const handleScrollToCircuit = () => {
    handleDismiss();
    const el = document.getElementById('circuit-map');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const languages: { code: Language; label: string; name: string }[] = [
    { code: 'kn', label: 'ಕನ್ನಡ', name: 'ಕನ್ನಡದಲ್ಲಿ ನೋಡಿ' },
    { code: 'en', label: 'English', name: 'Explore in English' },
    { code: 'hi', label: 'हिन्दी', name: 'हिन्दी में देखें' },
  ];

  return (
    <>
      {/* Floating Re-open Button (Always accessible) */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 px-4 py-2.5 rounded-full bg-gradient-to-r from-amber-500 via-sandstone-600 to-amber-600 text-stone-950 font-bold text-xs shadow-2xl shadow-amber-500/40 border border-amber-300 flex items-center space-x-2 hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none"
        title="Open Welcome Guide & Language Selector"
      >
        <Sparkles className="w-4 h-4 fill-stone-950" />
        <span className="tracking-wide">
          {language === 'kn' ? 'ಸ್ವಾಗತ ಗೈಡ್' : language === 'hi' ? 'स्वागत गाइड' : 'Welcome Guide'}
        </span>
      </button>

      {/* Main Animated Welcome Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md transition-all duration-500 animate-in fade-in">
          
          <div className="relative w-full max-w-2xl rounded-3xl overflow-hidden glass-card border-2 border-amber-500/50 shadow-2xl shadow-sandstone-900/80 bg-gradient-to-b from-[#1c1511] via-[#120e0c] to-[#0a0807] text-white animate-in zoom-in-95 duration-400">
            
            {/* Top decorative glow bar */}
            <div className="h-2 w-full bg-gradient-to-r from-amber-500 via-sandstone-500 to-amber-600" />
            
            {/* Close Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 p-2 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-400 hover:text-white transition-colors border border-stone-700/60 z-20"
              aria-label="Close welcome modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Badge & Greeting Header */}
              <div className="text-center space-y-3">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-amber-400 animate-spin-slow" />
                  <span>
                    {language === 'kn' ? 'ಚಾಲುಕ್ಯರ ನಾಡಿಗೆ ಸುಸ್ವಾಗತ' : language === 'hi' ? 'चालुक्य भूमि में आपका स्वागत है' : 'Welcome to the Land of Chalukyas'}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-serif font-black tracking-tight text-white leading-tight">
                  {language === 'kn' ? (
                    <>ಪವಿತ್ರ <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-sandstone-300">ಬಾಗಲಕೋಟೆ ಯಾತ್ರೆಗೆ</span> ಸುಸ್ವಾಗತ</>
                  ) : language === 'hi' ? (
                    <>भव्य <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-sandstone-300">बागलकोट यात्रा</span> में आपका स्वागत है</>
                  ) : (
                    <>Discover The Royal Splendour of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-sandstone-300">Bagalkote Yatra</span></>
                  )}
                </h2>

                <p className="text-xs sm:text-sm text-stone-300 max-w-lg mx-auto leading-relaxed">
                  {language === 'kn'
                    ? '15+ ವಿಶ್ವವಿಖ್ಯಾತ ಗುಹಾಂತರ ದೇವಾಲಯಗಳು, ಯುನೆಸ್ಕೋ ಪಾರಂಪರಿಕ ತಾಣ ಪಟ್ಟದಕಲ್ಲು, ನದಿಗಳ ಪವಿತ್ರ ಕೂಡಲಸಂಗಮ ಮತ್ತು ಇಳಕಲ್ ಕೈಮಗ್ಗ ಪರಂಪರೆ.'
                    : language === 'hi'
                    ? '15+ विश्व प्रसिद्ध रॉक-कट गुफा मंदिर, यूनेस्को विश्व धरोहर पट्टदकल, कूडलसंगम का पावन संगम और इलकल हथकरघा का अनूठा संसार।'
                    : 'Embark on an immersive journey across 1,500 years of temple architecture, 15 iconic heritage destinations, UNESCO monuments, and sacred river confluences.'}
                </p>
              </div>

              {/* Language Selection Carousel / Pills */}
              <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-2">
                <div className="flex items-center justify-between text-xs text-stone-400 mb-2">
                  <span className="font-semibold uppercase tracking-wider flex items-center space-x-1.5 text-amber-300">
                    <Globe2 className="w-3.5 h-3.5" />
                    <span>
                      {language === 'kn' ? 'ನಿಮ್ಮ ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ:' : language === 'hi' ? 'अपनी भाषा चुनें:' : 'Choose Your Preferred Language:'}
                    </span>
                  </span>
                  <span className="text-[11px] text-stone-500">Instant Switch</span>
                </div>

                <div className="grid grid-cols-3 gap-2.5">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => setLanguage(l.code)}
                      className={`py-3 px-3 rounded-xl border text-center transition-all duration-200 flex flex-col items-center justify-center space-y-1 ${
                        language === l.code
                          ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-lg shadow-amber-500/10'
                          : 'bg-stone-950/60 border-stone-700/60 text-stone-300 hover:border-stone-500 hover:text-white'
                      }`}
                    >
                      <span className="font-serif font-bold text-sm sm:text-base block">
                        {l.label}
                      </span>
                      <span className="text-[10px] text-stone-400">
                        {l.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3 Visual Highlights */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-stone-950/70 border border-stone-800/80 text-center space-y-1">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 mx-auto flex items-center justify-center">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-white block">Pattadakal</span>
                  <span className="text-[9px] text-stone-400 block">UNESCO Site</span>
                </div>

                <div className="p-3 rounded-xl bg-stone-950/70 border border-stone-800/80 text-center space-y-1">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 mx-auto flex items-center justify-center">
                    <Landmark className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-white block">Badami Caves</span>
                  <span className="text-[9px] text-stone-400 block">6th Century</span>
                </div>

                <div className="p-3 rounded-xl bg-stone-950/70 border border-stone-800/80 text-center space-y-1">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 mx-auto flex items-center justify-center">
                    <Compass className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-white block">Golden Circuit</span>
                  <span className="text-[9px] text-stone-400 block">7 Sacred Stops</span>
                </div>
              </div>

              {/* Interactive Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  onClick={handleEnterExperience}
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-sandstone-600 via-amber-500 to-amber-600 hover:from-sandstone-500 hover:to-amber-400 text-stone-950 font-black text-sm shadow-xl shadow-amber-500/25 flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-[1.02] active:scale-95"
                >
                  <Sparkles className="w-4 h-4 fill-stone-950" />
                  <span>
                    {language === 'kn' ? '✨ ಪ್ರವಾಸ ಆರಂಭಿಸಿ (ಪ್ರವೇಶಿಸಿ)' : language === 'hi' ? '✨ यात्रा शुरू करें (प्रवेश करें)' : '✨ Enter & Explore District'}
                  </span>
                </button>

                <button
                  onClick={handleScrollToCircuit}
                  className="w-full sm:w-auto py-3.5 px-5 rounded-2xl glass-panel hover:bg-stone-800 text-amber-300 border border-amber-500/40 text-xs sm:text-sm font-semibold flex items-center justify-center space-x-1.5 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>
                    {language === 'kn' ? 'ನಕ್ಷೆ ನೋಡಿ' : language === 'hi' ? 'सर्किट नक्शा' : 'Circuit Map'}
                  </span>
                </button>
              </div>

            </div>

          </div>

        </div>
      )}
    </>
  );
};
