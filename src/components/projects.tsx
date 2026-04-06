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
  
  const categories = ["All", "Multimodal AI", "NLP", "Computer Vision", "Automation"];
  
  const projects = [
    {
      title: "Multimodal Damage Assessment",
      description: "Built a multimodal damage assessment system for cost estimation and business impact modeling, including repair-vs-total-loss classification, cost regression, and part recommendation by collaborative filtering. Collaborated with the BottleRocket team to fine-tune a VLM for better visual understanding and accuracy.",
      image: "/projects/qa-chatbot.png",
      tags: ["Python", "Multimodal AI", "VLM", "Computer Vision", "Ranking"],
      category: "Multimodal AI",
      github: "",
      live: "",
      featured: true
    },
    {
      title: "Voice-Enabled RAG Chatbot",
      description: "Developed a voice-enabled chatbot using LLMs and RAG over internal knowledge bases, reducing ticket volume by ~65% and response time by ~70%.",
      image: "/projects/validation-automation.png",
      tags: ["Python", "LLM", "RAG", "Voice", "Internal Knowledge Base"],
      category: "Multimodal AI",
      github: "",
      live: "",
      featured: true
    },
    {
      title: "BERTopic Feedback Analytics",
      description: "Applied BERTopic to analyze survey and customer support feedback, reducing time-to-insight by 83% and helping leadership teams prioritize issues faster.",
      image: "/projects/traffic-sign-recognition.png",
      tags: ["Python", "NLP", "BERTopic", "Clustering", "Analytics"],
      category: "NLP",
      github: "",
      live: "",
      featured: true
    },
    {
      title: "Resume Ranking Platform",
      description: "Contributed to a resume ranking platform with low-quality filtering, duplicate detection, and similarity scoring using structured job representations, LLM-based inference, and prompt engineering.",
      image: "/projects/adas-simulation.png",
      tags: ["Python", "LLM", "Prompt Engineering", "Ranking", "Automation"],
      category: "Automation",
      github: "",
      live: "",
      featured: true
    },
    {
      title: "ADAS Vision Pipeline",
      description: "Enhanced computer vision pipelines for ADAS, improving accuracy by 47% through better perception modeling and validation workflows.",
      image: "/projects/ev-recommendation.png",
      tags: ["Python", "Computer Vision", "ADAS", "OpenCV", "Validation"],
      category: "Computer Vision",
      github: "",
      live: "",
      featured: false
    },
    {
      title: "Validation Workflow Automation",
      description: "Contributed to automation frameworks that streamlined validation workflows, reducing test cycle time and improving diagnostic precision by 70%.",
      image: "/projects/pet-imaging.png",
      tags: ["Python", "Automation", "Validation", "Data Pipelines", "CI/CD"],
      category: "Automation",
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
      <div className="absolute inset-0 bg-gradient-to-b from-white via-cyan-50/30 to-blue-50/20 -z-10"></div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-40 left-20 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl -z-10"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 0.7 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-80 h-80 bg-blue-200/15 rounded-full blur-3xl -z-10"
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
            A showcase of work across multimodal AI, NLP, computer vision, and automation, with an emphasis on production-grade machine learning systems and measurable impact.
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
                  className="tab-bg absolute inset-0 rounded-full"
                  style={{
                    background: 'linear-gradient(to right, rgb(6, 182, 212), rgb(37, 99, 235))',
                    zIndex: 0
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                />
              )}
              <span className="relative z-10" style={{ color: activeCategory === category ? 'white' : 'inherit' }}>{category}</span>
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
              <motion.div className="relative backdrop-blur-xl rounded-2xl overflow-hidden h-full flex flex-col hover:shadow-lg transition-all duration-300 bg-white/70 border border-white/40 shadow-md">
                {/* Animated border and gradient overlay */}
                <div className="absolute inset-0 rounded-2xl border border-cyan-200/30 z-0"></div>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-50/30 to-blue-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                ></motion.div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-200/20 to-transparent -translate-y-12 translate-x-12 rounded-full blur-2xl z-0"></div>
                
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
                    className="w-full h-full bg-gradient-to-br from-cyan-100/40 to-blue-100/30 flex items-center justify-center relative overflow-hidden"
                  >
                    <motion.div
                      animate={{
                        scale: hoveredProject === project.title ? 1.1 : 1,
                        transition: { duration: 0.3 }
                      }}
                      className="text-5xl font-bold bg-gradient-to-br from-cyan-500 to-blue-500 bg-clip-text text-transparent opacity-70"
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
                  <h3 className="text-xl font-bold mb-3 font-heading group-hover:text-cyan-600 transition-colors text-slate-800">
                    {project.title}
                    {hoveredProject === project.title && 
                      <motion.span 
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                        className="inline-block ml-1"
                      >
                        <ArrowUpRight className="h-4 w-4 inline-block text-cyan-600" />
                      </motion.span>
                    }
                  </h3>
                  <p className="text-slate-600 mb-4 text-sm flex-1">{project.description}</p>
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
                      className="flex items-center text-cyan-600 font-medium text-sm group-hover:underline"
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
