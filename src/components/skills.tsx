"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Server, Zap, Star, Cloud, BrainCircuit } from "lucide-react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeTab, setActiveTab] = useState<number>(0);

  const skillCategories = [
    {
      id: "languages",
      name: "Core Stack",
      description: "Programming languages and the tools I use to build and ship ML systems."
    },
    {
      id: "expertise",
      name: "ML & AI",
      description: "Modeling, computer vision, multimodal AI, and the techniques used in production."
    },
    {
      id: "infrastructure",
      name: "LLMs & Systems",
      description: "RAG, fine-tuning, MLOps, distributed training, and deployment infrastructure."
    }
  ];

  const skillGroups = [
    [
      {
        name: "Programming Languages",
        icon: Code,
        color: "rgb(var(--accent-rgb))",
        skills: [
          { name: "Python", expertise: "Expert", description: "Primary language for ML, automation, and data work" },
          { name: "SQL", expertise: "Expert", description: "Analysis, retrieval, and data pipeline queries" },
          { name: "Java", expertise: "Advanced", description: "Enterprise and production systems" },
          { name: "C++", expertise: "Advanced", description: "Performance-sensitive systems and tooling" },
          { name: "Git", expertise: "Expert", description: "Version control and collaboration" }
        ]
      },
      {
        name: "ML Frameworks",
        icon: BrainCircuit,
        color: "#10b981",
        skills: [
          { name: "PyTorch", expertise: "Expert", description: "Deep learning framework for research and production" },
          { name: "TensorFlow", expertise: "Expert", description: "Model training and deployment at scale" },
          { name: "OpenCV", expertise: "Expert", description: "Computer vision and image processing" },
          { name: "Hugging Face", expertise: "Expert", description: "Model hub, datasets, and transformers ecosystem" },
          { name: "Transformers", expertise: "Expert", description: "Foundation models and sequence modeling" }
        ]
      }
    ],
    [
      {
        name: "Multimodal AI",
        icon: BrainCircuit,
        color: "#8b5cf6",
        skills: [
          { name: "Computer Vision", expertise: "Expert", description: "Visual understanding for autonomous systems" },
          { name: "Foundation Models", expertise: "Expert", description: "Model selection and adaptation" },
          { name: "Model Selection & Evaluation", expertise: "Expert", description: "Comparative analysis and validation" },
          { name: "Multimodal Learning", expertise: "Expert", description: "Fusing vision, text, and structured signals" }
        ]
      },
      {
        name: "LLMs & NLP",
        icon: Cloud,
        color: "#3b82f6",
        skills: [
          { name: "RAG", expertise: "Expert", description: "Retrieval-augmented generation pipelines" },
          { name: "Fine-tuning", expertise: "Expert", description: "Adapting foundation models to domain data" },
          { name: "LangChain", expertise: "Expert", description: "LLM application orchestration" },
          { name: "NLP", expertise: "Expert", description: "Text analytics, classification, and summarization" }
        ]
      },
      {
        name: "Autonomous Systems",
        icon: Zap,
        color: "#ec4899",
        skills: [
          { name: "Data Pipelines", expertise: "Expert", description: "Reliable feature and inference workflows" },
          { name: "Distributed Training (DDP, FSDP)", expertise: "Expert", description: "Scaling training across multiple devices" },
          { name: "Simulation Environments", expertise: "Expert", description: "Scenario generation and validation support" },
          { name: "Computer Vision Pipelines", expertise: "Expert", description: "ADAS perception and visual validation" }
        ]
      }
    ],
    [
      {
        name: "Infra & MLOps",
        icon: Server,
        color: "#f59e0b",
        skills: [
          { name: "CI/CD", expertise: "Expert", description: "Automated testing and deployment" },
          { name: "AWS SageMaker", expertise: "Expert", description: "Managed model training and deployment" },
          { name: "Kubernetes", expertise: "Advanced", description: "Container orchestration for ML workloads" },
          { name: "Kubeflow", expertise: "Advanced", description: "Pipeline orchestration for ML lifecycle management" }
        ]
      },
      {
        name: "Training & Evaluation",
        icon: Cloud,
        color: "#06b6d4",
        skills: [
          { name: "Model Training & Optimization", expertise: "Expert", description: "Improving performance and reliability" },
          { name: "Distributed Systems", expertise: "Expert", description: "Reliable large-scale ML execution" },
          { name: "Model Selection & Evaluation", expertise: "Expert", description: "Comparing models and validating tradeoffs" },
          { name: "Data Pipelines", expertise: "Expert", description: "Preparing and serving training data" }
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
                    className="tab-bg absolute inset-0 rounded-full"
                    style={{
                      background: 'linear-gradient(to right, rgb(6, 182, 212), rgb(37, 99, 235))',
                      zIndex: 0
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  />
                )}
                <span className="relative z-10" style={{ color: activeTab === index ? 'white' : 'inherit' }}>{category.name}</span>
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
