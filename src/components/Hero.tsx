import React from 'react';
import { ArrowDownIcon, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useMarkdownContent } from '@/utils/markdownLoader';

const Hero = () => {
  const { content, isLoading } = useMarkdownContent('src/content/hero.md');
  
  const profileImageUrl = "https://cig-utrecht.org/img/people/mmasp.jpg";

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            {isLoading ? (
              <div className="animate-pulse">
                <div className="h-12 bg-slate-200 rounded w-3/4 mb-4"></div>
                <div className="h-20 bg-slate-200 rounded w-full"></div>
              </div>
            ) : (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4" style={{ color: "#0050B2" }}>
                      {children}
                    </h1>
                  ),
                  p: ({ children }) => (
                    <p className="text-lg md:text-xl mb-6 text-muted-foreground">{children}</p>
                  )
                }}
              >
                {content}
              </ReactMarkdown>
            )}
            
            {/* Affiliations */}
            <div className="mb-6 space-y-1 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <span className="font-medium text-foreground">Primary:</span>
                <a href="https://research.umcutrecht.nl/researchers/maspero/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Department of Radiotherapy, UMC Utrecht
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-medium text-foreground">Secondary:</span>
                <a href="https://cig-utrecht.org/members/matteo-maspero" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Computational Imaging Group
                </a>
              </p>
            </div>
            
            {/* Academic Profile Links */}
            <div className="flex flex-wrap gap-2 mb-6">
              <a 
                href="https://www.linkedin.com/in/matteo-maspero-9a8629b0/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm bg-muted rounded-full hover:bg-muted/80 transition-colors"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                LinkedIn
              </a>
              <a 
                href="https://bsky.app/profile/matteomaspero.bsky.social" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm bg-muted rounded-full hover:bg-muted/80 transition-colors"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Bluesky
              </a>
              <a 
                href="https://orcid.org/0000-0003-0347-3375" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm bg-muted rounded-full hover:bg-muted/80 transition-colors"
              >
                <img src="https://orcid.org/assets/vectors/orcid.logo.icon.svg" alt="ORCID" className="h-4 w-4" />
                ORCID
              </a>
              <a 
                href="https://scholar.google.it/citations?user=vIO1i9EAAAAJ&hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm bg-muted rounded-full hover:bg-muted/80 transition-colors"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Google Scholar
              </a>
              <a 
                href="https://www.researchgate.net/profile/Matteo_Maspero" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm bg-muted rounded-full hover:bg-muted/80 transition-colors"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                ResearchGate
              </a>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Button asChild style={{ backgroundColor: "#0050B2" }}>
                <a href="#research">Research</a>
              </Button>
              <Button variant="outline" asChild style={{ borderColor: "#0050B2", color: "#0050B2" }}>
                <a href="#publications">Publications</a>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative rounded-2xl overflow-hidden shadow-xl animate-fade-in">
              <img 
                src={profileImageUrl} 
                alt="Matteo Maspero" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-navy/20" />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#research" className="block" style={{ color: "#0050B2" }}>
            <ArrowDownIcon className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
