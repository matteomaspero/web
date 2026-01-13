import { BookOpen, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface EditorialRole {
  journal: string;
  fullName: string;
  role: string;
  period: string;
  publisher: string;
  link: string;
  description?: string;
}

const editorialRoles: EditorialRole[] = [
  {
    journal: "PMB",
    fullName: "Physics in Medicine & Biology",
    role: "[Your Role - e.g., Associate Editor]",
    period: "Since [Year]",
    publisher: "IOP Publishing",
    link: "https://iopscience.iop.org/journal/0031-9155",
    description: "A leading journal publishing original research on the application of physics to medicine, physiology and biology."
  },
  {
    journal: "BJR|AI",
    fullName: "BJR|Artificial Intelligence",
    role: "[Your Role - e.g., Editorial Board Member]",
    period: "Since [Year]",
    publisher: "British Institute of Radiology",
    link: "https://academic.oup.com/bjrai",
    description: "A peer-reviewed journal focusing on artificial intelligence applications in radiology and medical imaging."
  },
];

const EditorialSection = () => {
  return (
    <section id="editorial" className="py-20 bg-background">
      <div className="section-container">
        <h2 className="section-title" style={{ color: "#0050B2" }}>
          Editorial Work
        </h2>
        
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Contributing to the scientific community through editorial roles at peer-reviewed journals in medical physics and AI.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {editorialRoles.map((role, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-t-4" style={{ borderTopColor: "#0050B2" }}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10" style={{ backgroundColor: "rgba(0, 80, 178, 0.1)" }}>
                    <BookOpen className="h-8 w-8" style={{ color: "#0050B2" }} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl" style={{ color: "#0050B2" }}>
                      {role.journal}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{role.fullName}</p>
                    <p className="text-xs text-muted-foreground mt-1">{role.publisher}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{role.role}</p>
                      <p className="text-sm text-muted-foreground">{role.period}</p>
                    </div>
                  </div>
                  
                  {role.description && (
                    <p className="text-sm text-muted-foreground">
                      {role.description}
                    </p>
                  )}

                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mt-4"
                    asChild
                  >
                    <a 
                      href={role.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <span>Visit Journal</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 italic">
          Please provide your specific roles and start dates for PMB and BJR|AI.
        </p>
      </div>
    </section>
  );
};

export default EditorialSection;
