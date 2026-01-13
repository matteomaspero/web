import { GraduationCap, User, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TeamMember {
  name: string;
  role: "phd" | "postdoc" | "msc";
  topic: string;
  period: string;
  status: "current" | "alumni";
  links?: { label: string; url: string }[];
}

const teamMembers: TeamMember[] = [
  // Current PhD Students
  {
    name: "Linde Hesse",
    role: "phd",
    topic: "Deep learning for radiation therapy planning",
    period: "2022-Present",
    status: "current"
  },
  {
    name: "Jessica van Nes",
    role: "phd",
    topic: "Auto-segmentation of organs at risk",
    period: "2021-Present",
    status: "current"
  },
  // Alumni
  {
    name: "Stefan Ivanovikj",
    role: "msc",
    topic: "MRI-based synthetic CT generation",
    period: "2023",
    status: "alumni"
  },
  {
    name: "Jan-Willem de Jong",
    role: "msc",
    topic: "Deep learning for outcome prediction",
    period: "2022",
    status: "alumni"
  }
];

const roleLabels = {
  phd: "PhD Student",
  postdoc: "Postdoc",
  msc: "MSc Student"
};

const roleColors = {
  phd: "bg-primary/10 text-primary",
  postdoc: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
  msc: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
};

const TeamSection = () => {
  const currentMembers = teamMembers.filter(m => m.status === "current");
  const alumni = teamMembers.filter(m => m.status === "alumni");

  return (
    <section id="team" className="py-16 md:py-24 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Team & Supervision
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Current and former PhD students, postdocs, and master students
          </p>
        </div>

        {/* Current Team */}
        {currentMembers.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Current Team
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentMembers.map((member, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                          <User className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{member.name}</CardTitle>
                          <Badge className={`${roleColors[member.role]} text-xs mt-1`}>
                            {roleLabels[member.role]}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm mb-2">
                      {member.topic}
                    </CardDescription>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {member.period}
                    </div>
                    {member.links && member.links.length > 0 && (
                      <div className="flex gap-2 mt-3">
                        {member.links.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-primary hover:underline flex items-center gap-1"
                          >
                            <ExternalLink className="h-3 w-3" />
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Alumni */}
        {alumni.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <User className="h-5 w-5 text-muted-foreground" />
              Alumni
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {alumni.map((member, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        <User className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground text-sm">{member.name}</h4>
                        <Badge variant="outline" className="text-xs mt-0.5">
                          {roleLabels[member.role]} '{member.period.slice(-2)}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      {member.topic}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
