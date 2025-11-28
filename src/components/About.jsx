import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { FaGraduationCap, FaCode, FaGlobe, FaBriefcase } from "react-icons/fa";
import FadeIn from './FadeIn'; 

const About = () => {
  return (
    <section id="about" className="container mx-auto px-6 py-24">
      
      <FadeIn direction="down">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span> 👨‍💻
          </h2>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        <FadeIn direction="right" delay={0.2}>
          <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
            <p>
              Hello! I'm <strong className="text-white">Mohamed Khaled</strong>, a passionate Frontend Developer based in Cairo, Egypt. 
              I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
            </p>
            
            <p>
              I am currently a <strong className="text-white">Business Information Systems (BIS) Student</strong> working on my graduation project, 
              which is a specialized e-commerce platform for dental cosmetics. My background in BIS helps me understand both the 
              <strong className="text-primary"> technical</strong> and <strong className="text-primary"> business</strong> sides of web applications.
            </p>

            <p>
              My main focus these days is building accessible, inclusive products using 
              <strong className="text-primary"> React.js</strong> and <strong className="text-primary">Modern CSS</strong>.
              I'm also exploring AI tools to enhance my workflow and creativity.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          <FadeIn delay={0.4}>
            <Card className="bg-slate-900/50 border-slate-800 hover:border-primary/40 transition-colors h-full">
              <CardContent className="p-6 flex flex-col gap-3">
                <FaGraduationCap className="text-3xl text-primary" />
                <div>
                  <h3 className="font-bold text-white text-lg">Education</h3>
                  <p className="text-sm text-slate-400">BIS Student (Graduation Year)</p>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.5}>
            <Card className="bg-slate-900/50 border-slate-800 hover:border-primary/40 transition-colors h-full">
              <CardContent className="p-6 flex flex-col gap-3">
                <FaCode className="text-3xl text-purple-500" />
                <div>
                  <h3 className="font-bold text-white text-lg">Focus</h3>
                  <p className="text-sm text-slate-400">Frontend & UX Design</p>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.6}>
            <Card className="bg-slate-900/50 border-slate-800 hover:border-primary/40 transition-colors h-full">
              <CardContent className="p-6 flex flex-col gap-3">
                <FaGlobe className="text-3xl text-blue-400" />
                <div>
                  <h3 className="font-bold text-white text-lg">Location</h3>
                  <p className="text-sm text-slate-400">Cairo, Egypt</p>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.7}>
            <Card className="bg-slate-900/50 border-slate-800 hover:border-primary/40 transition-colors h-full">
              <CardContent className="p-6 flex flex-col gap-3">
                <FaBriefcase className="text-3xl text-green-500" />
                <div>
                  <h3 className="font-bold text-white text-lg">Interest</h3>
                  <p className="text-sm text-slate-400">Business Logic & Tech</p>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

        </div>

      </div>
    </section>
  );
};

export default About;