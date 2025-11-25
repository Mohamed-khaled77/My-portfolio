import React from 'react';
import { Button } from "@/components/ui/button";
import { motion, useScroll, useSpring } from "framer-motion";
const Navbar = () => {
  const { scrollYProgress } = useScroll();
  // useSpring عشان الحركة تكون ناعمة ومطاطية مش ناشفة
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <nav className="container mx-auto p-6 flex justify-between items-center sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
      <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left"
          style={{ scaleX }}
        />
      {/* Logo */}
      <a href="#home" className="text-xl font-bold tracking-tighter cursor-pointer">
        Mohamed<span className="text-primary">.dev</span>
      </a>

      {/* Links - ضفنا Services هنا */}
      <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
        <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
        <a href="#services" className="hover:text-primary transition-colors">Services</a> {/* الجديد */}
      </div>

      {/* Action Button */}
      <a href="#contact">
        <Button variant="outline" className="hidden md:inline-flex border rounded-lg border-slate-700 hover:bg-slate-800 hover:text-white">
          Contact Me
        </Button>
      </a>
      
    </nav>
  );
};

export default Navbar;