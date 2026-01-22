import { ArrowLeft, ExternalLink, FileText, Database, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  role: string;
  status: "active" | "completed" | "ongoing";
  year: string;
  links: {
    label: string;
    url: string;
    icon: "site" | "paper" | "dataset";
  }[];
  highlights?: string[];
}

const projects: Project[] = [
  {
    id: "synthrad2025",
    title: "SynthRAD2025",
    description: "Expanded grand challenge on synthetic CT generation",
    longDescription: "Building on the success of SynthRAD2023, this expanded challenge includes multi-vendor MRI data, CBCT-to-CT synthesis for both photon and particle therapy applications. The challenge aims to advance the field of MRI-only and CBCT-based radiotherapy planning.",
    role: "Lead Organizer",
    status: "active",
    year: "2025",
    links: [
      { label: "Challenge Site", url: "https://synthrad2025.grand-challenge.org/", icon: "site" },
      { label: "arXiv Preprint", url: "https://doi.org/10.48550/arXiv.2502.17609", icon: "paper" }
    ],
    highlights: [
      "Multi-vendor MRI data",
      "CBCT-to-CT synthesis",
      "Particle therapy applications"
    ]
  },
  {
    id: "synthrad2023",
    title: "SynthRAD2023",
    description: "Grand challenge on synthetic CT generation for radiotherapy",
    longDescription: "An international challenge to advance synthetic CT generation methods for MRI-only and CBCT-based radiotherapy. Published in Medical Image Analysis with over 540 citations, establishing benchmarks for the field.",
    role: "Lead Organizer",
    status: "completed",
    year: "2023-2024",
    links: [
      { label: "Challenge Site", url: "https://synthrad2023.grand-challenge.org/", icon: "site" },
      { label: "MedIA Paper", url: "https://doi.org/10.1016/j.media.2024.103276", icon: "paper" },
      { label: "Dataset", url: "https://doi.org/10.1002/mp.16529", icon: "dataset" }
    ],
    highlights: [
      "540+ citations",
      "Published in Medical Image Analysis",
      "Open benchmark dataset"
    ]
  },
  {
    id: "trackrad2025",
    title: "TrackRAD2025",
    description: "Real-time tumor tracking for MRI-guided radiotherapy",
    longDescription: "A multi-institutional challenge focused on real-time tumor tracking during MRI-guided radiotherapy. Features datasets from 6 international centers using both 0.35T and 1.5T MRI-linac systems, advancing the field of adaptive radiotherapy.",
    role: "Co-Organizer",
    status: "completed",
    year: "2025",
    links: [
      { label: "Challenge Site", url: "https://trackrad2025.grand-challenge.org/", icon: "site" },
      { label: "arXiv Preprint", url: "https://doi.org/10.48550/arXiv.2503.19119", icon: "paper" }
    ],
    highlights: [
      "6 international centers",
      "0.35T and 1.5T MRI-linacs",
      "Real-time tracking focus"
    ]
  },
  {
    id: "dlinrt",
    title: "DLinRT.eu",
    description: "Product register for deep learning in radiotherapy",
    longDescription: "A comprehensive product register cataloguing deep learning solutions and quality assurance tools for radiotherapy. The platform serves as the leading resource for the radiotherapy community, featuring 69+ documented deep learning applications and providing guidance on clinical implementation.",
    role: "Creator & Administrator",
    status: "ongoing",
    year: "2020-Present",
    links: [
      { label: "Website", url: "https://dlinrt.eu/", icon: "site" },
      { label: "About", url: "https://dlinrt.eu/about", icon: "site" }
    ],
    highlights: [
      "69+ deep learning products catalogued",
      "QA tools and guidelines",
      "Community resource"
    ]
  }
];

const statusColors = {
  active: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  completed: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  ongoing: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
};

const statusLabels = {
  active: "Active",
  completed: "Completed",
  ongoing: "Ongoing"
};

const linkIcons = {
  site: ExternalLink,
  paper: FileText,
  dataset: Database
};

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Content */}
      <main className="section-container py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Research Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Major research initiatives and international collaborations in medical imaging and radiotherapy
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl font-serif text-foreground">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {project.description}
                      </CardDescription>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className={statusColors[project.status]}>
                        {statusLabels[project.status]}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {project.year}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="font-medium text-foreground">Role:</span>
                    <span className="text-muted-foreground">{project.role}</span>
                  </div>

                  {project.highlights && (
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.links.map((link, index) => {
                      const IconComponent = linkIcons[link.icon];
                      return (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          asChild
                          className="gap-2"
                        >
                          <a href={link.url} target="_blank" rel="noopener noreferrer">
                            <IconComponent className="h-4 w-4" />
                            {link.label}
                          </a>
                        </Button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 mt-12">
        <div className="section-container text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Matteo Maspero. All rights reserved.</p>
        </div>
      </footer>
      <BackToTop />
    </div>
  );
};

export default Projects;
