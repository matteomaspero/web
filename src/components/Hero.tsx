
import React from 'react';
import { ArrowDownIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useMarkdownContent } from '@/utils/markdownLoader';

const Hero = () => {
  const { content, isLoading } = useMarkdownContent('src/content/hero.md');
  
  // Get the base URL for assets
  const getBaseUrl = () => {
    const baseUrl = import.meta.env.BASE_URL || '/';
    return baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  };
  
  // Profile image URL with proper base path handling
  const profileImageUrl = "https://compimag.org/wp-content/uploads/2020/03/matteo-288x300.png";

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
