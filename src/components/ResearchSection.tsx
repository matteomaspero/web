
import { Book, Briefcase, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ResearchSection = () => {
  const researchAreas = [
    {
      title: "Clinical Translation",
      description: "Developing novel approaches to translate laboratory findings into practical clinical applications.",
      icon: <Briefcase className="h-10 w-10 text-teal" />
    },
    {
      title: "Medical Education",
      description: "Creating innovative teaching methodologies for the next generation of clinical professionals.",
      icon: <Book className="h-10 w-10 text-teal" />
    },
    {
      title: "Evidence Synthesis",
      description: "Conducting systematic reviews and meta-analyses to inform evidence-based clinical practice.",
      icon: <FileText className="h-10 w-10 text-teal" />
    }
  ];

  return (
    <section id="research" className="bg-lightGray">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Research Focus</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My work bridges the gap between theoretical research and practical clinical applications, 
            focusing on innovative approaches to healthcare challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {researchAreas.map((area, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all">
              <CardHeader className="bg-white pb-2">
                <div className="mb-4">{area.icon}</div>
                <CardTitle className="text-xl">{area.title}</CardTitle>
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
          <h3 className="text-2xl mb-4">Current Project</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl mb-2 text-teal">Improving Patient Outcomes through Technology</h4>
              <p className="text-muted-foreground mb-4">
                A multi-year study examining how digital health interventions can improve treatment adherence 
                and patient outcomes across various chronic conditions.
              </p>
              <ul className="list-disc list-inside space-y-1 text-foreground/80">
                <li>Collaborative work with 5 medical centers</li>
                <li>Patient-centered approach to technology design</li>
                <li>Machine learning algorithms for personalized care recommendations</li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Digital health technology research" 
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
