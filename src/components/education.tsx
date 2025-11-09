"use client";

import { GraduationCap, Book, Target, ExternalLink, Calendar, MapPin, Award } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import React from "react";

export function Education() {
  const [activeIndex, setActiveIndex] = useState(0);
  const educationData = [
    {
      id: "university",
      period: "Sep 2020 - Jun 2025",
      title: "PhD in Electrical and Computer Engineering",
      institution: "University of California, Santa Cruz",
      location: "Santa Cruz, CA, USA",
      description: "Title of PhD Thesis: 'Extracting Implicit Features from Hand Fidgeting in ADHD Using Machine Learning'. GPA: 4.0/4.0. Designed and optimized deep learning models—including LSTM, encoder-decoder, and CNN architectures—to predict user behavior and extract insights from multimodal sensor data. Developed frameworks integrating hardware and software systems to streamline experimentation, accelerate data collection, and support real-time analysis across research environments.",
      skills: ["Deep Learning", "Machine Learning", "Signal Processing", "Research", "LSTM", "CNN"],
      icon: GraduationCap,
      color: "rgb(var(--accent-rgb))",
      highlight: "PhD in ECE, GPA: 4.0/4.0"
    },
    {
      id: "certificates",
      period: "Sep 2017 - Sep 2020",
      title: "PhD in Computer Engineering (Transferred to UCSC)",
      institution: "Istanbul Technical University",
      location: "Istanbul, Turkey",
      description: "Conducted advanced research on decision-making algorithms for Advanced Driver Assistance Systems (ADAS). Collaborated with faculty and research teams to explore machine learning and computer vision innovations for next-generation mobility systems. Designed and simulated complex driving environments to test model adaptability, improving robustness and generalization across variable conditions. GPA: 3.8/4.0.",
      skills: ["ADAS", "Computer Vision", "Machine Learning", "Simulation", "CARLA"],
      icon: GraduationCap,
      color: "rgb(124, 58, 237)",
      highlight: "PhD (Transferred), GPA: 3.8/4.0"
    },
    {
      id: "masters",
      period: "Sep 2014 - Sep 2017",
      title: "MSc in Computer Engineering",
      institution: "Istanbul Şehir University",
      location: "Istanbul, Turkey",
      description: "Best Student Award. GPA: 3.94/4.0. Led software development and research initiatives within the EU-funded ISG4 project, creating AI-driven educational games for children with special needs. Coordinated cross-functional and international teams to align research objectives, software deliverables, and timelines while integrating machine learning and NLP innovations into educational frameworks.",
      skills: ["AI Systems", "NLP", "Speech Systems", "Educational Technology"],
      icon: Award,
      color: "#10b981",
      highlight: "Best Student Award, GPA: 3.94/4.0"
    },
    {
      id: "bachelors",
      period: "2006 - 2010",
      title: "BSc in Computer Engineering",
      institution: "Iran University of Science and Technology",
      location: "Tehran, Iran",
      description: "2nd Best Senior Student. Developed foundational expertise in computer engineering, software development, and system design. Developed and implemented software solutions tailored to research and enterprise needs, integrating cross-platform systems to improve interoperability, scalability, and reliability.",
      skills: ["Computer Engineering", "Software Development", "System Design"],
      icon: Book,
      color: "#f59e0b",
      highlight: "2nd Best Senior Student"
    }
  ];
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };
  
  return (
    <section ref={ref} className="py-24 relative overflow-hidden" id="education">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(var(--background-rgb),1)] to-[rgba(var(--background-alt-rgb),0.5)] -z-10"></div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 left-1/4 w-72 h-72 bg-[rgba(var(--accent-light-rgb),0.08)] rounded-full blur-3xl -z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.8 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div 
        className="absolute bottom-40 right-1/3 w-96 h-96 bg-[rgba(var(--accent-rgb),0.03)] rounded-full blur-3xl -z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.8 } : { opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title font-heading relative inline-block">
            Education & Expertise
            <div className="absolute -z-10 bottom-0 left-0 right-0 h-3 bg-[rgba(var(--accent-rgb),0.2)] -rotate-1 translate-y-1"></div>
          </h2>
          <p className="section-description text-[rgb(var(--muted-rgb))] max-w-2xl mx-auto">
            My academic journey and continuous pursuit of knowledge that shapes my professional growth.
          </p>
        </motion.div>
        
        {/* Timeline Navigation */}
        <div className="flex justify-center mb-12">
          <div className="tab-navigation">
            {educationData.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`tab-button ${
                  activeIndex === index 
                    ? "tab-button-active" 
                    : "tab-button-inactive"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeIndex === index && (
                  <motion.div 
                    className="tab-bg absolute inset-0 rounded-full"
                    style={{ 
                      background: item.color ? `linear-gradient(to right, ${item.color}, ${item.color})` : 'linear-gradient(to right, rgb(6, 182, 212), rgb(37, 99, 235))',
                      zIndex: 0
                    }}
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  />
                )}
                <span className="relative z-10 flex items-center justify-center" style={{ color: activeIndex === index ? 'white' : 'inherit' }}>
                  <item.icon className="h-3.5 w-3.5 mr-2" />
                  {item.id === "university" ? "PhD" : item.id === "certificates" ? "PhD (Transferred)" : item.id === "masters" ? "MSc" : "BSc"}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
        
        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-12 gap-8"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {/* Timeline */}
            <motion.div 
              className="md:col-span-4 relative"
              variants={itemVariants}
            >
              <div className="sticky top-24 pt-6">
                <div className="space-y-8 relative">
                  <div className="absolute left-3 top-1 bottom-1 w-0.5 bg-[rgba(var(--border-rgb),0.7)]"></div>
                  
                  {educationData.map((item, index) => (
                    <motion.div 
                      key={item.id}
                      className={`relative pl-10 ${
                        activeIndex === index 
                          ? "opacity-100" 
                          : "opacity-60 hover:opacity-80"
                      } transition-opacity`}
                      onClick={() => setActiveIndex(index)}
                      whileHover={{ x: 5 }}
                      tabIndex={0}
                      role="button"
                      aria-label={`View ${item.title} details`}
                    >
                      <motion.div 
                        className="absolute left-0 top-1 h-6 w-6 rounded-full border-2 border-[rgb(var(--background-rgb))]"
                        style={{ 
                          backgroundColor: activeIndex === index ? item.color : "rgba(var(--foreground-rgb),0.1)" 
                        }}
                        animate={activeIndex === index ? { 
                          scale: [1, 1.2, 1],
                          transition: { repeat: Infinity, duration: 2 }
                        } : { scale: 1 }}
                      >
                        {activeIndex === index && (
                          <motion.div 
                            className="absolute inset-1 rounded-full" 
                            style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
                            animate={{ 
                              scale: [1, 1.8, 1],
                              opacity: [1, 0, 1]
                            }}
                            transition={{ repeat: Infinity, duration: 2 }}
                          />
                        )}
                      </motion.div>
                      
                      <div className="mb-1 flex items-center">
                        <Calendar className="h-3.5 w-3.5 mr-2 text-[rgb(var(--muted-rgb))]" />
                        <span className="text-sm text-[rgb(var(--muted-rgb))]">{item.period}</span>
                      </div>
                      
                      <h3 className={`text-base font-bold font-heading ${
                        activeIndex === index ? "text-[" + item.color + "]" : ""
                      }`}>
                        {item.title}
                      </h3>
                      
                      <div className="text-sm text-[rgb(var(--muted-rgb))] flex items-center mt-1">
                        <MapPin className="h-3 w-3 mr-1.5" />
                        {item.institution}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Content Panel */}
            <motion.div 
              className="md:col-span-8"
              variants={itemVariants}
            >
              <motion.div 
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative backdrop-blur-sm rounded-2xl overflow-hidden"
              >
                {/* Background gradient and decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(var(--background-alt-rgb),0.7)] to-[rgba(var(--background-rgb),0.9)] z-0"></div>
                <div className="absolute inset-0 rounded-2xl border border-[rgba(var(--border-rgb),0.3)] z-0"></div>
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 -translate-y-32 translate-x-32 blur-2xl z-0" style={{ backgroundColor: educationData[activeIndex].color }}></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 translate-y-32 -translate-x-32 blur-2xl z-0" style={{ backgroundColor: educationData[activeIndex].color }}></div>
                
                {/* Content */}
                <div className="p-8 relative z-10">
                  <div className="flex items-start mb-6">
                    <div className="p-3 rounded-xl mr-4" style={{ backgroundColor: `${educationData[activeIndex].color}20` }}>
                      {React.createElement(educationData[activeIndex].icon, { 
                        className: "h-5 w-5", 
                        style: { color: educationData[activeIndex].color } 
                      })}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-heading" style={{ color: educationData[activeIndex].color }}>
                        {educationData[activeIndex].title}
                      </h3>
                      <p className="text-[rgb(var(--muted-rgb))]">
                        {educationData[activeIndex].institution} • {educationData[activeIndex].location}
                      </p>
                    </div>
                  </div>
                  
                  <p className="mb-6 text-[rgb(var(--foreground-rgb))]">
                    {educationData[activeIndex].description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-3 flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full mr-2" style={{ backgroundColor: educationData[activeIndex].color }}></span>
                      Key Areas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {educationData[activeIndex].skills.map((skill) => (
                        <span 
                          key={skill} 
                          className="px-3 py-1 text-sm rounded-full" 
                          style={{ 
                            backgroundColor: `${educationData[activeIndex].color}15`,
                            color: educationData[activeIndex].color
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {activeIndex === 0 && (
                    <div className="flex justify-between items-center mt-6">
                      <div className="bg-[rgba(var(--accent-rgb),0.15)] text-[rgb(var(--accent-rgb))] px-4 py-2 rounded-xl font-medium">
                        {educationData[activeIndex].highlight}
                      </div>
                    </div>
                  )}
                  
                  {activeIndex !== 0 && (
                    <div className="mt-6 text-right">
                      <span className="inline-block bg-[rgba(var(--accent-rgb),0.15)] text-[rgb(var(--accent-rgb))] px-4 py-2 rounded-xl font-medium">
                        {educationData[activeIndex].highlight}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 