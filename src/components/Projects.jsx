import React from 'react';
import { 
  Card, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaGithub, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";
import FadeIn from './FadeIn';

const projects = [
  // === 1. TOP TIER (React & Full Stack) ===
  {
    title: "Dental Cosmetic Store",
    description: "Full-stack graduation project with Cart & Auth.",
    longDescription: "A specialized e-commerce platform for dental cosmetic products. The platform allows dentists and users to browse products, manage their cart, and process secure payments. It features a robust admin dashboard built with PHP & MySQL.",
    features: ["User Authentication (Login/Signup)", "Shopping Cart & Checkout", "Admin Dashboard", "PHP & MySQL Backend"],
    tags: ["React", "PHP", "MySQL", "Tailwind","Shadcn"],
    image: "/dental.jpg", // غير المسار لصورتك
    github: "https://github.com/Mohamed-khaled77/smile-cosmetics-store.git",
    demo: "https://smile-cosmetics-store.vercel.app/"
  },
  {
    title: "Level Up Academy",
    description: "Gamified educational platform (LMS).",
    longDescription: "A comprehensive Learning Management System (LMS) designed to make learning fun. It features a gamified experience with levels, badges, and progress tracking, powered by Strapi CMS.",
    features: ["Gamification System (Points & Levels)", "Course Management via Strapi", "Modern UI with Material UI", "User Progress Tracking"],
    tags: ["React", "Strapi CMS", "MUI"],
    image: "/Level-Up-Academy.jpg",
    github: "https://github.com/Mohamed-khaled77/Level-Up-Academy.git",
    demo: "#"
  },
  {
    title: "My Portfolio",
    description: "Modern dark-mode portfolio (This Website).",
    longDescription: "The website you are currently visiting. It showcases my skills and projects using the latest frontend technologies. It features a fully responsive design, dark mode, and smooth animations.",
    features: ["Dark Mode Support", "Responsive Design", "Smooth Animations (Framer Motion)", "Shadcn/ui Components"],
    tags: ["React", "Shadcn", "Tailwind", "Vite"],
    image: "/portfolio.jpg",
    github: "https://github.com/Mohamed-khaled77/My-portfolio.git",
    demo: "https://my-portfolio-gilt-seven-82.vercel.app/"
  },

  // === 2. MIDDLE TIER (JavaScript Logic) ===
  {
    title: "POS System",
    description: "Point of Sale interface for receipts.",
    longDescription: "A dynamic Point of Sale system built with pure JavaScript. It handles product selection, quantity adjustments, tax calculations, and generates a final receipt in real-time.",
    features: ["Real-time Calculation", "DOM Manipulation", "Product Cart Management", "Printable Receipts"],
    tags: ["HTML5", "CSS3", "JavaScript"],
    image: "/POS_System.jpg",
    github: "https://github.com/Mohamed-khaled77/Pos-System.git",
    demo: "https://pos-system-lilac.vercel.app/home.html?"
  },
  {
    title: "Memory Game",
    description: "Interactive card matching game.",
    longDescription: "A classic memory game built to demonstrate logic skills. The player flips cards to find matching pairs within a specific time or move limit.",
    features: ["Game Logic & State", "Flip Animations", "Score Tracking", "Restart Functionality"],
    tags: ["HTML5", "CSS3", "JavaScript"],
    image: "/Memory_Game.jpg",
    github: "https://github.com/Mohamed-khaled77/Memory-Game.git",
    demo: "https://memory-game-psi-gules.vercel.app/"
  },

  // === 3. LAYOUT TIER (HTML/CSS/Bootstrap) ===
  {
    title: "Genius Platform",
    description: "Kids educational platform layout.",
    longDescription: "A colorful and engaging educational website layout for children. It uses Bootstrap for a responsive grid system.",
    features: ["Child-friendly UI", "Responsive Grid System", "Course Catalog", "Bootstrap Components"],
    tags: ["HTML5", "Bootstrap 5", "CSS3"],
    image: "/Genius_Platform.jpg",
    github: "https://github.com/Mohamed-khaled77/genius.git",
    demo: "https://genius-olive.vercel.app/"
  },
  {
    title: "Kasper Design",
    description: "Pixel-perfect PSD to HTML conversion.",
    longDescription: "A conversion of a design PSD into code. It features a clean layout, artistic sections, and fully responsive media queries.",
    features: ["Pixel-Perfect Design", "Custom CSS Properties", "Font Awesome", "Responsive Layout"],
    tags: ["HTML5", "CSS3"],
    image: "/Kasper_Design.jpg",
    github: "https://github.com/Mohamed-khaled77/kasper.git",
    demo: "https://kasper-three-roan.vercel.app/"
  },
  {
    title: "Live Project",
    description: "Video streaming landing page.",
    longDescription: "A landing page designed for a video streaming concept. Focuses on video embedding layouts and dark themes.",
    features: ["Flexbox Layouts", "Dark Theme Design", "Media Queries", "Hover Effects"],
    tags: ["HTML5", "CSS3"],
    image: "/Live_Project.jpg",
    github: "https://github.com/Mohamed-khaled77/live.git",
    demo: "https://live-zeta.vercel.app/"
  },
  {
    title: "Winter Sports",
    description: "Thematic winter landing page.",
    longDescription: "A visually rich landing page capturing the vibe of winter sports. Uses background overlays and grid layouts.",
    features: ["Background Handling", "Grid Layouts", "Thematic Design", "Mobile Responsive"],
    tags: ["HTML5", "CSS3"],
    image: "/Winter_Sports.jpg",
    github: "https://github.com/Mohamed-khaled77/Season-Winter-Sports.git",
    demo: "https://season-winter-sports.vercel.app/"
  },
  {
    title: "School of Art",
    description: "Artistic portfolio landing page.",
    longDescription: "An elegant landing page for an art school. Focuses on whitespace, typography hierarchy, and gallery layouts.",
    features: ["Artistic Layout", "Typography Focus", "Image Gallery", "Clean Code Structure"],
    tags: ["HTML5", "CSS3"],
    image: "/School_of_Art.jpg",
    github: "https://github.com/Mohamed-khaled77/school-of-art.git",
    demo: "https://school-of-art.vercel.app/"
  }
];

const Projects = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      
      <FadeIn delay={0.2} direction="down">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">My Work 📂</h2>
          <p className="text-slate-400 text-sm md:text-base">
            From complex web apps to pixel-perfect designs.
          </p>
        </div>
      </FadeIn>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <Dialog key={index}>
            
            <DialogTrigger asChild>
              <div className="h-full cursor-pointer">
                <FadeIn delay={index * 0.1} className="h-full">
                  <Card className="bg-slate-900/50 border-slate-800 hover:border-primary/50 transition-all duration-300 flex flex-col overflow-hidden group h-full hover:shadow-xl hover:shadow-primary/10">
                    
                    <div className="h-40 overflow-hidden relative">
                      {/* لاحظ: لازم تحط الصور في فولدر public وتغير اللينكات دي */}
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-bold border border-white px-4 py-1 rounded-full text-sm">View Details</span>
                      </div>
                    </div>

                    <div className="flex flex-col flex-grow p-4">
                      <CardTitle className="text-base font-bold text-slate-100 mb-2 truncate">
                        {project.title}
                      </CardTitle>
                      
                      <p className="text-slate-400 text-xs md:text-sm line-clamp-2 mb-3">
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

            <DialogContent className="bg-slate-950 border-slate-800 text-slate-100 max-w-3xl max-h-[85vh] overflow-y-auto pr-6">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-primary mb-2">{project.title}</DialogTitle>
                <DialogDescription className="text-slate-400 text-base hidden md:block">
                  {project.description}
                </DialogDescription>
              </DialogHeader>

              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="rounded-xl overflow-hidden border border-slate-800 h-64 md:h-auto">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>

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
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-slate-800 text-slate-300 hover:bg-slate-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

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