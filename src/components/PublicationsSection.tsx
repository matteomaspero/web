
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
      title: "Clinical Translation of Novel Biomarkers for Early Disease Detection",
      authors: "Smith J, Johnson A, Williams B, et al.",
      journal: "Journal of Clinical Investigation",
      year: 2023,
      type: "journal",
      doi: "10.1000/xyz123",
      citations: 14,
    },
    {
      title: "Teaching Methods in Translational Medicine: A Systematic Review",
      authors: "Smith J, Brown R, Davis M.",
      journal: "Academic Medicine",
      year: 2022,
      type: "journal",
      doi: "10.1000/abc456",
      citations: 8,
    },
    {
      title: "The Future of Precision Medicine: Implications for Clinical Practice",
      authors: "Rodriguez C, Smith J, Lee K.",
      journal: "New England Journal of Medicine",
      year: 2021,
      type: "journal",
      doi: "10.1000/def789",
      citations: 23,
    },
    {
      title: "Translational Research Methods: From Bench to Bedside",
      authors: "Smith J.",
      publisher: "Academic Press",
      year: 2022,
      type: "book",
      isbn: "978-0-12-345678-9",
    },
    {
      title: "Implementing Evidence-Based Practice in Healthcare Settings",
      authors: "Smith J, Miller P, Wilson T, et al.",
      journal: "BMJ Quality & Safety",
      year: 2020,
      type: "journal",
      doi: "10.1000/ghi101",
      citations: 31,
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
            Contributing to the scientific community through peer-reviewed research articles, 
            books, and review papers.
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setFilter("all")}>All Publications</TabsTrigger>
              <TabsTrigger value="journal" onClick={() => setFilter("journal")}>Journal Articles</TabsTrigger>
              <TabsTrigger value="book" onClick={() => setFilter("book")}>Books & Chapters</TabsTrigger>
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
            <Download className="h-4 w-4" />
            Download Full CV
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
