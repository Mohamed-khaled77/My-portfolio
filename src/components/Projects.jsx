import React from 'react';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog"; // استيراد النافذة المنبثقة
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaGithub, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";
import FadeIn from './FadeIn';

const projects = [
  {
    title: "Dental Cosmetic Store",
    description: "Web app for dental products with cart & auth systems.",
    longDescription: "A full-stack e-commerce solution tailored for dental cosmetic products. The platform allows dentists and users to browse products, manage their cart, and process secure payments. It features a robust admin dashboard for inventory management.",
    features: ["User Authentication (Login/Signup)", "Shopping Cart & Checkout", "Admin Dashboard", "Product Filtering & Search"],
    tags: ["React", "PHP", "MySQL", "Tailwind"],
    image: "/public/Screenshot_25-11-2025_19542_localhost.jpeg",
    github: "#",
    demo: "#"
  },
  {
    title: "Smart Metro Booking",
    description: "NFC/QR booking concept for Cairo Metro system.",
    longDescription: "A conceptual app designed to modernize the Cairo Metro ticketing system. Users can purchase tickets online and use generated QR codes or NFC for gate entry, reducing queues and paper waste.",
    features: ["QR Code Generation", "Ticket Wallet", "Route Planner", "NFC Support"],
    tags: ["React", "QRCode.js", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop",
    github: "#",
    demo: "#"
  },
  {
    title: "My Portfolio",
    description: "Modern dark-mode portfolio built with Shadcn/ui.",
    longDescription: "The website you are currently visiting. It showcases my skills and projects using the latest frontend technologies. It features a fully responsive design, dark mode, and smooth animations.",
    features: ["Dark Mode Support", "Responsive Design", "Smooth Animations (Framer Motion)", "Component-Based Architecture"],
    tags: ["React", "Shadcn", "Tailwind"],
    image: "/public/Screenshot_25-11-2025_195138_localhost.jpeg",
    github: "#",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      
      <FadeIn delay={0.2} direction="down">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Featured Projects 📂</h2>
          <p className="text-slate-400 text-sm md:text-base">
            Click on any project to view details.
          </p>
        </div>
      </FadeIn>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <Dialog key={index}>
            
            {/* 1. الكارد الخارجي (هو الزرار اللي بيفتح النافذة) */}
            <DialogTrigger asChild>
              <div className="h-full cursor-pointer"> {/* div عشان نغلف FadeIn */}
                <FadeIn delay={index * 0.2} className="h-full">
                  <Card className="bg-slate-900/50 border-slate-800 hover:border-primary/50 transition-all duration-300 flex flex-col overflow-hidden group h-full hover:shadow-xl hover:shadow-primary/10">
                    
                    <div className="h-36 overflow-hidden relative">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* طبقة شفافة تظهر عند الهوفر */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-bold border border-white px-4 py-1 rounded-full text-sm">View Details</span>
                      </div>
                    </div>

                    <div className="flex flex-col flex-grow p-4">
                      <CardTitle className="text-lg font-bold text-slate-100 mb-2">
                        {project.title}
                      </CardTitle>
                      
                      <p className="text-slate-400 text-sm line-clamp-2 mb-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {project.tags.map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="text-[10px] px-2 py-0 h-5 border-slate-700 text-slate-300">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </FadeIn>
              </div>
            </DialogTrigger>

            {/* 2. محتوى النافذة المنبثقة (Modal Content) */}
            <DialogContent className="bg-slate-950 border-slate-800 text-slate-100 max-w-3xl max-h-[85vh] overflow-y-auto pr-6">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-primary mb-2">{project.title}</DialogTitle>
                <DialogDescription className="text-slate-400 text-base hidden md:block">
                  {project.description}
                </DialogDescription>
              </DialogHeader>

              <div className="grid md:grid-cols-2 gap-6 mt-4">
                {/* الصورة الكبيرة */}
                <div className="rounded-xl overflow-hidden border border-slate-800">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>

                {/* التفاصيل والمميزات */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-white mb-2">About Project</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-2">Key Features</h4>
                    <ul className="grid grid-cols-1 gap-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                          <FaCheckCircle className="text-green-500 text-xs" /> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* التقنيات */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-slate-800 text-slate-300 hover:bg-slate-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* أزرار الأكشن في المودال */}
              <div className="flex gap-4 mt-6 pt-4 border-t border-slate-800">
                <a href={project.github} target="_blank" rel="noreferrer" className="flex-1">
                  <Button variant="outline" className="w-full gap-2 border-slate-700 hover:bg-slate-800 hover:text-white">
                    <FaGithub /> View Code
                  </Button>
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="flex-1">
                  <Button className="w-full gap-2">
                    <FaExternalLinkAlt /> Live Demo
                  </Button>
                </a>
              </div>

            </DialogContent>
          </Dialog>
        ))}
      </div>

    </section>
  );
};

export default Projects;