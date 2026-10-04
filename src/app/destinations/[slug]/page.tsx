'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import { usePlacesStore } from '@/store/placesStore';
import { DestinationDetailView } from '@/components/destinations/DestinationDetailView';
import Link from 'next/link';
import { ArrowLeft, Compass } from 'lucide-react';

export default function DestinationSlugPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { getPlaceBySlug } = usePlacesStore();

  const place = getPlaceBySlug(slug);

  if (!place) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center px-4 bg-stone-950 text-stone-200">
        <div className="w-16 h-16 rounded-2xl bg-sandstone-950 border border-sandstone-500/30 flex items-center justify-center text-amber-400 mb-4 shadow-xl">
          <Compass className="w-8 h-8" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
          Destination Not Found
        </h1>
        <p className="text-sm text-stone-400 max-w-md mb-6">
          We could not find the tourist destination you requested. It may have been updated or moved.
        </p>
        <Link
          href="/destinations"
          className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-sandstone-600 to-amber-500 text-white font-semibold text-xs transition-all hover:scale-105"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Browse All Destinations</span>
        </Link>
      </div>
    );
  }

  return <DestinationDetailView place={place} />;
}
