
import { Book, FileText, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ResearchSection = () => {
  const researchAreas = [
    {
      title: "AI in Medical Imaging",
      description: "Deep learning methods for medical image segmentation in radiation therapy.",
      icon: <FileText className="h-10 w-10" style={{ color: "#0050B2" }} />
    },
    {
      title: "MR-guided Radiotherapy",
      description: "MR-only workflows for treatment planning.",
      icon: <Book className="h-10 w-10" style={{ color: "#0050B2" }} />
    },
    {
      title: "Image Synthesis",
      description: "Synthetic CT generation from MRI for radiotherapy.",
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
              <h4 className="text-xl mb-2" style={{ color: "#0050B2" }}>AI for Radiotherapy Planning</h4>
              <p className="text-muted-foreground mb-4">
                Developing AI methods to improve radiation therapy planning for head and neck cancer patients.
              </p>
              <ul className="list-disc list-inside space-y-1 text-foreground/80 text-sm">
                <li>Auto-segmentation of organs at risk</li>
                <li>MR-based treatment planning</li>
                <li>Dose prediction models</li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://compimag.org/wp-content/uploads/2023/09/Picture1-720x380.png" 
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
