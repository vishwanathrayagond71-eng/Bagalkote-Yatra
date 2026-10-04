'use client';

import React, { useState } from 'react';
import { 
  Building, 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  Save, 
  CheckCircle2, 
  ShieldCheck, 
  RefreshCw,
  UserCheck,
  AlertCircle
} from 'lucide-react';
import { useTranslation } from '@/store/languageStore';
import { useContactsStore, OfficialContact } from '@/store/contactsStore';

export const OfficialContactsEditor: React.FC = () => {
  const { language } = useTranslation();
  const { contacts, updateContact, resetContacts } = useContactsStore();
  
  const [activeContactId, setActiveContactId] = useState(contacts[0]?.id || 'contact-1');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const activeContact = contacts.find((c) => c.id === activeContactId) || contacts[0];

  // Local draft state for editing
  const [formState, setFormState] = useState<OfficialContact>(activeContact);

  // When active contact changes, sync draft state
  const handleSelectContact = (c: OfficialContact) => {
    setActiveContactId(c.id);
    setFormState(c);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateContact(activeContactId, formState);
    setToastMessage(
      language === 'kn' 
        ? 'ಅಧಿಕೃತ ಸಂಪರ್ಕ ವಿವರಗಳನ್ನು ಯಶಸ್ವಿಯಾಗಿ ನವೀಕರಿಸಲಾಗಿದೆ!' 
        : language === 'hi' 
        ? 'आधिकारिक संपर्क विवरण सफलतापूर्वक अपडेट किए गए!' 
        : 'Official contact details successfully updated!'
    );
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleResetDefaults = () => {
    if (confirm(
      language === 'kn' 
        ? 'ಮೂಲ ಸಂಪರ್ಕ ವಿವರಗಳನ್ನು ಮರುಸ್ಥಾಪಿಸಲು ನೀವು ಖಚಿತವಾಗಿ ಬಯಸುವಿರಾ?' 
        : language === 'hi' 
        ? 'क्या आप डिफ़ॉल्ट संपर्क विवरण पुनर्स्थापित करना चाहते हैं?' 
        : 'Are you sure you want to reset to default official contacts?'
    )) {
      resetContacts();
      const first = contacts[0];
      if (first) {
        setFormState(first);
        setActiveContactId(first.id);
      }
      setToastMessage(
        language === 'kn' ? 'ಮೂಲ ವಿವರಗಳನ್ನು ಮರುಸ್ಥಾಪಿಸಲಾಗಿದೆ!' : language === 'hi' ? 'डिफ़ॉल्ट संपर्क बहाल किए गए!' : 'Reset to default contacts!'
      );
      setTimeout(() => setToastMessage(null), 3000);
    }
  };

  return (
    <div className="space-y-8">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/50 text-emerald-200 flex items-center justify-between shadow-2xl animate-fade-in">
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="font-semibold text-sm">{toastMessage}</span>
          </div>
          <button 
            onClick={() => setToastMessage(null)}
            className="text-xs text-stone-400 hover:text-white underline"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Overview Banner */}
      <div className="glass-panel p-6 rounded-3xl border border-sandstone-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-sandstone-950 border border-sandstone-600/40 text-amber-300 text-xs font-semibold mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Admin-Only Contact Manager</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
            {language === 'kn' ? 'ಅಧಿಕೃತ ಸಹಾಯವಾಣಿ & ಸಂಪರ್ಕ ನಿರ್ವಹಣೆ' : language === 'hi' ? 'आधिकारिक संपर्क व हेल्पलाइन प्रबंधन' : 'Official Helplines & Contacts'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-xl">
            {language === 'kn'
              ? 'ಪ್ರವಾಸಿಗರಿಗೆ ಸಾರ್ವಜನಿಕ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ಪ್ರದರ್ಶಿಸಲಾಗುವ 3 ಅಧಿಕೃತ ಅಧಿಕಾರಿಗಳು ಮತ್ತು ತುರ್ತು ಕೇಂದ್ರದ ವಿವರಗಳನ್ನು ಇಲ್ಲಿ ನವೀಕರಿಸಿ.'
              : language === 'hi'
              ? 'पर्यटकों के लिए प्रदर्शित होने वाले 3 आधिकारिक अधिकारियों व आपातकालीन डेस्क की जानकारी यहां अपडेट करें।'
              : 'Configure the 3 official authorities, phone numbers, and emergency helplines displayed publicly across Bagalkote Yatra.'}
          </p>
        </div>

        <button
          onClick={handleResetDefaults}
          className="px-4 py-2 rounded-xl glass-panel hover:bg-stone-800 border border-stone-700 text-xs font-semibold text-stone-300 hover:text-white flex items-center space-x-2 transition-all self-start sm:self-auto"
        >
          <RefreshCw className="w-3.5 h-3.5 text-sandstone-400" />
          <span>{language === 'kn' ? 'ಮೂಲ ಸ್ಥಿತಿಗೆ ಮರುಹೊಂದಿಸಿ' : language === 'hi' ? 'डिफ़ॉल्ट पुनर्स्थापित करें' : 'Reset Defaults'}</span>
        </button>
      </div>

      {/* 3 Contact Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {contacts.map((c, index) => {
          const isSelected = c.id === activeContactId;
          return (
            <button
              key={c.id}
              onClick={() => handleSelectContact(c)}
              className={`p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                isSelected
                  ? 'bg-gradient-to-br from-sandstone-900/90 to-stone-900 border-amber-400/80 shadow-xl shadow-sandstone-950/80 scale-[1.02]'
                  : 'glass-card border-stone-800 hover:border-sandstone-500/40 opacity-80 hover:opacity-100'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Contact #{index + 1}
                  </span>
                  {isSelected && <CheckCircle2 className="w-4 h-4 text-amber-400" />}
                </div>
                <h3 className="font-bold text-sm text-white">{c.name}</h3>
                <p className="text-xs text-amber-200/80 mt-0.5 line-clamp-1">
                  {c.designation[language] || c.designation.en}
                </p>
              </div>

              <div className="mt-3 pt-3 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-stone-400">
                <span>{c.phone}</span>
                <span className="text-emerald-400 font-semibold">{c.whatsapp ? 'WhatsApp' : ''}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Edit Form for Selected Contact */}
      <form onSubmit={handleSave} className="glass-card rounded-3xl p-6 sm:p-8 border border-sandstone-500/30 shadow-2xl space-y-6">
        <div className="flex items-center justify-between border-b border-stone-800 pb-4">
          <div className="flex items-center space-x-2">
            <UserCheck className="w-5 h-5 text-amber-400" />
            <h3 className="text-base sm:text-lg font-serif font-bold text-white">
              Editing: <span className="text-amber-300">{formState.name}</span>
            </h3>
          </div>
          <span className="text-xs text-stone-400">
            ID: <code className="text-stone-300">{formState.id}</code>
          </span>
        </div>

        {/* Basic Contact Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-stone-300 mb-1">
              Officer / Department Name *
            </label>
            <input
              type="text"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs sm:text-sm focus:border-amber-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-300 mb-1">
              Primary Phone / Helpline Number *
            </label>
            <input
              type="text"
              value={formState.phone}
              onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs sm:text-sm focus:border-amber-400 focus:outline-none"
              placeholder="+91 8354 235123 or Toll-Free"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-300 mb-1">
              Alternate Mobile / Emergency Number
            </label>
            <input
              type="text"
              value={formState.alternatePhone || ''}
              onChange={(e) => setFormState({ ...formState, alternatePhone: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs sm:text-sm focus:border-amber-400 focus:outline-none"
              placeholder="+91 94808 35120"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-300 mb-1">
              Official Email Address *
            </label>
            <input
              type="email"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs sm:text-sm focus:border-amber-400 focus:outline-none"
              required
            />
          </div>
        </div>

        {/* Multilingual Designation */}
        <div className="space-y-3 pt-2 border-t border-stone-800">
          <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider">
            Official Designation (Multilingual)
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-[11px] font-semibold text-stone-400 mb-1">English</label>
              <input
                type="text"
                value={formState.designation.en}
                onChange={(e) => setFormState({
                  ...formState,
                  designation: { ...formState.designation, en: e.target.value }
                })}
                className="w-full px-3 py-2 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs focus:border-amber-400 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-stone-400 mb-1">ಕನ್ನಡ (Kannada)</label>
              <input
                type="text"
                value={formState.designation.kn}
                onChange={(e) => setFormState({
                  ...formState,
                  designation: { ...formState.designation, kn: e.target.value }
                })}
                className="w-full px-3 py-2 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs focus:border-amber-400 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-stone-400 mb-1">हिन्दी (Hindi)</label>
              <input
                type="text"
                value={formState.designation.hi}
                onChange={(e) => setFormState({
                  ...formState,
                  designation: { ...formState.designation, hi: e.target.value }
                })}
                className="w-full px-3 py-2 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs focus:border-amber-400 focus:outline-none"
                required
              />
            </div>
          </div>
        </div>

        {/* Office Location & Available Hours */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-stone-800">
          <div>
            <label className="block text-xs font-semibold text-stone-300 mb-1">
              Office Address (English)
            </label>
            <textarea
              rows={2}
              value={formState.officeLocation.en}
              onChange={(e) => setFormState({
                ...formState,
                officeLocation: { ...formState.officeLocation, en: e.target.value }
              })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs focus:border-amber-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-300 mb-1">
              Office Address (ಕನ್ನಡ)
            </label>
            <textarea
              rows={2}
              value={formState.officeLocation.kn}
              onChange={(e) => setFormState({
                ...formState,
                officeLocation: { ...formState.officeLocation, kn: e.target.value }
              })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs focus:border-amber-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-300 mb-1">
              Available Timings / Office Hours (English)
            </label>
            <input
              type="text"
              value={formState.timing.en}
              onChange={(e) => setFormState({
                ...formState,
                timing: { ...formState.timing, en: e.target.value }
              })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs focus:border-amber-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-300 mb-1">
              Available Timings / Office Hours (ಕನ್ನಡ)
            </label>
            <input
              type="text"
              value={formState.timing.kn}
              onChange={(e) => setFormState({
                ...formState,
                timing: { ...formState.timing, kn: e.target.value }
              })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs focus:border-amber-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Submit Actions */}
        <div className="pt-4 flex items-center justify-between border-t border-stone-800">
          <span className="text-xs text-stone-400 flex items-center space-x-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Changes reflect immediately on the public Contact page and Footer.</span>
          </span>

          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-sandstone-600 hover:from-amber-400 hover:to-sandstone-500 text-stone-950 font-bold text-xs sm:text-sm flex items-center space-x-2 shadow-xl shadow-amber-500/20 transition-all hover:scale-105"
          >
            <Save className="w-4 h-4" />
            <span>{language === 'kn' ? 'ಸಂಪರ್ಕ ಉಳಿಸಿ' : language === 'hi' ? 'संपर्क सहेजें' : 'Save Contact'}</span>
          </button>
        </div>
      </form>
    </div>
  );
};
