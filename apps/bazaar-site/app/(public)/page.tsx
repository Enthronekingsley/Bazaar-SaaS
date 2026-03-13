import DealCreationSection from "./_components/DealCreationSection";
import FAQSection from "./_components/FAQSection";
import Hero from "./_components/Hero";
import ProblemSection from "./_components/ProblemSection";
import SocialMarquee from "./_components/SocialMarquee";
import SolutionSection from "./_components/SolutionSection";
import StoreCreationSection from "./_components/StoreCreationSection";
import TestimonialsSection from "./_components/TestimonialsSection";
import TwoWaysSection from "./_components/TwoWaysSection";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <SocialMarquee />
      <ProblemSection />
      <SolutionSection />
      <TwoWaysSection />
      <StoreCreationSection />
      <DealCreationSection />
      <FAQSection />
      <TestimonialsSection />
    </div>
  );
}
