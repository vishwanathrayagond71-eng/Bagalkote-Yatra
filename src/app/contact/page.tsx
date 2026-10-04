'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck,
  Building,
  HelpCircle
} from 'lucide-react';
import { useTranslation } from '@/store/languageStore';
import { useContactsStore } from '@/store/contactsStore';

export default function ContactPage() {
  const { t, language } = useTranslation();
  const { contacts } = useContactsStore();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Tourism Query',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({
        name: '',
        email: '',
        phone: '',
        subject: 'General Tourism Query',
        message: '',
      });
    }, 4000);
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-stone-950 text-stone-200">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-sandstone-950/80 border border-sandstone-600/40 text-amber-300 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Official Tourist Support</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
          {t.contact.title}
        </h1>
        <p className="mt-3 text-sm sm:text-base text-stone-400 max-w-2xl mx-auto">
          {t.contact.subtitle}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Official Contact Info & Helplines (5 Cols) - Inputted by Admin */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="flex items-center justify-between px-1">
              <h2 className="text-lg font-serif font-bold text-white flex items-center space-x-2">
                <Building className="w-5 h-5 text-amber-400" />
                <span>
                  {language === 'kn' ? 'ಅಧಿಕೃತ ಸಹಾಯವಾಣಿ & ಸಂಪರ್ಕಗಳು' : language === 'hi' ? 'आधिकारिक सहायता व संपर्क' : 'Official Administration Contacts'}
                </span>
              </h2>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Admin Verified
              </span>
            </div>

            {/* Dynamic Official Contacts List */}
            {contacts.map((contact, idx) => (
              <div 
                key={contact.id}
                className="glass-card p-5 sm:p-6 rounded-3xl border border-sandstone-500/30 hover:border-amber-400/50 transition-all space-y-3.5 shadow-xl relative overflow-hidden"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-sandstone-950 border border-sandstone-600/40 text-amber-300 mb-1.5">
                      {contact.badge[language] || contact.badge.en}
                    </span>
                    <h3 className="text-base font-serif font-bold text-white">
                      {contact.name}
                    </h3>
                    <p className="text-xs text-amber-200/90 leading-snug">
                      {contact.designation[language] || contact.designation.en}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-sandstone-900 border border-sandstone-600/40 flex items-center justify-center text-xs font-bold text-amber-300 shrink-0">
                    #{idx + 1}
                  </div>
                </div>

                <div className="space-y-2 text-xs text-stone-300 pt-2 border-t border-stone-800/80">
                  <div className="flex items-center space-x-2.5">
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div className="flex items-center space-x-2 flex-wrap">
                      <a 
                        href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`}
                        className="font-bold text-white hover:text-amber-300 underline underline-offset-2"
                      >
                        {contact.phone}
                      </a>
                      {contact.alternatePhone && (
                        <span className="text-stone-400">/ {contact.alternatePhone}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2.5">
                    <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                    <a 
                      href={`mailto:${contact.email}`}
                      className="text-stone-300 hover:text-white underline underline-offset-2"
                    >
                      {contact.email}
                    </a>
                  </div>

                  <div className="flex items-start space-x-2.5">
                    <MapPin className="w-4 h-4 text-sandstone-400 shrink-0 mt-0.5" />
                    <span className="text-stone-400 leading-relaxed text-[11px]">
                      {contact.officeLocation[language] || contact.officeLocation.en}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2.5">
                    <Clock className="w-4 h-4 text-sandstone-400 shrink-0" />
                    <span className="text-stone-400 text-[11px]">
                      {contact.timing[language] || contact.timing.en}
                    </span>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex items-center gap-2 pt-2">
                  <a
                    href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`}
                    className="flex-1 py-1.5 px-3 rounded-xl bg-sandstone-800/80 hover:bg-sandstone-700 text-white text-xs font-semibold flex items-center justify-center space-x-1.5 border border-sandstone-600/40 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-300" />
                    <span>{language === 'kn' ? 'ಕರೆ ಮಾಡಿ' : language === 'hi' ? 'कॉल करें' : 'Call Officer'}</span>
                  </a>
                  {contact.whatsapp && (
                    <a
                      href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-1.5 px-3 rounded-xl bg-emerald-950/70 hover:bg-emerald-900 text-emerald-300 text-xs font-semibold flex items-center justify-center space-x-1.5 border border-emerald-600/40 transition-colors"
                    >
                      <span>WhatsApp</span>
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* Emergency Helplines Pill */}
            <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-xs text-amber-200/90 flex items-center space-x-3">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
              <span>
                {language === 'kn'
                  ? 'ತುರ್ತು ಪೊಲೀಸ್ ನೆರವು: 112 | ಮಹಿಳಾ ಸಹಾಯವಾಣಿ: 1091 | ಪ್ರವಾಸಿ ಅಂಬ್ಯುಲೆನ್ಸ್: 108'
                  : language === 'hi'
                  ? 'आपातकालीन पुलिस: 112 | महिला हेल्पलाइन: 1091 | एम्बुलेंस: 108'
                  : 'Police Emergency: 112 | Women Helpline: 1091 | Tourist Ambulance: 108'}
              </span>
            </div>

          </div>

          {/* Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-10 rounded-3xl border border-sandstone-500/20 shadow-2xl">
              <h2 className="text-xl font-serif font-bold text-white mb-2">
                Send a Message or Travel Inquiry
              </h2>
              <p className="text-xs text-stone-400 mb-6">
                Fill in your details below and our tourism facilitation desk will respond within 24 hours.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-950/80 border border-emerald-500 text-center space-y-2 animate-in fade-in">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h3 className="text-base font-bold text-emerald-200">
                    {t.contact.successMsg}
                  </h3>
                  <p className="text-xs text-emerald-300/80">
                    We look forward to welcoming you to the heritage of Bagalkote!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1.5">
                        {t.contact.name} *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Ramesh Patil"
                        className="w-full bg-stone-900 border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1.5">
                        {t.contact.email} *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="e.g. ramesh@gmail.com"
                        className="w-full bg-stone-900 border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1.5">
                        {t.contact.phone}
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-stone-900 border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1.5">
                        {t.contact.subject}
                      </label>
                      <select
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full bg-stone-900 border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                      >
                        <option value="General Tourism Query">General Tourism Query</option>
                        <option value="Book ASI Certified Guide">Book ASI Certified Guide</option>
                        <option value="Temple Timings & Rituals">Temple Timings & Rituals</option>
                        <option value="Photography & Drone Permits">Photography & Drone Permits</option>
                        <option value="School / Group Tour Inquiry">School / Group Tour Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1.5">
                      {t.contact.message} *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your planned travel dates, number of visitors, or any special questions..."
                      className="w-full bg-stone-900 border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-sandstone-600 via-sandstone-500 to-amber-500 hover:from-sandstone-500 hover:to-amber-400 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-sandstone-900/60 flex items-center justify-center space-x-2 transition-all hover:scale-102"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.contact.submit}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
