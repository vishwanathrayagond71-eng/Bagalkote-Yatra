export type Language = 'en' | 'hi' | 'kn';

export interface MultilingualText {
  en: string;
  hi: string;
  kn: string;
}

export type PlaceCategory = 
  | 'historic'
  | 'religious'
  | 'nature'
  | 'wildlife'
  | 'fort'
  | 'dam'
  | 'museum'
  | 'cultural';

export interface EntryFee {
  indian: string;
  foreigner: string;
  camera?: string;
}

export interface HowToReach {
  byAir: string;
  byTrain: string;
  byRoad: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface SEOData {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export interface TouristPlace {
  id: string;
  slug: string;
  title: MultilingualText;
  tagline: MultilingualText;
  category: PlaceCategory;
  featuredImage: string;
  gallery: string[];
  videoUrl?: string;
  shortDescription: MultilingualText;
  description: MultilingualText;
  history: MultilingualText;
  architecture?: MultilingualText;
  bestTimeToVisit: MultilingualText;
  entryFee: EntryFee;
  timings: MultilingualText;
  howToReach: HowToReach;
  nearbyAttractions: string[];
  coordinates: Coordinates;
  mapEmbedUrl: string;
  highlights: string[];
  status: 'published' | 'draft';
  featured?: boolean;
  rating?: number;
  reviewsCount?: number;
  seo: SEOData;
  createdAt?: string;
  updatedAt?: string;
}

export interface FestivalEvent {
  id: string;
  name: MultilingualText;
  date: string;
  month: string;
  location: MultilingualText;
  image: string;
  description: MultilingualText;
  highlights: string[];
}

export interface ItineraryDay {
  day: number;
  title: MultilingualText;
  places: string[];
  description: MultilingualText;
  image?: string;
}

export interface Itinerary {
  id: string;
  title: MultilingualText;
  duration: string;
  tagline: MultilingualText;
  image: string;
  days: ItineraryDay[];
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt: string;
  read: boolean;
}
