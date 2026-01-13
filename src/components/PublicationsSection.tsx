import React from 'react';
import { BookOpen, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface HighlightedPublication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi: string;
}

const highlightedPublications: HighlightedPublication[] = [
  {
    title: "Generating synthetic computed tomography for radiotherapy: SynthRAD2023 challenge report",
    authors: "Huijben EMC, Terpstra ML, Pai S, Thummerer A, Koopmans P, Afonso M, Van Eijnatten M, Gurney-Champion O, Chen Z, Zhang Y, **Maspero M**, et al.",
    journal: "Med Image Anal",
    year: 2024,
    doi: "https://doi.org/10.1016/j.media.2024.103276"
  },
  {
    title: "Deep learning based synthetic-CT generation in radiotherapy and PET: A review",
    authors: "Spadea MF, **Maspero M**, Zaffino P, Seco J.",
    journal: "Med Phys",
    year: 2021,
    doi: "https://doi.org/10.1002/mp.15150"
  },
  {
    title: "Dose evaluation of fast synthetic-CT generation using a generative adversarial network for general pelvis MR-only radiotherapy",
    authors: "**Maspero M**, Savenije MHF, Dinkla AM, Seevinck PR, Intven MPW, Jurgenliemk-Schulz IM, Kerkmeijer LGW, van den Berg CAT.",
    journal: "Phys Med Biol",
    year: 2018,
    doi: "https://doi.org/10.1088/1361-6560/aada6d"
  },
  {
    title: "A single neural network for cone-beam computed tomography-based radiotherapy of head-and-neck, lung and breast cancer",
    authors: "**Maspero M**, Houweling AC, Savenije MHF, van Heijst TCF, Verhoeff JJC, Kotte ANTJ, van den Berg CAT.",
    journal: "Phys Imaging Radiat Oncol",
    year: 2020,
    doi: "https://doi.org/10.1016/j.phro.2020.04.002"
  },
  {
    title: "Clinical implementation of MRI-based organs-at-risk auto-segmentation with convolutional networks for prostate radiotherapy",
    authors: "Savenije MHF, **Maspero M**, Sikkes GG, van der Voort van Zyp JRN, Kotte ANTJ, Bol GH, van den Berg CAT.",
    journal: "Radiat Oncol",
    year: 2020,
    doi: "https://doi.org/10.1186/s13014-020-01528-0"
  },
  {
    title: "Deep learning-based synthetic CT generation for paediatric brain MR-only photon and proton radiotherapy",
    authors: "**Maspero M**, Bentvelzen LG, Savenije MHF, Guerreiro F, Seravalli E, Janssens GO, van den Berg CAT, Philippens MEP.",
    journal: "Radiother Oncol",
    year: 2020,
    doi: "https://doi.org/10.1016/j.radonc.2020.09.029"
  }
];

const PublicationsSection = () => {
  const renderAuthors = (authors: string) => {
    const parts = authors.split(/(\*\*Maspero M\*\*)/g);
    
    return parts.map((part, idx) => {
      if (part === '**Maspero M**') {
        return <strong key={idx} className="text-primary font-semibold">Maspero M</strong>;
      }
      return <span key={idx}>{part}</span>;
    });
  };

  return (
    <section id="publications" className="bg-muted/30">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Selected Publications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Key publications in AI for medical imaging and radiotherapy
          </p>
        </div>

        <div className="grid gap-4 mb-8">
          {highlightedPublications.map((pub, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-4 sm:p-6">
                <div className="flex gap-4">
                  <div className="hidden sm:flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary shrink-0 text-sm font-medium">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-base sm:text-lg mb-2 leading-snug">{pub.title}</CardTitle>
                    <CardDescription className="text-muted-foreground mb-2 text-sm">
                      {renderAuthors(pub.authors)}
                    </CardDescription>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm">
                      <span className="text-primary font-medium">
                        {pub.journal}
                      </span>
                      <span className="text-muted-foreground">
                        {pub.year}
                      </span>
                      <a 
                        href={pub.doi} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-teal-600 hover:underline inline-flex items-center gap-1"
                      >
                        <ExternalLink className="h-3 w-3" />
                        DOI
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild style={{ backgroundColor: "#0050B2" }}>
            <Link to="/publications" className="gap-2">
              View All Publications
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://orcid.org/0000-0003-0347-3375" target="_blank" rel="noopener noreferrer" className="gap-2">
              <img src="https://orcid.org/assets/vectors/orcid.logo.icon.svg" alt="ORCID" className="h-4 w-4" />
              ORCID
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://scholar.google.it/citations?user=vIO1i9EAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="gap-2">
              <ExternalLink className="h-4 w-4" />
              Google Scholar
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
