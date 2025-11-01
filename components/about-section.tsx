"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Code, Heart } from "lucide-react";

export function AboutSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
      <div className="space-y-12">
        
        {/* Main About Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <div className="text-center space-y-4">
            <div className="relative inline-block">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/25 mx-auto">
                <img
                  src="/profile2.png"
                  alt="Profile picture"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute rounded-full bg-gradient-to-br from-purple-500 to-pink-600 opacity-20 animate-pulse" />
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <div className="bg-gray-900/30 border border-gray-700 rounded-lg p-8 space-y-6 hover:border-gray-600 transition-colors">
              <h2 className="text-2xl font-semibold text-white mb-4">About Me</h2>
              
              <div className="space-y-4 text-gray-200 leading-relaxed">
                <p>
                  Hey there! I'm dhrubajit and I love building intelligent systems.
                </p>
                
                <p>
                  Currently, I'm exploring scalable solutions in DocumentAI at <a href="https://www.kriyam.ai/" target="blank"><span className="text-purple-400">Kriyam.ai ↗</span></a>{" "}
                  where I get to work on real world problems involving complex documents and understanding them. I'm a part of the founding{" "}<a href="https://labs.kriyam.ai" target="blank"><span className="text-purple-400">R&D team ↗</span></a>{" "}where we built the first prototype of{" "}<a href="https://docwise.kriyam.ai/"><span className="text-purple-400">Docwise ↗</span></a>
                    {" "}specially made for Indian Documents and supports 12+ regional languages, tables, forms and handwritten notes.
                    <span className=""><br/>{" "}Check out: <a href="https://www.kriyam.ai/" target="blank"><span className="text-purple-400">https://github.com/dhrubajitbhattacharji/document-AI</span></a></span>
                </p>

              </div>
            </div>

            {/* Education */}
            <div className="bg-gray-900/30 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h4 className="text-white font-medium">Bachelor of Technology</h4>
                  <p className="text-gray-300">Computer Science and Engineering</p>
                  {/* <p className="text-gray-400 text-sm">2020 - 2024</p> */}
                </div>
              </div>
            </div>

            {/* Skills & Interests */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900/30 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <Code className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Tech</h3>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-300 font-medium mb-2">Core Areas</p>
                    <div className="flex flex-wrap gap-2">
                      {["Machine Learning", "NLP", "LLMs", "AI Agents"].map((skill) => (
                        <Badge key={skill} variant="outline" className="text-gray-300 border-gray-600">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-gray-300 font-medium mb-2">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "PyTorch", "FastAPI", "Django", "Docker", "AWS", "Linux", "Typescript", "React"].map((tech) => (
                        <Badge key={tech} variant="outline" className="text-gray-300 border-gray-600">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/30 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Interests</h3>
                </div>
                
                <div className="space-y-2 text-gray-200">
                  <p>• Research in multimodal AI systems</p>
                  <p>• Multi Agent Systems</p>
                  <p>• Advanced RAG Techniques</p>
                  <p>• Database and Backend Engineering</p>
                  <p>• Technical writing and documentation</p>
                </div>
              </div>
            </div>

            {/* Philosophy */}
            {/* <div className="bg-gray-900/30 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-4">My Philosophy</h3>
              <blockquote className="text-gray-200 italic border-l-4 border-purple-500 pl-4">
                "The best AI systems are those that seamlessly integrate into human workflows, 
                augmenting our capabilities rather than replacing our creativity. I believe in building 
                technology that empowers people to do their best work."
              </blockquote>
            </div> */}
          </div>
        </div>

        {/* Bottom section */}

      </div>
    </section>
  );
}
