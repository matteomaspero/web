
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Book, FileText, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useMarkdownContent } from '@/utils/markdownLoader';

const ResearchSection = () => {
  const { content, isLoading } = useMarkdownContent('/src/content/research.md');
  
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

  const renderMarkdown = (text: string) => {
    return (
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 className="text-3xl md:text-4xl mb-2" style={{ color: "#0050B2" }}>{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl mb-2" style={{ color: "#0050B2" }}>{children}</h3>
          ),
          p: ({ children }) => (
            <p className="text-muted-foreground mb-4">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside space-y-1 text-foreground/80 text-sm">{children}</ul>
          ),
        }}
      >
        {text}
      </ReactMarkdown>
    );
  };

  return (
    <section id="research" className="bg-lightGray">
      <div className="section-container">
        <div className="mb-8 text-center">
          {isLoading ? (
            <div className="animate-pulse">
              <div className="h-10 bg-slate-200 rounded w-1/4 mx-auto mb-2"></div>
              <div className="h-5 bg-slate-200 rounded w-1/2 mx-auto"></div>
            </div>
          ) : (
            <>
              <h2 className="text-3xl md:text-4xl mb-2" style={{ color: "#0050B2" }}>Research Focus</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Computational Imaging Group, UMC Utrecht
              </p>
            </>
          )}
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
          {isLoading ? (
            <div className="animate-pulse space-y-4">
              <div className="h-7 bg-slate-200 rounded w-1/4"></div>
              <div className="h-20 bg-slate-200 rounded w-full"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                {renderMarkdown(content.split('## Current Projects')[1] || '')}
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://compimag.org/wp-content/uploads/2023/09/Picture1-720x380.png" 
                  alt="Medical imaging AI research" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
