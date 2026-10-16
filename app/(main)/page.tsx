import AboutSection from "@/components/home/AboutSection";
import { Hero } from "@/components/home/Hero";
import Services from "@/components/home/Services";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import HorizontalGallery from "@/components/home/HorizontalGallery";
import ElectricalCTA from "@/components/home/ElectricalCTA";
import ConsultationForm from "@/components/home/ConsultationForm";
import { Testimonials } from "@/components/home/testimonials";

export default function HomePage() {
  return (
    <div className="space-y-0">
      <Hero />
      <Services />
      <FeaturedServices />
      <AboutSection />
      <HorizontalGallery />
      <Testimonials />

      <ElectricalCTA />
      <ConsultationForm />
    </div>
  );
}
