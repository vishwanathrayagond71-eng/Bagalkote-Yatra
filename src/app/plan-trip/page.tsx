'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Plane, 
  Train, 
  Car, 
  Sun, 
  Compass, 
  Calendar,
  AlertCircle,
  ShieldCheck,
  ChevronDown,
  Printer,
  Share2,
  Copy,
  ExternalLink,
  Check,
  Wallet,
  Luggage,
  Users,
  Camera,
  Utensils
} from 'lucide-react';
import { useTranslation } from '@/store/languageStore';
import { itinerariesData } from '@/data/extras';

export default function PlanTripPage() {
  const { t, language } = useTranslation();
  const [selectedItinerary, setSelectedItinerary] = useState(itinerariesData[0].id);
  const [travelerStyle, setTravelerStyle] = useState<'heritage' | 'family' | 'spiritual' | 'budget'>('heritage');
  const [budgetTier, setBudgetTier] = useState<'budget' | 'comfort' | 'luxury'>('comfort');
  const [copied, setCopied] = useState(false);

  const activeItin = itinerariesData.find((i) => i.id === selectedItinerary) || itinerariesData[0];

  // Budget calculations based on tier
  const budgetRates = {
    budget: { perDay: 1400, stay: '₹600 - Homestay / KSTDC Lodge', food: '₹350 - Traditional Jolada Rotti Oota', travel: '₹350 - KSRTC & Local Auto', label: language === 'kn' ? 'ಬಜೆಟ್ ಪ್ರವಾಸ' : language === 'hi' ? 'बजट यात्रा' : 'Budget Explorer' },
    comfort: { perDay: 3600, stay: '₹1,800 - 3-Star AC Resort in Badami', food: '₹700 - Multi-Cuisine & Local Delicacies', travel: '₹900 - Private AC Sedan / Taxi', label: language === 'kn' ? 'ಆರಾಮದಾಯಕ ಕುಟುಂಬ ಪ್ರವಾಸ' : language === 'hi' ? 'आरामदायक पारिवारिक यात्रा' : 'Comfort & Family' },
    luxury: { perDay: 7800, stay: '₹4,500 - Heritage Villa / Luxury Resort', food: '₹1,500 - Royal Dining Experience', travel: '₹1,600 - Dedicated SUV & Guide', label: language === 'kn' ? 'ರಾಜಭೋಗ ಪರಂಪರೆ ಪ್ರವಾಸ' : language === 'hi' ? 'शाही हेरिटेज यात्रा' : 'Royal Heritage' },
  };

  const dayCount = activeItin.days.length;
  const estimatedTotal = budgetRates[budgetTier].perDay * dayCount;

  const handleCopyItinerary = () => {
    const textToCopy = `🏛️ Bagalkote Tourism Itinerary: ${activeItin.title.en} (${activeItin.duration})
Stops: ${activeItin.days.flatMap(d => d.places).join(' ➔ ')}
Plan your trip on: http://localhost:3000/plan-trip`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const shareText = encodeURIComponent(
    `Check out this curated ${activeItin.duration} itinerary for Bagalkote District (Badami, Pattadakal, Aihole): ${activeItin.title.en}`
  );
  const whatsappUrl = `https://api.whatsapp.com/send?text=${shareText}`;

  // Direct Google Maps multi-stop navigation route
  const googleMapsRouteUrl = 'https://www.google.com/maps/dir/Badami+Cave+Temples/Banashankari+Temple+Badami/Mahakuta+Temples/Pattadakal+UNESCO+Site/Aihole+Durga+Temple/Kudalasangama';

  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#faf6f0] dark:bg-stone-950 text-stone-900 dark:text-stone-200 transition-colors duration-300">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-sandstone-100 dark:bg-sandstone-950/80 border border-sandstone-400 dark:border-sandstone-600/40 text-sandstone-800 dark:text-amber-300 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
          <span>
            {language === 'kn' ? 'ಪರಿಪೂರ್ಣ ಪ್ರವಾಸ ಮಾರ್ಗದರ್ಶಿ' : language === 'hi' ? 'संपूर्ण यात्रा योजना' : 'Customized Itinerary & Planner'}
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-black text-stone-900 dark:text-white tracking-tight">
          {t.itinerary.title}
        </h1>
        <p className="mt-3 text-sm sm:text-base text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
          {t.itinerary.subtitle}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Step 1: Choose Circuit Duration Tabs */}
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-wider font-semibold text-amber-400 block">
            {language === 'kn' ? 'ಹಂತ 1: ನಿಮ್ಮ ಪ್ರವಾಸದ ಅವಧಿ ಆಯ್ಕೆಮಾಡಿ' : language === 'hi' ? 'चरण 1: यात्रा की अवधि चुनें' : 'Step 1: Select Circuit Duration'}
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {itinerariesData.map((itin) => (
              <button
                key={itin.id}
                onClick={() => setSelectedItinerary(itin.id)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all border ${
                  selectedItinerary === itin.id
                    ? 'bg-gradient-to-r from-sandstone-600 to-amber-500 text-white border-amber-400/50 shadow-xl shadow-sandstone-900/60 scale-105'
                    : 'glass-panel text-stone-300 border-stone-800 hover:text-white hover:bg-stone-900'
                }`}
              >
                {itin.title[language] || itin.title.en} ({itin.duration})
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons Toolbar (Print, Copy, WhatsApp, Maps) */}
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-3 p-4 rounded-2xl bg-stone-900/80 border border-stone-800">
          <div className="flex items-center space-x-2 text-xs text-stone-300">
            <Compass className="w-4 h-4 text-amber-400" />
            <span className="font-semibold text-white">
              {activeItin.title[language] || activeItin.title.en}
            </span>
            <span className="text-stone-500">• {dayCount} {language === 'kn' ? 'ದಿನಗಳು' : language === 'hi' ? 'दिन' : 'Days'}</span>
          </div>

          <div className="flex items-center flex-wrap gap-2">
            {/* Copy Button */}
            <button
              onClick={handleCopyItinerary}
              className="px-3.5 py-1.5 rounded-xl glass-panel hover:bg-stone-800 text-stone-300 text-xs font-semibold border border-stone-700 flex items-center space-x-1.5 transition-colors"
              title="Copy itinerary details"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-amber-400" />}
              <span>{copied ? (language === 'kn' ? 'ನಕಲಿಸಲಾಗಿದೆ!' : language === 'hi' ? 'कॉपी हो गया!' : 'Copied!') : (language === 'kn' ? 'ಕಾಪಿ ಮಾಡಿ' : language === 'hi' ? 'कॉपी करें' : 'Copy Plan')}</span>
            </button>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl glass-panel hover:bg-stone-800 text-stone-300 text-xs font-semibold border border-stone-700 flex items-center space-x-1.5 transition-colors"
              title="Print or Save PDF"
            >
              <Printer className="w-3.5 h-3.5 text-stone-400" />
              <span>{language === 'kn' ? 'ಪ್ರಿಂಟ್ / PDF' : language === 'hi' ? 'प्रिंट / पीडीएफ' : 'Print / PDF'}</span>
            </button>

            {/* WhatsApp Share */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-xl bg-emerald-950/70 hover:bg-emerald-900 border border-emerald-600/40 text-emerald-300 text-xs font-semibold flex items-center space-x-1.5 transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Google Maps Route */}
            <a
              href={googleMapsRouteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/50 text-amber-300 text-xs font-semibold flex items-center space-x-1.5 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{language === 'kn' ? 'ಗೂಗಲ್ ಮ್ಯಾಪ್ ಮಾರ್ಗ' : language === 'hi' ? 'गूगल मैप रूट' : 'Google Maps Route'}</span>
              <ExternalLink className="w-3 h-3 text-amber-400" />
            </a>
          </div>
        </div>

        {/* Active Itinerary Detailed View */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-sandstone-500/20 shadow-2xl">
          
          {/* Header Banner */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8 pb-8 border-b border-stone-800">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sandstone-950 border border-sandstone-600/40 text-amber-300">
                  {language === 'kn' ? 'ಅವಧಿ:' : language === 'hi' ? 'अवधि:' : 'Duration:'} {activeItin.duration}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-stone-900 border border-stone-700 text-stone-300">
                  {dayCount} {language === 'kn' ? 'ದಿನಗಳ ಸಮಗ್ರ ಯೋಜನೆ' : language === 'hi' ? 'दिनों का विस्तृत रोडमैप' : 'Days Comprehensive Plan'}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                {activeItin.title[language] || activeItin.title.en}
              </h2>
              <p className="text-sm text-stone-300 leading-relaxed">
                {activeItin.tagline[language] || activeItin.tagline.en}
              </p>

              {/* Recommended Meals for this circuit */}
              <div className="p-3.5 rounded-xl bg-stone-900/60 border border-stone-800 flex items-center space-x-3 text-xs text-stone-300">
                <Utensils className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="font-semibold text-emerald-300">
                    {language === 'kn' ? 'ಸ್ಥಳೀಯ ಆಹಾರ ಅನುಭವ:' : language === 'hi' ? 'स्थानीय खानपान अनुभव:' : 'Culinary Highlights:'}
                  </span>
                  <span className="ml-1 text-stone-400">
                    {language === 'kn' 
                      ? 'ಉತ್ತರ ಕರ್ನಾಟಕದ ಜೋಳದ ರೊಟ್ಟಿ, ಎಣ್ಣೆಗಾಯಿ ಬದನೆಕಾಯಿ ಪಲ್ಯ, ಶೇಂಗಾ ಚಟ್ನಿ & ಬಾದಾಮಿ ಗಿರ್ಮಿಟ್.'
                      : language === 'hi'
                      ? 'उत्तर कर्नाटक की जोलदा रोट्टी, मसालेदार बैंगन, शेंगा चटनी और बादामी गिरमिट।'
                      : 'Authentic Jolada Rotti, Yennegai (spicy stuffed brinjal), Shenga Chutney & Badami Girmit.'}
                  </span>
                </div>
              </div>
            </div>

            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-stone-700 shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeItin.image}
                alt={activeItin.title.en}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Days breakdown with timed milestones */}
          <div className="space-y-10">
            {activeItin.days.map((day) => (
              <div key={day.day} className="relative pl-8 sm:pl-10 border-l-2 border-sandstone-600 space-y-4">
                {/* Number node */}
                <div className="absolute -left-3.5 top-0 w-7 h-7 rounded-full bg-sandstone-600 text-white font-bold text-xs flex items-center justify-center shadow-lg">
                  {day.day}
                </div>

                {/* Day Header + Day Photo */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                  <div className={day.image ? 'md:col-span-8 space-y-2' : 'md:col-span-12 space-y-2'}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h3 className="text-lg font-serif font-bold text-amber-600 dark:text-amber-300">
                        Day {day.day}: {day.title[language] || day.title.en}
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {day.places.map((place, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-stone-200 dark:bg-stone-900 border border-sandstone-500/30 text-stone-800 dark:text-amber-200"
                          >
                            {place}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                      {day.description[language] || day.description.en}
                    </p>
                  </div>

                  {day.image && (
                    <div className="md:col-span-4 relative aspect-[16/10] rounded-xl overflow-hidden border border-sandstone-500/30 shadow-md group">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={day.image}
                        alt={day.title.en}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      <span className="absolute bottom-2 left-2 text-[10px] font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                        Day {day.day} Highlight
                      </span>
                    </div>
                  )}
                </div>

                {/* Day Timed Milestones */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-stone-100 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 text-xs space-y-1">
                    <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>07:30 AM – 11:30 AM</span>
                    </span>
                    <span className="font-semibold text-stone-900 dark:text-white block">Morning Discovery</span>
                    <span className="text-[11px] text-stone-600 dark:text-stone-400 block">Cool sandstone breezes & photography</span>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-100 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 text-xs space-y-1">
                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center space-x-1">
                      <Utensils className="w-3 h-3" />
                      <span>01:00 PM – 02:30 PM</span>
                    </span>
                    <span className="font-semibold text-stone-900 dark:text-white block">Lunch & Relaxation</span>
                    <span className="text-[11px] text-stone-600 dark:text-stone-400 block">Jolada Rotti thali near town center</span>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-100 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 text-xs space-y-1">
                    <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 flex items-center space-x-1">
                      <Sun className="w-3 h-3" />
                      <span>04:30 PM – 06:30 PM</span>
                    </span>
                    <span className="font-semibold text-stone-900 dark:text-white block">Sunset & Heritage Glow</span>
                    <span className="text-[11px] text-stone-600 dark:text-stone-400 block">Colonnaded temples & clifftop views</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Step 2: Interactive Budget Estimator for User */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-sandstone-500/20 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
                <Wallet className="w-4 h-4" />
                <span>
                  {language === 'kn' ? 'ಪ್ರವಾಸ ಬಜೆಟ್ ಕ್ಯಾಲ್ಕುಲೇಟರ್' : language === 'hi' ? 'यात्रा बजट अनुमान' : 'Travel Budget Estimator'}
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold text-white">
                {language === 'kn' 
                  ? `${dayCount} ದಿನಗಳ ಅಂದಾಜು ಪ್ರವಾಸ ವೆಚ್ಚ` 
                  : language === 'hi' 
                  ? `${dayCount} दिनों का अनुमानित यात्रा खर्च` 
                  : `Estimated Cost for ${dayCount} Days (${activeItin.title.en})`}
              </h3>
            </div>

            {/* Tier Selector Pills */}
            <div className="flex p-1 rounded-xl bg-stone-900 border border-stone-700 space-x-1 self-start sm:self-auto">
              {(['budget', 'comfort', 'luxury'] as const).map((tier) => (
                <button
                  key={tier}
                  onClick={() => setBudgetTier(tier)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                    budgetTier === tier
                      ? 'bg-amber-500 text-stone-950 font-bold shadow'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  {budgetRates[tier].label}
                </button>
              ))}
            </div>
          </div>

          {/* Budget Breakdown Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800 space-y-1">
              <span className="text-[11px] text-stone-400 block">
                {language === 'kn' ? 'ವಸತಿ ವೆಚ್ಚ / ರಾತ್ರಿ' : language === 'hi' ? 'आवास / रात' : 'Stay / Night'}
              </span>
              <span className="text-xs font-bold text-white block">{budgetRates[budgetTier].stay}</span>
            </div>

            <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800 space-y-1">
              <span className="text-[11px] text-stone-400 block">
                {language === 'kn' ? 'ಆಹಾರ & ತಿಂಡಿ / ದಿನ' : language === 'hi' ? 'खानपान / दिन' : 'Food & Dining / Day'}
              </span>
              <span className="text-xs font-bold text-white block">{budgetRates[budgetTier].food}</span>
            </div>

            <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800 space-y-1">
              <span className="text-[11px] text-stone-400 block">
                {language === 'kn' ? 'ಸಾರಿಗೆ / ದಿನ' : language === 'hi' ? 'परिवहन / दिन' : 'Transport / Day'}
              </span>
              <span className="text-xs font-bold text-white block">{budgetRates[budgetTier].travel}</span>
            </div>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-1">
              <span className="text-[11px] text-amber-300 font-semibold block">
                {language === 'kn' ? 'ಒಟ್ಟು ಅಂದಾಜು ಮೊತ್ತ' : language === 'hi' ? 'कुल अनुमानित खर्च' : 'Total Estimated (Per Person)'}
              </span>
              <span className="text-xl font-serif font-black text-amber-400 block">
                ₹{estimatedTotal.toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        </div>

        {/* Step 3: Packing & Essential Visitor Advisory */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl glass-card border border-stone-800 space-y-3">
            <div className="flex items-center space-x-2 text-amber-400">
              <Sun className="w-5 h-5" />
              <h3 className="text-base font-bold text-white">
                {language === 'kn' ? 'ಪ್ರವಾಸಕ್ಕೆ ಸೂಕ್ತ ಋತು' : language === 'hi' ? 'सर्वोत्तम मौसम' : 'Best Travel Season'}
              </h3>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              <strong>{language === 'kn' ? 'ಅಕ್ಟೋಬರ್‌ನಿಂದ ಮಾರ್ಚ್:' : language === 'hi' ? 'अक्टूबर से मार्च:' : 'October to March:'}</strong> {language === 'kn' ? 'ಉತ್ತಮ ತಂಪಾದ ಹವಾಮಾನ, 22°C–28°C ತಾಪಮಾನ. ಸೂರ್ಯೋದಯ ಮತ್ತು ಮುಸ್ಸಂಜೆಯ ಸಮಯದಲ್ಲಿ ಗುಹೆಗಳನ್ನು ವೀಕ್ಷಿಸುವುದು ಸೂಕ್ತ.' : language === 'hi' ? 'सुखद मौसम, 22°C–28°C तापमान। सुबह और शाम के समय गुफाओं का भ्रमण सबसे उत्तम है।' : 'Crisp dry weather (22°C–28°C). Ideal for walking around stone complexes without noon heat.'}
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-card border border-stone-800 space-y-3">
            <div className="flex items-center space-x-2 text-amber-400">
              <Train className="w-5 h-5" />
              <h3 className="text-base font-bold text-white">
                {language === 'kn' ? 'ತಲುಪುವುದು ಹೇಗೆ' : language === 'hi' ? 'पहुंचने का मार्ग' : 'Getting Connected'}
              </h3>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              <strong>Air:</strong> Hubballi Airport (HBX - 105 km) or Belagavi (150 km).<br />
              <strong>Train:</strong> Badami (BDM) & Bagalkote (BGK) stations have direct trains from Bengaluru, Mumbai, and Hyderabad.<br />
              <strong>Road:</strong> NH 50 and State Highway 20.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-card border border-stone-800 space-y-3">
            <div className="flex items-center space-x-2 text-amber-400">
              <Luggage className="w-5 h-5" />
              <h3 className="text-base font-bold text-white">
                {language === 'kn' ? 'ಸಿದ್ಧತೆ & ಪ್ಯಾಕಿಂಗ್ ಸಲಹೆಗಳು' : language === 'hi' ? 'पैकिंग और आवश्यक टिप्स' : 'Packing & Heritage Etiquette'}
              </h3>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              {language === 'kn' 
                ? 'ಬಂಡೆಗಳ ಮೆಟ್ಟಿಲುಗಳ ಮೇಲೆ ನಡೆಯಲು ಉತ್ತಮ ಗ್ರಿಪ್ ಇರುವ ಶೂ ಧರಿಸಿ. ಪವಿತ್ರ ದೇಗುಲಗಳಿಗೆ ಭೇಟಿ ನೀಡುವಾಗ ಸಾಂಪ್ರದಾಯಿಕ ಉಡುಪು ಕಡ್ಡಾಯ. ಕ್ಯಾಮೆರಾ ಅನುಮತಿ ಇದೆ, ಆದರೆ ಟ್ರೈಪಾಡ್‌ಗೆ ಎಎಸ್‌ಐ ಅನುಮತಿ ಬೇಕು.' 
                : language === 'hi'
                ? 'पत्थरों पर चलने के लिए आरामदायक ग्रिप वाले जूते पहनें। सक्रिय मंदिरों में पारंपरिक वस्त्र पहनें। पानी की बोतल, टोपी और सनस्क्रीन साथ रखें।'
                : 'Wear slip-on walking shoes with traction for rocky steps. Carry drinking water and sunscreen. Modest attire is required at active temples.'}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
