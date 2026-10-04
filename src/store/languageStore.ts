import { create } from 'zustand';
import { Language } from '@/types';
import { translations } from '@/translations';

interface LanguageState {
  language: Language;
  t: typeof translations.en;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: 'en',
  t: translations.en,
  setLanguage: (lang: Language) => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('bagalkote_lang', lang);
        document.documentElement.lang = lang;
      } catch (e) {
        console.error(e);
      }
    }
    set({ language: lang, t: translations[lang] || translations.en });
  },
}));

// Robust hook for components: guarantees re-render on language change
export function useTranslation() {
  const language = useLanguageStore((state) => state.language);
  const setLanguage = useLanguageStore((state) => state.setLanguage);
  const t = useLanguageStore((state) => state.t) || translations[language] || translations.en;
  return { language, setLanguage, t };
}

// Hydrate on client
if (typeof window !== 'undefined') {
  try {
    const saved = localStorage.getItem('bagalkote_lang') as Language;
    if (saved && (saved === 'en' || saved === 'hi' || saved === 'kn')) {
      useLanguageStore.setState({ 
        language: saved, 
        t: translations[saved] || translations.en 
      });
      document.documentElement.lang = saved;
    }
  } catch (e) {
    console.error(e);
  }
}

