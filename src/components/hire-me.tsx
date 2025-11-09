"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket, BrainCircuit, Palette, Layers, TrendingUp, Award } from "lucide-react";
import React from "react";

export function HireMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: Rocket,
      title: "Proven Mobile Expertise",
      description: "I have a track record of building and shipping high-quality mobile apps to the App Store, demonstrating my ability to deliver complete, production-ready solutions.",
      color: "rgb(var(--accent-rgb))"
    },
    {
      icon: BrainCircuit,
      title: "AI Integration & Innovation",
      description: "My experience with AI, LLMs, and tools like Ollama allows me to build intelligent, cutting-edge applications that solve complex problems.",
      color: "#10b981"
    },
    {
      icon: Palette,
      title: "Strong UI/UX Focus",
      description: "I am passionate about creating intuitive, beautiful, and user-centric interfaces that provide an exceptional user experience.",
      color: "#8b5cf6"
    },
    {
      icon: Layers,
      title: "Full-Stack Perspective",
      description: "With skills in both mobile (Flutter) and web (Next.js, React), I understand the entire technology stack and can contribute to a wider range of projects.",
      color: "#3b82f6"
    },
    {
      icon: TrendingUp,
      title: "Business-Oriented Mindset",
      description: "I focus on building products that not only work well but also solve real-world problems and help achieve business goals.",
      color: "#f59e0b"
    },
    {
      icon: Award,
      title: "Fast Learner & Problem Solver",
      description: "I am a quick learner who thrives on challenges and is adept at finding creative solutions to difficult problems.",
      color: "#ec4899"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10
      }
    }
  };

  return (
    <section ref={ref} className="py-24 relative overflow-hidden" id="hire-me">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-cyan-50/20 to-blue-50/10 -z-10"></div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute top-20 left-0 w-64 h-64 bg-[rgba(var(--accent-light-rgb),0.15)] rounded-full blur-3xl -z-10"
      ></motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.4 } : { opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-10 right-1/4 w-80 h-80 bg-[rgba(var(--accent-rgb),0.05)] rounded-full blur-3xl -z-10"
      ></motion.div>
      
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title font-heading relative inline-block">
            Why Hire Me?
            <div className="absolute -z-10 bottom-0 left-0 right-0 h-3 bg-[rgba(var(--accent-rgb),0.2)] -rotate-1 translate-y-1"></div>
          </h2>
          <p className="section-description max-w-2xl mx-auto">
            The unique value I bring to ML/AI projects, combining research expertise with production-grade engineering.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              className="relative group overflow-hidden backdrop-blur-sm rounded-2xl"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className="absolute inset-0 bg-white/70 backdrop-blur-xl z-0 rounded-2xl"></div>
              <div className="absolute inset-0 rounded-2xl border border-white/40 z-0"></div>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-50/30 to-blue-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 rounded-2xl"
              ></motion.div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-200/20 to-transparent -translate-y-12 translate-x-12 rounded-full blur-2xl z-0"></div>
              
              <div className="p-7 relative z-10 h-full flex flex-col">
                <div className="flex items-center mb-5">
                  <div 
                    className="p-3 rounded-xl mr-4 flex-shrink-0" 
                    style={{ backgroundColor: `${feature.color}15` }}
                  >
                    {React.createElement(feature.icon, { 
                      className: "h-5 w-5", 
                      style: { color: feature.color } 
                    })}
                  </div>
                  <h3 className="text-xl font-bold font-heading" style={{ color: feature.color }}>
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm text-[rgb(var(--muted-rgb))] flex-1">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
