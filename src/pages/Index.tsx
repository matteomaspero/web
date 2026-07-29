import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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

const SITE_URL = "https://matteo-maspero.lovable.app";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Matteo Maspero",
  jobTitle: "Assistant Professor",
  affiliation: {
    "@type": "Organization",
    name: "UMC Utrecht — Department of Radiotherapy",
    url: "https://www.umcutrecht.nl/",
  },
  url: SITE_URL,
  sameAs: [
    "https://orcid.org/0000-0003-0347-3375",
    "https://scholar.google.it/citations?user=vIO1i9EAAAAJ&hl=en",
    "https://openalex.org/authors/A5015345825",
    "https://www.linkedin.com/in/matteo-maspero-9a8629b0/",
    "https://bsky.app/profile/matteomaspero.bsky.social",
    "https://www.researchgate.net/profile/Matteo_Maspero",
  ],
  knowsAbout: [
    "Adaptive Radiotherapy",
    "Deep Learning",
    "Medical Image Synthesis",
    "MRI-guided Radiotherapy",
    "Treatment Planning",
  ],
};

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const t = window.setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
    return () => window.clearTimeout(t);
  }, [location.hash, location.key]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Matteo Maspero — AI for Adaptive Radiotherapy | UMC Utrecht</title>
        <meta name="description" content="Matteo Maspero, Assistant Professor and Clinical Medical Physicist at UMC Utrecht. Research on AI for adaptive radiotherapy, image synthesis, segmentation, and treatment planning." />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta property="og:title" content="Matteo Maspero — AI for Adaptive Radiotherapy" />
        <meta property="og:description" content="Assistant Professor and Clinical Medical Physicist at UMC Utrecht. Research on AI for adaptive radiotherapy, image synthesis, and treatment planning." />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <script type="application/ld+json">{JSON.stringify(personJsonLd)}</script>
      </Helmet>
      <Header />
      <main>
        <Hero />
        <ResearchSection />
        <TeamSection />
        <TeachingSection />
        <PublicationsSection />
        <AwardsSection />
        <EditorialSection />
        <TalksSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
export default Index;
