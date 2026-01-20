import React from 'react';
import { GraduationCap, School, University } from "lucide-react";

const TeachingSection = () => {
  const courses = [
    {
      title: "MRI in Radiotherapy",
      level: "International Course",
      period: "2018 - present",
      description: "MR-only workflows for treatment planning in radiotherapy",
      icon: <University className="h-6 w-6" />
    },
    {
      title: "AI for Medical Imaging",
      level: "Master Course",
      period: "2022 - 2023",
      description: "Course coordinator and lecturer for AI applications in medical imaging",
      icon: <School className="h-6 w-6" />
    },
    {
      title: "Capita Selecta: Introduction to Deep Learning",
      level: "Master Course",
      period: "2020 - 2022",
      description: "Deep learning fundamentals for medical imaging students",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      title: "Deep Learning in Radiotherapy",
      level: "Workshop Series",
      period: "2018 - 2025",
      description: "Educational workshops on deep learning applications in radiotherapy",
      icon: <University className="h-6 w-6" />
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-lg p-5 shadow-md hover:shadow-lg transition-all border-t-4 border-teal"
            >
              <div className="absolute top-4 right-4" style={{ color: "#0050B2" }}>{course.icon}</div>
              <h3 className="text-lg font-bold mb-1" style={{ color: "#0050B2" }}>{course.title}</h3>
              <p className="text-xs text-teal mb-1">{course.level}</p>
              <p className="text-xs text-muted-foreground mb-2">{course.period}</p>
              <p className="text-sm text-muted-foreground">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachingSection;
