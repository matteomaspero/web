
import { Calendar, MapPin, Video } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useMarkdownContent } from '@/utils/markdownLoader';

interface Talk {
  title: string;
  event: string;
  date: string;
  location: string;
  type: string;
  videoLink?: string;
}

const TalksSection = () => {
  const { content, isLoading } = useMarkdownContent('/src/content/talks.md');
  
  // Parse talks from markdown content
  const parseTalks = (): Talk[] => {
    if (!content) return [];
    
    const talkEntries = content.split(/###\s/).filter(Boolean);
    // Remove the header if it exists
    const talks = talkEntries[0] === 'Selected Talks' ? talkEntries.slice(1) : talkEntries;
    
    return talks.map(entry => {
      const lines = entry.split('\n').filter(Boolean);
      const title = lines[0].trim();
      
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
  
  const talks = parseTalks();

  return (
    <section id="talks">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Selected Talks</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recent presentations and invited lectures
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
          <div className="grid gap-8 md:grid-cols-2">
            {talks.map((talk, index) => (
              <div 
                key={index} 
                className="relative bg-white rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-teal" />
                <div className="p-6 pl-8">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-navy/10 text-navy">
                      {talk.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{talk.title}</h3>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-teal" />
                      <span>{talk.event} • {talk.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-teal" />
                      <span>{talk.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TalksSection;
