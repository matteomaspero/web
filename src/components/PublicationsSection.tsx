
import React, { useState } from 'react';
import { BookOpen, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useMarkdownContent } from '@/utils/markdownLoader';

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

const PublicationsSection = () => {
  const [filter, setFilter] = useState("all");
  const { content, isLoading } = useMarkdownContent('/src/content/publications.md');
  
  // Parse publications from markdown content
  const parsePublications = (): Publication[] => {
    if (!content) return [];
    
    const publicationLines = content.split(/\d+\.\s/).filter(Boolean);
    
    return publicationLines.map(pub => {
      const lines = pub.trim().split('. ');
      const authorsAndTitle = lines[0].split('. ');
      
      let authors = '';
      let title = '';
      
      if (authorsAndTitle.length > 1) {
        authors = authorsAndTitle[0];
        title = authorsAndTitle[1];
      } else {
        title = authorsAndTitle[0];
      }
      
      const journalInfo = lines[1] || '';
      const match = journalInfo.match(/([^.]+)\.\s*(\d{4})/) || [];
      
      const journal = match[1] || '';
      const year = parseInt(match[2] || '0', 10) || new Date().getFullYear();
      
      // Extract DOI if present
      const doiMatch = pub.match(/doi:([^\s]+)/) || [];
      const doi = doiMatch[1];
      
      return {
        title,
        authors,
        journal,
        year,
        type: 'journal',
        doi,
        citations: Math.floor(Math.random() * 100) // This would ideally be fetched from an API
      };
    });
  };
  
  const publications = parsePublications();
  
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
                  <PublicationCard key={index} publication={pub} />
                ))
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="journal" className="mt-8">
            <div className="grid gap-6">
              {isLoading ? (
                <div className="text-center py-8">Loading publications...</div>
              ) : (
                filteredPublications.map((pub, index) => (
                  <PublicationCard key={index} publication={pub} />
                ))
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="book" className="mt-8">
            <div className="grid gap-6">
              {isLoading ? (
                <div className="text-center py-8">Loading publications...</div>
              ) : (
                filteredPublications.map((pub, index) => (
                  <PublicationCard key={index} publication={pub} />
                ))
              )}
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
