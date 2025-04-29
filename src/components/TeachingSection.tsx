
import React from 'react';
import { GraduationCap, School, University, Users } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useMarkdownContent } from '@/utils/markdownLoader';

const TeachingSection = () => {
  const { content, isLoading } = useMarkdownContent('src/content/teaching.md');

  const courses = [
    {
      title: "Medical Image Analysis",
      level: "Graduate",
      description: "Deep learning for medical imaging in radiotherapy",
      icon: <University className="h-6 w-6" />
    },
    {
      title: "Advanced MR Imaging",
      level: "Graduate",
      description: "MR physics and clinical applications",
      icon: <School className="h-6 w-6" />
    },
    {
      title: "AI in Healthcare",
      level: "Medical Students",
      description: "AI/ML applications in clinical practice",
      icon: <GraduationCap className="h-6 w-6" />
    }
  ];

  // Parse student information from markdown
  const parseStudentInfo = () => {
    if (!content) return [];
    
    const studentSection = content.split('## Student Supervision')[1] || '';
    const studentEntries = studentSection.split('\n\n').filter(Boolean);
    
    return studentEntries.map(entry => {
      const lines = entry.split('\n');
      const name = lines[0]?.replace('### ', '') || '';
      const details = lines[1]?.split(' - ') || [];
      
      return {
        name,
        degree: details[0] || '',
        topic: details[1] || '',
        year: details[2] || ''
      };
    });
  };

  const students = parseStudentInfo();

  return (
    <section id="teaching">
      <div className="section-container">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-2" style={{ color: "#0050B2" }}>Teaching Activities</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Assistant Professor at UMC Utrecht
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-all border-t-4 border-teal"
            >
              <div className="absolute top-4 right-4" style={{ color: "#0050B2" }}>{course.icon}</div>
              <h3 className="text-lg font-bold mb-1" style={{ color: "#0050B2" }}>{course.title}</h3>
              <p className="text-xs text-teal mb-2">{course.level}</p>
              <p className="text-sm text-muted-foreground">{course.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-xl mb-4 flex items-center gap-2" style={{ color: "#0050B2" }}>
            <Users className="h-5 w-5" /> 
            Student Supervision
          </h3>
          
          {isLoading ? (
            <div className="grid md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="animate-pulse bg-white p-4 rounded-lg shadow-sm">
                  <div className="h-5 bg-slate-200 rounded w-1/2 mb-2"></div>
                  <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-4">
              {students.map((student, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold mb-1" style={{ color: "#0050B2" }}>{student.name}</h4>
                      <p className="text-sm text-muted-foreground">{student.topic}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs bg-navy/10 px-2 py-1 rounded-full">{student.degree}</span>
                      <p className="text-xs text-muted-foreground mt-1">{student.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TeachingSection;
