import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import FadeIn from './FadeIn';

const Hero = () => {
  return (
    <section className="container mx-auto px-6 py-16 md:py-22 flex flex-col items-center text-center gap-8">
      
      <FadeIn direction="down" delay={0.2}>
          <Badge variant="secondary" className="px-4 py-1.5 text-sm font-normal rounded-full bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700">
        Available for Hire 🚀
      </Badge>
      </FadeIn>
    

      <FadeIn delay={0.4}>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
        Frontend Developer <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          Building Digital Experiences
        </span>
      </h1>
</FadeIn>
      <FadeIn delay={0.6}>
      <p className="max-w-[650px] text-slate-400 text-lg md:text-xl leading-relaxed">
        Hi, I'm Mohamed Khaled A passionate Frontend Developer specializing in React.js. 
        I transform ideas into fast, interactive, and visually stunning web applications 
        with a strong focus on user experience and clean code.
      </p>
</FadeIn>
      <FadeIn delay={0.8}>
      <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
        <a href="#projects" className="w-full sm:w-auto">
          <Button size="lg" className="w-full px-8 text-md font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
            View Projects
          </Button>
        </a>
        
        <a href="/cv.pdf" target="_blank" className="w-full sm:w-auto">
          <Button size="lg" variant="secondary" className="w-full px-8 text-md bg-slate-800 text-white hover:bg-slate-700">
             Download CV
          </Button>
        </a>
      </div>
      </FadeIn>

    </section>
  );
};

export default Hero;