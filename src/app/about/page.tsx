'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  Landmark, 
  Waves, 
  Scissors, 
  Utensils, 
  MapPin, 
  Award, 
  Calendar,
  Compass,
  ArrowRight
} from 'lucide-react';
import { useTranslation } from '@/store/languageStore';

export default function AboutPage() {
  const { t, language } = useTranslation();

  return (
    <div className="pt-28 pb-20 min-h-screen bg-stone-950 text-stone-200">
      
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-sandstone-950/80 border border-sandstone-600/40 text-amber-300 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Historical & Cultural Heritage</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
          About Bagalkote District
        </h1>
        <p className="mt-3 text-sm sm:text-base text-stone-400 max-w-3xl mx-auto leading-relaxed">
          {language === 'kn'
            ? 'ಚಾಲುಕ್ಯ ಸಾಮ್ರಾಜ್ಯದ ಹೆಮ್ಮೆಯ ರಾಜಧಾನಿ ವಾತಾಪಿ, ನದಿಗಳ ಪವಿತ್ರ ಸಂಗಮ ಮತ್ತು ವಿಶ್ವಪ್ರಸಿದ್ಧ ಕೈಮಗ್ಗ ನೇಯ್ಗೆಯ ಶ್ರೀಮಂತ ಭೂಮಿ.'
            : language === 'hi'
            ? 'चालुक्य साम्राज्य की शाही राजधानी वातापी, नदियों का पावन संगम और विश्व-प्रसिद्ध हथकरघा परंपरा की पावन भूमि।'
            : 'The imperial heartland of the Early Chalukyas, cradle of Indian temple architecture, and vibrant epicenter of GI handlooms and riverine cultures.'}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section 1: The Chalukya Golden Age */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <Landmark className="w-4 h-4" />
              <span>540 CE – 757 CE Legacy</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              The Chalukyan Architecture Revolution
            </h2>
            <p className="text-sm text-stone-300 leading-relaxed">
              Between the 6th and 8th centuries CE, the Early Chalukya dynasty ruled vast swathes of Southern and Central India from their capital at Vatapi (modern Badami). Under visionary monarchs like Pulakeshin I, Kirtivarman I, Mangalesha, and Pulakeshin II, master architects pioneered sandstone rock-cutting techniques and structural masonry.
            </p>
            <p className="text-sm text-stone-300 leading-relaxed">
              Aihole served as their experimental studio where over 120 stone temples were erected to test dome, pillar, and shikara variations. Pattadakal blossomed into their royal coronation sanctuary where northern Nagara and southern Dravidian superstructures were fused. Badami crowned their military might with impregnable clifftop fortifications and rock-cut shrines.
            </p>
            <div className="pt-2">
              <Link
                href="/destinations"
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300"
              >
                <span>Explore all 15 heritage monuments</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-card border border-sandstone-500/30 shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Vishnu_image_inside_cave_number_3_in_Badami.jpg"
              alt="Chalukyan Architecture Badami"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/70 backdrop-blur-md text-xs text-amber-300 border border-white/10">
              6th-century rock-cut reliefs carved into sandstone ravines of Vatapi
            </div>
          </div>
        </div>

        {/* Section 2: Three Lifeline Rivers */}
        <div className="p-8 rounded-3xl glass-card border border-sandstone-500/20 space-y-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
              <Waves className="w-4 h-4" />
              <span>Sacred Waters of Northern Karnataka</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              The Three Lifeline Rivers: Krishna, Malaprabha & Ghataprabha
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-2">
              <h3 className="text-base font-bold text-amber-300">1. Krishna River</h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                The mighty Krishna forms the northern boundary, harnessed by the gigantic Almatti Dam (123 TMC) which nurtures fertile sunflower, sugarcane, and maize plains across Northern Karnataka.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-2">
              <h3 className="text-base font-bold text-amber-300">2. Malaprabha River</h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                The cultural artery along whose banks ancient sculptors built Aihole, Pattadakal, and Badami, eventually flowing northward to merge at sacred Kudalasangama.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-2">
              <h3 className="text-base font-bold text-amber-300">3. Ghataprabha River</h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Meanders through Mudhol and Bilagi taluks, supplying pristine waters for wildlife habitats including the Yadahalli Chinkara Sanctuary.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Handloom Mastery & Gastronomy */}
        <div id="gastronomy" className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          <div className="p-6 rounded-3xl glass-card border border-sandstone-500/20 space-y-4">
            <div className="flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <Scissors className="w-4 h-4" />
              <span>Textile Capital</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Centuries of GI-Tagged Weaving
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Bagalkote district is globally celebrated for its handloom textile clusters. The town of Ilkal has produced GI-tagged Ilkal Sarees for over a thousand years, distinguished by the traditional Kondi interlocking warp and the iconic crimson Tope Teni pallu. Neighboring Guledagudda is the undisputed home of traditional Guledgudd Khana, the pure cotton and silk blouse cloth embroidered with heritage Kasuti needlecraft.
            </p>
            <div className="flex items-center space-x-3 text-xs text-amber-300 pt-2 font-medium">
              <span>• Ilkal Saree GI Status (2006)</span>
              <span>• Guledgudd Khana Handlooms</span>
              <span>• Traditional Pit Looms</span>
            </div>
          </div>

          <div className="p-6 rounded-3xl glass-card border border-sandstone-500/20 space-y-4">
            <div className="flex items-center space-x-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Utensils className="w-4 h-4" />
              <span>Gastronomy</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              North Karnataka Traditional Oota
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              No journey to Bagalkote is complete without relishing authentic North Karnataka cuisine. The quintessential meal features soft, piping hot Jolada Rotti (sorghum flatbread) paired with rich Yennegai (spicy stuffed baby brinjals), Shenga Chutney Pudi (roasted peanut spice blend), and homemade curd. In the evenings, locals gather around town tea stalls for Badami Girmit (spiced puffed rice tossed with sev and onions) accompanied by crisp Mirchi Bajjis.
            </p>
            <div className="flex items-center space-x-3 text-xs text-amber-300 pt-2 font-medium">
              <span>• Jolada Rotti & Yennegai</span>
              <span>• Badami Girmit & Mirchi Bajji</span>
              <span>• Shenga Holige</span>
            </div>
          </div>

        </div>

        {/* Section 4: Key District Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl glass-card text-center border border-stone-800">
            <span className="text-xs text-stone-400 block mb-1">District Area</span>
            <span className="text-xl sm:text-2xl font-bold font-serif text-white">6,575 km²</span>
            <span className="text-[11px] text-amber-400 block mt-1">9 Taluks</span>
          </div>

          <div className="p-5 rounded-2xl glass-card text-center border border-stone-800">
            <span className="text-xs text-stone-400 block mb-1">Capital City</span>
            <span className="text-xl sm:text-2xl font-bold font-serif text-white">Bagalkote</span>
            <span className="text-[11px] text-amber-400 block mt-1">Navanagar HQ</span>
          </div>

          <div className="p-5 rounded-2xl glass-card text-center border border-stone-800">
            <span className="text-xs text-stone-400 block mb-1">State & Country</span>
            <span className="text-xl sm:text-2xl font-bold font-serif text-white">Karnataka</span>
            <span className="text-[11px] text-amber-400 block mt-1">India</span>
          </div>

          <div className="p-5 rounded-2xl glass-card text-center border border-stone-800">
            <span className="text-xs text-stone-400 block mb-1">Official Languages</span>
            <span className="text-xl sm:text-2xl font-bold font-serif text-white">Kannada</span>
            <span className="text-[11px] text-amber-400 block mt-1">Hindi & English</span>
          </div>
        </div>

      </div>

    </div>
  );
}
