import { Trophy, Coins, Medal, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Award {
  title: string;
  organization: string;
  year: string;
  type: 'grant' | 'award' | 'fellowship';
  description?: string;
  amount?: string;
  link?: string;
}

const awards: Award[] = [
  // Grants
  {
    title: "[Grant Title Placeholder]",
    organization: "[Funding Body]",
    year: "2022-2026",
    type: 'grant',
    description: "Description of the research grant and its objectives.",
    amount: "€XXX,XXX",
  },
  {
    title: "[Second Grant Placeholder]",
    organization: "[Funding Body]",
    year: "2020-2024",
    type: 'grant',
    description: "Description of the research focus.",
  },
  // Awards
  {
    title: "[Award Name Placeholder]",
    organization: "[Awarding Organization]",
    year: "2023",
    type: 'award',
    description: "Recognition for outstanding contribution to the field.",
  },
  // Fellowships
  {
    title: "[Fellowship Name Placeholder]",
    organization: "[Institution]",
    year: "2021",
    type: 'fellowship',
    description: "Fellowship description and focus area.",
  },
];

const getIcon = (type: Award['type']) => {
  switch (type) {
    case 'grant':
      return <Coins className="h-6 w-6" />;
    case 'award':
      return <Trophy className="h-6 w-6" />;
    case 'fellowship':
      return <Medal className="h-6 w-6" />;
  }
};

const getTypeLabel = (type: Award['type']) => {
  switch (type) {
    case 'grant':
      return 'Research Grant';
    case 'award':
      return 'Award';
    case 'fellowship':
      return 'Fellowship';
  }
};

const getTypeColor = (type: Award['type']) => {
  switch (type) {
    case 'grant':
      return 'bg-emerald-100 text-emerald-700';
    case 'award':
      return 'bg-amber-100 text-amber-700';
    case 'fellowship':
      return 'bg-blue-100 text-blue-700';
  }
};

const AwardsSection = () => {
  const grants = awards.filter(a => a.type === 'grant');
  const awardsAndFellowships = awards.filter(a => a.type === 'award' || a.type === 'fellowship');

  return (
    <section id="awards" className="py-20 bg-muted/30">
      <div className="section-container">
        <h2 className="section-title" style={{ color: "#0050B2" }}>
          Awards & Grants
        </h2>
        
        {/* Research Grants */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2" style={{ color: "#0050B2" }}>
            <Coins className="h-5 w-5" />
            Research Grants
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {grants.map((grant, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700">
                        {getIcon(grant.type)}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{grant.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{grant.organization}</p>
                      </div>
                    </div>
                    {grant.link && (
                      <a 
                        href={grant.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-sm font-medium" style={{ color: "#0050B2" }}>
                      {grant.year}
                    </span>
                    {grant.amount && (
                      <span className="text-sm text-muted-foreground">
                        {grant.amount}
                      </span>
                    )}
                  </div>
                  {grant.description && (
                    <p className="text-sm text-muted-foreground">{grant.description}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Awards & Fellowships */}
        <div>
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2" style={{ color: "#0050B2" }}>
            <Trophy className="h-5 w-5" />
            Awards & Fellowships
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awardsAndFellowships.map((award, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${getTypeColor(award.type)}`}>
                      {getIcon(award.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${getTypeColor(award.type)}`}>
                          {getTypeLabel(award.type)}
                        </span>
                      </div>
                      <CardTitle className="text-base">{award.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{award.organization}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium mb-2" style={{ color: "#0050B2" }}>
                    {award.year}
                  </p>
                  {award.description && (
                    <p className="text-sm text-muted-foreground">{award.description}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-8 italic">
          Please provide your awards, grants, and fellowships to populate this section.
        </p>
      </div>
    </section>
  );
};

export default AwardsSection;
