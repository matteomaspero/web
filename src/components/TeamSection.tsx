import React from 'react';
import { GraduationCap, ExternalLink, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Student {
  name: string;
  role: 'phd' | 'msc';
  period: string;
  status: 'current' | 'alumni';
  topic?: string;
  links?: { label: string; url: string }[];
}

const students: Student[] = [
  // Current PhD
  {
    name: "Mianyong Ding",
    role: "phd",
    period: "2024-2028",
    status: "current",
    topic: "[Research topic to be added]",
  },
  // Current MSc
  {
    name: "Yiwen Chen",
    role: "msc",
    period: "2025-2026",
    status: "current",
    topic: "[Research topic to be added]",
  },
  {
    name: "Bar Melinarskiy",
    role: "msc",
    period: "2025-2026",
    status: "current",
    topic: "[Research topic to be added]",
  },
  // PhD Alumni
  {
    name: "Iris Kolenbrander",
    role: "phd",
    period: "2021-2025",
    status: "alumni",
    links: [
      { label: "PhD Thesis", url: "https://pure.tue.nl/ws/files/369929297/20251202_Kolenbrander_hf.pdf" },
      { label: "Publications", url: "https://research.tue.nl/nl/persons/iris-d-kolenbrander/publications/" },
    ],
  },
  {
    name: "Maarten Terpstra",
    role: "phd",
    period: "2019-2023",
    status: "alumni",
    links: [
      { label: "Profile", url: "https://research.umcutrecht.nl/researchers/maarten-terpstra/" },
    ],
  },
  // MSc Alumni
  {
    name: "Adine van Wier",
    role: "msc",
    period: "2023",
    status: "alumni",
    links: [{ label: "Thesis", url: "/theses/2023-van-wier-adine.pdf" }],
  },
  {
    name: "Xabier Arregui Garcia",
    role: "msc",
    period: "2023",
    status: "alumni",
    links: [{ label: "Thesis", url: "/theses/2023-arregui-garcia-xabier.pdf" }],
  },
  {
    name: "Konstantinos Drymas Vrakidis",
    role: "msc",
    period: "2022",
    status: "alumni",
    links: [{ label: "Thesis", url: "/theses/2022-drymas-vrakidis-konstantinos.pdf" }],
  },
  {
    name: "Vish Sundar",
    role: "msc",
    period: "2022",
    status: "alumni",
    links: [{ label: "Thesis", url: "/theses/2022-sundar-vish.pdf" }],
  },
  {
    name: "Lotte Nijskens",
    role: "msc",
    period: "2022",
    status: "alumni",
    links: [{ label: "Thesis", url: "/theses/2022-nijskens-lotte.pdf" }],
  },
  {
    name: "Luuk Jacobs",
    role: "msc",
    period: "2022",
    status: "alumni",
    links: [{ label: "Thesis", url: "/theses/2022-jacobs-luuk.pdf" }],
  },
  {
    name: "Aishwarya M Gurusamy Muthuvelrabindran",
    role: "msc",
    period: "2021",
    status: "alumni",
    links: [{ label: "Thesis", url: "/theses/2021-gurusamy-aishwarya.pdf" }],
  },
  {
    name: "Alexandru Moraru",
    role: "msc",
    period: "2021",
    status: "alumni",
    links: [{ label: "Thesis", url: "/theses/2021-moraru-alexandru.pdf" }],
  },
  {
    name: "Maria Leousi",
    role: "msc",
    period: "2021",
    status: "alumni",
    links: [{ label: "Thesis", url: "/theses/2021-leousi-maria.pdf" }],
  },
  {
    name: "Laura G Bentvelzen",
    role: "msc",
    period: "2019-2020",
    status: "alumni",
    links: [{ label: "Thesis", url: "/theses/2020-bentvelzen-laura.pdf" }],
  },
];

const roleLabels: Record<string, string> = {
  phd: "PhD",
  msc: "MSc",
};

const roleColors: Record<string, string> = {
  phd: "bg-teal text-white",
  msc: "bg-navy/80 text-white",
};

const TeamSection = () => {
  const currentStudents = students.filter((s) => s.status === "current");
  const phdAlumni = students.filter((s) => s.status === "alumni" && s.role === "phd");
  const mscAlumni = students.filter((s) => s.status === "alumni" && s.role === "msc");

  return (
    <section id="team" className="py-16 bg-slate-50">
      <div className="section-container">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-2" style={{ color: "#0050B2" }}>
            <GraduationCap className="inline-block mr-2 h-8 w-8" />
            Student Supervision
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Current and past PhD and MSc students
          </p>
        </div>

        {/* Current Students */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4" style={{ color: "#0050B2" }}>
            Current Students
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {currentStudents.map((student, index) => (
              <Card key={index} className="border-t-4 border-teal">
                <CardContent className="pt-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold" style={{ color: "#0050B2" }}>{student.name}</h4>
                    <Badge className={roleColors[student.role]}>{roleLabels[student.role]}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{student.period}</p>
                  {student.topic && (
                    <p className="text-xs text-teal mt-1">{student.topic}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* PhD Alumni */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4" style={{ color: "#0050B2" }}>
            PhD Alumni
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {phdAlumni.map((student, index) => (
              <Card key={index} className="border-t-4 border-navy/60">
                <CardContent className="pt-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold" style={{ color: "#0050B2" }}>{student.name}</h4>
                    <Badge className={roleColors[student.role]}>{roleLabels[student.role]}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{student.period}</p>
                  {student.links && student.links.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {student.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-teal hover:underline"
                        >
                          {link.label.includes("Thesis") ? (
                            <FileText className="h-3 w-3" />
                          ) : (
                            <ExternalLink className="h-3 w-3" />
                          )}
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

        {/* MSc Alumni */}
        <div>
          <h3 className="text-xl font-semibold mb-4" style={{ color: "#0050B2" }}>
            MSc Alumni
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
            {mscAlumni.map((student, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="py-3 px-4">
                  <div className="flex flex-col gap-1">
                    <h4 className="font-medium text-sm" style={{ color: "#0050B2" }}>{student.name}</h4>
                    <p className="text-xs text-muted-foreground">{student.period}</p>
                    {student.links && student.links.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-1">
                        {student.links.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-teal hover:underline"
                          >
                            <FileText className="h-3 w-3" />
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
