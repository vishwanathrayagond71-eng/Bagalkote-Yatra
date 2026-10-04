'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Check, 
  Upload, 
  Image as ImageIcon, 
  MapPin, 
  Sparkles, 
  Globe, 
  FileText, 
  Clock, 
  Ticket, 
  Share2, 
  Trash2, 
  Plus, 
  ArrowLeft,
  ArrowRight,
  Eye,
  Save,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { TouristPlace, PlaceCategory, Language } from '@/types';
import { usePlacesStore } from '@/store/placesStore';
import { useTranslation } from '@/store/languageStore';
import { triggerConfetti } from '@/lib/utils';

interface AddPlaceFormProps {
  initialPlace?: TouristPlace;
  isEditMode?: boolean;
}

export const AddPlaceForm: React.FC<AddPlaceFormProps> = ({ initialPlace, isEditMode = false }) => {
  const router = useRouter();
  const { addPlace, updatePlace } = usePlacesStore();
  const { t, language } = useTranslation();

  const [activeStep, setActiveStep] = useState<number>(1);
  const [contentLang, setContentLang] = useState<Language>('en');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  // Form State
  const [formData, setFormData] = useState<TouristPlace>(() => {
    if (initialPlace) return initialPlace;
    return {
      id: '',
      slug: '',
      title: { en: '', hi: '', kn: '' },
      tagline: { en: '', hi: '', kn: '' },
      category: 'historic',
      featuredImage: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Vishnu_image_inside_cave_number_3_in_Badami.jpg',
      gallery: [
        'https://upload.wikimedia.org/wikipedia/commons/7/7b/Vishnu_image_inside_cave_number_3_in_Badami.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Pattadakal_000.JPG/1280px-Pattadakal_000.JPG',
      ],
      videoUrl: '',
      shortDescription: { en: '', hi: '', kn: '' },
      description: { en: '', hi: '', kn: '' },
      history: { en: '', hi: '', kn: '' },
      architecture: { en: '', hi: '', kn: '' },
      bestTimeToVisit: {
        en: 'October to March (Pleasant winter climate)',
        hi: 'अक्टूबर से मार्च (सुखद शीतकालीन मौसम)',
        kn: 'ಅಕ್ಟೋಬರ್‌ನಿಂದ ಮಾರ್ಚ್ (ಉತ್ತಮ ಚಳಿಗಾಲದ ಹವಾಮಾನ)',
      },
      entryFee: {
        indian: '₹25 per person',
        foreigner: '₹300 per person',
        camera: '₹25 Still Camera',
      },
      timings: {
        en: '6:00 AM – 6:00 PM (Daily)',
        hi: 'सुबह 6:00 से शाम 6:00 बजे तक (प्रतिदिन)',
        kn: 'ಬೆಳಗ್ಗೆ 6:00 ರಿಂದ ಸಂಜೆ 6:00 ರವರೆಗೆ (ದಿನವೂ)',
      },
      howToReach: {
        byAir: 'Nearest airport is Hubballi (HBX) - 105 km away.',
        byTrain: 'Badami / Bagalkote Railway Station is well connected.',
        byRoad: 'Accessible via KSRTC bus services and NH 50 highway.',
      },
      nearbyAttractions: ['Badami Caves', 'Agastya Lake', 'Banashankari Temple'],
      coordinates: { lat: 15.9189, lng: 75.6766 },
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.8037326884637!2d75.6740625!3d15.9189444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb78013e8b0b8cb%3A0x67db9bcae285a81e!2sBadami%20Cave%20Temples!5e0!3m2!1sen!2sin!4v1700000000000',
      highlights: ['Rock-cut architecture', 'Ancient inscriptions', 'Scenic viewpoints'],
      status: 'published',
      featured: false,
      rating: 4.8,
      reviewsCount: 150,
      seo: {
        metaTitle: '',
        metaDescription: '',
        keywords: ['Bagalkote tourism', 'Karnataka heritage'],
      },
    };
  });

  const [newGalleryUrl, setNewGalleryUrl] = useState('');
  const [newNearby, setNewNearby] = useState('');
  const [newHighlight, setNewHighlight] = useState('');

  // Auto-generate slug from English title if empty
  const handleTitleEnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFormData((prev) => {
      const generatedSlug = prev.slug && isEditMode
        ? prev.slug
        : val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      return {
        ...prev,
        title: { ...prev.title, en: val },
        slug: generatedSlug,
        seo: {
          ...prev.seo,
          metaTitle: prev.seo.metaTitle || `${val} | Bagalkote Tourism Official Guide`,
        },
      };
    });
  };

  // Image Upload Simulation with progress
  const handleSimulatedFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadProgress(10);
      const interval = setInterval(() => {
        setUploadProgress((p) => {
          if (p >= 100) {
            clearInterval(interval);
            const objectUrl = URL.createObjectURL(file);
            setFormData((prev) => ({ ...prev, featuredImage: objectUrl }));
            return 100;
          }
          return p + 25;
        });
      }, 150);
    }
  };

  const handleAddGalleryImage = () => {
    if (newGalleryUrl.trim()) {
      setFormData((prev) => ({
        ...prev,
        gallery: [...prev.gallery, newGalleryUrl.trim()],
      }));
      setNewGalleryUrl('');
    }
  };

  const handleRemoveGalleryImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      gallery: prev.gallery.filter((_, i) => i !== index),
    }));
  };

  const handleSave = (targetStatus: 'published' | 'draft') => {
    if (!formData.title.en.trim()) {
      alert(language === 'kn' ? 'ದಯವಿಟ್ಟು ಕನಿಷ್ಠ ಇಂಗ್ಲಿಷ್ ಹೆಸರನ್ನು ನಮೂದಿಸಿ.' : language === 'hi' ? 'कृपया कम से कम अंग्रेजी में स्थान का नाम दर्ज करें।' : 'Please provide at least the English place name.');
      setActiveStep(1);
      return;
    }

    setIsSubmitting(true);
    
    // Robust multilingual normalization so no language is left empty
    const enTitle = formData.title.en.trim();
    const finalPlace: TouristPlace = {
      ...formData,
      id: formData.id || formData.slug || `place-${Date.now()}`,
      title: {
        en: enTitle,
        kn: formData.title.kn.trim() || enTitle,
        hi: formData.title.hi.trim() || enTitle,
      },
      tagline: {
        en: formData.tagline.en.trim() || enTitle,
        kn: formData.tagline.kn.trim() || formData.tagline.en.trim() || enTitle,
        hi: formData.tagline.hi.trim() || formData.tagline.en.trim() || enTitle,
      },
      shortDescription: {
        en: formData.shortDescription.en.trim() || `${enTitle} is a prominent tourist destination in Bagalkote district.`,
        kn: formData.shortDescription.kn.trim() || `${formData.title.kn || enTitle} ಬಾಗಲಕೋಟೆ ಜಿಲ್ಲೆಯ ಪ್ರಮುಖ ಆಕರ್ಷಣೆಯಾಗಿದೆ.`,
        hi: formData.shortDescription.hi.trim() || `${formData.title.hi || enTitle} बागलकोट जिले का एक प्रमुख ऐतिहासिक स्थल है।`,
      },
      description: {
        en: formData.description.en.trim() || formData.shortDescription.en,
        kn: formData.description.kn.trim() || formData.shortDescription.kn,
        hi: formData.description.hi.trim() || formData.shortDescription.hi,
      },
      history: {
        en: formData.history.en.trim() || 'Rich history rooted in the Early Chalukya dynasty of Vatapi.',
        kn: formData.history.kn.trim() || 'ವಾತಾಪಿಯ ಬಾದಾಮಿ ಚಾಲುಕ್ಯರ ಕಾಲದ ಸಮೃದ್ಧ ಇತಿಹಾಸ ಮತ್ತು ಸಂಸ್ಕೃತಿ.',
        hi: formData.history.hi.trim() || 'वातापी के आरंभिक चालुक्य वंश की समृद्ध ऐतिहासिक और सांस्कृतिक विरासत।',
      },
      bestTimeToVisit: {
        en: formData.bestTimeToVisit.en.trim() || 'October to March (Pleasant winter climate)',
        kn: formData.bestTimeToVisit.kn?.trim() || 'ಅಕ್ಟೋಬರ್‌ನಿಂದ ಮಾರ್ಚ್ (ಉತ್ತಮ ಚಳಿಗಾಲ)',
        hi: formData.bestTimeToVisit.hi?.trim() || 'अक्टूबर से मार्च (सुखद शीतकाल)',
      },
      timings: {
        en: formData.timings.en.trim() || '6:00 AM – 6:00 PM (Daily)',
        kn: formData.timings.kn?.trim() || 'ಬೆಳಗ್ಗೆ 6:00 ರಿಂದ ಸಂಜೆ 6:00 ರವರೆಗೆ (ದಿನವೂ)',
        hi: formData.timings.hi?.trim() || 'सुबह 6:00 से शाम 6:00 बजे तक (प्रतिदिन)',
      },
      status: targetStatus,
      updatedAt: new Date().toISOString(),
      createdAt: formData.createdAt || new Date().toISOString(),
    };

    setTimeout(() => {
      if (isEditMode && initialPlace) {
        updatePlace(initialPlace.id, finalPlace);
        setShowToast(language === 'kn' ? 'ಪ್ರವಾಸಿ ತಾಣವನ್ನು ಯಶಸ್ವಿಯಾಗಿ ನವೀಕರಿಸಲಾಗಿದೆ!' : language === 'hi' ? 'पर्यटन स्थल सफलतापूर्वक अद्यतन किया गया!' : 'Tourist destination updated successfully!');
      } else {
        addPlace(finalPlace);
        setShowToast(language === 'kn' ? 'ಹೊಸ ತಾಣವನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಸೇರಿಸಲಾಗಿದೆ!' : language === 'hi' ? 'नया गंतव्य सफलतापूर्वक जोड़ा गया!' : 'New destination added successfully!');
        if (targetStatus === 'published') {
          triggerConfetti();
        }
      }
      setIsSubmitting(false);

      setTimeout(() => {
        router.push('/admin/dashboard');
      }, 1500);
    }, 600);
  };

  const steps = [
    { num: 1, title: language === 'kn' ? 'ಮೂಲ ಮಾಹಿತಿ' : language === 'hi' ? 'मूल जानकारी' : 'Basic Info', icon: Globe },
    { num: 2, title: language === 'kn' ? 'ವಿವರಣೆಗಳು (3 ಭಾಷೆ)' : language === 'hi' ? 'विवरण (3 भाषाएँ)' : 'Multilingual Descriptions', icon: FileText },
    { num: 3, title: language === 'kn' ? 'ಪ್ರವಾಸ ವಿವರ & ನಕ್ಷೆ' : language === 'hi' ? 'यात्रा विवरण व नक्शा' : 'Travel Details & Map', icon: MapPin },
    { num: 4, title: language === 'kn' ? 'ಚಿತ್ರಗಳು & ಗ್ಯಾಲರಿ' : language === 'hi' ? 'चित्र व गैलरी' : 'Media & Gallery', icon: ImageIcon },
    { num: 5, title: language === 'kn' ? 'ಎಸ್‌ಇಒ & ಪರಾಮರ್ಶೆ' : language === 'hi' ? 'एसईओ व समीक्षा' : 'SEO & Review', icon: Sparkles },
  ];

  return (
    <div className="max-w-5xl mx-auto py-6 px-4 sm:px-6">
      
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-20 right-6 z-50 flex items-center space-x-2 px-5 py-3 rounded-xl bg-emerald-950 border border-emerald-500 text-emerald-200 shadow-2xl animate-in slide-in-from-top-4">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span className="font-semibold text-sm">{showToast}</span>
        </div>
      )}

      {/* Header bar */}
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-stone-800">
        <button
          onClick={() => router.push('/admin/dashboard')}
          className="flex items-center space-x-2 text-xs sm:text-sm text-stone-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === 'kn' ? 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಹಿಂತಿರುಗಿ' : language === 'hi' ? 'डैशबोर्ड पर वापस' : 'Back to Dashboard'}</span>
        </button>

        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={() => handleSave('draft')}
            disabled={isSubmitting}
            className="px-4 py-2 rounded-xl glass-panel hover:bg-stone-800 text-stone-300 text-xs sm:text-sm font-semibold border border-stone-700 flex items-center space-x-1.5 transition-all"
          >
            <Save className="w-4 h-4 text-stone-400" />
            <span>{language === 'kn' ? 'ಕರಡಾಗಿ ಉಳಿಸಿ' : language === 'hi' ? 'ड्राफ्ट सहेजें' : 'Save as Draft'}</span>
          </button>

          <button
            type="button"
            onClick={() => handleSave('published')}
            disabled={isSubmitting}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-sandstone-600 to-amber-500 hover:from-sandstone-500 hover:to-amber-400 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-sandstone-900/60 flex items-center space-x-1.5 transition-all"
          >
            <Check className="w-4 h-4" />
            <span>{isEditMode 
              ? (language === 'kn' ? 'ನವೀಕರಿಸಿ ಪ್ರಕಟಿಸಿ' : language === 'hi' ? 'अद्यतन व प्रकाशित करें' : 'Update & Publish')
              : (language === 'kn' ? 'ತಾಣ ಪ್ರಕಟಿಸಿ' : language === 'hi' ? 'गंतव्य प्रकाशित करें' : 'Publish Destination')}</span>
          </button>
        </div>
      </div>

      {/* Step Progress Wizard Bar */}
      <div className="mb-8">
        <div className="grid grid-cols-5 gap-2 sm:gap-4">
          {steps.map((s) => {
            const Icon = s.icon;
            const isCompleted = activeStep > s.num;
            const isCurrent = activeStep === s.num;
            return (
              <button
                key={s.num}
                type="button"
                onClick={() => setActiveStep(s.num)}
                className={`flex flex-col items-center text-center p-2.5 rounded-xl border transition-all ${
                  isCurrent
                    ? 'bg-sandstone-950/80 border-amber-500 text-amber-300 shadow-lg'
                    : isCompleted
                    ? 'bg-stone-900/40 border-stone-700 text-stone-300'
                    : 'bg-stone-950 border-stone-800/60 text-stone-500'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mb-1 ${
                    isCurrent
                      ? 'bg-amber-500 text-stone-950'
                      : isCompleted
                      ? 'bg-stone-800 text-amber-400'
                      : 'bg-stone-900 text-stone-600'
                  }`}
                >
                  {isCompleted ? <Check className="w-4 h-4" /> : s.num}
                </div>
                <span className="hidden sm:inline text-xs font-medium truncate max-w-[120px]">
                  {s.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Form Body */}
      <div className="glass-card rounded-2xl p-6 sm:p-8 border border-sandstone-500/20 shadow-2xl">
        
        {/* STEP 1: BASIC INFORMATION */}
        {activeStep === 1 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div>
              <h3 className="text-lg font-serif font-bold text-white mb-1">
                1. Basic Information
              </h3>
              <p className="text-xs text-stone-400">
                Provide place names in all 3 languages, unique slug, category, and main banner image.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1.5">
                  Place Name (English) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title.en}
                  onChange={handleTitleEnChange}
                  placeholder="e.g. Badami Cave Temples"
                  className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1.5">
                  Place Name (Kannada / ಕನ್ನಡ) *
                </label>
                <input
                  type="text"
                  value={formData.title.kn}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, title: { ...prev.title, kn: e.target.value } }))
                  }
                  placeholder="ಉದಾ. ಬಾದಾಮಿ ಗುಹಾಂತರ ದೇವಾಲಯಗಳು"
                  className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1.5">
                  Place Name (Hindi / हिन्दी) *
                </label>
                <input
                  type="text"
                  value={formData.title.hi}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, title: { ...prev.title, hi: e.target.value } }))
                  }
                  placeholder="उदा. बादामी गुफा मंदिर"
                  className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1.5">
                  Slug / URL Identifier
                </label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData((prev) => ({ ...prev, slug: e.target.value }))}
                  placeholder="badami-cave-temples"
                  className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                />
                <span className="text-[11px] text-stone-500 mt-1 block">
                  URL Preview: /destinations/{formData.slug || 'slug'}
                </span>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1.5">
                  Destination Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, category: e.target.value as PlaceCategory }))
                  }
                  className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="historic">Historic & Heritage</option>
                  <option value="religious">Sacred & Religious</option>
                  <option value="nature">Nature & Lakes</option>
                  <option value="wildlife">Wildlife Sanctuary</option>
                  <option value="fort">Fort & Lookouts</option>
                  <option value="dam">Dams & Reservoirs</option>
                  <option value="museum">Museums & Antiquities</option>
                  <option value="cultural">Art, Silk & Culture</option>
                </select>
              </div>
            </div>

            {/* Featured Image & Live Preview */}
            <div className="pt-2">
              <label className="block text-xs font-medium text-stone-300 mb-1.5">
                Featured Banner Image
              </label>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 space-y-3">
                  <input
                    type="url"
                    value={formData.featuredImage}
                    onChange={(e) => setFormData((prev) => ({ ...prev, featuredImage: e.target.value }))}
                    placeholder="Enter image URL (e.g. Unsplash, Google, Wikimedia)"
                    className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  />

                  {/* File Upload drag area */}
                  <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-stone-700 hover:border-sandstone-500 rounded-xl cursor-pointer bg-stone-900/40 hover:bg-stone-900/80 transition-all">
                    <Upload className="w-5 h-5 text-amber-400 mb-1" />
                    <span className="text-xs text-stone-300 font-medium">
                      Or click to upload from local device
                    </span>
                    <span className="text-[10px] text-stone-500 mt-0.5">JPG, PNG, WEBP up to 10MB</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleSimulatedFileUpload}
                      className="hidden"
                    />
                  </label>

                  {uploadProgress > 0 && uploadProgress < 100 && (
                    <div className="w-full bg-stone-800 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-amber-400 h-full transition-all duration-300"
                        style={{ width: `${uploadProgress}%` }}
                      />
                    </div>
                  )}
                </div>

                {/* Live Preview Box */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-stone-900 border border-stone-700 flex items-center justify-center">
                  {formData.featuredImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={formData.featuredImage}
                      alt="Banner Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center p-3 text-stone-500 text-xs">
                      <ImageIcon className="w-6 h-6 mx-auto mb-1 opacity-50" />
                      Image preview will appear here
                    </div>
                  )}
                  <span className="absolute bottom-1 right-2 text-[10px] bg-black/70 px-1.5 py-0.5 rounded text-stone-300">
                    Live Preview
                  </span>
                </div>
              </div>
            </div>

            {/* Publication Status & Featured Flag */}
            <div className="flex items-center space-x-6 pt-2">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.status === 'published'}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      status: e.target.value ? 'published' : 'draft',
                    }))
                  }
                  className="rounded border-stone-700 text-amber-500 focus:ring-amber-500 h-4 w-4 bg-stone-900"
                />
                <span className="text-xs text-stone-300 font-medium">Publish immediately</span>
              </label>

              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.featured || false}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, featured: e.target.checked }))
                  }
                  className="rounded border-stone-700 text-amber-500 focus:ring-amber-500 h-4 w-4 bg-stone-900"
                />
                <span className="text-xs text-stone-300 font-medium">Featured on Home Page</span>
              </label>
            </div>
          </div>
        )}

        {/* STEP 2: MULTILINGUAL CONTENT (EN, HI, KN) */}
        {activeStep === 2 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-serif font-bold text-white mb-1">
                  2. Multilingual Descriptions
                </h3>
                <p className="text-xs text-stone-400">
                  Switch tabs to compose descriptions in English, Kannada, and Hindi.
                </p>
              </div>

              {/* Language Selector Subtabs */}
              <div className="flex p-1 rounded-xl bg-stone-900 border border-stone-700 space-x-1">
                {(['en', 'kn', 'hi'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setContentLang(lang)}
                    className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                      contentLang === lang
                        ? 'bg-sandstone-600 text-white shadow'
                        : 'text-stone-400 hover:text-white'
                    }`}
                  >
                    {lang === 'en' ? 'English' : lang === 'kn' ? 'ಕನ್ನಡ' : 'हिन्दी'}
                  </button>
                ))}
              </div>
            </div>

            {/* Tagline */}
            <div>
              <label className="block text-xs font-medium text-stone-300 mb-1.5">
                Catchy Tagline ({contentLang.toUpperCase()})
              </label>
              <input
                type="text"
                value={formData.tagline[contentLang]}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    tagline: { ...prev.tagline, [contentLang]: e.target.value },
                  }))
                }
                placeholder={`One-line highlight of the place in ${contentLang}`}
                className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Short Description */}
            <div>
              <label className="block text-xs font-medium text-stone-300 mb-1.5">
                Short Overview ({contentLang.toUpperCase()})
              </label>
              <textarea
                rows={2}
                value={formData.shortDescription[contentLang]}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    shortDescription: { ...prev.shortDescription, [contentLang]: e.target.value },
                  }))
                }
                placeholder="2-3 sentences summarizing the place for preview cards."
                className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Detailed Description */}
            <div>
              <label className="block text-xs font-medium text-stone-300 mb-1.5">
                Full Detailed Description ({contentLang.toUpperCase()})
              </label>
              <textarea
                rows={5}
                value={formData.description[contentLang]}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: { ...prev.description, [contentLang]: e.target.value },
                  }))
                }
                placeholder="Detailed visitor walkthrough and architectural insights..."
                className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* History & Significance */}
            <div>
              <label className="block text-xs font-medium text-stone-300 mb-1.5">
                History & Significance ({contentLang.toUpperCase()})
              </label>
              <textarea
                rows={4}
                value={formData.history[contentLang]}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    history: { ...prev.history, [contentLang]: e.target.value },
                  }))
                }
                placeholder="Dynasties, historical dates, royal patrons, and inscriptions..."
                className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>
        )}

        {/* STEP 3: PRACTICAL TRAVEL DETAILS & MAP */}
        {activeStep === 3 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div>
              <h3 className="text-lg font-serif font-bold text-white mb-1">
                3. Practical Travel Details & Maps
              </h3>
              <p className="text-xs text-stone-400">
                Essential visitor details: Entry fees, visiting timings, route directions, and map coordinates.
              </p>
            </div>

            {/* Best Time to Visit (All 3 Languages) */}
            <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800 space-y-3">
              <span className="text-xs font-semibold text-amber-300 block">
                {language === 'kn' ? 'ಭೇಟಿ ನೀಡಲು ಅತ್ಯುತ್ತಮ ಸಮಯ (3 ಭಾಷೆಗಳಲ್ಲಿ)' : language === 'hi' ? 'भ्रमण के लिए सर्वोत्तम समय (3 भाषाओं में)' : 'Best Time to Visit (Multilingual)'}
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] text-stone-400 mb-1">English</label>
                  <input
                    type="text"
                    value={formData.bestTimeToVisit.en}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        bestTimeToVisit: { ...prev.bestTimeToVisit, en: e.target.value },
                      }))
                    }
                    placeholder="e.g. October to March"
                    className="w-full bg-stone-950 border border-stone-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-stone-400 mb-1">ಕನ್ನಡ</label>
                  <input
                    type="text"
                    value={formData.bestTimeToVisit.kn}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        bestTimeToVisit: { ...prev.bestTimeToVisit, kn: e.target.value },
                      }))
                    }
                    placeholder="ಉದಾ. ಅಕ್ಟೋಬರ್‌ನಿಂದ ಮಾರ್ಚ್"
                    className="w-full bg-stone-950 border border-stone-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-stone-400 mb-1">हिन्दी</label>
                  <input
                    type="text"
                    value={formData.bestTimeToVisit.hi}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        bestTimeToVisit: { ...prev.bestTimeToVisit, hi: e.target.value },
                      }))
                    }
                    placeholder="उदा. अक्टूबर से मार्च"
                    className="w-full bg-stone-950 border border-stone-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>
            </div>

            {/* Entry Fees */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1.5">
                  {language === 'kn' ? 'ಭಾರತೀಯ ನಾಗರಿಕರಿಗೆ ಶುಲ್ಕ' : language === 'hi' ? 'भारतीय नागरिक शुल्क' : 'Indian Visitor Fee'}
                </label>
                <input
                  type="text"
                  value={formData.entryFee.indian}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      entryFee: { ...prev.entryFee, indian: e.target.value },
                    }))
                  }
                  className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1.5">
                  {language === 'kn' ? 'ವಿದೇಶಿ ಪ್ರವಾಸಿಗರ ಶುಲ್ಕ' : language === 'hi' ? 'विदेशी नागरिक शुल्क' : 'Foreign Visitor Fee'}
                </label>
                <input
                  type="text"
                  value={formData.entryFee.foreigner}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      entryFee: { ...prev.entryFee, foreigner: e.target.value },
                    }))
                  }
                  className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1.5">
                  {language === 'kn' ? 'ಕ್ಯಾಮೆರಾ ಶುಲ್ಕ' : language === 'hi' ? 'कैमरा शुल्क' : 'Camera Fee'}
                </label>
                <input
                  type="text"
                  value={formData.entryFee.camera || 'Free / ₹25'}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      entryFee: { ...prev.entryFee, camera: e.target.value },
                    }))
                  }
                  className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            {/* Visiting Timings (All 3 Languages) */}
            <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800 space-y-3">
              <span className="text-xs font-semibold text-amber-300 block">
                {language === 'kn' ? 'ಸಂದರ್ಶನ ಸಮಯ (3 ಭಾಷೆಗಳಲ್ಲಿ)' : language === 'hi' ? 'खुलने का समय (3 भाषाओं में)' : 'Visiting Timings (Multilingual)'}
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] text-stone-400 mb-1">English</label>
                  <input
                    type="text"
                    value={formData.timings.en}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        timings: { ...prev.timings, en: e.target.value },
                      }))
                    }
                    placeholder="6:00 AM – 6:00 PM (Daily)"
                    className="w-full bg-stone-950 border border-stone-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-stone-400 mb-1">ಕನ್ನಡ</label>
                  <input
                    type="text"
                    value={formData.timings.kn}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        timings: { ...prev.timings, kn: e.target.value },
                      }))
                    }
                    placeholder="ಬೆಳಗ್ಗೆ 6:00 ರಿಂದ ಸಂಜೆ 6:00 ರವರೆಗೆ"
                    className="w-full bg-stone-950 border border-stone-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-stone-400 mb-1">हिन्दी</label>
                  <input
                    type="text"
                    value={formData.timings.hi}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        timings: { ...prev.timings, hi: e.target.value },
                      }))
                    }
                    placeholder="सुबह 6:00 से शाम 6:00 बजे तक"
                    className="w-full bg-stone-950 border border-stone-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>
            </div>

            {/* How to Reach */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1.5">
                  How to Reach: By Air
                </label>
                <textarea
                  rows={2}
                  value={formData.howToReach.byAir}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      howToReach: { ...prev.howToReach, byAir: e.target.value },
                    }))
                  }
                  className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1.5">
                  How to Reach: By Train
                </label>
                <textarea
                  rows={2}
                  value={formData.howToReach.byTrain}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      howToReach: { ...prev.howToReach, byTrain: e.target.value },
                    }))
                  }
                  className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1.5">
                  How to Reach: By Road
                </label>
                <textarea
                  rows={2}
                  value={formData.howToReach.byRoad}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      howToReach: { ...prev.howToReach, byRoad: e.target.value },
                    }))
                  }
                  className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            {/* Coordinates & Map Embed */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1.5">
                  Latitude (e.g. 15.9189)
                </label>
                <input
                  type="number"
                  step="any"
                  value={formData.coordinates.lat}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      coordinates: { ...prev.coordinates, lat: parseFloat(e.target.value) || 0 },
                    }))
                  }
                  className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1.5">
                  Longitude (e.g. 75.6766)
                </label>
                <input
                  type="number"
                  step="any"
                  value={formData.coordinates.lng}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      coordinates: { ...prev.coordinates, lng: parseFloat(e.target.value) || 0 },
                    }))
                  }
                  className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1.5">
                  Google Maps Embed URL
                </label>
                <input
                  type="url"
                  value={formData.mapEmbedUrl}
                  onChange={(e) => setFormData((prev) => ({ ...prev, mapEmbedUrl: e.target.value }))}
                  placeholder="https://www.google.com/maps/embed?..."
                  className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: MEDIA & GALLERY */}
        {activeStep === 4 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div>
              <h3 className="text-lg font-serif font-bold text-white mb-1">
                4. Photo Gallery & Video Tour
              </h3>
              <p className="text-xs text-stone-400">
                Manage multiple high-res gallery images, drag and drop, or paste image URLs.
              </p>
            </div>

            {/* Add Gallery URL */}
            <div className="flex gap-2">
              <input
                type="url"
                value={newGalleryUrl}
                onChange={(e) => setNewGalleryUrl(e.target.value)}
                placeholder="Paste high-res image URL (Unsplash, Wikimedia, Google)"
                className="flex-1 bg-stone-900/90 border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
              />
              <button
                type="button"
                onClick={handleAddGalleryImage}
                className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs flex items-center space-x-1"
              >
                <Plus className="w-4 h-4" />
                <span>Add Image</span>
              </button>
            </div>

            {/* Gallery Image Previews Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {formData.gallery.map((url, idx) => (
                <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden group bg-stone-900 border border-stone-700">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={url}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveGalleryImage(idx)}
                    className="absolute top-2 right-2 p-1.5 rounded-full bg-black/80 hover:bg-red-600 text-white transition-colors opacity-0 group-hover:opacity-100"
                    title="Remove Image"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                  <span className="absolute bottom-1 left-2 text-[10px] bg-black/60 px-1 rounded text-stone-300">
                    #{idx + 1}
                  </span>
                </div>
              ))}
            </div>

            {/* Video URL */}
            <div className="pt-2">
              <label className="block text-xs font-medium text-stone-300 mb-1.5">
                Video Tour Link (YouTube or Vimeo)
              </label>
              <input
                type="url"
                value={formData.videoUrl || ''}
                onChange={(e) => setFormData((prev) => ({ ...prev, videoUrl: e.target.value }))}
                placeholder="https://www.youtube.com/watch?v=..."
                className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>
        )}

        {/* STEP 5: SEO & REVIEW */}
        {activeStep === 5 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div>
              <h3 className="text-lg font-serif font-bold text-white mb-1">
                5. SEO Meta & Final Review
              </h3>
              <p className="text-xs text-stone-400">
                Optimize search engine visibility and verify destination details before publishing.
              </p>
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-300 mb-1.5">
                SEO Meta Title
              </label>
              <input
                type="text"
                value={formData.seo.metaTitle}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    seo: { ...prev.seo, metaTitle: e.target.value },
                  }))
                }
                placeholder="Place Name | Bagalkote Tourism Official Guide"
                className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-300 mb-1.5">
                SEO Meta Description
              </label>
              <textarea
                rows={3}
                value={formData.seo.metaDescription}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    seo: { ...prev.seo, metaDescription: e.target.value },
                  }))
                }
                placeholder="Concise 150-160 character description for Google search snippets."
                className="w-full bg-stone-900/90 border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Review Summary Card */}
            <div className="p-4 rounded-xl bg-stone-900/70 border border-sandstone-500/30 flex items-center space-x-4">
              <div className="w-20 h-16 rounded-lg overflow-hidden shrink-0 bg-stone-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={formData.featuredImage}
                  alt={formData.title.en}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                  {formData.category} • {formData.status.toUpperCase()}
                </span>
                <h4 className="text-base font-bold text-white font-serif">
                  {formData.title.en || 'Untitled'} ({formData.title.kn || 'ಕನ್ನಡ'})
                </h4>
                <p className="text-xs text-stone-400 line-clamp-1">
                  {formData.tagline.en || 'No tagline provided'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Step Navigation Bar */}
        <div className="flex items-center justify-between pt-6 mt-6 border-t border-stone-800">
          <button
            type="button"
            disabled={activeStep === 1}
            onClick={() => setActiveStep((s) => Math.max(1, s - 1))}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-stone-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none flex items-center space-x-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous Step</span>
          </button>

          <div className="flex items-center space-x-3">
            {activeStep < 5 ? (
              <button
                type="button"
                onClick={() => setActiveStep((s) => Math.min(5, s + 1))}
                className="px-5 py-2 rounded-xl bg-sandstone-700 hover:bg-sandstone-600 text-white text-xs sm:text-sm font-semibold flex items-center space-x-1.5 transition-all"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => handleSave('published')}
                disabled={isSubmitting}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-sandstone-600 to-amber-500 hover:from-sandstone-500 hover:to-amber-400 text-white font-bold text-sm shadow-xl shadow-sandstone-900/60 flex items-center space-x-2 transition-all hover:scale-105"
              >
                <Check className="w-4 h-4" />
                <span>{isEditMode ? 'Update Destination' : 'Publish Destination'}</span>
              </button>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
