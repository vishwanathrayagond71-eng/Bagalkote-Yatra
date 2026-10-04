import { create } from 'zustand';

export interface OfficialContact {
  id: string;
  name: string;
  badge: {
    en: string;
    kn: string;
    hi: string;
  };
  designation: {
    en: string;
    kn: string;
    hi: string;
  };
  phone: string;
  alternatePhone?: string;
  email: string;
  officeLocation: {
    en: string;
    kn: string;
    hi: string;
  };
  timing: {
    en: string;
    kn: string;
    hi: string;
  };
  whatsapp?: string;
  isPrimary?: boolean;
}

export const defaultContacts: OfficialContact[] = [
  {
    id: 'contact-1',
    name: 'Shri Ramesh K. Pujar',
    badge: {
      en: 'District Tourism Officer',
      kn: 'ಜಿಲ್ಲಾ ಪ್ರವಾಸೋದ್ಯಮ ಅಧಿಕಾರಿ',
      hi: 'जिला पर्यटन अधिकारी',
    },
    designation: {
      en: 'Assistant Director, Department of Tourism, Bagalkote District',
      kn: 'ಸಹಾಯಕ ನಿರ್ದೇಶಕರು, ಪ್ರವಾಸೋದ್ಯಮ ಇಲಾಖೆ, ಬಾಗಲಕೋಟೆ ಜಿಲ್ಲೆ',
      hi: 'सहायक निदेशक, पर्यटन विभाग, बागलकोट जिला',
    },
    phone: '+91 8354 235123',
    alternatePhone: '+91 94808 35120',
    email: 'tourism-bgk@karnataka.gov.in',
    whatsapp: '+919480835120',
    officeLocation: {
      en: 'Room 104, District Administrative Complex, Navanagar, Bagalkote - 587103',
      kn: 'ಕೊಠಡಿ ಸಂಖ್ಯೆ 104, ಜಿಲ್ಲಾಡಳಿತ ಭವನ, ನವನಗರ, ಬಾಗಲಕೋಟೆ - 587103',
      hi: 'कमरा 104, जिला प्रशासनिक भवन, नवानगर, बागलकोट - 587103',
    },
    timing: {
      en: '10:00 AM – 5:30 PM (Mon – Sat, 2nd & 4th Sat Holiday)',
      kn: 'ಬೆಳಗ್ಗೆ 10:00 – ಸಂಜೆ 5:30 (ಸೋಮ – ಶನಿ, 2ನೇ ಮತ್ತು 4ನೇ ಶನಿವಾರ ರಜೆ)',
      hi: 'प्रातः 10:00 – सायं 5:30 (सोम – शनि, 2रे और 4थे शनि अवकाश)',
    },
    isPrimary: true,
  },
  {
    id: 'contact-2',
    name: 'Smt. Vidya Patil',
    badge: {
      en: 'Badami Heritage Centre',
      kn: 'ಬಾದಾಮಿ ಪರಂಪರೆ ಕೇಂದ್ರ',
      hi: 'बादामी हेरिटेज केंद्र',
    },
    designation: {
      en: 'Senior Tourist Information & Heritage Guide Coordinator',
      kn: 'ಹಿರಿಯ ಪ್ರವಾಸಿ ಮಾಹಿತಿ ಮತ್ತು ಪರಂಪರೆ ಮಾರ್ಗದರ್ಶಕರ ಸಂಯೋಜಕಿ',
      hi: 'वरिष्ठ पर्यटक सूचना एवं विरासत गाइड समन्वयक',
    },
    phone: '+91 8357 220045',
    alternatePhone: '+91 98451 22340',
    email: 'infocentre-badami@bagalkotetourism.gov.in',
    whatsapp: '+919845122340',
    officeLocation: {
      en: 'ASI Tourist Information Desk, Near Badami Cave Temples Entrance, Badami - 587201',
      kn: 'ಎಎಸ್‌ಐ ಪ್ರವಾಸಿ ಮಾಹಿತಿ ಕೇಂದ್ರ, ಬಾದಾಮಿ ಗುಹೆಗಳ ಪ್ರವೇಶ ದ್ವಾರದ ಬಳಿ, ಬಾದಾಮಿ - 587201',
      hi: 'एएसआई पर्यटक सूचना केंद्र, बादामी गुफा मंदिर प्रवेश के पास, बादामी - 587201',
    },
    timing: {
      en: '06:00 AM – 06:00 PM (Open All 7 Days)',
      kn: 'ಬೆಳಗ್ಗೆ 06:00 – ಸಂಜೆ 06:00 (ವಾರದ ಎಲ್ಲಾ 7 ದಿನಗಳು ತೆರೆದಿರುತ್ತದೆ)',
      hi: 'प्रातः 06:00 – सायं 06:00 (सप्ताह के सातों दिन खुला)',
    },
    isPrimary: false,
  },
  {
    id: 'contact-3',
    name: '24x7 District Tourist Police & Emergency Cell',
    badge: {
      en: 'Emergency & Help Desk',
      kn: 'ತುರ್ತು ಸಹಾಯವಾಣಿ',
      hi: 'आपातकालीन सहायता',
    },
    designation: {
      en: 'Bagalkote Yatra 24x7 Traveler Safety & Medical Helpline',
      kn: 'ಬಾಗಲಕೋಟೆ ಯಾತ್ರೆ 24x7 ಪ್ರವಾಸಿಗರ ರಕ್ಷಣೆ ಮತ್ತು ವೈದ್ಯಕೀಯ ಸಹಾಯವಾಣಿ',
      hi: 'बागलकोट यात्रा 24x7 पर्यटक सुरक्षा व आपातकालीन हेल्पलाइन',
    },
    phone: '1800-425-4666',
    alternatePhone: '+91 8354 220100',
    email: 'helpdesk@bagalkotetourism.gov.in',
    whatsapp: '+918354220100',
    officeLocation: {
      en: 'Central Control Room, District Police Headquarters, Bagalkote',
      kn: 'ಕೇಂದ್ರ ನಿಯಂತ್ರಣ ಕೊಠಡಿ, ಜಿಲ್ಲಾ ಪೊಲೀಸ್ ವರಿಷ್ಠಾಧಿಕಾರಿಗಳ ಕಚೇರಿ, ಬಾಗಲಕೋಟೆ',
      hi: 'केंद्रीय नियंत्रण कक्ष, जिला पुलिस मुख्यालय, बागलकोट',
    },
    timing: {
      en: '24 Hours / 365 Days (Instant Response)',
      kn: '24 ಗಂಟೆ / 365 ದಿನಗಳು (ತಕ್ಷಣದ ಸ್ಪಂದನೆ)',
      hi: '24 घंटे / 365 दिन (त्वरित सहायता)',
    },
    isPrimary: false,
  },
];

interface ContactsState {
  contacts: OfficialContact[];
  updateContact: (id: string, updated: Partial<OfficialContact>) => void;
  resetContacts: () => void;
}

export const useContactsStore = create<ContactsState>((set) => ({
  contacts: defaultContacts,

  updateContact: (id: string, updated: Partial<OfficialContact>) => {
    set((state) => {
      const nextContacts = state.contacts.map((c) =>
        c.id === id ? { ...c, ...updated } : c
      );
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem('bagalkote_official_contacts_v1', JSON.stringify(nextContacts));
        } catch (e) {
          console.error(e);
        }
      }
      return { contacts: nextContacts };
    });
  },

  resetContacts: () => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem('bagalkote_official_contacts_v1');
      } catch (e) {
        console.error(e);
      }
    }
    set({ contacts: defaultContacts });
  },
}));

// Hydrate from localStorage on client
if (typeof window !== 'undefined') {
  try {
    const saved = localStorage.getItem('bagalkote_official_contacts_v1');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        useContactsStore.setState({ contacts: parsed });
      }
    }
  } catch (e) {
    console.error('Error hydrating contacts store:', e);
  }
}
