
import { Book, FileText, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ResearchSection = () => {
  const researchAreas = [
    {
      title: "AI in Medical Imaging",
      description: "Developing deep learning methods for medical image analysis in radiation oncology.",
      icon: <FileText className="h-10 w-10" style={{ color: "#0050B2" }} />
    },
    {
      title: "MR-guided Radiotherapy",
      description: "MR-only workflows for radiation therapy planning and treatment.",
      icon: <Book className="h-10 w-10" style={{ color: "#0050B2" }} />
    },
    {
      title: "Image Synthesis",
      description: "Synthetic CT generation from MRI for radiation treatment planning.",
      icon: <BookOpen className="h-10 w-10" style={{ color: "#0050B2" }} />
    }
  ];

  return (
    <section id="research" className="bg-lightGray">
      <div className="section-container">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-2" style={{ color: "#0050B2" }}>Research Focus</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Computational Imaging Group, UMC Utrecht
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {researchAreas.map((area, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="bg-white pb-2">
                <div className="mb-4">{area.icon}</div>
                <CardTitle className="text-xl" style={{ color: "#0050B2" }}>{area.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <CardDescription className="text-foreground/80">
                  {area.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-white p-6 md:p-8 rounded-lg shadow-md">
          <h3 className="text-2xl mb-4" style={{ color: "#0050B2" }}>Current Projects</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl mb-2" style={{ color: "#0050B2" }}>Deep Learning for Automated Planning</h4>
              <p className="text-muted-foreground mb-4">
                Developing AI methods to automate radiation therapy planning for head and neck cancer patients.
              </p>
              <ul className="list-disc list-inside space-y-1 text-foreground/80 text-sm">
                <li>Auto-segmentation of organs at risk</li>
                <li>Synthetic CT generation from MRI</li>
                <li>Dose prediction models for treatment optimization</li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?q=80&w=2000&auto=format&fit=crop" 
                alt="Medical imaging AI research" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
