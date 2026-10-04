'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Navigation, 
  ArrowRight, 
  Compass, 
  Sparkles, 
  Clock, 
  ExternalLink,
  Milestone
} from 'lucide-react';
import { useTranslation } from '@/store/languageStore';

export const ChalukyaCircuitMap: React.FC = () => {
  const { t, language } = useTranslation();

  const stops = [
    {
      id: 'badami',
      name: { en: 'Badami Caves & Fort', kn: 'ಬಾದಾಮಿ ಗುಹೆಗಳು & ಕೋಟೆ', hi: 'बादामी गुफाएं और किला' },
      dist: '0 km (Epicenter)',
      time: 'Start Point',
      desc: { en: 'Rock-cut 6th-century caves, Nataraja, and Agastya Lake bluffs', kn: '6ನೇ ಶತಮಾನದ ಗುಹೆಗಳು, ನಟರಾಜ ಮತ್ತು ಅಗಸ್ತ್ಯ ಕೆರೆ', hi: '6वीं शताब्दी की शैल-उत्कीर्ण गुफाएं और अगस्त्य झील' },
      slug: 'badami-cave-temples',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Vishnu_image_inside_cave_number_3_in_Badami.jpg',
    },
    {
      id: 'banashankari',
      name: { en: 'Banashankari Temple', kn: 'ಬನಶಂಕರಿ ದೇವಾಲಯ', hi: 'बनशंकरी देवी मंदिर' },
      dist: '5 km South',
      time: '10 mins drive',
      desc: { en: 'Ancient Shakti Peetha, deepastambha towers, Haridra Tirtha', kn: 'ಪ್ರಾಚೀನ ಶಕ್ತಿಪೀಠ, ದೀಪಸ್ತಂಭ ಹಾಗೂ ಹರಿದ್ರಾ ತೀರ್ಥ', hi: 'प्राचीन शक्तिपीठ, दीपस्तंभ और हरिद्रा तीर्थ' },
      slug: 'banashankari-temple',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Shakambari_temple_near_Badami.JPG/1280px-Shakambari_temple_near_Badami.JPG',
    },
    {
      id: 'mahakuta',
      name: { en: 'Mahakuta Sanctuary', kn: 'ಮಹಾಕೂಟ ತೀರ್ಥ ಕ್ಷೇತ್ರ', hi: 'महाकूटेश्वर तीर्थ' },
      dist: '14 km East',
      time: '20 mins drive',
      desc: { en: 'Freshwater spring tank Vishnu Pushkarini & submerged Shiva linga', kn: 'ವಿಷ್ಣು ಪುಷ್ಕರಣಿಯ ನೈಸರ್ಗಿಕ ತೀರ್ಥದ ಹೊಂಡ & ಲಿಂಗ', hi: 'विष्णु पुष्करिणी जलकुंड और शिव लिंग' },
      slug: 'mahakuta-temple',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Mahakuta_group_of_temples1_at_Mahakuta.jpg/1280px-Mahakuta_group_of_temples1_at_Mahakuta.jpg',
    },
    {
      id: 'pattadakal',
      name: { en: 'Pattadakal (UNESCO)', kn: 'ಪಟ್ಟದಕಲ್ಲು (ಯುನೆಸ್ಕೋ)', hi: 'पट्टदकल (यूनेस्को)' },
      dist: '22 km NE',
      time: '30 mins drive',
      desc: { en: 'Royal coronation site, Rekha-Nagara & Dravidian fusion', kn: 'ಚಾಲುಕ್ಯರ ಪಟ್ಟಾಭಿಷೇಕ ತಾಣ, ನಾಗರ ಮತ್ತು ದ್ರಾವಿಡ ಸಮ್ಮಿಲನ', hi: 'शाही राज्याभिषेक स्थल, नागर और द्रविड़ संगम' },
      slug: 'pattadakal-monuments',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Pattadakal_000.JPG/1280px-Pattadakal_000.JPG',
    },
    {
      id: 'aihole',
      name: { en: 'Aihole Temple Lab', kn: 'ಐಹೊಳೆ ಶಿಲ್ಪಕಲಾ ಶಾಲೆ', hi: 'ऐहोले मंदिर प्रयोगशाला' },
      dist: '35 km NE',
      time: '45 mins drive',
      desc: { en: '125+ experimental temples, apsidal Durga temple, Ravikirti edict', kn: '125ಕ್ಕೂ ಹೆಚ್ಚು ದೇಗುಲಗಳು, ದುರ್ಗಾ ಗುಡಿ, ರವಿಕೀರ್ತಿ ಶಾಸನ', hi: '125+ मंदिर, दुर्गा मंदिर, रविकीर्ति शिलालेख' },
      slug: 'aihole-monuments',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/8th_century_Durga_temple_exterior_view%2C_Aihole_Hindu_temples_and_monuments_3.jpg/1280px-8th_century_Durga_temple_exterior_view%2C_Aihole_Hindu_temples_and_monuments_3.jpg',
    },
    {
      id: 'kudalasangama',
      name: { en: 'Kudalasangama', kn: 'ಕೂಡಲಸಂಗಮ ಕ್ಷೇತ್ರ', hi: 'कूडलसंगम तीर्थ' },
      dist: '65 km East',
      time: '1 hr 15 mins',
      desc: { en: 'Krishna-Malaprabha holy sangam, Basavanna Aikya Mantapa', kn: 'ಕೃಷ್ಣಾ-ಮಲಪ್ರಭಾ ಸಂಗಮ, ಬಸವೇಶ್ವರ ಐಕ್ಯ ಮಂಟಪ', hi: 'कृष्णा-मलप्रभा पावन संगम, बसवेश्वर समाधि' },
      slug: 'kudalasangama',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Kudalasangama.jpg/1280px-Kudalasangama.jpg',
    },
    {
      id: 'almatti',
      name: { en: 'Almatti Dam & Gardens', kn: 'ಆಲಮಟ್ಟಿ ಅಣೆಕಟ್ಟು & ಗಾರ್ಡನ್', hi: 'अलमट्टी बांध और उद्यान' },
      dist: '85 km North',
      time: '1 hr 30 mins',
      desc: { en: '123 TMC Krishna reservoir, Mughal gardens & laser fountain', kn: 'ಕೃಷ್ಣಾ ಜಲಾಶಯ, ಮೊಘಲ್ ಉದ್ಯಾನ & ಸಂಗೀತ ಕಾರಂಜಿ', hi: 'कृष्णा जलाशय, मुगल गार्डन और संगीतमय फव्वारे' },
      slug: 'almatti-dam',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Almatti_Dam_26.jpg/1280px-Almatti_Dam_26.jpg',
    },
  ];

  const [activeStop, setActiveStop] = useState(stops[0]);

  return (
    <section id="circuit-map" className="py-20 relative bg-[#0d0a08] border-t border-stone-800/80 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-sandstone-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-sandstone-950/90 border border-sandstone-600/50 text-amber-300 text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Heritage Trail</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            The Chalukyan Heritage Circuit Road
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-300">
            Follow the ancient royal highway linking Badami, Pattadakal, Aihole, and the holy confluence of Kudalasangama.
          </p>
        </div>

        {/* Interactive Roadmap Bar */}
        <div className="flex items-center space-x-3 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {stops.map((stop, idx) => (
            <button
              key={stop.id}
              onClick={() => setActiveStop(stop)}
              className={`p-3.5 rounded-2xl border text-left shrink-0 transition-all min-w-[200px] flex flex-col justify-between ${
                activeStop.id === stop.id
                  ? 'bg-gradient-to-br from-sandstone-900 via-stone-900 to-amber-950/60 border-amber-400 shadow-xl scale-102'
                  : 'glass-panel border-stone-800 text-stone-400 hover:text-white hover:border-stone-700'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] mb-1.5 font-bold">
                <span className="text-amber-400">Stop #{idx + 1}</span>
                <span className="text-stone-400">{stop.dist}</span>
              </div>
              <span className="font-serif font-bold text-white text-sm block truncate">
                {stop.name[language] || stop.name.en}
              </span>
            </button>
          ))}
        </div>

        {/* Active Stop Spotlight Showcase Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-sandstone-500/30 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden border border-sandstone-500/40 shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activeStop.image}
              alt={activeStop.name.en}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/80 backdrop-blur-md border border-amber-400/40 text-amber-300">
                {activeStop.dist} • {activeStop.time}
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sandstone-400 block mb-1">
                Featured Circuit Destination
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                {activeStop.name[language] || activeStop.name.en}
              </h3>
              <p className="mt-2 text-sm text-stone-300 leading-relaxed">
                {activeStop.desc[language] || activeStop.desc.en}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-stone-800 text-xs">
              <div className="p-3 rounded-xl bg-stone-900 border border-stone-800">
                <span className="text-stone-400 block text-[10px] uppercase font-bold">From Badami</span>
                <span className="text-amber-300 font-bold text-sm">{activeStop.dist}</span>
              </div>
              <div className="p-3 rounded-xl bg-stone-900 border border-stone-800">
                <span className="text-stone-400 block text-[10px] uppercase font-bold">Drive Time</span>
                <span className="text-emerald-300 font-bold text-sm">{activeStop.time}</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href={`/destinations/${activeStop.slug}`}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sandstone-600 to-amber-500 hover:from-sandstone-500 hover:to-amber-400 text-white font-bold text-xs sm:text-sm shadow-lg shadow-sandstone-900/60 transition-all hover:scale-102"
              >
                <span>View Full Details & Travel Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
