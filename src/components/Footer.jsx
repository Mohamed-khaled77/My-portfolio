import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-950 py-12 relative overflow-hidden">
      
      {/* خلفية خفيفة */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-primary/5 via-slate-950 to-slate-950 opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Grid System: عكسنا الترتيب هنا */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 items-center">

          {/* === 1. النص والأكشن (بقى على الشمال - واخد ثلثين المساحة) === */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              Let's Build Something <br />
              {/* نفس ستايل الهيرو بالظبط */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                Exceptional Together
              </span>
            </h2>
            
            <p className="text-slate-400 text-base md:text-lg max-w-xl mb-8 leading-relaxed">
              Open for freelance projects and full-time opportunities. 
              Let's turn your concept into a high-performing web application.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:mohamed@example.com">
                <Button size="lg" className="px-8 font-bold rounded-full shadow-lg shadow-primary/20 hover:scale-105 transition-transform gap-2">
                  <FaEnvelope /> Send Email
                </Button>
              </a>
            </div>

          </div>

          {/* === 2. كارت الصورة (بقى على اليمين - واخد ثلث المساحة) === */}
          <div className="md:col-span-1 w-full max-w-sm mx-auto md:mr-0">
            <Card className="bg-slate-900/60 border-slate-800 backdrop-blur-md overflow-hidden hover:border-slate-700 transition-colors">
              <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                
                {/* الصورة: مربعة بحواف دائرية (rounded-2xl) */}
                <div className="w-full aspect-square overflow-hidden rounded-2xl border-2 border-slate-700/50 shadow-inner">
                   {/* حط صورتك هنا */}
                  <img 
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400&auto=format&fit=crop" 
                    alt="Mohamed" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white">Mohamed</h3>
                  <p className="text-primary text-sm font-medium">Frontend Developer</p>
                </div>

                {/* Social Icons Compact */}
                <div className="flex gap-3 mt-2">
                    <a href="#" className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-all"><FaGithub size={18} /></a>
                    <a href="#" className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-slate-700 transition-all"><FaLinkedin size={18} /></a>
                    <a href="#" className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-sky-400 hover:bg-slate-700 transition-all"><FaTwitter size={18} /></a>
                </div>

              </CardContent>
            </Card>
          </div>

        </div>

        {/* Copyright Section (صغرته شوية كمان) */}
        <div className="border-t border-slate-900 pt-6 flex flex-col md:flex-row justify-between items-center text-slate-600 text-xs md:text-sm">
          <p>© 2025 Mohamed. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1">
            Made with <span className="text-red-500">♥</span> using React & Shadcn
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;