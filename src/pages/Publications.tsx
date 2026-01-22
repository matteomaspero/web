import React, { useState } from 'react';
import { ArrowLeft, BookOpen, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useMarkdownContent } from '@/utils/markdownLoader';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import BackToTop from '@/components/BackToTop';

interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  type: 'journal' | 'conference' | 'book';
  doi?: string;
}

const Publications = () => {
  const [filter, setFilter] = useState("all");
  const { content, isLoading } = useMarkdownContent('/src/content/publications.md');
  
  const parsePublications = (): Publication[] => {
    if (!content) return [];
    
    const lines = content.split('\n').filter(line => line.match(/^\d+\./));
    
    return lines.map(line => {
      const cleanLine = line.replace(/^\d+\.\s*/, '');
      
      const doiMatch = cleanLine.match(/\[DOI\]\((https?:\/\/[^\)]+)\)/);
      const doi = doiMatch ? doiMatch[1] : undefined;
      
      const textWithoutDoi = cleanLine.replace(/\s*\[DOI\]\([^\)]+\)/, '').trim();
      
      const firstPeriodIdx = textWithoutDoi.indexOf('. ');
      if (firstPeriodIdx === -1) {
        return {
          title: textWithoutDoi,
          authors: '',
          journal: '',
          year: 2024,
          type: 'journal' as const
        };
      }
      
      const authors = textWithoutDoi.substring(0, firstPeriodIdx);
      const rest = textWithoutDoi.substring(firstPeriodIdx + 2);
      
      const parts = rest.split(/\.\s+/);
      const title = parts[0] || '';
      const journalInfo = parts.slice(1).join('. ');
      
      const yearMatch = journalInfo.match(/(\d{4})/);
      const year = yearMatch ? parseInt(yearMatch[1]) : 2024;
      
      let type: 'journal' | 'conference' | 'book' = 'journal';
      if (journalInfo.includes('Proc') || journalInfo.includes('Workshop') || journalInfo.includes('ISMRM')) {
        type = 'conference';
      } else if (journalInfo.includes('In:') || journalInfo.includes('Imaging in Particle Therapy')) {
        type = 'book';
      }
      
      const journalMatch = journalInfo.match(/^([^.]+?)(?:\.\s*\d{4}|\s*\d{4})/);
      const journal = journalMatch ? journalMatch[1].trim() : journalInfo.split('.')[0];
      
      return {
        title,
        authors,
        journal,
        year,
        type,
        doi
      };
    });
  };
  
  const publications = parsePublications();
  
  const filteredPublications = filter === "all" 
    ? publications 
    : publications.filter(pub => pub.type === filter);

  const renderAuthors = (authors: string) => {
    const parts = authors.split(/(\*\*Maspero M\*\*|\*\*Maspero, Matteo\*\*)/g);
    
    return parts.map((part, idx) => {
      if (part === '**Maspero M**' || part === '**Maspero, Matteo**') {
        return <strong key={idx} className="text-primary font-semibold">Maspero M</strong>;
      }
      const cleanPart = part.replace(/\*\*/g, '');
      return <span key={idx}>{cleanPart}</span>;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="section-container py-8 pt-24">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0050B2" }}>
            Publications
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            {publications.length} peer-reviewed research articles, conference proceedings, and book chapters
          </p>
          
          <div className="flex flex-wrap gap-3 mt-6">
            <Button variant="outline" size="sm" asChild>
              <a href="https://orcid.org/0000-0003-0347-3375" target="_blank" rel="noopener noreferrer" className="gap-2">
                <img src="https://orcid.org/assets/vectors/orcid.logo.icon.svg" alt="ORCID" className="h-4 w-4" />
                ORCID
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://scholar.google.it/citations?user=vIO1i9EAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="gap-2">
                <ExternalLink className="h-4 w-4" />
                Google Scholar
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://www.ncbi.nlm.nih.gov/myncbi/1LCg61DsIdlkC/bibliography/public/" target="_blank" rel="noopener noreferrer" className="gap-2">
                <ExternalLink className="h-4 w-4" />
                PubMed
              </a>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <div className="flex justify-start overflow-x-auto">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setFilter("all")}>
                All ({publications.length})
              </TabsTrigger>
              <TabsTrigger value="journal" onClick={() => setFilter("journal")}>
                Journal ({publications.filter(p => p.type === 'journal').length})
              </TabsTrigger>
              <TabsTrigger value="conference" onClick={() => setFilter("conference")}>
                Conference ({publications.filter(p => p.type === 'conference').length})
              </TabsTrigger>
              <TabsTrigger value="book" onClick={() => setFilter("book")}>
                Book ({publications.filter(p => p.type === 'book').length})
              </TabsTrigger>
            </TabsList>
          </div>
          
          {['all', 'journal', 'conference', 'book'].map(tabValue => (
            <TabsContent key={tabValue} value={tabValue} className="mt-8">
              <div className="grid gap-4">
                {isLoading ? (
                  Array(5).fill(0).map((_, index) => (
                    <div key={index} className="animate-pulse bg-white p-6 rounded-lg">
                      <div className="h-6 bg-slate-200 rounded w-3/4 mb-3"></div>
                      <div className="h-4 bg-slate-200 rounded w-full mb-2"></div>
                      <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                    </div>
                  ))
                ) : (
                  filteredPublications.map((pub, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex gap-4">
                          <div className="hidden sm:flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary shrink-0 text-sm font-medium">
                            {index + 1}
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
                              {pub.doi && (
                                <a 
                                  href={pub.doi} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="text-teal-600 hover:underline inline-flex items-center gap-1"
                                >
                                  <ExternalLink className="h-3 w-3" />
                                  DOI
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <BackToTop />
    </div>
  );
};

export default Publications;
