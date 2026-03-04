import AdmissionPath from "@/components/AdmissionPath";
import Carousel from "@/components/Carousel";
import Infrastructure from "@/components/Infrastructure";
import NewsAndEvents from "@/components/NewsAndEvents";
import PillarsOfExcellence from "@/components/PillarOfExcellence";
import PresidentMessage from "@/components/PresidentMessage";
import QuickStats from "@/components/QuickStats";
import WelcomeSection from "@/components/WelcomeSection";

export default function Home() {
  return (
    <>
      <Carousel />
      {/* <PresidentMessage /> */}
      <WelcomeSection />
      <QuickStats />
      <PillarsOfExcellence />
      <Infrastructure />
      <NewsAndEvents />
      <AdmissionPath />
    </>
  );
}
