"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Smartphone, Palette, Server, Zap, Braces, Star, Cloud, BrainCircuit } from "lucide-react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeTab, setActiveTab] = useState<number>(0);

  // Group skills by category with expertise levels
  const skillCategories = [
    {
      id: "technical",
      name: "Technical Skills",
      description: "Programming languages and core technologies I work with"
    },
    {
      id: "specific",
      name: "Domain Expertise",
      description: "Specialized knowledge in specific areas"
    },
    {
      id: "tools",
      name: "Tools & Methods",
      description: "Software, tools and methodologies I use daily"
    }
  ];

  const skillGroups = [
    // Technical Skills
    [
      {
        name: "Programming Languages",
        icon: Code,
        color: "rgb(var(--accent-rgb))",
        skills: [
          { name: "Python", expertise: "Expert", description: "Primary language for ML/AI development" },
          { name: "Java", expertise: "Advanced", description: "For enterprise applications and systems" },
          { name: "C++", expertise: "Advanced", description: "For performance-critical ML systems" },
          { name: "MATLAB", expertise: "Advanced", description: "For research and signal processing" },
          { name: "SQL", expertise: "Advanced", description: "For data management and analysis" }
        ]
      },
      {
        name: "ML Frameworks & Libraries",
        icon: BrainCircuit,
        color: "#10b981",
        skills: [
          { name: "PyTorch", expertise: "Expert", description: "Deep learning framework for research and production" },
          { name: "TensorFlow", expertise: "Expert", description: "End-to-end ML platform for scalable systems" },
          { name: "OpenCV", expertise: "Expert", description: "Computer vision and image processing" },
          { name: "Jupyter", expertise: "Expert", description: "Interactive development and experimentation" },
          { name: "Scikit-learn", expertise: "Advanced", description: "Classical ML algorithms and tools" }
        ]
      },
      {
        name: "Generative AI & LLMs",
        icon: Cloud,
        color: "#3b82f6",
        skills: [
          { name: "LLM Fine-tuning", expertise: "Expert", description: "Customizing large language models" },
          { name: "RAG Systems", expertise: "Expert", description: "Retrieval-Augmented Generation pipelines" },
          { name: "Transformer Architectures", expertise: "Expert", description: "Building transformer-based models" },
          { name: "Prompt Engineering", expertise: "Advanced", description: "Optimizing LLM interactions" }
        ]
      }
    ],
    // Domain Expertise
    [
      {
        name: "Deep Learning",
        icon: BrainCircuit,
        color: "#8b5cf6",
        skills: [
          { name: "CNN Architectures", expertise: "Expert", description: "Convolutional neural networks for vision" },
          { name: "LSTM/RNN", expertise: "Expert", description: "Recurrent networks for sequence modeling" },
          { name: "Encoder-Decoder", expertise: "Expert", description: "Sequence-to-sequence architectures" },
          { name: "Model Optimization", expertise: "Expert", description: "Training and fine-tuning strategies" }
        ]
      },
      {
        name: "Computer Vision",
        icon: Palette,
        color: "#ec4899",
        skills: [
          { name: "Object Detection", expertise: "Expert", description: "Detecting and localizing objects in images" },
          { name: "Semantic Segmentation", expertise: "Expert", description: "Pixel-level image understanding" },
          { name: "Image Classification", expertise: "Expert", description: "Categorizing visual content" },
          { name: "Image Denoising", expertise: "Advanced", description: "Enhancing image quality with ML" }
        ]
      },
      {
        name: "MLOps & Infrastructure",
        icon: Server,
        color: "#f59e0b",
        skills: [
          { name: "MLOps Pipelines", expertise: "Expert", description: "End-to-end ML lifecycle management" },
          { name: "Distributed Training", expertise: "Expert", description: "DDP, FSDP for large-scale training" },
          { name: "A/B Testing", expertise: "Expert", description: "Model validation and experimentation" },
          { name: "Automated Reporting", expertise: "Expert", description: "Data-driven validation frameworks" }
        ]
      }
    ],
    // Tools & Methods
    [
      {
        name: "Cloud Platforms",
        icon: Cloud,
        color: "#f59e0b",
        skills: [
          { name: "AWS SageMaker", expertise: "Expert", description: "Managed ML platform on AWS" },
          { name: "Azure ML", expertise: "Advanced", description: "Microsoft's ML cloud services" },
          { name: "Google Cloud Platform", expertise: "Advanced", description: "GCP ML and data services" },
          { name: "Kubernetes", expertise: "Advanced", description: "Container orchestration for ML workloads" }
        ]
      },
      {
        name: "Development & Tools",
        icon: Zap,
        color: "#06b6d4",
        skills: [
          { name: "Git", expertise: "Expert", description: "Version control and collaboration" },
          { name: "CI/CD", expertise: "Expert", description: "Automated testing and deployment" },
          { name: "Data Pipelines", expertise: "Expert", description: "Building scalable data workflows" },
          { name: "Simulation Environments", expertise: "Advanced", description: "CARLA, Unity3D for synthetic data" },
          { name: "Remote Test Stations", expertise: "Advanced", description: "Distributed validation infrastructure" }
        ]
      }
    ]
  ];

  const getExpertiseColor = (expertise: string) => {
    switch (expertise) {
      case "Expert":
        return "rgb(var(--accent-rgb))";
      case "Advanced":
        return "#10b981"; // emerald
      case "Intermediate":
        return "#f59e0b"; // amber
      default:
        return "#6b7280"; // gray
    }
  };

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
    <section ref={ref} className="py-24 relative overflow-hidden" id="skills">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-cyan-50/20 to-blue-50/10 -z-10"></div>
      
      {/* Decorative elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute top-40 right-0 w-64 h-64 bg-cyan-200/20 rounded-full blur-3xl -z-10"
      ></motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.4 } : { opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-20 left-1/4 w-80 h-80 bg-blue-200/15 rounded-full blur-3xl -z-10"
      ></motion.div>
      
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title font-heading relative inline-block">
            Expertise & Skills
            <div className="absolute -z-10 bottom-0 left-0 right-0 h-3 bg-[rgba(var(--accent-rgb),0.2)] -rotate-1 translate-y-1"></div>
          </h2>
          <p className="section-description max-w-2xl mx-auto">
            Core competencies and specialized knowledge in machine learning, AI systems, and intelligent automation
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <motion.div
            className="tab-navigation"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {skillCategories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(index)}
                className={`tab-button ${activeTab === index ? "tab-button-active" : "tab-button-inactive"}`}
              >
                {activeTab === index && (
                  <motion.div
                    layoutId="activeTabBackground"
                    className="tab-bg"
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  />
                )}
                <span className="relative z-10">{category.name}</span>
              </button>
            ))}
          </motion.div>
        </div>

        <motion.p
          className="text-center text-[rgb(var(--muted-rgb))] mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {skillCategories[activeTab].description}
        </motion.p>

        {/* Skills Grid */}
        <motion.div
          key={activeTab}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillGroups[activeTab].map((group) => (
            <motion.div
              key={group.name}
              className="relative group overflow-hidden backdrop-blur-xl rounded-2xl shadow-md"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-white/70 backdrop-blur-xl z-0 rounded-2xl"></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl border border-white/40 z-0"></div>
              
              {/* Hover effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-50/30 to-blue-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 rounded-2xl"
              ></motion.div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-200/20 to-transparent -translate-y-12 translate-x-12 rounded-full blur-2xl z-0"></div>
              
              <div className="p-7 relative z-10">
                <div className="flex items-center mb-5">
                  <div 
                    className="p-3 rounded-xl mr-4 flex-shrink-0" 
                    style={{ backgroundColor: `${group.color}15` }}
                  >
                    {React.createElement(group.icon, { 
                      className: "h-5 w-5", 
                      style: { color: group.color } 
                    })}
                  </div>
                  <h3 className="text-xl font-bold font-heading" style={{ color: group.color }}>
                    {group.name}
                  </h3>
                </div>
                
                <ul className="space-y-4">
                  {group.skills.map((skill) => (
                    <motion.li
                      key={skill.name}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div 
                        className="mt-1 p-1 rounded-full mr-3 flex-shrink-0" 
                        style={{ backgroundColor: `${getExpertiseColor(skill.expertise)}20` }}
                      >
                        <Star 
                          className="h-3 w-3" 
                          style={{ color: getExpertiseColor(skill.expertise) }}
                          fill={getExpertiseColor(skill.expertise)} 
                        />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <h4 className="text-sm font-medium">{skill.name}</h4>
                          <span 
                            className="ml-2 text-xs font-medium px-1.5 py-0.5 rounded-full"
                            style={{ 
                              backgroundColor: `${getExpertiseColor(skill.expertise)}15`,
                              color: getExpertiseColor(skill.expertise)
                            }}
                          >
                            {skill.expertise}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-0.5">
                          {skill.description}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 