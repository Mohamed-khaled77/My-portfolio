import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FaLaptopCode, FaMobileAlt, FaServer } from "react-icons/fa";
import FadeIn from './FadeIn';

const services = [
  {
    title: "Web App Development",
    description: "Building fast, interactive Single Page Applications (SPA) using React.js and Next.js.",
    icon: <FaLaptopCode className="text-4xl text-blue-500" />
  },
  {
    title: "Responsive UI/UX",
    description: "Converting Figma/XD designs into pixel-perfect, mobile-responsive code using Tailwind CSS.",
    icon: <FaMobileAlt className="text-4xl text-purple-500" />
  },
  {
    title: "Backend Integration",
    description: "Connecting frontend interfaces with backend APIs (PHP/Node.js) and managing databases.",
    icon: <FaServer className="text-4xl text-green-500" />
  }
];

const Services = () => {
  return (
    <section id="services" className="container mx-auto px-6 py-20 bg-slate-900/20">
      
      <FadeIn delay={0.2} direction="down">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What I <span className="text-primary">Offer</span> 💼
          </h2>
          <p className="text-slate-400 text-lg">
            High-quality services for your business needs.
          </p>
        </div>
      </FadeIn>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <FadeIn key={index} delay={index * 0.2} className="h-full">
            <Card className="bg-slate-950 border-slate-800 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group h-full">
              <CardHeader className="text-center pt-8">
                <div className="mx-auto mb-4 p-4 bg-slate-900 rounded-full w-fit group-hover:bg-slate-800 transition-colors">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-8">
                <CardDescription className="text-slate-400 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>

    </section>
  );
};

export default Services;