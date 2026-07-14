import { HeroSection } from "@/components/sections/HeroSection";
import { WelcomeSection } from "@/components/sections/WelcomeSection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { CurriculumSection } from "@/components/sections/CurriculumSection";
import { LabsShowcase } from "@/components/sections/LabsShowcase";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { FacilitiesSection } from "@/components/sections/FacilitiesSection";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="cv-auto">
        <WelcomeSection />
      </div>
      <div className="cv-auto">
        <PillarsSection />
      </div>
      <div className="cv-auto">
        <CurriculumSection />
      </div>
      <div className="cv-auto">
        <LabsShowcase />
      </div>
      <div className="cv-auto">
        <ValuesSection />
      </div>
      <div className="cv-auto">
        <FacilitiesSection />
      </div>
      <CTASection />
      <div className="cv-auto">
        <FAQSection />
      </div>
    </>
  );
}
