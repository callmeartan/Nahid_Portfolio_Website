"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowRight, Github, ExternalLink, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const categories = ["All", "AI/ML", "Computer Vision", "Automation"];
  
  const projects = [
    {
      title: "Transformer-based QA Chatbot",
      description: "Fine-tuned Large Language Models (LLMs) with Retrieval-Augmented Generation (RAG) to assist engineers in querying validation reports, test logs, and KPIs through natural language. Improved traceability, reduced manual lookup time by 40%, and increased reasoning accuracy by 25%.",
      image: "/projects/qa-chatbot.png",
      tags: ["Python", "LLM", "RAG", "Fine-tuning", "Transformers"],
      category: "AI/ML",
      github: "",
      live: "",
      featured: true
    },
    {
      title: "Intelligent Validation & Reporting Automation",
      description: "Data-driven frameworks that streamlined reporting and diagnostics workflows. Reduced test cycle time by 30% and increased diagnostic precision by 45% through automated validation systems.",
      image: "/projects/validation-automation.png",
      tags: ["Python", "Automation", "MLOps", "Data Pipelines"],
      category: "Automation",
      github: "",
      live: "",
      featured: true
    },
    {
      title: "Traffic Sign Recognition – CV Pipeline",
      description: "Enhanced image processing pipeline to improve perception accuracy and model robustness for image classification and object detection. Achieved a 47% improvement in perception accuracy for traffic sign recognition scenarios.",
      image: "/projects/traffic-sign-recognition.png",
      tags: ["Python", "Computer Vision", "OpenCV", "CNN", "Object Detection"],
      category: "Computer Vision",
      github: "",
      live: "",
      featured: true
    },
    {
      title: "ADAS Simulation & Synthetic Data",
      description: "Produced synthetic datasets using CARLA and Unity3D/Unreal Engine to replicate diverse driving scenarios and improve simulation-based reinforcement learning outcomes for Advanced Driver Assistance Systems.",
      image: "/projects/adas-simulation.png",
      tags: ["Python", "Simulation", "CARLA", "Unity3D", "Reinforcement Learning"],
      category: "AI/ML",
      github: "",
      live: "",
      featured: true
    },
    {
      title: "Personalized EV Recommendation System",
      description: "Regression-based matching of user preferences with EV features, boosting satisfaction and conversions. Led to more accurate recommendations and higher user engagement.",
      image: "/projects/ev-recommendation.png",
      tags: ["Python", "Machine Learning", "Regression", "Recommendation Systems"],
      category: "AI/ML",
      github: "",
      live: "",
      featured: false
    },
    {
      title: "PET Imaging Signal Enhancement",
      description: "Applied deep learning–based denoising algorithms to improve image clarity and diagnostic precision. Enhanced PET imaging signal quality by 15%.",
      image: "/projects/pet-imaging.png",
      tags: ["Python", "Deep Learning", "Image Denoising", "Medical Imaging"],
      category: "Computer Vision",
      github: "",
      live: "",
      featured: false
    }
  ];
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <section ref={sectionRef} id="projects" className="py-20 md:py-28 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(var(--background-rgb),0.8)] via-[rgba(var(--background-alt-rgb),0.5)] to-[rgba(var(--background-rgb),1)] -z-10"></div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-40 left-20 w-96 h-96 bg-[rgba(var(--accent-light-rgb),0.08)] rounded-full blur-3xl -z-10"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 0.7 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-80 h-80 bg-[rgba(var(--accent-rgb),0.03)] rounded-full blur-3xl -z-10"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 0.7 } : { opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />
      
      <div className="container mx-auto">
        <motion.div 
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-title font-heading mb-4">My Projects</h2>
          <p className="section-description">
            A showcase of my work across AI/ML systems, computer vision, and intelligent automation, highlighting my technical expertise in building production-grade machine learning solutions.
          </p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          variants={container}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`tab-button ${
                activeCategory === category 
                  ? "tab-button-active" 
                  : "tab-button-inactive"
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategoryBackground"
                  className="tab-bg"
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                />
              )}
              <span>{category}</span>
            </motion.button>
          ))}
        </motion.div>
        
        <motion.div 
          layout
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.title}
              layout
              variants={item}
              whileHover={{ y: -10 }}
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group h-full"
            >
              <motion.div className="relative backdrop-blur-sm rounded-2xl overflow-hidden h-full flex flex-col hover:shadow-lg transition-all duration-300">
                {/* Animated border and gradient overlay */}
                <div className="absolute inset-0 rounded-2xl border border-[rgba(var(--border-rgb),0.3)] z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(var(--background-alt-rgb),0.7)] to-[rgba(var(--background-rgb),0.9)] z-0"></div>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgba(var(--accent-rgb),0.03)] to-[rgba(var(--accent-rgb),0.08)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                ></motion.div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[rgba(var(--accent-rgb),0.1)] to-transparent -translate-y-12 translate-x-12 rounded-full blur-2xl z-0"></div>
                
                <div className="relative h-48 overflow-hidden z-10">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredProject === project.title ? 1 : 0,
                      transition: { duration: 0.2 }
                    }}
                    className="absolute inset-0 bg-gradient-to-t from-[rgba(var(--foreground-rgb),0.8)] to-transparent flex items-end justify-between p-4 z-20"
                  >
                    <div className="flex gap-2">
                      {project.github && (
                        <Link 
                          href={project.github} 
                          target="_blank" 
                          className="p-2.5 bg-black/70 rounded-full text-white hover:bg-[rgb(var(--accent-rgb))] transition-colors hover:scale-110 transform duration-200"
                          aria-label={`GitHub repository for ${project.title}`}
                          tabIndex={0}
                        >
                          <Github className="h-4 w-4" />
                        </Link>
                      )}
                      {project.live && (
                        <Link 
                          href={project.live} 
                          target="_blank" 
                          className="p-2.5 bg-black/70 rounded-full text-white hover:bg-[rgb(var(--accent-rgb))] transition-colors hover:scale-110 transform duration-200"
                          aria-label={`Live demo for ${project.title}`}
                          tabIndex={0}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                    {project.featured && (
                      <motion.span 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="badge bg-[rgba(var(--accent-rgb),0.9)] text-white px-3 py-1"
                      >
                        Featured
                      </motion.span>
                    )}
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full bg-gradient-to-br from-[rgba(var(--accent-light-rgb),0.3)] to-[rgba(var(--accent-rgb),0.1)] flex items-center justify-center relative overflow-hidden"
                  >
                    <motion.div
                      animate={{
                        scale: hoveredProject === project.title ? 1.1 : 1,
                        transition: { duration: 0.3 }
                      }}
                      className="text-5xl font-bold text-[rgb(var(--accent-rgb))] opacity-70"
                    >
                      {project.title.substring(0, 1)}
                    </motion.div>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(var(--accent-rgb),0.05)] to-transparent"
                      animate={{ 
                        x: hoveredProject === project.title ? ['-100%', '100%'] : '-100%',
                        transition: { 
                          repeat: Infinity,
                          duration: 1.5, 
                          ease: 'linear'
                        } 
                      }}
                    />
                  </motion.div>
                </div>
                <div className="p-7 flex-1 flex flex-col relative z-10">
                  <h3 className="text-xl font-bold mb-3 font-heading group-hover:text-[rgb(var(--accent-rgb))] transition-colors">
                    {project.title}
                    {hoveredProject === project.title && 
                      <motion.span 
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                        className="inline-block ml-1"
                      >
                        <ArrowUpRight className="h-4 w-4 inline-block" />
                      </motion.span>
                    }
                  </h3>
                  <p className="text-[rgb(var(--muted-rgb))] mb-4 text-sm flex-1">{project.description}</p>
                  <motion.div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <motion.span 
                        key={tag} 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="badge hover:bg-[rgba(var(--accent-rgb),0.2)] transition-colors cursor-default"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                  {(project.live || project.github) && (
                    <Link 
                      href={project.live || project.github}
                      target="_blank" 
                      className="flex items-center text-[rgb(var(--accent-rgb))] font-medium text-sm group-hover:underline"
                      aria-label={`View details for ${project.title}`}
                      tabIndex={0}
                    >
                      View Details
                      <motion.span
                        animate={{
                          x: hoveredProject === project.title ? 4 : 0,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </motion.span>
                    </Link>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 