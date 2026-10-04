import { create } from 'zustand';
import { TouristPlace, PlaceCategory } from '@/types';
import { initialDestinations } from '@/data/destinations';

interface PlacesState {
  places: TouristPlace[];
  searchQuery: string;
  selectedCategory: string;
  bookmarks: string[];
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (cat: string) => void;
  addPlace: (place: TouristPlace) => void;
  updatePlace: (id: string, updated: Partial<TouristPlace>) => void;
  deletePlace: (id: string) => void;
  toggleBookmark: (id: string) => void;
  resetToDefaults: () => void;
  getPlaceBySlug: (slug: string) => TouristPlace | undefined;
}

export const usePlacesStore = create<PlacesState>((set, get) => ({
  places: initialDestinations,
  searchQuery: '',
  selectedCategory: 'all',
  bookmarks: [],

  setSearchQuery: (query: string) => set({ searchQuery: query }),
  setSelectedCategory: (cat: string) => set({ selectedCategory: cat }),

  addPlace: (newPlace: TouristPlace) => {
    set((state) => {
      const updated = [newPlace, ...state.places];
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem('bagalkote_custom_places_v5', JSON.stringify(updated));
        } catch (e) {
          console.error('Storage error', e);
        }
      }
      return { places: updated };
    });
  },

  updatePlace: (id: string, updatedFields: Partial<TouristPlace>) => {
    set((state) => {
      const updated = state.places.map((place) =>
        place.id === id ? { ...place, ...updatedFields, updatedAt: new Date().toISOString() } : place
      );
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem('bagalkote_custom_places_v5', JSON.stringify(updated));
        } catch (e) {
          console.error(e);
        }
      }
      return { places: updated };
    });
  },

  deletePlace: (id: string) => {
    set((state) => {
      const updated = state.places.filter((p) => p.id !== id);
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem('bagalkote_custom_places_v5', JSON.stringify(updated));
        } catch (e) {
          console.error(e);
        }
      }
      return { places: updated };
    });
  },

  toggleBookmark: (id: string) => {
    set((state) => {
      const exists = state.bookmarks.includes(id);
      const updated = exists ? state.bookmarks.filter((b) => b !== id) : [...state.bookmarks, id];
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem('bagalkote_bookmarks', JSON.stringify(updated));
        } catch (e) {
          console.error(e);
        }
      }
      return { bookmarks: updated };
    });
  },

  resetToDefaults: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('bagalkote_custom_places_v3');
      localStorage.removeItem('bagalkote_custom_places');
    }
    set({ places: initialDestinations });
  },

  getPlaceBySlug: (slug: string) => {
    return get().places.find((p) => p.slug === slug || p.id === slug);
  },
}));

// Hydrate from localStorage on client with versioning
if (typeof window !== 'undefined') {
  try {
    const version = 'bagalkote_places_v5';
    const isUpgraded = localStorage.getItem('bagalkote_data_version') === version;
    if (!isUpgraded) {
      localStorage.removeItem('bagalkote_custom_places');
      localStorage.removeItem('bagalkote_custom_places_v3');
      localStorage.setItem('bagalkote_data_version', version);
      usePlacesStore.setState({ places: initialDestinations });
    } else {
      const saved = localStorage.getItem('bagalkote_custom_places_v5');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          usePlacesStore.setState({ places: parsed });
        }
      }
    }
    const savedBookmarks = localStorage.getItem('bagalkote_bookmarks');
    if (savedBookmarks) {
      usePlacesStore.setState({ bookmarks: JSON.parse(savedBookmarks) });
    }
  } catch (e) {
    console.error('Error hydrating places store', e);
  }
}
