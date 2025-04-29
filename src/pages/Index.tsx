
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ResearchSection from "@/components/ResearchSection";
import TeachingSection from "@/components/TeachingSection";
import PublicationsSection from "@/components/PublicationsSection";
import TalksSection from "@/components/TalksSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ResearchSection />
      <TeachingSection />
      <PublicationsSection />
      <TalksSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
