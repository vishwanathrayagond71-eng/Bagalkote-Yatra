import { AnimatedWelcomeModal } from '@/components/home/AnimatedWelcomeModal';
import { HeroSection } from '@/components/home/HeroSection';
import { AllPlacesMosaicWelcome } from '@/components/home/AllPlacesMosaicWelcome';
import { HeritageOverview } from '@/components/home/HeritageOverview';
import { FeaturedDestinations } from '@/components/home/FeaturedDestinations';
import { ChalukyaCircuitMap } from '@/components/home/ChalukyaCircuitMap';
import { CultureCraftsSection } from '@/components/home/CultureCraftsSection';
import { TripPlannerTeaser } from '@/components/home/TripPlannerTeaser';
import { UserReviewsSection } from '@/components/reviews/UserReviewsSection';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <AnimatedWelcomeModal />
      <HeroSection />
      <AllPlacesMosaicWelcome />
      <HeritageOverview />
      <FeaturedDestinations />
      <ChalukyaCircuitMap />
      <CultureCraftsSection />
      <TripPlannerTeaser />
      <UserReviewsSection />
    </div>
  );
}


