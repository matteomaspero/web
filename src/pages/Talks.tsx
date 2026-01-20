import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, ExternalLink, GraduationCap, Users, Award, Monitor, Presentation } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useMarkdownContent } from '@/utils/markdownLoader';

interface Talk {
  title: string;
  event: string;
  date: string;
  location: string;
  type: string;
  year: number;
  url?: string;
}

const Talks = () => {
  const { content, isLoading } = useMarkdownContent('src/content/talks.md');
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const parseTalks = (): Talk[] => {
    if (!content) return [];
    
    const talks: Talk[] = [];
    const lines = content.split('\n');
    
    let currentTalk: Partial<Talk> = {};
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('### ')) {
        if (currentTalk.title && currentTalk.event) {
          talks.push(currentTalk as Talk);
        }
        currentTalk = { title: line.replace('### ', '') };
      } else if (line.includes(' - ') && currentTalk.title && !currentTalk.event) {
        const parts = line.split(' - ');
        if (parts.length >= 4) {
          currentTalk.event = parts[0].trim();
          currentTalk.date = parts[1].trim();
          currentTalk.location = parts[2].trim();
          currentTalk.type = parts[3].trim();
          // Extract year from date
          const yearMatch = currentTalk.date.match(/\d{4}/);
          currentTalk.year = yearMatch ? parseInt(yearMatch[0]) : 2024;
        }
      } else if (line.startsWith('http') && currentTalk.title && currentTalk.event) {
        currentTalk.url = line.trim();
      }
    }
    
    if (currentTalk.title && currentTalk.event) {
      talks.push(currentTalk as Talk);
    }
    
    return talks;
  };

  const talks = useMemo(() => parseTalks(), [content]);

  const talkTypes = useMemo(() => {
    const types = new Set(talks.map(t => t.type));
    return ['All', ...Array.from(types)];
  }, [talks]);

  const filteredTalks = useMemo(() => {
    if (activeFilter === 'All') return talks;
    return talks.filter(t => t.type === activeFilter);
  }, [talks, activeFilter]);

  const groupedTalks = useMemo(() => {
    const groups: { [year: number]: Talk[] } = {};
    filteredTalks.forEach(talk => {
      if (!groups[talk.year]) {
        groups[talk.year] = [];
      }
      groups[talk.year].push(talk);
    });
    return groups;
  }, [filteredTalks]);

  const sortedYears = Object.keys(groupedTalks)
    .map(Number)
    .sort((a, b) => b - a);

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'educational':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
      case 'seminar':
        return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'best proffered papers':
        return 'bg-amber-100 text-amber-800 hover:bg-amber-200';
      case 'online education':
        return 'bg-purple-100 text-purple-800 hover:bg-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'educational':
        return <GraduationCap className="h-4 w-4" />;
      case 'seminar':
        return <Users className="h-4 w-4" />;
      case 'best proffered papers':
        return <Award className="h-4 w-4" />;
      case 'online education':
        return <Monitor className="h-4 w-4" />;
      default:
        return <Presentation className="h-4 w-4" />;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-slate-200 rounded w-48"></div>
            <div className="h-12 bg-slate-200 rounded w-96"></div>
            <div className="grid gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="h-32 bg-slate-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Back navigation */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2" style={{ color: "#0050B2" }}>
            Invited Talks
          </h1>
          <p className="text-muted-foreground text-lg">
            {talks.length} invited talks, educational sessions, and seminars
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {talkTypes.map(type => (
            <Button
              key={type}
              variant={activeFilter === type ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(type)}
              className={activeFilter === type ? "" : "hover:bg-muted"}
            >
              {type}
              {type === 'All' && ` (${talks.length})`}
              {type !== 'All' && ` (${talks.filter(t => t.type === type).length})`}
            </Button>
          ))}
        </div>

        {/* Talks grouped by year */}
        <div className="space-y-8">
          {sortedYears.map(year => (
            <div key={year}>
              <h2 className="text-2xl font-semibold mb-4 text-foreground border-b pb-2">
                {year}
              </h2>
              <div className="grid gap-4">
                {groupedTalks[year].map((talk, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <Badge className={`mb-2 inline-flex items-center gap-1.5 ${getTypeColor(talk.type)}`}>
                            {getTypeIcon(talk.type)}
                            {talk.type}
                          </Badge>
                          <CardTitle className="text-lg leading-tight">
                            {talk.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <span className="font-medium text-foreground">{talk.event}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {talk.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {talk.location}
                        </div>
                      </div>
                      {talk.url && (
                        <a 
                          href={talk.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm mt-3 hover:underline"
                          style={{ color: "#0050B2" }}
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Visit Event
                        </a>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredTalks.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No talks found for the selected filter.
          </div>
        )}
      </div>
    </div>
  );
};

export default Talks;
