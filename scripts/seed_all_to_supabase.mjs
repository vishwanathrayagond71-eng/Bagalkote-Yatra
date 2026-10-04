import { defaultContacts } from '../src/store/contactsStore.js';
import fs from 'fs';

const SUPABASE_URL = 'https://drcehambhipdqvtvfong.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyY2VoYW1iaGlwZHF2dHZmb25nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTExMjkzNTEsImV4cCI6MjEwNjcwNTM1MX0.FMT7g4blWe18O-ZF1cHXlnMsAX92_xCxyiJ4zCeuj3Q';

const headers = {
  'apikey': SUPABASE_KEY,
  'Authorization': `Bearer ${SUPABASE_KEY}`,
  'Content-Type': 'application/json',
  'Prefer': 'resolution=merge-duplicates,return=representation',
};

async function seed() {
  console.log('Seeding official contacts...');
  
  const contacts = [
    {
      id: 'contact-1',
      name: 'Shri Ramesh K. Pujar',
      badge: { en: 'District Tourism Officer', kn: 'ಜಿಲ್ಲಾ ಪ್ರವಾಸೋದ್ಯಮ ಅಧಿಕಾರಿ', hi: 'जिला पर्यटन अधिकारी' },
      designation: { en: 'Assistant Director, Department of Tourism, Bagalkote District', kn: 'ಸಹಾಯಕ ನಿರ್ದೇಶಕರು, ಪ್ರವಾಸೋದ್ಯಮ ಇಲಾಖೆ, ಬಾಗಲಕೋಟೆ ಜಿಲ್ಲೆ', hi: 'सहायक निदेशक, पर्यटन विभाग, बागलकोट जिला' },
      phone: '+91 8354 235123',
      alternate_phone: '+91 94808 35120',
      email: 'tourism-bgk@karnataka.gov.in',
      office_location: { en: 'Room 104, District Administrative Complex, Navanagar, Bagalkote - 587103', kn: 'ಕೊಠಡಿ 104, ನವನಗರ, ಬಾಗಲಕೋಟೆ', hi: 'कमरा 104, नवानगर, बागलकोट' },
      timing: { en: '10:00 AM – 5:30 PM (Mon – Sat)', kn: 'ಬೆಳಗ್ಗೆ 10:00 – ಸಂಜೆ 5:30', hi: 'प्रातः 10:00 – सायं 5:30' },
      whatsapp: '+919480835120',
      is_primary: true
    },
    {
      id: 'contact-2',
      name: 'Smt. Vidya Patil',
      badge: { en: 'Badami Heritage Centre', kn: 'ಬಾದಾಮಿ ಪರಂಪರೆ ಕೇಂದ್ರ', hi: 'बादामी हेरिटेज केंद्र' },
      designation: { en: 'Senior Tourist Information & Heritage Guide Coordinator', kn: 'ಹಿರಿಯ ಪ್ರವಾಸಿ ಮಾಹಿತಿ ಮತ್ತು ಪರಂಪರೆ ಮಾರ್ಗದರ್ಶಕರ ಸಂಯೋಜಕಿ', hi: 'वरिष्ठ पर्यटक सूचना एवं गाइड समन्वयक' },
      phone: '+91 8357 220045',
      alternate_phone: '+91 98451 22340',
      email: 'infocentre-badami@bagalkotetourism.gov.in',
      office_location: { en: 'ASI Tourist Information Desk, Near Badami Cave Temples Entrance, Badami', kn: 'ಎಎಸ್‌ಐ ಪ್ರವಾಸಿ ಮಾಹಿತಿ ಕೇಂದ್ರ, ಬಾದಾಮಿ ಗುಹೆಗಳ ಬಳಿ', hi: 'एएसआई पर्यटक सूचना केंद्र, बादामी' },
      timing: { en: '06:00 AM – 06:00 PM (All 7 Days)', kn: 'ಬೆಳಗ್ಗೆ 06:00 – ಸಂಜೆ 06:00 (ವಾರದ 7 ದಿನಗಳು)', hi: 'प्रातः 06:00 – सायं 06:00 (सातों दिन)' },
      whatsapp: '+919845122340',
      is_primary: false
    },
    {
      id: 'contact-3',
      name: '24x7 District Tourist Police & Emergency Cell',
      badge: { en: 'Emergency & Help Desk', kn: 'ತುರ್ತು ಸಹಾಯವಾಣಿ', hi: 'आपातकालीन सहायता' },
      designation: { en: 'Bagalkote Yatra 24x7 Traveler Safety & Medical Helpline', kn: 'ಬಾಗಲಕೋಟೆ ಯಾತ್ರೆ 24x7 ಪ್ರವಾಸಿಗರ ರಕ್ಷಣೆ ಮತ್ತು ವೈದ್ಯಕೀಯ ಸಹಾಯವಾಣಿ', hi: 'बागलकोट यात्रा 24x7 पर्यटक सुरक्षा व हेल्पलाइन' },
      phone: '1800-425-4666',
      alternate_phone: '+91 8354 220100',
      email: 'helpdesk@bagalkotetourism.gov.in',
      office_location: { en: 'Central Control Room, District Police Headquarters, Bagalkote', kn: 'ಕೇಂದ್ರ ನಿಯಂತ್ರಣ ಕೊಠಡಿ, ಜಿಲ್ಲಾ ಪೊಲೀಸ್ ವರಿಷ್ಠಾಧಿಕಾರಿಗಳ ಕಚೇರಿ, ಬಾಗಲಕೋಟೆ', hi: 'केंद्रीय नियंत्रण कक्ष, बागलकोट' },
      timing: { en: '24 Hours / 365 Days', kn: '24 ಗಂಟೆ / 365 ದಿನಗಳು', hi: '24 घंटे / 365 दिन' },
      whatsapp: '+918354220100',
      is_primary: false
    }
  ];

  for (const c of contacts) {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/official_contacts`, {
      method: 'POST',
      headers,
      body: JSON.stringify(c)
    });
    console.log(`Contact ${c.id}: status ${res.status}`);
  }

  // Seed sample verified reviews
  const reviews = [
    {
      id: 'rev-1',
      place_slug: 'badami-cave-temples',
      place_name: 'Badami Cave Temples',
      author_name: 'Dr. Anand Deshmukh',
      author_location: 'Bengaluru, Karnataka',
      rating: 5,
      title: 'Sublime Rock-Cut Masterpieces',
      comment: 'The 18-armed Nataraja in Cave 1 and the colossal Mahavishnu in Cave 3 are absolute wonders of human skill. Standing on the clifftop looking over Agastya Lake at sunset was unforgettable.',
      visit_season: 'Winter (January)',
      helpful_count: 42,
      verified: true
    },
    {
      id: 'rev-2',
      place_slug: 'pattadakal-monuments',
      place_name: 'Pattadakal Group of Monuments',
      author_name: 'Elena Rostova',
      author_location: 'Berlin, Germany',
      rating: 5,
      title: 'Architectural Perfection of India',
      comment: 'A true UNESCO World Heritage marvel. Seeing the seamless harmony between the northern Nagara and southern Dravidian temple styles in one complex left me speechless.',
      visit_season: 'Post-Monsoon (November)',
      helpful_count: 38,
      verified: true
    },
    {
      id: 'rev-3',
      place_slug: 'aihole-monuments',
      place_name: 'Aihole Monuments Complex',
      author_name: 'Suresh Patil',
      author_location: 'Hubballi, Karnataka',
      rating: 5,
      title: 'The Real Cradle of Indian Temples',
      comment: 'The apsidal Durga Temple with its Buddhist chaitya influence and stone colonnades is breathtaking. Every corner of Aihole tells an architectural story.',
      visit_season: 'Winter (December)',
      helpful_count: 29,
      verified: true
    },
    {
      id: 'rev-4',
      place_slug: 'kudalasangama',
      place_name: 'Kudalasangama',
      author_name: 'Veena Hiremath',
      author_location: 'Dharwad, Karnataka',
      rating: 5,
      title: 'Deep Spiritual Serenity',
      comment: 'The confluence of Krishna and Malaprabha rivers is spiritually uplifting. Basavannas Aikya Mantapa inside the cylindrical glass structure in the river is a divine sight.',
      visit_season: 'Monsoon (August)',
      helpful_count: 31,
      verified: true
    },
    {
      id: 'rev-5',
      place_slug: 'almatti-dam',
      place_name: 'Almatti Dam & Gardens',
      author_name: 'Rajesh & Pooja Kulkarni',
      author_location: 'Pune, Maharashtra',
      rating: 5,
      title: 'Spectacular Water Reservoir and Gardens',
      comment: 'The terraced gardens modeled on Brindavan are magnificent. The evening musical fountain and laser illumination show against the colossal dam gates was breathtaking for the entire family.',
      visit_season: 'Winter (October)',
      helpful_count: 25,
      verified: true
    }
  ];

  console.log('Seeding reviews...');
  for (const r of reviews) {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/reviews`, {
      method: 'POST',
      headers,
      body: JSON.stringify(r)
    });
    console.log(`Review ${r.id}: status ${res.status}`);
  }

  console.log('Seeding completed successfully!');
}

seed().catch(console.error);
