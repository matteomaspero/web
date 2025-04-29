
import { useState } from 'react';
import { BookOpen, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PublicationsSection = () => {
  const [filter, setFilter] = useState("all");
  
  const publications = [
    {
      title: "Deep Learning-Based Auto-Delineation of Target Volumes and Organs at Risk in Head and Neck Cancer",
      authors: "Willems S, Crijns W, La Greca Saint-Esteven A, Rasch CRN, van der Heide UA, Maspero M.",
      journal: "Seminars in Nuclear Medicine",
      year: 2023,
      type: "journal",
      doi: "10.1053/j.semnuclmed.2023.01.005",
      citations: 8,
    },
    {
      title: "Deep learning for radiation therapy planning in head-and-neck cancer",
      authors: "Maspero M, Navarro E, Willems S, Huysmans S, Tielenburg R, Staring M, et al.",
      journal: "Physics and Imaging in Radiation Oncology",
      year: 2023,
      type: "journal",
      doi: "10.1016/j.phro.2022.100371",
      citations: 6,
    },
    {
      title: "Atlas-based auto-segmentation for head and neck cancer radiation therapy planning—Deep learning versus commercial solutions",
      authors: "Willems S, Crijns W, Saint-Esteven AG, van der Veen SW, Sterpin E, Haustermans K, Maspero M, et al.",
      journal: "Medical Physics",
      year: 2023,
      type: "journal",
      doi: "10.1002/mp.16292",
      citations: 12,
    },
    {
      title: "Technical feasibility of MRI-only photon and proton treatment planning for brain tumors",
      authors: "Maspero M, Savenije MHF, Dinkla AM, Seevinck PR, Intven MPW, Jürgenliemk-Schulz IM, et al.",
      journal: "Radiotherapy and Oncology",
      year: 2020,
      type: "journal",
      doi: "10.1016/j.radonc.2018.02.021",
      citations: 68,
    },
    {
      title: "Dose evaluation of fast synthetic-CT generation using a generative adversarial network for general pelvis MR-only radiotherapy",
      authors: "Maspero M, Savenije MHF, Dinkla AM, Seevinck PR, Intven MPW, Jurgenliemk-Schulz IM, et al.",
      journal: "Physics in Medicine & Biology",
      year: 2018,
      type: "journal",
      doi: "10.1088/1361-6560/aada6d",
      citations: 154,
    }
  ];

  const filteredPublications = filter === "all" 
    ? publications 
    : publications.filter(pub => pub.type === filter);

  return (
    <section id="publications" className="bg-lightGray">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Publications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Selected peer-reviewed research articles
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setFilter("all")}>All Publications</TabsTrigger>
              <TabsTrigger value="journal" onClick={() => setFilter("journal")}>Journal Articles</TabsTrigger>
              <TabsTrigger value="book" onClick={() => setFilter("book")}>Book Chapters</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-8">
            <div className="grid gap-6">
              {filteredPublications.map((pub, index) => (
                <PublicationCard key={index} publication={pub} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="journal" className="mt-8">
            <div className="grid gap-6">
              {filteredPublications.map((pub, index) => (
                <PublicationCard key={index} publication={pub} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="book" className="mt-8">
            <div className="grid gap-6">
              {filteredPublications.map((pub, index) => (
                <PublicationCard key={index} publication={pub} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-8">
          <Button variant="outline" className="gap-2">
            <a href="https://scholar.google.it/citations?user=vIO1i9EAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              View Google Scholar Profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

interface Publication {
  title: string;
  authors: string;
  journal?: string;
  publisher?: string;
  year: number;
  type: string;
  doi?: string;
  isbn?: string;
  citations?: number;
}

const PublicationCard = ({ publication }: { publication: Publication }) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex gap-4">
          <div className="hidden sm:flex items-center justify-center h-12 w-12 rounded-full bg-navy/10 text-navy shrink-0">
            <BookOpen className="h-6 w-6" />
          </div>
          <div>
            <CardTitle className="text-lg mb-2">{publication.title}</CardTitle>
            <CardDescription className="text-muted-foreground mb-2">
              {publication.authors}
            </CardDescription>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
              <span className="text-navy">
                {publication.journal || publication.publisher}, {publication.year}
              </span>
              {publication.doi && (
                <span>
                  <a href={`https://doi.org/${publication.doi}`} target="_blank" rel="noopener noreferrer" 
                     className="text-teal hover:underline">
                    DOI: {publication.doi}
                  </a>
                </span>
              )}
              {publication.isbn && (
                <span className="text-navy">ISBN: {publication.isbn}</span>
              )}
              {publication.citations && (
                <span className="text-navy">Citations: {publication.citations}</span>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PublicationsSection;
