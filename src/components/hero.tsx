"use client";

import Link from "next/link";
import { ArrowRight, Download, Github, Linkedin, Instagram, Store, Mail } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section ref={sectionRef} className="relative py-28 md:py-36 lg:py-40 overflow-hidden min-h-[90vh] flex items-center justify-center" id="home">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="blur-dot w-[300px] h-[300px] -left-20 top-1/3 opacity-10"></div>
        <div className="blur-dot w-[200px] h-[200px] right-10 bottom-10 opacity-5"></div>
        <motion.div 
          className="absolute w-[500px] h-[500px] top-1/4 left-0 rounded-full bg-gradient-radial from-[rgba(var(--accent-rgb),0.03)] to-transparent -z-10 blur-xl"
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute w-[400px] h-[400px] bottom-0 right-0 rounded-full bg-gradient-radial from-[rgba(var(--accent-rgb),0.02)] to-transparent -z-10 blur-xl"
          animate={{ 
            scale: [1.2, 1, 1.2], 
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      <motion.div 
        style={{ opacity, y }}
        className="container mx-auto px-6 relative"
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left content */}
            <motion.div 
              className="lg:w-1/2 z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-cyan-50 text-cyan-600 mb-6 hover:bg-cyan-100 transition-colors border border-cyan-200/50 backdrop-blur-sm"
              >
                Machine Learning Engineer | AI Systems | GenAI | Intelligent Automation
              </motion.span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 leading-tight text-balance">
                Hi, I'm{" "}
                <span className="text-gradient bg-clip-text">
                  Nahid Nasiri
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed font-body text-pretty">
                Machine Learning Engineer and PhD researcher building production-grade AI systems across computer vision, large language models, and intelligent automation. Experienced in developing, testing, and optimizing deep learning models, computer vision systems, and LLMs to enhance performance, scalability, and reliability.
              </p>
              
              <motion.div 
                className="flex flex-wrap gap-5 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                <Link
                  href="#projects"
                  className="hero-button-primary group relative overflow-hidden rounded-md px-5 py-3 font-medium inline-flex items-center"
                  aria-label="View my work"
                >
                  <span className="relative z-10">View My Work</span>
                  <ArrowRight className="ml-2 h-4 w-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-[rgba(var(--accent-rgb),1)] to-[rgba(var(--accent-rgb),0.9)]"
                    initial={{ y: "100%" }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
                
                <Link
                  href="/resume"
                  className="hero-button-secondary group relative overflow-hidden rounded-md px-5 py-3 font-medium inline-flex items-center border border-[rgba(var(--border-rgb),0.6)]"
                  aria-label="View resume"
                >
                  <span className="relative z-10">Resume</span>
                  <Download className="ml-2 h-4 w-4 relative z-10 transition-transform duration-300 group-hover:translate-y-1" />
                  <motion.span 
                    className="absolute inset-0 bg-[rgba(var(--foreground-rgb),0.05)]"
                    initial={{ y: "100%" }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                <Link 
                  href="https://www.linkedin.com/in/nahid-nasiri-17b5aa136/" 
                  target="_blank" 
                  className="text-slate-700 hover:text-cyan-600 transition-all duration-300 hover:-translate-y-1"
                  aria-label="LinkedIn profile"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && window.open("https://www.linkedin.com/in/nahid-nasiri-17b5aa136/", "_blank")}
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link 
                  href="mailto:nnasiri@ucsc.edu" 
                  className="text-slate-700 hover:text-cyan-600 transition-all duration-300 hover:-translate-y-1"
                  aria-label="Email"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && window.open("mailto:nnasiri@ucsc.edu", "_blank")}
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Right image */}
            <motion.div 
              className="lg:w-1/2 relative z-10"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative mx-auto lg:mr-0 max-w-md aspect-square">
                {/* Enhanced decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-cyan-300/50 rounded-tr-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-blue-300/50 rounded-bl-xl"></div>
                
                {/* Animated border with enhanced effect */}
                <motion.div 
                  className="absolute inset-0 border-2 border-cyan-300/40 rounded-2xl translate-x-4 translate-y-4"
                  animate={{ 
                    boxShadow: ["0 0 0 rgba(6, 182, 212, 0)", "0 0 20px rgba(6, 182, 212, 0.3)", "0 0 0 rgba(6, 182, 212, 0)"] 
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
                
                {/* Image container with enhanced glow effect */}
                <div className="w-full h-full relative rounded-2xl overflow-hidden shadow-xl bg-white/50 backdrop-blur-sm border border-white/50">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-100/30 to-blue-100/20 opacity-80 z-10"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  ></motion.div>
                  <Image 
                    src="/images/profile.jpg?v=1" 
                    alt="Nahid Nasiri" 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 90vw, 400px"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Enhanced scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          y: isVisible ? [0, 10, 0] : 0 
        }}
        transition={{ 
          opacity: { delay: 1, duration: 1 },
          y: { delay: 1, duration: 2, repeat: Infinity, ease: "easeInOut" } 
        }}
      >
        <span className="text-xs text-slate-500 mb-2 tracking-widest">SCROLL</span>
        <motion.div 
          className="w-[1px] h-8 bg-gradient-to-b from-cyan-500 to-transparent"
          animate={{ 
            scaleY: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6] 
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        ></motion.div>
      </motion.div>
    </section>
  );
} 