
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMarkdownContent } from '@/utils/markdownLoader';

interface Talk {
  title: string;
  event: string;
  date: string;
  location: string;
  type: string;
}

const TalksSection = () => {
  const { content, isLoading } = useMarkdownContent('src/content/talks.md');
  
  // Parse talks from markdown content
  const parseTalks = (): Talk[] => {
    if (!content) return [];
    
    const talkEntries = content.split(/###\s/).filter(Boolean);
    // Remove the header if it exists
    const talks = talkEntries[0]?.includes('Selected Talks') || talkEntries[0]?.includes('Invited Talks') 
      ? talkEntries.slice(1) 
      : talkEntries;
    
    return talks.map(entry => {
      const lines = entry.split('\n').filter(Boolean);
      const title = lines[0]?.trim() || '';
      
      const detailsLine = lines.length > 1 ? lines[1] : '';
      const details = detailsLine.split(' - ').filter(Boolean);
      
      return {
        title,
        event: details[0] || '',
        date: details[1] || '',
        location: details[2] || '',
        type: details[3] || 'Presentation'
      };
    });
  };
  
  const allTalks = parseTalks();
  const recentTalks = allTalks.slice(0, 4); // Show only 4 most recent

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'educational':
        return 'bg-blue-100 text-blue-800';
      case 'seminar':
        return 'bg-green-100 text-green-800';
      case 'best proffered papers':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="talks" className="bg-white">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-4" style={{ color: "#0050B2" }}>Invited Talks</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Selected presentations at international conferences and workshops
          </p>
        </div>

        {isLoading ? (
          <div className="grid gap-8 md:grid-cols-2">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="animate-pulse bg-white rounded-lg shadow-md p-6">
                <div className="h-5 bg-slate-200 rounded w-1/4 mb-3"></div>
                <div className="h-6 bg-slate-200 rounded w-3/4 mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                  <div className="h-4 bg-slate-200 rounded w-1/3"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid gap-8 md:grid-cols-2">
              {recentTalks.map((talk, index) => (
                <div 
                  key={index} 
                  className="relative bg-white rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: "#0050B2" }} />
                  <div className="p-6 pl-8">
                    <div className="mb-2">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(talk.type)}`}>
                        {talk.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{talk.title}</h3>
                    <div className="text-sm text-muted-foreground space-y-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" style={{ color: "#0050B2" }} />
                        <span>{talk.event} • {talk.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" style={{ color: "#0050B2" }} />
                        <span>{talk.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {allTalks.length > 4 && (
              <div className="mt-8 text-center">
                <Link to="/talks">
                  <Button variant="outline" className="gap-2">
                    View All {allTalks.length} Talks
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default TalksSection;
