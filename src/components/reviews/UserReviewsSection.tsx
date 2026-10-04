'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Star, 
  Sparkles, 
  ThumbsUp, 
  CheckCircle2, 
  MessageSquare, 
  Plus, 
  X, 
  MapPin, 
  ShieldCheck, 
  Calendar, 
  Award,
  Filter
} from 'lucide-react';
import { useTranslation } from '@/store/languageStore';
import { useReviewsStore } from '@/store/reviewsStore';
import { usePlacesStore } from '@/store/placesStore';
import { triggerConfetti } from '@/lib/utils';

export const UserReviewsSection: React.FC = () => {
  const { t, language } = useTranslation();
  const { reviews, addReview, upvoteHelpful } = useReviewsStore();
  const { places } = usePlacesStore();

  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [upvotedIds, setUpvotedIds] = useState<string[]>([]);

  // Modal Form State
  const [authorName, setAuthorName] = useState('');
  const [authorLocation, setAuthorLocation] = useState('');
  const [selectedDestSlug, setSelectedDestSlug] = useState('badami-cave-temples');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleUpvote = (id: string) => {
    if (!upvotedIds.includes(id)) {
      upvoteHelpful(id);
      setUpvotedIds([...upvotedIds, id]);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !reviewText.trim()) return;

    const matchedPlace = places.find((p) => p.slug === selectedDestSlug);
    const destName = matchedPlace
      ? {
          en: matchedPlace.title.en,
          kn: matchedPlace.title.kn,
          hi: matchedPlace.title.hi,
        }
      : {
          en: 'Badami Heritage Circuit',
          kn: 'ಬಾದಾಮಿ ಪರಂಪರೆ ತಾಣ',
          hi: 'बादामी विरासत परिपथ',
        };

    addReview({
      author: authorName.trim(),
      location: authorLocation.trim() || 'Karnataka, India',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&h=200&q=80',
      rating,
      destinationSlug: selectedDestSlug,
      destinationName: destName,
      travelerType: 'heritage_buff',
      title: {
        en: reviewTitle.trim() || 'Remarkable Visit to Bagalkote!',
        kn: reviewTitle.trim() || 'ಬಾಗಲಕೋಟೆ ತಾಣಕ್ಕೆ ಅದ್ಭುತ ಭೇಟಿ!',
        hi: reviewTitle.trim() || 'बागलकोट का अद्भुत अनुभव!',
      },
      comment: {
        en: reviewText.trim(),
        kn: reviewText.trim(),
        hi: reviewText.trim(),
      },
    });

    triggerConfetti();
    setModalOpen(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);

    // Reset Form
    setAuthorName('');
    setAuthorLocation('');
    setReviewTitle('');
    setReviewText('');
    setRating(5);
  };

  const filterOptions = [
    { id: 'all', label: language === 'kn' ? 'ಎಲ್ಲಾ ವಿಮರ್ಶೆಗಳು' : language === 'hi' ? 'सभी समीक्षाएँ' : 'All Reviews' },
    { id: 'badami-cave-temples', label: language === 'kn' ? 'ಬಾದಾಮಿ ಗುಹೆಗಳು' : language === 'hi' ? 'बादामी गुफाएं' : 'Badami Caves' },
    { id: 'pattadakal-monuments', label: language === 'kn' ? 'ಪಟ್ಟದಕಲ್ಲು' : language === 'hi' ? 'पट्टदकल' : 'Pattadakal' },
    { id: 'aihole-monuments', label: language === 'kn' ? 'ಐಹೊಳೆ' : language === 'hi' ? 'ऐहोले' : 'Aihole' },
    { id: 'kudalasangama', label: language === 'kn' ? 'ಕೂಡಲಸಂಗಮ' : language === 'hi' ? 'कूडलसंगम' : 'Kudalasangama' },
    { id: 'almatti-dam', label: language === 'kn' ? 'ಆಲಮಟ್ಟಿ ಅಣೆಕಟ್ಟು' : language === 'hi' ? 'अलमट्टी बांध' : 'Almatti Dam' },
  ];

  const filteredReviews = reviews.filter((r) => {
    if (selectedFilter === 'all') return true;
    return r.destinationSlug === selectedFilter;
  });

  return (
    <section className="py-20 relative bg-[#0a0807] border-t border-stone-800/80 overflow-hidden">
      
      {/* Decorative Chalukyan Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sandstone-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Success Toast */}
      {showToast && (
        <div className="fixed top-20 right-6 z-50 flex items-center space-x-2 px-5 py-3 rounded-xl bg-emerald-950 border border-emerald-500 text-emerald-200 shadow-2xl animate-in slide-in-from-top-4">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span className="font-semibold text-sm">
            {language === 'kn' ? 'ಧನ್ಯವಾದಗಳು! ನಿಮ್ಮ ವಿಮರ್ಶೆಯನ್ನು ಸೇರಿಸಲಾಗಿದೆ.' : language === 'hi' ? 'धन्यवाद! आपकी समीक्षा प्रकाशित हो गई है।' : 'Thank you! Your review has been published.'}
          </span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Stats & Add Button */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-sandstone-950/80 border border-sandstone-600/40 text-amber-300 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>
                {language === 'kn' ? 'ನಿಜವಾದ ಪ್ರವಾಸಿಗರ ಅನಿಸಿಕೆಗಳು' : language === 'hi' ? 'सत्यापित यात्री अनुभव' : 'Verified Visitor Testimonials'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              {language === 'kn' 
                ? 'ಪ್ರವಾಸಿಗರ ಅನುಭವಗಳು & ರೇಟಿಂಗ್‌ಗಳು' 
                : language === 'hi' 
                ? 'पर्यटकों की समीक्षाएं और अनुभव' 
                : 'What Travelers Say About Bagalkote'}
            </h2>
            <p className="mt-2 text-sm text-stone-400 max-w-xl">
              {language === 'kn'
                ? 'ಬಾದಾಮಿ, ಪಟ್ಟದಕಲ್ಲು, ಐಹೊಳೆ ಹಾಗೂ ಇತರ ಪ್ರವಾಸಿ ತಾಣಗಳಿಗೆ ಭೇಟಿ ನೀಡಿದ ಪ್ರವಾಸಿಗರ ನೈಜ ವಿಮರ್ಶೆಗಳು.'
                : language === 'hi'
                ? 'बादामी, पट्टदकल, ऐहोले और अन्य आकर्षणों का भ्रमण करने वाले पर्यटकों के वास्तविक अनुभव।'
                : 'Real experiences and heartfelt stories from historians, families, and solo wanderers who explored Bagalkote.'}
            </p>
          </div>

          <div className="flex items-center flex-wrap gap-4">
            {/* Rating pill */}
            <div className="px-4 py-2 rounded-2xl glass-card border border-amber-500/30 flex items-center space-x-3">
              <div className="flex items-center space-x-1 text-amber-400">
                <Star className="w-5 h-5 fill-amber-400" />
                <span className="font-bold text-lg text-white">4.9</span>
              </div>
              <div className="text-[11px] text-stone-400 leading-tight">
                <span className="font-semibold text-white block">1,480+ Reviews</span>
                <span>98% Recommended</span>
              </div>
            </div>

            {/* Write a Review Button */}
            <button
              onClick={() => setModalOpen(true)}
              className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-sandstone-600 to-amber-500 hover:from-sandstone-500 hover:to-amber-400 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-sandstone-900/60 flex items-center space-x-2 transition-all hover:scale-102"
            >
              <Plus className="w-4 h-4" />
              <span>
                {language === 'kn' ? 'ನಿಮ್ಮ ವಿಮರ್ಶೆ ಬರೆಯಿರಿ' : language === 'hi' ? 'अपनी समीक्षा लिखें' : 'Write a Review'}
              </span>
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center space-x-2 pb-6 overflow-x-auto scrollbar-none mb-4">
          <Filter className="w-4 h-4 text-stone-500 shrink-0 ml-1 mr-1" />
          {filterOptions.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedFilter(f.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
                selectedFilter === f.id
                  ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-md font-bold'
                  : 'glass-panel text-stone-300 border-stone-800 hover:text-white hover:bg-stone-900'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="glass-card rounded-3xl p-6 border border-sandstone-500/20 hover:border-amber-500/40 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl space-y-4"
            >
              <div className="space-y-3">
                {/* Header: Avatar, Name, Location, Rating */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={rev.avatar}
                      alt={rev.author}
                      className="w-11 h-11 rounded-full object-cover border border-sandstone-500/40"
                    />
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <span className="font-bold text-sm text-white">{rev.author}</span>
                        {rev.verified && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" title="Verified Visitor" />
                        )}
                      </div>
                      <span className="text-[11px] text-stone-400 block">{rev.location}</span>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center space-x-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-stone-700'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Destination Tag */}
                <Link
                  href={`/destinations/${rev.destinationSlug}`}
                  className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-sandstone-950 border border-sandstone-600/40 text-amber-300 hover:text-amber-200 transition-colors"
                >
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>{rev.destinationName[language] || rev.destinationName.en}</span>
                </Link>

                {/* Title */}
                <h4 className="text-sm sm:text-base font-serif font-bold text-white line-clamp-1">
                  {rev.title[language] || rev.title.en}
                </h4>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed line-clamp-4">
                  {rev.comment[language] || rev.comment.en}
                </p>
              </div>

              {/* Bottom metadata & Helpful Upvote */}
              <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-400">
                <span className="text-[11px]">{rev.date}</span>

                <button
                  onClick={() => handleUpvote(rev.id)}
                  disabled={upvotedIds.includes(rev.id)}
                  className={`inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg text-xs transition-all ${
                    upvotedIds.includes(rev.id)
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      : 'hover:bg-stone-800 text-stone-400 hover:text-white'
                  }`}
                  title="Mark as helpful"
                >
                  <ThumbsUp className={`w-3.5 h-3.5 ${upvotedIds.includes(rev.id) ? 'fill-amber-300' : ''}`} />
                  <span>Helpful ({rev.helpfulCount})</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Write a Review Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-card max-w-lg w-full rounded-3xl p-6 sm:p-8 border border-amber-500/40 shadow-2xl relative animate-in zoom-in-95 duration-200 bg-[#14100e]">
            
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mb-1">
                Share Your Experience
              </span>
              <h3 className="text-xl font-serif font-bold text-white">
                {language === 'kn' ? 'ನಿಮ್ಮ ಪ್ರವಾಸದ ವಿಮರ್ಶೆ ಹಂಚಿಕೊಳ್ಳಿ' : language === 'hi' ? 'अपनी यात्रा का अनुभव साझा करें' : 'Review a Destination in Bagalkote'}
              </h3>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              
              {/* Destination Selector */}
              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1">
                  {language === 'kn' ? 'ಭೇಟಿ ನೀಡಿದ ಸ್ಥಳ' : language === 'hi' ? 'भ्रमण किया गया स्थान' : 'Visited Destination *'}
                </label>
                <select
                  value={selectedDestSlug}
                  onChange={(e) => setSelectedDestSlug(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                >
                  {places.map((p) => (
                    <option key={p.slug} value={p.slug}>
                      {p.title[language] || p.title.en}
                    </option>
                  ))}
                </select>
              </div>

              {/* Star Rating Picker */}
              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1.5">
                  {language === 'kn' ? 'ನಿಮ್ಮ ರೇಟಿಂಗ್' : language === 'hi' ? 'आपकी रेटिंग' : 'Your Rating *'}
                </label>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(star)}
                      className="p-1 text-amber-400 focus:outline-none transition-transform hover:scale-125"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= (hoverRating || rating)
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-stone-700'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs text-amber-300 font-bold ml-2">
                    {rating} / 5 Stars
                  </span>
                </div>
              </div>

              {/* Name & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">
                    {language === 'kn' ? 'ನಿಮ್ಮ ಹೆಸರು' : language === 'hi' ? 'आपका नाम' : 'Your Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="e.g. Ramesh Kulkarni"
                    className="w-full bg-stone-900 border border-stone-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">
                    {language === 'kn' ? 'ನಿಮ್ಮ ಊರು / ನಗರ' : language === 'hi' ? 'आपका शहर' : 'City / State'}
                  </label>
                  <input
                    type="text"
                    value={authorLocation}
                    onChange={(e) => setAuthorLocation(e.target.value)}
                    placeholder="e.g. Belagavi, Karnataka"
                    className="w-full bg-stone-900 border border-stone-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Review Title */}
              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1">
                  {language === 'kn' ? 'ವಿಮರ್ಶೆಯ ಶೀರ್ಷಿಕೆ' : language === 'hi' ? 'समीक्षा शीर्षक' : 'Review Title'}
                </label>
                <input
                  type="text"
                  value={reviewTitle}
                  onChange={(e) => setReviewTitle(e.target.value)}
                  placeholder="e.g. Spectacular Rock Sculptures & Peaceful Vibe"
                  className="w-full bg-stone-900 border border-stone-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Review Text */}
              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1">
                  {language === 'kn' ? 'ವಿವರವಾದ ಅನುಭವ' : language === 'hi' ? 'विस्तृत अनुभव' : 'Detailed Review *'}
                </label>
                <textarea
                  rows={4}
                  required
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="Share details on monument condition, travel tips, best time of day, guide recommendation..."
                  className="w-full bg-stone-900 border border-stone-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-sandstone-600 to-amber-500 hover:from-sandstone-500 hover:to-amber-400 text-stone-950 font-bold text-xs sm:text-sm shadow-xl shadow-sandstone-900/60 flex items-center justify-center space-x-2 transition-all"
              >
                <Sparkles className="w-4 h-4 fill-stone-950" />
                <span>
                  {language === 'kn' ? 'ವಿಮರ್ಶೆ ಸಲ್ಲಿಸಿ' : language === 'hi' ? 'समीक्षा जमा करें' : 'Submit Review'}
                </span>
              </button>

            </form>

          </div>
        </div>
      )}

    </section>
  );
};
