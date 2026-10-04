import { create } from 'zustand';

interface ThemeState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (t: 'light' | 'dark') => void;
}

const applyThemeToDOM = (t: 'light' | 'dark') => {
  if (typeof document === 'undefined') return;
  if (t === 'dark') {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  }
};

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: 'dark', // default to luxurious dark sandstone mode

  toggleTheme: () => {
    const next = get().theme === 'dark' ? 'light' : 'dark';
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('bagalkote_theme', next);
        applyThemeToDOM(next);
      } catch (e) {
        console.error(e);
      }
    }
    set({ theme: next });
  },

  setTheme: (t: 'light' | 'dark') => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('bagalkote_theme', t);
        applyThemeToDOM(t);
      } catch (e) {
        console.error(e);
      }
    }
    set({ theme: t });
  },
}));

// Client hydration
if (typeof window !== 'undefined') {
  try {
    const saved = localStorage.getItem('bagalkote_theme') as 'light' | 'dark';
    if (saved === 'light' || saved === 'dark') {
      useThemeStore.setState({ theme: saved });
      applyThemeToDOM(saved);
    } else {
      applyThemeToDOM('dark');
    }
  } catch (e) {
    console.error(e);
  }
}
