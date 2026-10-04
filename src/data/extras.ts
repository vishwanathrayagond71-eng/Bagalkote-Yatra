import { FestivalEvent, Itinerary } from '@/types';

export const festivalsData: FestivalEvent[] = [
  {
    id: 'banashankari-jathre',
    name: {
      en: 'Banashankari Jathre (Car Festival)',
      hi: 'बनशंकरी जात्रे (रथोत्सव)',
      kn: 'ಬನಶಂಕರಿ ಜಾತ್ರೆ (ಮಹಾ ರಥೋತ್ಸವ)',
    },
    date: 'Full Moon Day of Pushya (Jan - Feb)',
    month: 'January / February',
    location: {
      en: 'Cholachagudda, Badami',
      hi: 'चोलचगुड़ा, बादामी',
      kn: 'ಚೋಳಚಗುಡ್ಡ, ಬಾದಾಮಿ',
    },
    image: '/images/destinations/banashankari-temple.jpg',
    description: {
      en: 'One of the grandest annual temple fairs of Karnataka. The colossal wooden temple chariot is pulled by thousands of devotees amidst folk dances, traditional wrestling bouts, agricultural fairs, and colourful bazaar lanes.',
      hi: 'कर्नाटक के सबसे भव्य वार्षिक मेलों में से एक। पारंपरिक लोक नृत्य, कुश्ती और रंग-बिरंगे बाजारों के बीच हजारों भक्तों द्वारा विशाल रथ खींचा जाता है।',
      kn: 'ಉತ್ತರ ಕರ್ನಾಟಕದ ಅತ್ಯಂತ ದೊಡ್ಡ ವಾರ್ಷಿಕ ಜಾತ್ರೆ. ಬೃಹತ್ ಮರದ ರಥವನ್ನು ಲಕ್ಷಾಂತರ ಭಕ್ತರು ಎಳೆಯುತ್ತಾರೆ. ಡೊಳ್ಳು ಕುಣಿತ, ಕುಸ್ತಿ ಪಂದ್ಯಗಳು, ದನಗಳ ಜಾತ್ರೆ ಹಾಗೂ ತಿಂಗಳ ಕಾಲ ನಡೆಯುವ ಬೃಹತ್ ಸಂತೆಗೆ ಈ ಜಾತ್ರೆ ಸಾಕ್ಷಿಯಾಗಿದೆ.',
    },
    highlights: ['Grand Rathotsava', 'Traditional wrestling matches', 'Agricultural livestock fair', 'Folk dances & drama'],
  },
  {
    id: 'chalukya-utsava',
    name: {
      en: 'Chalukya Utsava (Heritage Festival)',
      hi: 'चालुक्य उत्सव (विरासत महोत्सव)',
      kn: 'ಚಾಲುಕ್ಯ ಉತ್ಸವ (ರಾಷ್ಟ್ರೀಯ ಸಾಂಸ್ಕೃತಿಕ ವೈಭವ)',
    },
    date: 'February / March annually',
    month: 'February',
    location: {
      en: 'Badami, Pattadakal & Aihole',
      hi: 'बादामी, पट्टदकल और ऐहोले',
      kn: 'ಬಾದಾಮಿ, ಪಟ್ಟದಕಲ್ಲು ಮತ್ತು ಐಹೊಳೆ',
    },
    image: '/images/destinations/badami-cave-temples.jpg',
    description: {
      en: 'A state-level celebration of art and heritage. Illuminated 6th-century rock-cut temples provide an awe-inspiring open-air backdrop for India’s finest classical musicians, Bharatanatyam, and Kathak dancers.',
      hi: 'कला और संस्कृति का भव्य राज्य स्तरीय उत्सव। प्रदीप्त प्राचीन गुफा मंदिरों की पृष्ठभूमि में देश के शीर्ष शास्त्रीय संगीतकारों और नर्तकों द्वारा प्रस्तुतियां दी जाती हैं।',
      kn: 'ಬಾದಾಮಿ ಚಾಲುಕ್ಯರ ಗತವೈಭವವನ್ನು ಮರುಕಳಿಸುವ ರಾಜ್ಯಮಟ್ಟದ ಸಾಂಸ್ಕೃತಿಕ ಉತ್ಸವ. ದೀಪಾಲಂಕೃತ ಕೆಂಪು ಬಂಡೆಗಳ ದೇಗುಲಗಳ ಹಿನ್ನೆಲೆಯಲ್ಲಿ ದೇಶದ ಶ್ರೇಷ್ಠ ಸಂಗೀತಗಾರರು ಮತ್ತು ನೃತ್ಯಪಟುಗಳು ಪ್ರದರ್ಶನ ನೀಡುತ್ತಾರೆ.',
    },
    highlights: ['Illuminated monument stages', 'Classical dance performances', 'Historical seminars', 'Laser sound & light show'],
  },
  {
    id: 'pattadakal-dance-festival',
    name: {
      en: 'Pattadakal Dance Festival',
      hi: 'पट्टदकल नृत्य महोत्सव',
      kn: 'ಪಟ್ಟದಕಲ್ಲು ನೃತ್ಯೋತ್ಸವ',
    },
    date: 'January every year',
    month: 'January',
    location: {
      en: 'Virupaksha Temple Courtyard, Pattadakal',
      hi: 'विरूपाक्ष मंदिर प्रांगण, पट्टदकल',
      kn: 'ವಿರೂಪಾಕ್ಷ ದೇವಾಲಯ ಪ್ರಾಂಗಣ, ಪಟ್ಟದಕಲ್ಲು',
    },
    image: '/images/destinations/pattadakal-monuments.jpg',
    description: {
      en: 'Organised by the Government of Karnataka against the UNESCO monument backdrop. Renowned classical dancers perform Odissi, Kuchipudi, Kathakali, and Yakshagana under starlit heritage skies.',
      hi: 'यूनेस्को स्मारक की पृष्ठभूमि में आयोजित। प्रसिद्ध शास्त्रीय नर्तक तारों भरी रात में ओडिसी, कुचिपुड़ी और कथकली प्रस्तुत करते हैं।',
      kn: 'ಯುನೆಸ್ಕೋ ವಿಶ್ವ ಪರಂಪರೆ ತಾಣದ ಮಡಿಲಲ್ಲಿ ಕರ್ನಾಟಕ ಸರ್ಕಾರವು ನಡೆಸುವ ಅಂತರರಾಷ್ಟ್ರೀಯ ನೃತ್ಯ ಸಂಭ್ರಮ. ಭರತನಾಟ್ಯ, ಒಡಿಸ್ಸಿ, ಕಥಕ್ಕಳಿ ಹಾಗೂ ಯಕ್ಷಗಾನ ಕಲೆಯ ರಸದೌತಣ.',
    },
    highlights: ['UNESCO monument backdrop', 'All-India classical exponents', 'Craft & handloom bazaar', 'Photography exhibition'],
  },
  {
    id: 'basava-jayanti',
    name: {
      en: 'Kudalasangama Basava Jayanti',
      hi: 'कूडलसंगम बसव जयंती',
      kn: 'ಕೂಡಲಸಂಗಮ ಬಸವ ಜಯಂತಿ ಮಹೋತ್ಸವ',
    },
    date: 'April / May (Vaishakha Shukla Tritiya)',
    month: 'April / May',
    location: {
      en: 'Kudalasangama Temple Complex',
      hi: 'कूडलसंगम मंदिर परिसर',
      kn: 'ಕೂಡಲಸಂಗಮ ಕ್ಷೇತ್ರ',
    },
    image: '/images/destinations/kudalasangama.jpg',
    description: {
      en: 'Spiritual commemoration of 12th-century philosopher-statesman Basavanna. Tens of thousands of devotees assemble at the sacred confluence to recite Vachanas and participate in Sharana intellectual discourses.',
      hi: '12वीं शताब्दी के समाज सुधारक बसवेश्वर का जन्मदिवस और आध्यात्मिक समागम। हजारों श्रद्धालु संगम पर एकत्रित होकर वचनों का पाठ करते हैं।',
      kn: 'ಜಗಜ್ಯೋತಿ ಬಸವಣ್ಣನವರ ಜಯಂತಿಯ ಅಂಗವಾಗಿ ಕೂಡಲಸಂಗಮದಲ್ಲಿ ಜರುಗುವ ಬೃಹತ್ ಧಾರ್ಮಿಕ ಹಾಗೂ ಸಾಂಸ್ಕೃತಿಕ ಸಮಾವೇಶ. ಲಕ್ಷಾಂತರ ಭಕ್ತರಿಂದ ವಚನ ಗಾಯನ ಮತ್ತು ಶರಣ ಸಾಹಿತ್ಯ ಗೋಷ್ಠಿಗಳು.',
    },
    highlights: ['Vachana recitation rallies', 'Holy river sangam dip', 'Spiritual seminars & discourses', 'Mass community dining (Dasoha)'],
  },
];

export const itinerariesData: Itinerary[] = [
  {
    id: 'one-day-heritage-express',
    title: {
      en: '1-Day Classic Chalukyan Express',
      hi: '1-दिवसीय क्लासिक चालुक्य एक्सप्रेस',
      kn: '1 ದಿನದ ಕ್ಲಾಸಿಕ್ ಚಾಲುಕ್ಯ ಎಕ್ಸ್‌ಪ್ರೆಸ್',
    },
    duration: '1 Day (8-10 Hours)',
    tagline: {
      en: 'The essential circuit covering Badami, Pattadakal, and Aihole in a single scenic day',
      hi: 'बादामी, पट्टदकल और ऐहोले को शामिल करने वाला एक दिवसीय प्रमुख परिपथ',
      kn: 'ಬಾದಾಮಿ, ಪಟ್ಟದಕಲ್ಲು ಮತ್ತು ಐಹೊಳೆಯ ಪ್ರಮುಖ ತಾಣಗಳನ್ನು ಒಳಗೊಂಡ ತ್ವರಿತ ದಿನದ ಪ್ರವಾಸ',
    },
    image: '/images/destinations/badami-cave-temples.jpg',
    days: [
      {
        day: 1,
        title: {
          en: 'Golden Triangle of Chalukyan Architecture',
          hi: 'चालुक्य वास्तुकला का स्वर्णिम त्रिकोण',
          kn: 'ಚಾಲುಕ್ಯ ವಾಸ್ತುಶಿಲ್ಪದ ಸುವರ್ಣ ತ್ರಿಕೋನ',
        },
        image: '/images/destinations/badami-cave-temples.jpg',
        places: ['Badami Cave Temples', 'Agastya Lake & Bhutanatha', 'Pattadakal UNESCO Monuments', 'Aihole Durga Temple'],
        description: {
          en: 'Start early morning at Badami Caves before the sun peaks. Stroll across Agastya Lake to the Bhutanatha Temples. After an authentic Jolada Rotti lunch, drive 22 km to Pattadakal to explore the UNESCO Virupaksha Temple. Conclude your evening at Aihole admiring the apsidal Durga Temple and sunset from Meguti Hill.',
          hi: 'सुबह बादामी गुफाओं के दर्शन से शुरुआत करें। इसके बाद अगस्त्य झील और भूतनाथ मंदिर देखें। दोपहर के भोजन के बाद पट्टदकल के यूनेस्को मंदिरों का भ्रमण करें और शाम को ऐहोले के दुर्गा मंदिर में सूर्यास्त देखें।',
          kn: 'ಮುಂಜಾನೆ ಬಾದಾಮಿ ಗುಹೆಗಳ ವೀಕ್ಷಣೆಯೊಂದಿಗೆ ಪ್ರವಾಸ ಆರಂಭಿಸಿ. ನಂತರ ಅಗಸ್ತ್ಯ ಕೆರೆ ಮತ್ತು ಭೂತನಾಥ ಗುಡಿಗಳನ್ನು ನೋಡಿ. ಮಧ್ಯಾಹ್ನ ಉತ್ತರ ಕರ್ನಾಟಕದ ರುಚಿಕರ ಜೋಳದ ರೊಟ್ಟಿ ಊಟ ಸವಿದು ಪಟ್ಟದಕಲ್ಲಿನ ಯುನೆಸ್ಕೋ ವಿರೂಪಾಕ್ಷ ಗುಡಿಗೆ ತೆರಳಿ. ಸಂಜೆ ಐಹೊಳೆಯ ದುರ್ಗಾ ದೇವಾಲಯ ಹಾಗೂ ಮೇಗುತಿ ಬೆಟ್ಟದ ಸೂರ್ಯಾಸ್ತದೊಂದಿಗೆ ದಿನವನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ.',
        },
      },
    ],
  },
  {
    id: 'two-day-royal-trail',
    title: {
      en: '2-Day Royal Chalukyan & Nature Trail',
      hi: '2-दिवसीय शाही चालुक्य और प्रकृति भ्रमण',
      kn: '2 ದಿನಗಳ ಭವ್ಯ ಚಾಲುಕ್ಯ ಮತ್ತು ಪ್ರಕೃತಿ ಪ್ರವಾಸ',
    },
    duration: '2 Days / 1 Night',
    tagline: {
      en: 'Immersive exploration with clifftop treks, sacred springs, and waterfalls',
      hi: 'पहाड़ी ट्रैकिंग, पवित्र झरनों और जलप्रपातों के साथ गहन अन्वेषण',
      kn: 'ಕೋಟೆ ಚಾರಣ, ನೈಸರ್ಗಿಕ ತೀರ್ಥದ ಹೊಂಡಗಳು ಮತ್ತು ಜಲಪಾತಗಳ ಸಾಹಸಮಯ ಪ್ರವಾಸ',
    },
    image: '/images/destinations/pattadakal-monuments.jpg',
    days: [
      {
        day: 1,
        title: {
          en: 'Heart of Vatapi: Caves, Fort & Sacred Springs',
          hi: 'वातापी का हृदय: गुफाएं, किला और पवित्र कुंड',
          kn: 'ವಾತಾಪಿಯ ಗತವೈಭವ: ಗುಹೆಗಳು, ಕೋಟೆ ಮತ್ತು ಪವಿತ್ರ ತೀರ್ಥಗಳು',
        },
        image: '/images/destinations/badami-fort.jpg',
        places: ['Badami Cave Temples', 'Badami Fort Trek', 'ASI Museum', 'Mahakuta Springs', 'Banashankari Temple'],
        description: {
          en: 'Morning trek up to Badami Fort and the Upper Shivalaya. Visit the ASI museum and inspect the Lajja Gauri sculpture. Spend afternoon at the holy springs of Mahakuta and conclude with evening pooja at Banashankari Temple.',
          hi: 'सुबह बादामी किले और ऊपरी शिवालय की ट्रैकिंग। एएसआई संग्रहालय का भ्रमण। दोपहर में महाकूट के प्राकृतिक जलकुंड में स्नान और शाम को बनशंकरी मंदिर में दर्शन।',
          kn: 'ಬೆಳಗ್ಗೆ ಬಾದಾಮಿ ಕೋಟೆ ಹಾಗೂ ಮೇಲಿನ ಶಿವಾಲಯಕ್ಕೆ ಚಾರಣ. ನಂತರ ಎಎಸ್‌ಐ ಮ್ಯೂಸಿಯಂನಲ್ಲಿ ಲಜ್ಜಾಗೌರಿ ಶಿಲ್ಪ ವೀಕ್ಷಣೆ. ಮಧ್ಯಾಹ್ನ ಮಹಾಕೂಟದ ವಿಷ್ಣು ಪುಷ್ಕರಣಿಯ ತಂಪಾದ ತೀರ್ಥ ಸ್ನಾನ ಮತ್ತು ಸಂಜೆ ಬನಶಂಕರಿ ದೇವಸ್ಥಾನದ ದರ್ಶನ.',
        },
      },
      {
        day: 2,
        title: {
          en: 'Master Masons Trail & Weaving Valley',
          hi: 'शिल्पकारों का मार्ग और बुनाई घाटी',
          kn: 'ಶಿಲ್ಪಿಗಳ ವಿಶ್ವವಿದ್ಯಾಲಯ & ನೇಯ್ಗೆ ಕಣಿವೆ',
        },
        image: '/images/destinations/aihole-monuments.jpg',
        places: ['Pattadakal UNESCO Site', 'Aihole Complex & Ravana Phadi', 'Guledagudda Fort & Falls'],
        description: {
          en: 'Explore Pattadakal in detail with a heritage guide. Proceed to Aihole to see the Lad Khan and Durga temples. In the afternoon, head to Guledagudda to witness traditional Khana weaving and take in scenic views from the fort.',
          hi: 'गाइड के साथ पट्टदकल के स्मारकों को विस्तार से समझें। ऐहोले के लाड खान और दुर्गा मंदिर देखें। दोपहर में गुलेदगुड्डा जाकर पारंपरिक खना बुनाई और किले का दृश्य देखें।',
          kn: 'ಪಟ್ಟದಕಲ್ಲಿನ ದೇವಾಲಯಗಳ ವಾಸ್ತುಶಿಲ್ಪವನ್ನು ಗೈಡ್ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ ಆಸ್ವಾದಿಸಿ. ನಂತರ ಐಹೊಳೆಯ ಲಾಡ್ ಖಾನ್ ಹಾಗೂ ರಾವಣಫಡಿ ಗುಹೆಗಳನ್ನು ನೋಡಿ. ಅಪರಾಹ್ನ ಗುಳೇದಗುಡ್ಡಕ್ಕೆ ತೆರಳಿ ಸಾಂಪ್ರದಾಯಿಕ ಖಣ ನೇಯ್ಗೆ ಮತ್ತು ಕೋಟೆಯ ಸೌಂದರ್ಯವನ್ನು ಕಣ್ತುಂಬಿಕೊಳ್ಳಿ.',
        },
      },
    ],
  },
  {
    id: 'three-day-grand-odyssey',
    title: {
      en: '3-Day Complete District Discovery',
      hi: '3-दिवसीय संपूर्ण जिला दर्शन',
      kn: '3 ದಿನಗಳ ಸಮಗ್ರ ಬಾಗಲಕೋಟೆ ಜಿಲ್ಲಾ ದರ್ಶನ',
    },
    duration: '3 Days / 2 Nights',
    tagline: {
      en: 'Every heritage site, wildlife sanctuary, reservoir, and silk craft covered',
      hi: 'सभी ऐतिहासिक स्थल, वन्यजीव अभयारण्य, जलाशय और रेशम शिल्प शामिल',
      kn: 'ಎಲ್ಲಾ ಪ್ರಮುಖ ಐತಿಹಾಸಿಕ ಸ್ಮಾರಕಗಳು, ವನ್ಯಜೀವಿ ಧಾಮ, ಬೃಹತ್ ಅಣೆಕಟ್ಟು ಹಾಗೂ ರೇಷ್ಮೆ ಸೀರೆಗಳ ಸಮಗ್ರ ಪ್ರವಾಸ',
    },
    image: '/images/destinations/almatti-dam.jpg',
    days: [
      {
        day: 1,
        title: {
          en: 'Badami Heritage & Holy Shrines',
          hi: 'बादामी विरासत और पावन तीर्थ',
          kn: 'ಬಾದಾಮಿ ಪರಂಪರೆ & ಪುಣ್ಯ ಕ್ಷೇತ್ರಗಳು',
        },
        image: '/images/destinations/badami-cave-temples.jpg',
        places: ['Badami Caves', 'Agastya Lake', 'Badami Fort', 'Banashankari Devi', 'Mahakuta'],
        description: {
          en: 'Comprehensive exploration of Badami town, its rock-cut caves, clifftop fortresses, and surrounding forested temple sanctuaries.',
          hi: 'बादामी शहर, इसकी गुफाओं, पहाड़ी किलों और आसपास के पवित्र तीर्थों का संपूर्ण भ्रमण।',
          kn: 'ಬಾದಾಮಿ ಗುಹೆಗಳು, ಕೋಟೆ, ಅಗಸ್ತ್ಯ ಕೆರೆ, ಬನಶಂಕರಿ ಮತ್ತು ಮಹಾಕೂಟ ಕ್ಷೇತ್ರಗಳ ವಿಸ್ತೃತ ಪ್ರವಾಸ.',
        },
      },
      {
        day: 2,
        title: {
          en: 'Pattadakal, Aihole & Ilkal Handlooms',
          hi: 'पट्टदकल, ऐहोले और इलकल हथकरघा',
          kn: 'ಪಟ್ಟದಕಲ್ಲು, ಐಹೊಳೆ ಮತ್ತು ಇಳಕಲ್ ಕೈಮಗ್ಗ ನಗರ',
        },
        image: '/images/destinations/ilkal-heritage-town.jpg',
        places: ['Pattadakal UNESCO Complex', 'Aihole Monuments', 'Ilkal Silk Saree Weavers'],
        description: {
          en: 'Morning at the architectural labs of Pattadakal and Aihole. Afternoon travel to Ilkal to witness live handloom weaving of the GI-tagged sarees and shop directly from artisan cooperatives.',
          hi: 'सुबह पट्टदकल और ऐहोले के ऐतिहासिक मंदिर। दोपहर में इलकल जाकर प्रसिद्ध जीआई-टैग साड़ियों की बुनाई देखें और खरीदारी करें।',
          kn: 'ಬೆಳಗ್ಗೆ ಪಟ್ಟದಕಲ್ಲು ಹಾಗೂ ಐಹೊಳೆಯ ವಾಸ್ತುಶಿಲ್ಪ ವೈಭವ. ನಂತರ ಇಳಕಲ್ ನಗರಕ್ಕೆ ತೆರಳಿ ನೇಯ್ಗೆಯ ಗುಂಡಿಮಗ್ಗಗಳಲ್ಲಿ ತಯಾರಾಗುವ ಜಿಐ-ಟ್ಯಾಗ್ ಇಳಕಲ್ ಸೀರೆಗಳ ನೇರ ವೀಕ್ಷಣೆ ಮತ್ತು ಖರೀದಿ.',
        },
      },
      {
        day: 3,
        title: {
          en: 'Krishna River, Basava Pilgrimage & Wildlife',
          hi: 'कृष्णा नदी, बसव तीर्थ और वन्यजीव सफारी',
          kn: 'ಕೃಷ್ಣಾ ನದಿ, ಬಸವ ಕ್ಷೇತ್ರ, ಆಲಮಟ್ಟಿ & ವನ್ಯಜೀವಿ ಸಫಾರಿ',
        },
        image: '/images/destinations/almatti-dam.jpg',
        places: ['Kudalasangama Confluence', 'Almatti Dam & Gardens', 'Yadahalli Chinkara Sanctuary'],
        description: {
          en: 'Early morning visit to Kudalasangama where the rivers meet and pay respects at Basaveshwara Aikya Mantapa. Head to Almatti Dam to enjoy the terraced Mughal Gardens and boating. In the late afternoon, proceed to Yadahalli Chinkara Sanctuary for a wildlife safari.',
          hi: 'सुबह कूडलसंगम में संगम दर्शन और बसवेश्वर समाधि। इसके बाद अलमट्टी बांध के मुगल गार्डन और नौका विहार। शाम को यदहल्ली अभयारण्य में चिंकारा वन्यजीव सफारी।',
          kn: 'ಮುಂಜಾನೆ ಕೃಷ್ಣಾ-ಮಲಪ್ರಭಾ ಸಂಗಮದ ಕೂಡಲಸಂಗಮಕ್ಕೆ ಭೇಟಿ ಮತ್ತು ಬಸವಣ್ಣನವರ ಐಕ್ಯ ಮಂಟಪದ ದರ್ಶನ. ನಂತರ ಆಲಮಟ್ಟಿ ಅಣೆಕಟ್ಟಿನ ಬೃಹತ್ ಮುಘಲ್ ಉದ್ಯಾನದಲ್ಲಿ ಬೋಟಿಂಗ್. ಅಪರಾಹ್ನ ಯಡಹಳ್ಳಿ ಚಿಂಕಾರ ವನ್ಯಧಾಮಕ್ಕೆ ತೆರಳಿ ಕೃಷ್ಣಮೃಗ/ಜಿಂಕೆಗಳ ವೀಕ್ಷಣೆ.',
        },
      },
    ],
  },
  {
    id: 'four-day-heritage-wildlife',
    title: {
      en: '4-Day Heritage, Waterfalls & Wildlife Circuit',
      hi: '4-दिवसीय हेरिटेज, जलप्रपात व वन्यजीव सर्किट',
      kn: '4 ದಿನಗಳ ಇತಿಹಾಸ, ಜಲಪಾತ ಮತ್ತು ವನ್ಯಜೀವಿ ಸಾಹಸ ಯಾತ್ರೆ',
    },
    duration: '4 Days / 3 Nights',
    tagline: {
      en: 'Combines the wonders of Vatapi with Chinkara gazelle safaris and the Malaprabha canyon',
      hi: 'वातापी के आश्चर्य, चिंकारा सफारी और मलप्रभा घाटी का संपूर्ण रोमांच',
      kn: 'ವಾತಾಪಿಯ ಗುಹೆಗಳು, ಜಿಂಕೆ ವನ್ಯಧಾಮ ಮತ್ತು ಮಲಪ್ರಭಾ ಕಣಿವೆಯ ಸುಂದರ ಪ್ರಕೃತಿ ಪ್ರವಾಸ',
    },
    image: '/images/destinations/yadahalli-chinkara-sanctuary.jpg',
    days: [
      {
        day: 1,
        title: {
          en: 'Vatapi Cliffs & Monolithic Marvels',
          hi: 'वातापी चट्टानें और एकाश्म चमत्कार',
          kn: 'ವಾತಾಪಿಯ ಕಲ್ಲಿನ ಕೋಟೆ & ಗುಹಾಂತರ ಲೋಕ',
        },
        image: '/images/destinations/badami-cave-temples.jpg',
        places: ['Badami Cave 1-4', 'Agastya Lake Walk', 'Bhutanatha Complex', 'Archaeological Museum'],
        description: {
          en: 'Explore the 4 cave temples, study the Nataraja relief, take a lakeside coracle boat or stroll to Bhutanatha. Spend sunset viewing the lake from the North Fort museum steps.',
          hi: 'चारों गुफा मंदिरों का भ्रमण, 18-भुजा नटराज प्रतिमा, अगस्त्य झील और भूतनाथ मंदिर।',
          kn: 'ಬಾದಾಮಿಯ 4 ಗುಹೆಗಳು, 18 ಕೈಗಳ ನಟರಾಜ, ಅಗಸ್ತ್ಯ ತೀರ್ಥದ ಸುತ್ತಲೂ ನಡಿಗೆ ಮತ್ತು ಭೂತನಾಥ ದೇವಾಲಯ ಸಮುಚ್ಚಯ.',
        },
      },
      {
        day: 2,
        title: {
          en: 'The Great Architectural Laboratory',
          hi: 'महान वास्तुशिल्प प्रयोगशाला',
          kn: 'ಮಹಾ ಶಿಲ್ಪಕಲಾ ವಿಶ್ವವಿದ್ಯಾಲಯ (ಐಹೊಳೆ & ಪಟ್ಟದಕಲ್ಲು)',
        },
        image: '/images/destinations/aihole-monuments.jpg',
        places: ['Aihole Durga Temple', 'Lad Khan & Huchimalli', 'Pattadakal UNESCO Complex'],
        description: {
          en: 'Visit the apsidal Durga Temple where rock temple experiments began, then marvel at the pinnacle of Dravida and Nagara architecture in Pattadakal Virupaksha and Mallikarjuna temples.',
          hi: 'ऐहोले के दुर्गा मंदिर और लाड खान मंदिर का दौरा, इसके बाद पट्टदकल के यूनेस्को विश्व धरोहर मंदिरों का विस्तृत अध्ययन।',
          kn: 'ಐಹೊಳೆಯ ದುರ್ಗಾ ದೇಗುಲ, ಲಾಡ್ ಖಾನ್ ದೇವಾಲಯ ಮತ್ತು ಪಟ್ಟದಕಲ್ಲಿನ ವಿರೂಪಾಕ್ಷ-ಮಲ್ಲಿಕಾರ್ಜುನ ವಿಶ್ವವಿಖ್ಯಾತ ಶಿಲ್ಪ ವೈಭವ.',
        },
      },
      {
        day: 3,
        title: {
          en: 'Sacred Water Springs & Hill Fortresses',
          hi: 'पवित्र जलकुंड और पहाड़ी किले',
          kn: 'ಪವಿತ್ರ ತೀರ್ಥ ಹೊಂಡಗಳು & ಗಿರಿ ಕೋಟೆಗಳು',
        },
        image: '/images/destinations/mahakuta-temple.jpg',
        places: ['Mahakuta Pushkarini', 'Banashankari Temple', 'Guledagudda Fort & Waterfalls'],
        description: {
          en: 'Take a holy dip in the crystal clear perennial spring at Mahakuta. Offer worship at the Haridra Tirtha pond of Banashankari. In the afternoon, explore the Guledagudda hill fort and seasonal falls.',
          hi: 'महाकूट के प्राकृतिक जलकुंड में स्नान, बनशंकरी शक्तिपीठ दर्शन और दोपहर बाद गुलेदगुड्डा पहाड़ी किले की चढ़ाई।',
          kn: 'ಮಹಾಕೂಟದ ನೈಸರ್ಗಿಕ ತಣ್ಣೀರಿನ ಪುಷ್ಕರಣಿ, ಬನಶಂಕರಿ ದೇವಿ ಸನ್ನಿಧಿ ಮತ್ತು ಅಪರಾಹ್ನ ಗುಳೇದಗುಡ್ಡ ಬೆಟ್ಟದ ಕೋಟೆ ಹಾಗೂ ಜಲಪಾತ.',
        },
      },
      {
        day: 4,
        title: {
          en: 'Chinkara Wildlife Sanctuary & Ilkal Weavers',
          hi: 'चिंकारा वन्यजीव अभयारण्य और इलकल बुनकर',
          kn: 'ಯಡಹಳ್ಳಿ ಚಿಂಕಾರ ವನ್ಯಧಾಮ & ಇಳಕಲ್ ರೇಷ್ಮೆ ನೇಯ್ಗೆ',
        },
        image: '/images/destinations/yadahalli-chinkara-sanctuary.jpg',
        places: ['Yadahalli Chinkara Sanctuary', 'Bilagi Historical Stepwells', 'Ilkal Handloom Market'],
        description: {
          en: 'Dawn safari at Karnataka’s only Chinkara (Indian Gazelle) sanctuary in Yadahalli. Spot wolves, foxes, and blackbucks. In the afternoon, visit Ilkal town to watch masterful saree weaving and purchase authentic textiles.',
          hi: 'यदहल्ली में सुबह की चिंकारा वन्यजीव सफारी, बिलागी की ऐतिहासिक बावलियां और इलकल शहर में हथकरघा साड़ियों की खरीदारी।',
          kn: 'ಮುಂಜಾನೆ ಯಡಹಳ್ಳಿ ಚಿಂಕಾರ ವನ್ಯಧಾಮದಲ್ಲಿ ಜಿಂಕೆಗಳ ಸಫಾರಿ, ನಂತರ ಬಿಳಗಿಯ ಐತಿಹಾಸಿಕ ಬಾವಿಗಳು ಮತ್ತು ಇಳಕಲ್ ರೇಷ್ಮೆ ಮಾರುಕಟ್ಟೆ.',
        },
      },
    ],
  },
  {
    id: 'five-day-krishna-chalukya-yatra',
    title: {
      en: '5-Day Grand Chalukya & Krishna Basin Yatra',
      hi: '5-दिवसीय भव्य चालुक्य व कृष्णा बेसिन यात्रा',
      kn: '5 ದಿನಗಳ ಅಖಂಡ ಚಾಲುಕ್ಯ & ಕೃಷ್ಣಾ ಕೊಳ್ಳದ ಮಹಾಯಾತ್ರೆ',
    },
    duration: '5 Days / 4 Nights',
    tagline: {
      en: 'The definitive royal pilgrimage spanning Vatapi bluffs, river confluences, princely states, and dams',
      hi: 'वातापी, पवित्र संगम, रियासती महल और भव्य जलाशयों को समेटे हुए संपूर्ण यात्रा',
      kn: 'ಬಾದಾಮಿ ಗುಹೆಗಳು, ಪವಿತ್ರ ಸಂಗಮ, ಜಮಖಂಡಿ ರಾಜಮನೆತನ ಮತ್ತು ಆಲಮಟ್ಟಿ ಜಲಾಶಯದ ಪೂರ್ಣ ದರ್ಶನ',
    },
    image: '/images/destinations/kudalasangama.jpg',
    days: [
      {
        day: 1,
        title: {
          en: 'The Capital of Pulakeshin: Badami',
          hi: 'पुलकेशी की राजधानी: बादामी',
          kn: 'ಪುಲಕೇಶಿಯ ರಾಜಧಾನಿ: ಬಾದಾಮಿ ಗತವೈಭವ',
        },
        image: '/images/destinations/badami-cave-temples.jpg',
        places: ['Badami Cave Temples', 'Agastya Lake', 'North Fort & Cannons', 'Museum'],
        description: {
          en: 'Arrive at Badami. Explore Caves 1 to 4 with an ASI certified guide. Climb the ancient steps of North Fort to see Tipu Sultan’s canons and take in the panoramic lake vista.',
          hi: 'बादामी आगमन, चारों गुफा मंदिरों का अध्ययन, उत्तरी किले की चढ़ाई और टीपू सुल्तान की तोपें देखना।',
          kn: 'ಬಾದಾಮಿಯ 4 ಗುಹಾಂತರ ದೇವಾಲಯಗಳು, ಅಗಸ್ತ್ಯ ಕೆರೆ, ಉತ್ತರದ ಕೋಟೆಯ ಮೇಲಿನ ಟಿಪ್ಪು ಸುಲ್ತಾನನ ಫಿರಂಗಿಗಳು ಮತ್ತು ಮ್ಯೂಸಿಯಂ.',
        },
      },
      {
        day: 2,
        title: {
          en: 'Pattadakal UNESCO & Aihole Evolution',
          hi: 'पट्टदकल यूनेस्को और ऐहोले वास्तुकला',
          kn: 'ಪಟ್ಟದಕಲ್ಲು ಯುನೆಸ್ಕೋ & ಐಹೊಳೆ ಶಿಲ್ಪಕಲಾಶಾಲೆ',
        },
        image: '/images/destinations/pattadakal-monuments.jpg',
        places: ['Pattadakal Virupaksha & Mallikarjuna', 'Aihole Durga & Lad Khan', 'Meguti Jain Hill'],
        description: {
          en: 'Full day immersed in ancient Indian architectural masterworks. See the celebrated Aihole inscription of poet Ravikirti at Meguti Temple overlooking the Malaprabha plains.',
          hi: 'पट्टदकल के यूनेस्को मंदिर और ऐहोले के 125 से अधिक ऐतिहासिक मंदिरों के समूह का गहन भ्रमण।',
          kn: 'ಪಟ್ಟದಕಲ್ಲಿನ ಶಿಲ್ಪಕಲೆ ಮತ್ತು ಐಹೊಳೆಯ ಮೇಗುತಿ ಬೆಟ್ಟದಲ್ಲಿರುವ ರವಿಕೀರ್ತಿಯ ಪ್ರಸಿದ್ಧ ಐಹೊಳೆ ಶಾಸನದ ವೀಕ್ಷಣೆ.',
        },
      },
      {
        day: 3,
        title: {
          en: 'Sacred Forest Springs & Weaving Traditions',
          hi: 'पवित्र वन कुंड और बुनकर परंपरा',
          kn: 'ಮಹಾಕೂಟ, ಬನಶಂಕರಿ ದೇವಿ & ಇಳಕಲ್ ಸೀರೆಗಳು',
        },
        image: '/images/destinations/mahakuta-temple.jpg',
        places: ['Mahakuta Temple Complex', 'Banashankari Devi Peetha', 'Ilkal Heritage Town'],
        description: {
          en: 'Morning visits to Mahakuta and Banashankari. Head east to Ilkal to observe the intricate "Tope Teni" pallu interlocking technique on traditional handlooms.',
          hi: 'सुबह महाकूट और बनशंकरी मंदिर में पूजा अर्चना। दोपहर में इलकल जाकर प्रसिद्ध हथकरघा साड़ियों की बुनाई देखना।',
          kn: 'ಮಹಾಕೂಟದ ಪುಷ್ಕರಣಿ, ಬನಶಂಕರಿ ದೇವಸ್ಥಾನ ಮತ್ತು ಇಳಕಲ್ ಪಟ್ಟಣದಲ್ಲಿ ಸಾಂಪ್ರದಾಯಿಕ ಟೋಪೆ ತೆನೆ ಪಲ್ಲುವಿನ ಕೈಮಗ್ಗ ನೇಯ್ಗೆ.',
        },
      },
      {
        day: 4,
        title: {
          en: 'Holy Confluence & The Great Almatti Reservoir',
          hi: 'पवित्र संगम और विशाल अलमट्टी जलाशय',
          kn: 'ಕೂಡಲಸಂಗಮ ತೀರ್ಥ & ಆಲಮಟ್ಟಿ ಬೃಹತ್ ಅಣೆಕಟ್ಟು',
        },
        image: '/images/destinations/kudalasangama.jpg',
        places: ['Kudalasangama Sangameshwara', 'Basavanna Aikya Mantapa', 'Almatti Dam & Mughal Gardens'],
        description: {
          en: 'Visit the sacred confluence of Krishna and Malaprabha rivers at Kudalasangama. Proceed to Almatti Dam to explore the grand gardens, musical fountains, and laser show.',
          hi: 'कृष्णा और मलप्रभा नदी के संगम पर स्थित कूडलसंगम तीर्थ, इसके बाद अलमट्टी बांध के विशाल उद्यान और लेजर शो।',
          kn: 'ಕೂಡಲಸಂಗಮದ ಕೃಷ್ಣಾ-ಮಲಪ್ರಭಾ ಸಂಗಮ, ಬಸವಣ್ಣನವರ ಐಕ್ಯ ಮಂಟಪ ಮತ್ತು ಆಲಮಟ್ಟಿ ಅಣೆಕಟ್ಟಿನ ಮ್ಯೂಸಿಕಲ್ ಕಾರಂಜಿಗಳು.',
        },
      },
      {
        day: 5,
        title: {
          en: 'Princely Jamakhandi & Navanagar Heritage',
          hi: 'रियासती जमखंडी और नवानगर विरासत',
          kn: 'ಜಮಖಂಡಿ ರಾಜಮನೆತನ & ನವನಗರ ಉದ್ಯಾನಗಳು',
        },
        image: '/images/destinations/jamakhandi-heritage.jpg',
        places: ['Jamakhandi Ramatirtha Palace', 'Royal Durbar Hall', 'Navanagar Ghataprabha Viewpoint'],
        description: {
          en: 'Drive to Jamakhandi, the historic Maratha princely state. Visit Ramatirtha Palace and the Durbar hall. Conclude with evening views over Ghataprabha backwaters at Navanagar Bagalkote.',
          hi: 'रियासत कालीन जमखंडी के रामतीर्थ महल का भ्रमण और नवानगर बागलकोट में घटप्रभा जलाशय का सूर्यास्त दृश्य।',
          kn: 'ಜಮಖಂಡಿಯ ಐತಿಹಾಸಿಕ ರಾಮತೀರ್ಥ ಅರಮನೆ, ರಾಜದರ್ಬಾರ್ ಸಭಾಂಗಣ ಮತ್ತು ನವನಗರ ಬಾಗಲಕೋಟೆಯ ಘಟಪ್ರಭಾ ಹಿನ್ನೀರಿನ ಸುಂದರ ನೋಟ.',
        },
      },
    ],
  },
  {
    id: 'seven-day-ultimate-bagalkote-immersion',
    title: {
      en: '7-Day Ultimate Bagalkote Yatra Immersion',
      hi: '7-दिवसीय संपूर्ण बागलकोट यात्रा महादर्शन',
      kn: '7 ದಿನಗಳ ಸಮಗ್ರ ಬಾಗಲಕೋಟೆ ಯಾತ್ರೆ ಮಹಾದರ್ಶನ',
    },
    duration: '7 Days / 6 Nights',
    tagline: {
      en: 'The definitive once-in-a-lifetime expedition covering all 15 landmarks, royal palaces, handlooms, wildlife, and dams',
      hi: 'जिले के सभी 15 प्रमुख आकर्षणों, महलों, वन्यजीवों और संस्कृतियों की संपूर्ण यादगार यात्रा',
      kn: 'ಜಿಲ್ಲೆಯ ಎಲ್ಲಾ 15 ತಾಣಗಳು, ರಾಜಮನೆತನಗಳು, ಕೈಮಗ್ಗ, ವನ್ಯಧಾಮಗಳು ಮತ್ತು ಜಲಾಶಯಗಳ ಅಖಂಡ 7 ದಿನಗಳ ಜೀವನದ ಶ್ರೇಷ್ಠ ಪ್ರವಾಸ',
    },
    image: '/images/destinations/badami-fort.jpg',
    days: [
      {
        day: 1,
        title: {
          en: 'Vatapi Monolithic Wonder: Caves 1 to 4',
          hi: 'वातापी की गुफाएं 1 से 4',
          kn: 'ವಾತಾಪಿಯ ಶಿಲಾ ವೈಭವ: ಗುಹೆ 1 ರಿಂದ 4',
        },
        image: '/images/destinations/badami-cave-temples.jpg',
        places: ['Badami Cave 1 (Shiva)', 'Cave 2 & 3 (Vishnu)', 'Cave 4 (Jain)', 'Agastya Lake'],
        description: {
          en: 'Check in at Badami resort. Detailed walkthrough of all four rock-cut caves with historical narration. Watch golden hour reflections over Agastya Lake.',
          hi: 'चारों रॉक-कट गुफा मंदिरों का गहन अध्ययन और अगस्त्य झील में सूर्यास्त का विहंगम दृश्य।',
          kn: 'ಬಾದಾಮಿಯ 4 ಗುಹಾಂತರ ದೇಗುಲಗಳ ಶಿಲ್ಪಕಲೆಯ ಆಳವಾದ ಪರಿಚಯ ಮತ್ತು ಅಗಸ್ತ್ಯ ಕೆರೆಯ ದಡದಲ್ಲಿ ಸೂರ್ಯಾಸ್ತ ವೀಕ್ಷಣೆ.',
        },
      },
      {
        day: 2,
        title: {
          en: 'North Fort Clifftop Trek & Bhutanatha',
          hi: 'उत्तरी किला ट्रैकिंग और भूतनाथ मंदिर',
          kn: 'ಉತ್ತರ ಕೋಟೆ ಚಾರಣ ಮತ್ತು ಭೂತನಾಥ ಸಂಕೀರ್ಣ',
        },
        image: '/images/destinations/badami-fort.jpg',
        places: ['Badami North Fort', 'Upper Shivalaya', 'Bhutanatha Complex', 'Archaeological Museum'],
        description: {
          en: 'Morning trek to Upper Shivalaya atop the sandstone bluffs. Visit the lower and upper Bhutanatha temple clusters right at the water’s edge.',
          hi: 'बलुआ पत्थर की चट्टानों पर ऊपरी शिवालय की सुबह की ट्रैकिंग और झील के किनारे भूतनाथ मंदिर समूह का भ्रमण।',
          kn: 'ಬಾದಾಮಿ ಬೆಟ್ಟದ ಮೇಲಿನ ಶಿವಾಲಯ ಚಾರಣ, ಪ್ರಾಚ್ಯವಸ್ತು ಸಂಗ್ರಹಾಲಯ ಮತ್ತು ಕೆರೆಯ ನೀರಿನ ಮಡಿಲಲ್ಲಿರುವ ಭೂತನಾಥ ದೇವಾಲಯ.',
        },
      },
      {
        day: 3,
        title: {
          en: 'UNESCO World Heritage Capital: Pattadakal',
          hi: 'यूनेस्को विश्व धरोहर: पट्टदकल',
          kn: 'ಯುನೆಸ್ಕೋ ವಿಶ್ವ ಪರಂಪರೆ ತಾಣ: ಪಟ್ಟದಕಲ್ಲು',
        },
        image: '/images/destinations/pattadakal-monuments.jpg',
        places: ['Virupaksha Temple', 'Mallikarjuna Temple', 'Sangameshwara', 'Papanatha Temple'],
        description: {
          en: 'Spend an entire day deciphering the masterwork carvings depicting Ramayana and Mahabharata episodes. Photograph the grand confluence of Nagara and Dravidian architecture.',
          hi: 'पट्टदकल के यूनेस्को मंदिरों में रामायण और महाभारत के दृश्यों को दर्शाती मूर्तियों का विस्तृत अध्ययन।',
          kn: 'ಪಟ್ಟದಕಲ್ಲಿನ ವಿರೂಪಾಕ್ಷ, ಮಲ್ಲಿಕಾರ್ಜುನ, ಸಂಗಮೇಶ್ವರ ಮತ್ತು ಪಾಪನಾಥ ದೇಗುಲಗಳ ರಾಮಾಯಣ-ಮಹಾಭಾರತದ ಶಿಲ್ಪ ಫಲಕಗಳ ವಿಸ್ತೃತ ವೀಕ್ಷಣೆ.',
        },
      },
      {
        day: 4,
        title: {
          en: 'Aihole: The Cradle of Temple Architecture',
          hi: 'ऐहोले: मंदिर वास्तुकला का पालना',
          kn: 'ಐಹೊಳೆ: ಭಾರತೀಯ ದೇವಾಲಯ ವಾಸ್ತುಶಿಲ್ಪದ ತೊಟ್ಟಿಲು',
        },
        image: '/images/destinations/aihole-monuments.jpg',
        places: ['Durga Temple', 'Lad Khan Temple', 'Ravana Phadi Cave', 'Huchappayyagudi', 'Meguti Hill'],
        description: {
          en: 'Examine more than 120 stone temples representing early experiments in Indian architecture. Climb Meguti Hill for sunset over the Malaprabha river valley.',
          hi: '120 से अधिक प्राचीन मंदिरों का समूह, जहां भारतीय मंदिर वास्तुकला का जन्म हुआ। मेगुती पहाड़ी पर सूर्यास्त।',
          kn: '120ಕ್ಕೂ ಹೆಚ್ಚು ದೇವಾಲಯಗಳಿರುವ ಐಹೊಳೆಯ ವಾಸ್ತುಶಿಲ್ಪ, ರಾವಣಫಡಿ ಬಂಡೆ ಕೊರೆದ ಗುಹೆ ಮತ್ತು ಮೇಗುತಿ ಬೆಟ್ಟದಿಂದ ಕಣಿವೆಯ ಸೌಂದರ್ಯ.',
        },
      },
      {
        day: 5,
        title: {
          en: 'Sacred Springs, Hill Forts & Silk Looms',
          hi: 'पवित्र तीर्थ, पहाड़ी किले और रेशम हथकरघा',
          kn: 'ಮಹಾಕೂಟ, ಬನಶಂಕರಿ, ಗುಳೇದಗುಡ್ಡ & ಇಳಕಲ್ ರೇಷ್ಮೆ',
        },
        image: '/images/destinations/ilkal-heritage-town.jpg',
        places: ['Mahakuteshwara Temple', 'Banashankari Shakti Peetha', 'Guledagudda Fort & Falls', 'Ilkal Silk Market'],
        description: {
          en: 'Refresh at Mahakuta’s natural pushkarini. Offer prayers to Goddess Shakambhari. Explore Guledagudda fort and finish the day shopping for GI-tagged Ilkal sarees.',
          hi: 'महाकूट के पवित्र कुंड में स्नान, बनशಂಕरी देवी दर्शन, गुलेदगुड्डा किला और शाम को इलकल साड़ियों की खरीदारी।',
          kn: 'ಮಹಾಕೂಟದ ಪವಿತ್ರ ತೀರ್ಥ ಸ್ನಾನ, ಬನಶಂಕರಿ ಅಮ್ಮನವರ ದರ್ಶನ, ಗುಳೇದಗುಡ್ಡ ಗಿರಿಕೋಟೆ ಮತ್ತು ಇಳಕಲ್ ಸೀರೆಗಳ ಶಾಪಿಂಗ್.',
        },
      },
      {
        day: 6,
        title: {
          en: 'Sacred Confluence & The Great Almatti Dam',
          hi: 'पवित्र संगम और विशाल अलमट्टी बांध',
          kn: 'ಕೂಡಲಸಂಗಮ ಕ್ಷೇತ್ರ & ಆಲಮಟ್ಟಿ ಜಲಾಶಯದ ವೈಭವ',
        },
        image: '/images/destinations/almatti-dam.jpg',
        places: ['Kudalasangama Sangameshwara', 'Aikya Mantapa', 'Almatti Dam', 'Rock Garden & Fountains'],
        description: {
          en: 'Visit Kudalasangama where Saint Basaveshwara attained Aikya. Spend afternoon at Almatti Dam, exploring the Mughal Gardens, musical fountains, and boating.',
          hi: 'कूडलसंगम में बसवेश्वर समाधि दर्शन, इसके बाद अलमट्टी बांध के विशाल उद्यान, म्यूजिकल फाउंटेन और बोटिंग।',
          kn: 'ಕೂಡಲಸಂಗಮದ ಬಸವಣ್ಣನವರ ಐಕ್ಯ ಮಂಟಪ, ಕೃಷ್ಣಾ-ಮಲಪ್ರಭಾ ಸಂಗಮ, ಮತ್ತು ಆಲಮಟ್ಟಿ ಡ್ಯಾಂನ ರಾಕ್ ಗಾರ್ಡನ್, ಬೋಟಿಂಗ್.',
        },
      },
      {
        day: 7,
        title: {
          en: 'Wildlife Safari, Royal Jamakhandi & Navanagar',
          hi: 'वन्यजीव सफारी, शाही जमखंडी और नवानगर',
          kn: 'ಯಡಹಳ್ಳಿ ಜಿಂಕೆ ಸಫಾರಿ, ಜಮಖಂಡಿ ರಾಜಮನೆತನ & ನವನಗರ',
        },
        image: '/images/destinations/yadahalli-chinkara-sanctuary.jpg',
        places: ['Yadahalli Chinkara Sanctuary', 'Jamakhandi Ramatirtha Palace', 'Navanagar Lake & Garden'],
        description: {
          en: 'Morning safari at Yadahalli Chinkara Sanctuary. Tour Jamakhandi’s Maratha princely palace. Conclude your grand Bagalkote Yatra at Navanagar garden in the district center.',
          hi: 'सुबह यदहल्ली में चिंकारा सफारी, जमखंडी के ऐतिहासिक महल का भ्रमण और नवानगर बागलकोट में यात्रा का भव्य समापन।',
          kn: 'ಯಡಹಳ್ಳಿ ವನ್ಯಧಾಮದಲ್ಲಿ ಚಿಂಕಾರ ಜಿಂಕೆಗಳ ಸಫಾರಿ, ಜಮಖಂಡಿ ರಾಮತೀರ್ಥ ಅರಮನೆ ಭೇಟಿ ಮತ್ತು ನವನಗರದಲ್ಲಿ ಯಾತ್ರೆಯ ಸಾರ್ಥಕ ಸಮಾರೋಪ.',
        },
      },
    ],
  },
];
