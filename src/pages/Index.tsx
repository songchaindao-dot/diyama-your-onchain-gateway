import { MainLayout } from "@/components/layout/MainLayout";
import { HeroSection } from "@/components/home/HeroSection";
import { ExchangeBanner } from "@/components/home/ExchangeBanner";
import { JourneySteps } from "@/components/home/JourneySteps";
import { QuickStats } from "@/components/home/QuickStats";
import { GlobalCTA } from "@/components/home/GlobalCTA";
import { DonationSection } from "@/components/home/DonationSection";

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <ExchangeBanner />
      <JourneySteps />
      <QuickStats />
      <GlobalCTA />
      <DonationSection />
    </MainLayout>
  );
};

export default Index;
