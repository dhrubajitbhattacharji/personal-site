"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building2 } from "lucide-react";

interface CareerStep {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  isActive?: boolean;
}

const careerSteps: CareerStep[] = [
  {
    id: 1,
    title: "Software Researcher",
    company: "Geogo Techsolutions",
    location: "Hybrid",
    period: "July 2025 - Present",
    description: "Promoted to Software Researcher and currently exploring scalable solutions on DocumentAI at our product Kriyam.ai",
    technologies: ["Python", "PyTorch", "FastAPI", "LangChain", "Docker", "Nvidia/CUDA"],
    isActive: true,
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Geogo Techsolutions",
    location: "Bangalore",
    period: "2024 - July 2025",
    description: "Built an agentic document verification system for employee background verification. Designed an unassisted multi-agent KYC system. Hosted and optimized open-source models on Metal",
    technologies: ["Pytorch", "linux", "AWS", "MLflow", "Python", "huggingface"],
  },
  {
    id: 3,
    title: "Software Research Intern",
    company: "Geogo Techsolutions",
    location: "Hybrid",
    period: "2022 - 2024",
    description: "Worked alongside with data scientists, setup deployment pipelines for an ASR system, made internal tools to boost efficieny of the team",
    technologies: ["Pandas", "Numpy", "Jupyter", "Typescript", "Linux"],
  }
];

export function CareerStepper() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          {/* <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
            Career Journey
          </h2> */}
          {/* <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Bachelor of Technology in Computer Science and Technology
          </p> */}
        </div>

        <div className="relative">
          <div className="absolute sm:left-8 left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-400 opacity-30" />
          <div className="space-y-12">
            {careerSteps.map((step, index) => (
              <div key={step.id} className="relative flex items-start gap-8">
                <div className="relative flex-shrink-0">
                  <div className={`w-8 h-8 md:w-16 md:h-16 rounded-full flex items-center justify-center border-2 
                    ${step.isActive 
                      ? 'bg-gray-800 border-gray-600' 
                      : 'bg-gray-800 border-gray-600'
                    }`}>
                    <span className="text-white font-semibold text-lg">
                      {step.id}
                    </span>
                  </div>
                  {/* {step.isActive && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 opacity-20 animate-pulse" />
                  )} */}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className={`rounded-lg border p-6 space-y-4 transition-all duration-300 hover:shadow-lg
                    ${step.isActive 
                      ? 'bg-gray-900/50 border-purple-500/30 shadow-purple-500/10' 
                      : 'bg-gray-900/30 border-gray-700 hover:border-gray-600'
                    }`}>
                    
                    {/* Header */}
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h3 className="text-xl font-semibold text-white">
                          {step.title}
                        </h3>
                        {step.isActive && (
                          <Badge variant="default" className="bg-gradient-to-r from-purple-500 to-pink-600 text-white border-none w-fit">
                            Current Role
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-300">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-gray-400" />
                          <span>{step.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span>{step.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CalendarDays className="w-4 h-4 text-gray-400" />
                          <span>{step.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    {step.isActive ?
                    <p className="text-gray-200 leading-relaxed">
                      Promoted to Software Researcher and currently exploring scalable solutions on DocumentAI at{" "} 
                      <a href="https://labs.kriyam.ai/"><span className="underline">Kriyam Labs</span></a>
                      {" "}for our product{" "} 
                      <a href="https://www.kriyam.ai/"><span className="underline">Kriyam.ai</span></a>
                    </p>
                    :
                    <p className="text-gray-200 leading-relaxed">
                      {step.description}
                    </p>
                    }

                    {/* Technologies */}
                    <div className="space-y-2">
                      {/* <h4 className="text-sm font-medium text-gray-300">Technologies & Tools</h4> */}
                      <div className="flex flex-wrap gap-2">
                        {step.technologies.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="outline" 
                            className="text-gray-300 border-gray-600 hover:border-gray-500 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        {/* <div className="text-center pt-8">
          <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-500" />
            <span>More details on my</span> <a href="https://www.linkedin.com/in/dhrubajitbhattacharjee/"><span className="underline">linkedin</span></a>
                 
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-cyan-400" />
          </div>
        </div> */}
      </div>
    </section>
  );
}
