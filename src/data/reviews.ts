export interface UserReview {
  id: string;
  author: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  destinationSlug: string;
  destinationName: {
    en: string;
    kn: string;
    hi: string;
  };
  travelerType: 'family' | 'solo' | 'couple' | 'friends' | 'heritage_buff';
  title: {
    en: string;
    kn: string;
    hi: string;
  };
  comment: {
    en: string;
    kn: string;
    hi: string;
  };
  verified: boolean;
  helpfulCount: number;
}

export const initialReviewsData: UserReview[] = [
  {
    id: 'rev-1',
    author: 'Dr. Priya Deshmukh',
    location: 'Pune, Maharashtra',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    date: 'February 2026',
    destinationSlug: 'badami-cave-temples',
    destinationName: {
      en: 'Badami Cave Temples',
      kn: 'ಬಾದಾಮಿ ಗುಹಾಂತರ ದೇವಾಲಯಗಳು',
      hi: 'बादामी गुफा मंदिर',
    },
    travelerType: 'heritage_buff',
    title: {
      en: 'Unmatched 6th-Century Rock-Cut Masterpieces!',
      kn: 'ಅದ್ಭುತ 6ನೇ ಶತಮಾನದ ಶಿಲ್ಪಕಲಾ ವೈಭವ!',
      hi: 'अद्वितीय 6वीं शताब्दी की शैल-उत्कीर्ण कला!',
    },
    comment: {
      en: 'Walking into Cave 3 and beholding the colossal relief of Lord Vishnu seated on the coiled serpent Adisesha is a transcendent experience. The red sandstone glowing at 8 AM and the reflection across Agastya Lake took our breath away. A must-visit heritage marvel of Karnataka!',
      kn: 'ಗುಹೆ 3 ರಲ್ಲಿ ಶೇಷಶಯನ ಮಹಾವಿಷ್ಣುವಿನ ಬೃಹತ್ ಕೆತ್ತನೆಯನ್ನು ನೋಡುವುದು ಜೀವಮಾನದ ಅನುಭವ. ಬೆಳಗ್ಗೆ 8 ಗಂಟೆಗೆ ಅಗಸ್ತ್ಯ ಕೆರೆಯ ತೀರದಲ್ಲಿ ಕೆಂಪು ಬಂಡೆಗಳ ದೇಗುಲಗಳು ಕಂಗೊಳಿಸುವ ರೀತಿ ಅದ್ಭುತ. ಪ್ರತಿಯೊಬ್ಬ ಭಾರತೀಯನೂ ನೋಡಲೇಬೇಕಾದ ಐತಿಹಾಸಿಕ ತಾಣ.',
      hi: 'गुफा संख्या 3 में शेषनाग पर विराजमान भगवान विष्णु की विशाल प्रतिमा को देखना एक अलौकिक अनुभव है। सुबह 8 बजे लाल बलुआ पत्थर की चमक और अगस्त्य झील में प्रतिबिंब मन मोह लेता है।',
    },
    verified: true,
    helpfulCount: 84,
  },
  {
    id: 'rev-2',
    author: 'Karthik Shenoy & Family',
    location: 'Bengaluru, Karnataka',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    date: 'January 2026',
    destinationSlug: 'pattadakal-monuments',
    destinationName: {
      en: 'Pattadakal UNESCO Monuments',
      kn: 'ಪಟ್ಟದಕಲ್ಲು ಯುನೆಸ್ಕೋ ಸ್ಮಾರಕಗಳು',
      hi: 'पट्टदकल यूनेस्को स्मारक',
    },
    travelerType: 'family',
    title: {
      en: 'World-Class UNESCO Heritage by the Malaprabha River',
      kn: 'ಮಲಪ್ರಭಾ ತೀರದ ವಿಶ್ವ ದರ್ಜೆಯ ಯುನೆಸ್ಕೋ ಪರಂಪರೆ',
      hi: 'मलप्रभा नदी के तट पर विश्व स्तरीय यूनेस्को धरोहर',
    },
    comment: {
      en: 'The architectural harmony between the Dravidian Virupaksha temple and the northern Nagara Galaganatha temple in a single courtyard is pure genius. The ASI gardens are immaculate. We hired a licensed guide who explained the 8th-century inscriptions. Our kids thoroughly enjoyed the trip!',
      kn: 'ಒಂದೇ ಆವರಣದಲ್ಲಿ ದ್ರಾವಿಡ ಶೈಲಿಯ ವಿರೂಪಾಕ್ಷ ಗುಡಿ ಮತ್ತು ಉತ್ತರ ಭಾರತದ ನಾಗರ ಶೈಲಿಯ ಗಳಗನಾಥ ಗುಡಿಗಳನ್ನು ನೋಡುವುದು ಅದ್ಭುತ. ಎಎಸ್‌ಐ ಉದ್ಯಾನಗಳು ಅತ್ಯಂತ ಸುಂದರವಾಗಿವೆ. ನಮ್ಮ ಕುಟುಂಬಕ್ಕೆ ಇದು ಅತ್ಯಂತ ಸ್ಮರಣೀಯ ಪ್ರವಾಸ.',
      hi: 'एक ही परिसर में द्रविड़ शैली के विरूपाक्ष मंदिर और उत्तर भारतीय नागर शैली के मंदिरों का संगम वास्तुकला का अनुपम उदाहरण है। भारतीय पुरातत्व सर्वेक्षण का रख-रखाव सराहनीय है।',
    },
    verified: true,
    helpfulCount: 62,
  },
  {
    id: 'rev-3',
    author: 'John & Claire Miller',
    location: 'London, United Kingdom',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    date: 'March 2026',
    destinationSlug: 'aihole-monuments',
    destinationName: {
      en: 'Aihole Temple Architecture Studio',
      kn: 'ಐಹೊಳೆ ದೇವಾಲಯ ವಾಸ್ತುಶಿಲ್ಪ ಶಾಲೆ',
      hi: 'ऐहोले मंदिर वास्तुकला प्रयोगशाला',
    },
    travelerType: 'couple',
    title: {
      en: 'Truly the Cradle of Indian Temple Architecture',
      kn: 'ಭಾರತೀಯ ದೇವಾಲಯ ವಾಸ್ತುಶಿಲ್ಪದ ನಿಜವಾದ ತೊಟ್ಟಿಲು',
      hi: 'वास्तव में भारतीय मंदिर वास्तुकला का पालना',
    },
    comment: {
      en: 'The apsidal Durga Temple with its pillared peristyle corridor is one of the most unique buildings we have seen in Asia. Climbing up to the Meguti Jain temple on the hill gives an awe-inspiring sunset view over hundreds of ancient temples dotting the village.',
      kn: 'ಅರೆ-ವೃತ್ತಾಕಾರದ ದುರ್ಗಾ ದೇವಾಲಯದ ಕಂಬಗಳ ಸಾಲು ಅತ್ಯಂತ ವಿಶಿಷ್ಟವಾಗಿದೆ. ಮೇಗುತಿ ಬೆಟ್ಟದ ಮೇಲಿನಿಂದ ಸೂರ್ಯಾಸ್ತದ ಸಮಯದಲ್ಲಿ ನೂರಾರು ದೇವಾಲಯಗಳು ಕಂಗೊಳಿಸುವ ದೃಶ್ಯ ನಯನಮನೋಹರ.',
      hi: 'स्तंभों वाले बरामदे के साथ दुर्गा मंदिर एशिया की सबसे अनूठी इमारतों में से एक है। पहाड़ी पर स्थित मेगुती जैन मंदिर से सूर्यास्त का नजारा अद्भुत दिखाई देता है।',
    },
    verified: true,
    helpfulCount: 51,
  },
  {
    id: 'rev-4',
    author: 'Ananya Hegde',
    location: 'Hubballi, Karnataka',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    date: 'December 2025',
    destinationSlug: 'ilkal-heritage-town',
    destinationName: {
      en: 'Ilkal GI Handloom Saree Town',
      kn: 'ಇಳಕಲ್ ಜಿಐ ಕೈಮಗ್ಗ ರೇಷ್ಮೆ ಸೀರೆಗಳ ನಗರಿ',
      hi: 'इलकल जीआई हथकरघा साड़ी नगर',
    },
    travelerType: 'solo',
    title: {
      en: 'Incredible Live Weaving & Authentic Sarees!',
      kn: 'ನೇಯ್ಗೆಯ ಸಾಂಪ್ರದಾಯಿಕ ಕಲೆ & ಅಪ್ಪಟ ಇಳಕಲ್ ಸೀರೆಗಳು!',
      hi: 'अद्भुत हथकरघा बुनाई और प्रामाणिक साड़ियां!',
    },
    comment: {
      en: 'Visiting the artisan weaver cooperatives in Ilkal was a cultural revelation. Watching master weavers interlock the red silk Tope Teni pallu with pit looms was mesmerizing. I purchased authentic GI-tagged sarees directly from the weaver societies at honest prices!',
      kn: 'ಇಳಕಲ್‌ನ ನೇಕಾರರ ಕಾಲೋನಿಗೆ ಭೇಟಿ ನೀಡಿದ್ದು ಅದ್ಭುತ ಅನುಭವ. ಕುಳಿಮಗ್ಗಗಳಲ್ಲಿ ಕೆಂಪು ಟೋಪೆ ತೆನೆ ಪಲ್ಲುವನ್ನು ಬೆಸೆಯುವ ಕೌಶಲ ಬೆರಗುಗೊಳಿಸುತ್ತದೆ. ನೇರವಾಗಿ ನೇಕಾರರ ಸಹಕಾರ ಸಂಘಗಳಿಂದ ಖರೀದಿಸಿದೆ.',
      hi: 'इलकल के बुनकर परिवारों से मिलना बहुत ज्ञानवर्धक रहा। पारंपरिक गड्ढा करघे पर टोपे तेनी पल्लू की बुनाई देखना मंत्रमुग्ध कर देने वाला था। सीधे बुनकरों से असली जीआई-टैग साड़ियां खरीदीं।',
    },
    verified: true,
    helpfulCount: 43,
  },
  {
    id: 'rev-5',
    author: 'Rajeshwari Patil',
    location: 'Vijayapura, Karnataka',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    date: 'January 2026',
    destinationSlug: 'kudalasangama',
    destinationName: {
      en: 'Kudalasangama Sacred Sangam',
      kn: 'ಕೂಡಲಸಂಗಮ ಪವಿತ್ರ ಸಂಗಮ ಕ್ಷೇತ್ರ',
      hi: 'कूडलसंगम पवित्र संगम',
    },
    travelerType: 'family',
    title: {
      en: 'Peaceful Spiritual Confluence of Rivers & Philosophy',
      kn: 'ಕೃಷ್ಣಾ-ಮಲಪ್ರಭಾ ಸಂಗಮ ಹಾಗೂ ಶರಣ ತತ್ವದ ಪವಿತ್ರ ಕ್ಷೇತ್ರ',
      hi: 'नदियों और बसवेश्वर दर्शन का शांतिपूर्ण संगम',
    },
    comment: {
      en: 'The glass cylindrical structure encasing Basavanna’s Aikya Mantapa surrounded by holy waters is deeply moving. The Sangameshwara temple atmosphere is serene, and the free community dining (Dasoha) served with piping hot Jolada Rotti is heartwarming.',
      kn: 'ನೀರಿನ ನಡುವೆ ಬಸವಣ್ಣನವರ ಐಕ್ಯ ಮಂಟಪವನ್ನು ಸಂರಕ್ಷಿಸಿರುವ ಗಾಜಿನ ಗೋಪುರ ಅತ್ಯಂತ ಆಕರ್ಷಕವಾಗಿದೆ. ಸಂಗಮೇಶ್ವರ ದೇಗುಲದ ಪ್ರಶಾಂತತೆ ಹಾಗೂ ಬಿಸಿ ಜೋಳದ ರೊಟ್ಟಿಯ ದಾಸೋಹ ಪ್ರತಿಯೊಬ್ಬರಿಗೂ ಸಮಾಧಾನ ನೀಡುತ್ತದೆ.',
      hi: 'पानी के बीच बसवेश्वर जी की समाधि (ऐक्य मंटप) को देखना अत्यंत शांतिदायक है। संगमेश्वर मंदिर का वातावरण शांत है और निशुल्क दासोह (प्रसादम) अत्यंत स्वादिष्ट है।',
    },
    verified: true,
    helpfulCount: 38,
  },
  {
    id: 'rev-6',
    author: 'Vikram & Sneha Rathore',
    location: 'Jaipur, Rajasthan',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    date: 'February 2026',
    destinationSlug: 'almatti-dam',
    destinationName: {
      en: 'Almatti Dam & Terraced Gardens',
      kn: 'ಆಲಮಟ್ಟಿ ಅಣೆಕಟ್ಟು & ಮೊಘಲ್ ಉದ್ಯಾನ',
      hi: 'अलमट्टी बांध और मुगल गार्डन',
    },
    travelerType: 'couple',
    title: {
      en: 'Massive Reservoir & Spectacular Musical Fountain!',
      kn: 'ಬೃಹತ್ ಜಲಾಶಯ ಮತ್ತು ಅದ್ಭುತ ಸಂಗೀತ ಕಾರಂಜಿ!',
      hi: 'विशाल जलाशय और भव्य संगीतमय फव्वारा!',
    },
    comment: {
      en: 'Almatti Dam was a pleasant surprise! The sheer scale of the 26 crest gates and the vast expanse of the Krishna river reservoir is breathtaking. The evening laser sound and musical fountain show in the Mughal garden rivalled Brindavan Gardens of Mysuru.',
      kn: 'ಆಲಮಟ್ಟಿ ಅಣೆಕಟ್ಟು ಅದ್ಭುತವಾಗಿದೆ! 26 ಬೃಹತ್ ಕ್ರಸ್ಟ್ ಗೇಟ್‌ಗಳು ಮತ್ತು ವಿಶಾಲ ಕೃಷ್ಣಾ ಜಲಾಶಯ ಸುಂದರವಾಗಿದೆ. ಸಂಜೆಯ ಮೊಘಲ್ ಗಾರ್ಡನ್‌ನಲ್ಲಿನ ಸಂಗೀತ ಕಾರಂಜಿ ಮತ್ತು ಲೇಸರ್ ಶೋ ಮೈಸೂರಿನ ಬೃಂದಾವನದಂತೆಯೇ ಅದ್ಭುತವಾಗಿದೆ.',
      hi: 'अलमट्टी बांध का विशाल दृश्य मन मोह लेता है। शाम को मुगल गार्डन में संगीतमय फव्वारा और लेजर शो बहुत ही मनोरंजक था। नौका विहार का आनंद जरूर लें।',
    },
    verified: true,
    helpfulCount: 47,
  },
];
