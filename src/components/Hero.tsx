import React from 'react';
import { ArrowDownIcon, ExternalLink } from 'lucide-react';
import OpenAlexIcon from '@/components/icons/OpenAlexIcon';
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
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://bsky.app/profile/matteomaspero.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm bg-muted rounded-full hover:bg-muted/80 transition-colors"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.043-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
                </svg>
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
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5 12 0Z" />
                </svg>
                Google Scholar
              </a>
              <a
                href="https://openalex.org/authors/A5015345825"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm bg-muted rounded-full hover:bg-muted/80 transition-colors"
              >
                <OpenAlexIcon className="h-4 w-4" />
                OpenAlex
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
                width={800}
                height={1000}
                fetchPriority="high"
                decoding="async"
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
