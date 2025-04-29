
import { GraduationCap, School, University, Users } from "lucide-react";

const TeachingSection = () => {
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

  const students = [
    {
      name: "Linde Hesse",
      degree: "PhD",
      topic: "Deep learning for radiation therapy planning",
      year: "2022-Present"
    },
    {
      name: "Stefan Ivanovikj",
      degree: "MSc",
      topic: "MRI-based synthetic CT generation",
      year: "2023"
    },
    {
      name: "Jessica van Nes",
      degree: "PhD",
      topic: "Auto-segmentation of organs at risk",
      year: "2021-Present"
    },
    {
      name: "Jan-Willem de Jong",
      degree: "MSc",
      topic: "Deep learning for outcome prediction",
      year: "2022"
    }
  ];

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
        </div>
      </div>
    </section>
  );
};

export default TeachingSection;
