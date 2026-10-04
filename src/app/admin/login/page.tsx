'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Mail, 
  Lock, 
  ArrowRight, 
  AlertCircle, 
  Sparkles,
  KeyRound,
  CheckCircle2
} from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { useTranslation } from '@/store/languageStore';

export default function AdminLoginPage() {
  const router = useRouter();
  const { login, isAuthenticated, error, isLoading, clearError } = useAuthStore();
  const { t } = useTranslation();

  const [email, setEmail] = useState('xyz7@gmail.com');
  const [password, setPassword] = useState('xyzabc');

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/admin/dashboard');
    }
    clearError();
  }, [isAuthenticated, router, clearError]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) {
      router.push('/admin/dashboard');
    }
  };

  const handleDemoLogin = async () => {
    setEmail('xyz7@gmail.com');
    setPassword('xyzabc');
    const success = await login('xyz7@gmail.com', 'xyzabc');
    if (success) {
      router.push('/admin/dashboard');
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 flex items-center justify-center bg-stone-950 px-4 relative overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-sandstone-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-md w-full relative z-10">
        
        {/* Brand Card */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-sandstone-500/30 shadow-2xl space-y-6">
          
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sandstone-600 via-sandstone-500 to-amber-500 flex items-center justify-center mx-auto shadow-xl shadow-sandstone-950/60 mb-3">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-2xl font-serif font-bold text-white">
              {t.admin.loginTitle}
            </h1>
            <p className="text-xs text-stone-400">
              {t.admin.loginSubtitle}
            </p>
          </div>

          {/* Error Banner */}
          {error && (
            <div className="p-3.5 rounded-xl bg-red-950/80 border border-red-500/50 flex items-center space-x-2 text-xs text-red-200">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-stone-300 mb-1.5">
                {t.admin.emailLabel}
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@bagalkotetourism.gov.in or any @gmail.com"
                  className="w-full bg-stone-900 border border-stone-700 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-300 mb-1.5">
                {t.admin.passwordLabel}
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-stone-900 border border-stone-700 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-sandstone-600 via-sandstone-500 to-amber-500 hover:from-sandstone-500 hover:to-amber-400 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-sandstone-900/60 flex items-center justify-center space-x-2 transition-all hover:scale-102 disabled:opacity-50"
            >
              <span>{isLoading ? 'Verifying Credentials...' : t.admin.loginBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Demo Login Quick Access */}
          <div className="pt-4 border-t border-stone-800 text-center space-y-2">
            <span className="text-[11px] text-stone-400 block">
              Quick Review Access (Pre-configured Credentials):
            </span>
            <button
              type="button"
              onClick={handleDemoLogin}
              className="w-full py-2 px-3 rounded-xl glass-panel hover:bg-stone-800 border border-amber-500/40 text-amber-300 text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors"
            >
              <KeyRound className="w-3.5 h-3.5 text-amber-400" />
              <span>One-Click Curator Demo Login</span>
            </button>
            <span className="text-[10px] text-stone-500 block">
              Credentials: xyz7@gmail.com / xyzabc
            </span>
          </div>

          <div className="text-center pt-2">
            <Link
              href="/"
              className="text-xs text-stone-400 hover:text-white transition-colors"
            >
              ← Return to Tourist Portal
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}
