import { create } from 'zustand';
import { UserReview, initialReviewsData } from '@/data/reviews';

interface ReviewsState {
  reviews: UserReview[];
  addReview: (review: Omit<UserReview, 'id' | 'helpfulCount' | 'verified' | 'date'>) => void;
  upvoteHelpful: (reviewId: string) => void;
}

const STORAGE_KEY = 'bagalkote_reviews_v1';

export const useReviewsStore = create<ReviewsState>((set) => ({
  reviews: initialReviewsData,

  addReview: (newReviewData) => {
    set((state) => {
      const newReview: UserReview = {
        ...newReviewData,
        id: `user-rev-${Date.now()}`,
        date: 'Just now',
        verified: true,
        helpfulCount: 1,
      };
      const updated = [newReview, ...state.reviews];
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        } catch (e) {
          console.error(e);
        }
      }
      return { reviews: updated };
    });
  },

  upvoteHelpful: (reviewId: string) => {
    set((state) => {
      const updated = state.reviews.map((r) =>
        r.id === reviewId ? { ...r, helpfulCount: r.helpfulCount + 1 } : r
      );
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        } catch (e) {
          console.error(e);
        }
      }
      return { reviews: updated };
    });
  },
}));

// Hydrate from localStorage on client
if (typeof window !== 'undefined') {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        useReviewsStore.setState({ reviews: parsed });
      }
    }
  } catch (e) {
    console.error('Failed to load user reviews from storage:', e);
  }
}
