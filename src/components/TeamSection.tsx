import React from 'react';
import { GraduationCap, ExternalLink, FileText, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Student {
  name: string;
  role: 'phd' | 'msc';
  period: string;
  status: 'current' | 'alumni';
  topic?: string;
  tags?: string[];
  links?: { label: string; url: string }[];
}

const students: Student[] = [
  // Current PhD
  {
    name: "Mianyong Ding",
    role: "phd",
    period: "2024-2028",
    status: "current",
    topic: "Federated AI to enhance radiotherapy planning for children with renal tumors",
    tags: ["Federated Learning", "Pediatric RT"],
  },
  // Current MSc
  {
    name: "Bar Melinarskiy",
    role: "msc",
    period: "2025-2026",
    status: "current",
    topic: "MAGIQ – Mammography Assessment using General models for Image Quality",
    tags: ["Image Quality", "Foundation Models"],
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
    name: "Yiwen Chen",
    role: "msc",
    period: "2025",
    status: "alumni",
    topic: "Learning Curves for Auto-contouring of Head-neck Tumors Using CT & PET Scans",
    tags: ["Auto-contouring", "Segmentation"],
  },
  {
    name: "Adine van Wier",
    role: "msc",
    period: "2023",
    status: "alumni",
    topic: "MSc Thesis available upon request",
  },
  {
    name: "Xabier Arregui Garcia",
    role: "msc",
    period: "2023",
    status: "alumni",
    topic: "Deep learning-based abdominal multi-organ segmentation for pediatric radiotherapy",
    tags: ["Segmentation", "Pediatric RT"],
    links: [
      { label: "Thesis", url: "https://studenttheses.uu.nl/bitstream/handle/20.500.12932/43540/Major_Research_Project_Pablo_Xabier_Arregui_Garcia.pdf?sequence=1&isAllowed=y" },
    ],
  },
  {
    name: "Konstantinos Drymas Vrakidis",
    role: "msc",
    period: "2022",
    status: "alumni",
    topic: "Feasibility of cone beam computed tomography with invertible recurrent inference machines",
    tags: ["CBCT Reconstruction", "Inverse Problems"],
    links: [
      { label: "Thesis", url: "https://studenttheses.uu.nl/handle/20.500.12932/43064" },
    ],
  },
  {
    name: "Vish Sundar",
    role: "msc",
    period: "2022",
    status: "alumni",
    topic: "Comparing end-to-end convolutional networks for cone-beam computed tomography",
    tags: ["CBCT Reconstruction", "End-to-end Learning"],
    links: [
      { label: "Thesis", url: "/theses/sundar_2022.pdf" },
    ],
  },
  {
    name: "Lotte Nijskens",
    role: "msc",
    period: "2022",
    status: "alumni",
    topic: "Investigating contrast generalisation in deep learning-based brain MRI-to-CT synthesis",
    tags: ["Image Synthesis", "MRI-to-CT"],
    links: [
      { label: "Publication", url: "https://doi.org/10.1016/j.ejmp.2023.102642" },
    ],
  },
  {
    name: "Luuk Jacobs",
    role: "msc",
    period: "2022",
    status: "alumni",
    topic: "Generalizable synthetic MRI with physics-informed convolutional networks",
    tags: ["Image Synthesis", "Physics-informed"],
    links: [
      { label: "Publication", url: "https://doi.org/10.48550/arXiv.2305.12570" },
    ],
  },
  {
    name: "Aishwarya M Gurusamy Muthuvelrabindran",
    role: "msc",
    period: "2021",
    status: "alumni",
    topic: "Invertible recurrent inference machines for low-dose computed tomography",
    tags: ["CT Reconstruction", "Low-dose CT"],
    links: [
      { label: "Thesis", url: "http://essay.utwente.nl/86820/" },
    ],
  },
  {
    name: "Alexandru Moraru",
    role: "msc",
    period: "2021",
    status: "alumni",
    topic: "Iterative Computed Tomography Reconstruction Using Deep Learning",
    tags: ["CT Reconstruction", "Inverse Problems"],
    links: [
      { label: "Thesis", url: "https://essay.utwente.nl/#/85407" },
    ],
  },
  {
    name: "Maria Leousi",
    role: "msc",
    period: "2021",
    status: "alumni",
    topic: "Estimating uncertainty of deep learning-based segmentation for prostate cancer radiotherapy",
    tags: ["Segmentation", "Uncertainty Estimation"],
    links: [
      { label: "Thesis", url: "https://cig-utrecht.org/thesis/Leousi_2021.pdf" },
    ],
  },
  {
    name: "Laura G Bentvelzen",
    role: "msc",
    period: "2019-2020",
    status: "alumni",
    topic: "Deep learning-based synthetic CT generation for paediatric brain MR-only radiotherapy",
    tags: ["Image Synthesis", "Pediatric RT"],
    links: [
      { label: "Thesis", url: "https://dspace.library.uu.nl/handle/1874/440636" },
      { label: "Publication", url: "https://doi.org/10.1016/j.radonc.2020.09.029" },
    ],
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

const TagBadge = ({ tag }: { tag: string }) => (
  <span className="inline-flex items-center gap-0.5 rounded-md bg-accent/50 px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
    <Tag className="h-2.5 w-2.5" />
    {tag}
  </span>
);

const TeamSection = () => {
  const currentStudents = students.filter((s) => s.status === "current");
  const phdAlumni = students.filter((s) => s.status === "alumni" && s.role === "phd");
  const mscAlumni = students.filter((s) => s.status === "alumni" && s.role === "msc");

  return (
    <section id="supervision" className="py-16 bg-slate-50">
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
                  {student.tags && student.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {student.tags.map((tag, i) => <TagBadge key={i} tag={tag} />)}
                    </div>
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
                    {student.tags && student.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-1">
                        {student.tags.map((tag, i) => <TagBadge key={i} tag={tag} />)}
                      </div>
                    )}
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
