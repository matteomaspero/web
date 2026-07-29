import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ResearchSection from "@/components/ResearchSection";
import TeamSection from "@/components/TeamSection";
import TeachingSection from "@/components/TeachingSection";
import PublicationsSection from "@/components/PublicationsSection";
import AwardsSection from "@/components/AwardsSection";
import EditorialSection from "@/components/EditorialSection";
import TalksSection from "@/components/TalksSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    // Wait a frame for sections to mount, then scroll
    const t = window.setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
    return () => window.clearTimeout(t);
  }, [location.hash, location.key]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ResearchSection />
      <TeamSection />
      <TeachingSection />
      <PublicationsSection />
      <AwardsSection />
      <EditorialSection />
      <TalksSection />
      <ContactSection />
      <Footer />
    </div>
  );
};
export default Index;
