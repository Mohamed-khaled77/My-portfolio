import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaNodeJs, FaGithub, FaGitAlt, FaFigma 
} from "react-icons/fa";
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiAxios, SiReactquery, SiRedux, SiPostman, SiVite 
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import FadeIn from './FadeIn'; // استيراد الانيميشن

const skills = [
  {
    category: "Frontend Core",
    items: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
      { name: "Sass", icon: <FaSass className="text-pink-400" /> },
    ]
  },
  {
    category: "Frameworks & State",
    items: [
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" /> },
      { name: "Context API", icon: <TbApi className="text-yellow-500" /> },
      { name: "React Query", icon: <SiReactquery className="text-red-500" /> },
      { name: "Axios", icon: <SiAxios className="text-blue-300" /> },
    ]
  },
  {
    category: "Backend & Tools",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "Vite", icon: <SiVite className="text-purple-400" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      { name: "Figma", icon: <FaFigma className="text-pink-400" /> },
    ]
  }
];

const Skills = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      
      <FadeIn direction="down">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Tech Stack 🛠️</h2>
          <p className="text-slate-400">
            Tools I use to build scalable products.
          </p>
        </div>
      </FadeIn>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {skills.map((group, index) => (
          // التعديل هنا: ضفنا className="h-full" للـ FadeIn
          <FadeIn key={index} delay={index * 0.2} className="h-full">
            
            {/* التعديل هنا: ضفنا h-full للكارد نفسه عشان يملا المساحة */}
            <Card className="bg-slate-900/50 border-slate-800 hover:border-primary/40 transition-colors h-full flex flex-col">
              
              <CardHeader className="pb-3 pt-5 px-5">
                <CardTitle className="text-xl text-primary font-bold">
                  {group.category}
                </CardTitle>
              </CardHeader>

              {/* flex-grow عشان يزق المحتوى ويحافظ على الشكل */}
              <CardContent className="px-5 pb-5 flex flex-col gap-2 flex-grow">
                {group.items.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-1.5 rounded-md hover:bg-slate-800/80 transition-colors">
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-sm md:text-base font-medium text-slate-300">{skill.name}</span>
                  </div>
                ))}
              </CardContent>

            </Card>
          </FadeIn>
        ))}
      </div>

    </section>
  );
};

export default Skills;