"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket, BrainCircuit, Palette, Layers, TrendingUp, Award, Zap } from "lucide-react";
import React from "react";

export function HireMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: BrainCircuit,
      title: "Research & Production Expertise",
      description: "Brings a unique blend of PhD-level research rigor and production-grade engineering. Successfully bridges applied research and real-world deployment to advance AI-enabled technologies.",
      color: "rgb(var(--accent-rgb))"
    },
    {
      icon: Rocket,
      title: "Proven Impact & Results",
      description: "Track record of delivering measurable improvements: 40% reduction in manual lookup time, 25% increase in AI reasoning accuracy, 47% improvement in perception accuracy, and 45% increase in diagnostic precision.",
      color: "#10b981"
    },
    {
      icon: Layers,
      title: "End-to-End ML Systems",
      description: "Experienced in developing, testing, and optimizing deep learning models, computer vision systems, and large language models to enhance performance, scalability, and reliability.",
      color: "#3b82f6"
    },
    {
      icon: Zap,
      title: "Intelligent Automation",
      description: "Skilled in designing automation frameworks, simulation environments, and multimodal data pipelines that accelerate validation and elevate model precision.",
      color: "#8b5cf6"
    },
    {
      icon: TrendingUp,
      title: "Cross-Functional Collaboration",
      description: "Experienced in coordinating cross-functional and international teams, aligning research objectives with software deliverables, and driving multimillion-dollar revenue gains.",
      color: "#f59e0b"
    },
    {
      icon: Award,
      title: "Technical Rigor & Innovation",
      description: "Brings technical rigor and creative problem-solving to complex challenges in AI systems, GenAI, and intelligent automation.",
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
            Research & Engineering Excellence
            <div className="absolute -z-10 bottom-0 left-0 right-0 h-3 bg-[rgba(var(--accent-rgb),0.2)] -rotate-1 translate-y-1"></div>
          </h2>
          <p className="section-description max-w-2xl mx-auto">
            Combining PhD-level research expertise with production-grade engineering to deliver measurable impact in AI systems, machine learning, and intelligent automation.
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
