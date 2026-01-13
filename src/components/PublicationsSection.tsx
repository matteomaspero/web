import React, { useState } from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useMarkdownContent } from '@/utils/markdownLoader';

interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  type: 'journal' | 'conference' | 'book';
  doi?: string;
  volume?: string;
  number?: string;
  pages?: string;
}

const PublicationsSection = () => {
  const [filter, setFilter] = useState("all");
  const { content, isLoading } = useMarkdownContent('/src/content/publications.md');
  
  // Parse publications from markdown content
  const parsePublications = (): Publication[] => {
    if (!content) return [];
    
    const lines = content.split('\n').filter(line => line.match(/^\d+\./));
    
    return lines.map(line => {
      // Remove the number prefix
      const cleanLine = line.replace(/^\d+\.\s*/, '');
      
      // Extract DOI link if present
      const doiMatch = cleanLine.match(/\[DOI\]\((https?:\/\/[^\)]+)\)/);
      const doi = doiMatch ? doiMatch[1] : undefined;
      
      // Remove the DOI link from the text for parsing
      const textWithoutDoi = cleanLine.replace(/\s*\[DOI\]\([^\)]+\)/, '').trim();
      
      // Split by first period followed by space (authors end with period)
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
      
      // Find the title - it ends with a period before the journal
      const parts = rest.split(/\.\s+/);
      const title = parts[0] || '';
      const journalInfo = parts.slice(1).join('. ');
      
      // Extract year from journal info
      const yearMatch = journalInfo.match(/(\d{4})/);
      const year = yearMatch ? parseInt(yearMatch[1]) : 2024;
      
      // Determine type based on content
      let type: 'journal' | 'conference' | 'book' = 'journal';
      if (journalInfo.includes('Proc') || journalInfo.includes('Workshop') || journalInfo.includes('ISMRM')) {
        type = 'conference';
      } else if (journalInfo.includes('In:') || journalInfo.includes('Imaging in Particle Therapy')) {
        type = 'book';
      }
      
      // Extract journal name (before year or volume info)
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

  // Render authors with bold formatting for Maspero M
  const renderAuthors = (authors: string) => {
    // Split by comma and bold Maspero M or **Maspero M**
    const parts = authors.split(/(\*\*Maspero M\*\*|\*\*Maspero, Matteo\*\*)/g);
    
    return parts.map((part, idx) => {
      if (part === '**Maspero M**' || part === '**Maspero, Matteo**') {
        return <strong key={idx} className="text-primary font-semibold">Maspero M</strong>;
      }
      // Also handle cases where ** is in the text
      const cleanPart = part.replace(/\*\*/g, '');
      return <span key={idx}>{cleanPart}</span>;
    });
  };

  return (
    <section id="publications" className="bg-lightGray">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Publications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {publications.length} peer-reviewed research articles, conference proceedings, and book chapters
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setFilter("all")}>
                All ({publications.length})
              </TabsTrigger>
              <TabsTrigger value="journal" onClick={() => setFilter("journal")}>
                Journal Articles ({publications.filter(p => p.type === 'journal').length})
              </TabsTrigger>
              <TabsTrigger value="conference" onClick={() => setFilter("conference")}>
                Conference ({publications.filter(p => p.type === 'conference').length})
              </TabsTrigger>
              <TabsTrigger value="book" onClick={() => setFilter("book")}>
                Book Chapters ({publications.filter(p => p.type === 'book').length})
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-8">
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
                  <PublicationCard key={index} publication={pub} index={index + 1} renderAuthors={renderAuthors} />
                ))
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="journal" className="mt-8">
            <div className="grid gap-4">
              {isLoading ? (
                <div className="text-center py-8">Loading publications...</div>
              ) : (
                filteredPublications.map((pub, index) => (
                  <PublicationCard key={index} publication={pub} index={index + 1} renderAuthors={renderAuthors} />
                ))
              )}
            </div>
          </TabsContent>

          <TabsContent value="conference" className="mt-8">
            <div className="grid gap-4">
              {isLoading ? (
                <div className="text-center py-8">Loading publications...</div>
              ) : (
                filteredPublications.map((pub, index) => (
                  <PublicationCard key={index} publication={pub} index={index + 1} renderAuthors={renderAuthors} />
                ))
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="book" className="mt-8">
            <div className="grid gap-4">
              {isLoading ? (
                <div className="text-center py-8">Loading publications...</div>
              ) : (
                filteredPublications.map((pub, index) => (
                  <PublicationCard key={index} publication={pub} index={index + 1} renderAuthors={renderAuthors} />
                ))
              )}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-8">
          <Button variant="outline" className="gap-2" asChild>
            <a href="https://scholar.google.it/citations?user=vIO1i9EAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              View Google Scholar Profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

interface PublicationCardProps {
  publication: Publication;
  index: number;
  renderAuthors: (authors: string) => React.ReactNode;
}

const PublicationCard = ({ publication, index, renderAuthors }: PublicationCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-4 sm:p-6">
        <div className="flex gap-4">
          <div className="hidden sm:flex items-center justify-center h-10 w-10 rounded-full bg-navy/10 text-navy shrink-0 text-sm font-medium">
            {index}
          </div>
          <div className="flex-1 min-w-0">
            <CardTitle className="text-base sm:text-lg mb-2 leading-snug">{publication.title}</CardTitle>
            <CardDescription className="text-muted-foreground mb-2 text-sm">
              {renderAuthors(publication.authors)}
            </CardDescription>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm">
              <span className="text-navy font-medium">
                {publication.journal}
              </span>
              <span className="text-muted-foreground">
                {publication.year}
              </span>
              {publication.doi && (
                <a 
                  href={publication.doi} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-teal hover:underline inline-flex items-center gap-1"
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
  );
};

export default PublicationsSection;
