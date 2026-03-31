import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PackagesSection from "@/components/PackagesSection";
import AddOnsSection from "@/components/AddOnsSection";
import BookingForm from "@/components/BookingForm";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import TrustIndicatorsSection from "@/components/TrustIndicatorsSection";
import FeaturedWorkSection from "@/components/FeaturedWorkSection";
import FuneralHighlightSection from "@/components/FuneralHighlightSection";
import MobileCtaBar from "@/components/MobileCtaBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <TrustIndicatorsSection />
      <ServicesSection />
      <AboutSection />
      <FeaturedWorkSection />
      <PackagesSection />
      <AddOnsSection />
      <FuneralHighlightSection />
      <TestimonialsSection />
      <BookingForm />
      <ContactSection />
      <WhatsAppFloat />
      <MobileCtaBar />
    </div>
  );
};

export default Index;
