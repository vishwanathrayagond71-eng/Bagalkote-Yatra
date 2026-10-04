import { create } from 'zustand';

interface AdminUser {
  email: string;
  name: string;
  role: string;
  avatar?: string;
  lastLogin: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: AdminUser | null;
  error: string | null;
  isLoading: boolean;
  login: (email: string, pass: string) => Promise<boolean>;
  logout: () => void;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  error: null,
  isLoading: false,

  login: async (email: string, pass: string) => {
    set({ isLoading: true, error: null });

    // Simulate network delay
    await new Promise((r) => setTimeout(r, 600));

    const cleanEmail = email.trim().toLowerCase();
    
    // Explicit admin credentials: xyz7@gmail.com / xyzabc
    const isPrimaryAdmin = cleanEmail === 'xyz7@gmail.com' && pass === 'xyzabc';
    const isSpecialAdmin = isPrimaryAdmin || (cleanEmail === 'admin@bagalkotetourism.gov.in' && pass === 'Admin@123');
    const isGmailUser = (cleanEmail.endsWith('@gmail.com') || (cleanEmail.includes('@') && cleanEmail.includes('.'))) && pass.length >= 6;

    if (isPrimaryAdmin || isSpecialAdmin || isGmailUser) {
      const user: AdminUser = {
        email: cleanEmail,
        name: isPrimaryAdmin ? 'Administrator (xyz7)' : isSpecialAdmin ? 'District Curator Admin' : cleanEmail.split('@')[0].toUpperCase(),
        role: 'Senior Tourism Curator',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        lastLogin: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem('bagalkote_admin_session', JSON.stringify(user));
        } catch (e) {
          console.error(e);
        }
      }

      set({ isAuthenticated: true, user, isLoading: false, error: null });
      return true;
    } else {
      set({
        isLoading: false,
        error: 'Invalid credentials. Password must be at least 6 characters.',
      });
      return false;
    }
  },

  logout: () => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem('bagalkote_admin_session');
      } catch (e) {
        console.error(e);
      }
    }
    set({ isAuthenticated: false, user: null, error: null });
  },

  clearError: () => set({ error: null }),
}));

// Hydrate on client
if (typeof window !== 'undefined') {
  try {
    const saved = localStorage.getItem('bagalkote_admin_session');
    if (saved) {
      const user = JSON.parse(saved);
      if (user && user.email) {
        useAuthStore.setState({ isAuthenticated: true, user });
      }
    }
  } catch (e) {
    console.error('Error hydrating auth store', e);
  }
}
