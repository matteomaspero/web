
import { GraduationCap, School, University } from "lucide-react";

const TeachingSection = () => {
  const courses = [
    {
      title: "Clinical Research Methods",
      level: "Graduate",
      description: "An advanced course teaching research design, data collection, and analysis methods specific to clinical trials and observational studies.",
      icon: <University className="h-6 w-6" />
    },
    {
      title: "Translational Medicine",
      level: "Graduate/Professional",
      description: "Focusing on the process and challenges of translating laboratory discoveries into clinical applications.",
      icon: <School className="h-6 w-6" />
    },
    {
      title: "Evidence-Based Medicine",
      level: "Medical Students",
      description: "Teaching critical appraisal of medical literature and application of evidence in clinical decision-making.",
      icon: <GraduationCap className="h-6 w-6" />
    }
  ];

  return (
    <section id="teaching">
      <div className="section-container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Teaching Activities</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dedicated to preparing the next generation of healthcare professionals through 
            engaging curriculum and hands-on learning experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all border-t-4 border-teal"
            >
              <div className="absolute top-4 right-4 text-teal">{course.icon}</div>
              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <p className="text-sm text-teal mb-3">{course.level}</p>
              <p className="text-muted-foreground">{course.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-navy/5 rounded-lg p-8">
          <h3 className="text-2xl mb-6 text-center">Teaching Philosophy</h3>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                "My approach to teaching centers on connecting theory with real-world clinical applications. 
                I believe that the most effective learning happens when students can directly see how 
                academic concepts translate to improved patient care."
              </p>
              <p className="text-muted-foreground">
                I emphasize collaborative learning, critical thinking, and the development of practical 
                skills that graduates can immediately apply in their clinical practice or research careers.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-navy mb-2">Student Mentorship</h4>
                  <p className="text-sm">Guided 24+ graduate students in completing their research projects</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-navy mb-2">Curriculum Development</h4>
                  <p className="text-sm">Created 5 new courses integrating latest research methodologies</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-navy mb-2">Teaching Awards</h4>
                  <p className="text-sm">Recipient of Excellence in Medical Education Award, 2023</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-navy mb-2">Workshops</h4>
                  <p className="text-sm">Conducted 30+ hands-on training workshops for healthcare professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingSection;
