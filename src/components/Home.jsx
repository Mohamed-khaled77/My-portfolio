import React from "react";
import Hero from "./Hero";
import Skills from "./Skills";
import { Separator } from "@/components/ui/separator";
import Projects from "./Projects";

import About from "./About";
import Services from "./Services";

const Home = () => {
  return (
    <div className="flex flex-col">
      <section id="home">
        <Hero />
      </section>

      <div className="container mx-auto px-6">
        <Separator className="bg-slate-800" />
      </div>
      <section id="about" className="scroll-mt-24">
        <About />
      </section>

      <div className="container mx-auto px-6">
        <Separator className="bg-slate-800" />
      </div>
      <section id="skills" className="scroll-mt-24">
        <Skills />
      </section>

      <div className="container mx-auto px-6">
        <Separator className="bg-slate-800" />
      </div>

      <section id="projects" className="scroll-mt-24">
        <Projects />
      </section>
      <div className="container mx-auto px-6">
        <Separator className="bg-slate-800" />
      </div>
      <section id="projects" className="scroll-mt-24">
        <Services />
      </section>
      <div className="container mx-auto px-6">
        <Separator className="bg-slate-800" />
      </div>
      
    </div>
  );
};

export default Home;
