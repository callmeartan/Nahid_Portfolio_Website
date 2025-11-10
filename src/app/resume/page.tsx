"use client";

import * as React from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Award, Briefcase, Calendar, ChevronUp, Code, ExternalLink, Github, GraduationCap, Linkedin, Mail, MapPin, Phone, Store } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export default function ResumePage() {
  // For scroll animations and back-to-top button
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollY } = useScroll();
  const mainRef = useRef(null);

  // Transform values for parallax effects
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.9]);
  const headerY = useTransform(scrollY, [0, 100], [0, -10]);

  // Check scroll position to show/hide back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      }
      else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="flex flex-col min-h-screen relative bg-[rgb(var(--background-rgb))]">
      <Header />

      <main ref={mainRef} className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="mb-8 flex items-center space-x-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/#home"
              className="flex items-center text-sm font-medium text-[rgb(var(--muted-rgb))] hover:text-[rgb(var(--accent-rgb))] transition-colors group"
              aria-label="Back to home"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </Link>
          </motion.div>

          <motion.div
            className="card p-8 md:p-12 max-w-5xl mx-auto relative overflow-hidden backdrop-blur-sm bg-[rgba(var(--card-rgb),0.8)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[rgba(var(--accent-rgb),0.03)] blur-xl"></div>
            <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-[rgba(var(--accent-rgb),0.03)] blur-xl"></div>

            {/* Header */}
            <motion.div
              className="border-b border-[rgba(var(--border-rgb),0.7)] pb-8 mb-8 relative"
              style={{ opacity: headerOpacity, y: headerY }}
            >
              <motion.div
                className="absolute top-0 left-0 w-20 h-1 bg-gradient-to-r from-[rgba(var(--accent-rgb),0.7)] to-transparent"
                initial={{ width: 0 }}
                animate={{ width: "5rem" }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />

              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-2 relative inline-block"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                Nahid Nasiri
                <motion.span
                  className="absolute -bottom-2 left-0 h-[3px] bg-[rgb(var(--accent-rgb)))]"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </motion.h1>

              <motion.h2
                className="text-xl md:text-2xl text-[rgb(var(--accent-rgb)))] font-medium mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                Machine Learning Engineer | AI Systems | GenAI | Intelligent Automation
              </motion.h2>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <motion.div
                  className="flex items-center text-[rgb(var(--muted-rgb)))] group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="bg-[rgba(var(--accent-rgb),0.1)] w-8 h-8 rounded-full flex items-center justify-center mr-3">
                    <Mail className="h-4 w-4 transition-colors text-[rgb(var(--accent-rgb)))]" />
                  </div>
                  <a
                    href="mailto:nnasiri@ucsc.edu"
                    className="hover:text-[rgb(var(--accent-rgb)))] transition-colors"
                  >
                    nnasiri@ucsc.edu
                  </a>
                </motion.div>

                <motion.div
                  className="flex items-center text-[rgb(var(--muted-rgb)))] group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="bg-[rgba(var(--accent-rgb),0.1)] w-8 h-8 rounded-full flex items-center justify-center mr-3">
                    <Linkedin className="h-4 w-4 transition-colors text-[rgb(var(--accent-rgb)))]" />
                  </div>
                  <a
                    href="https://www.linkedin.com/in/nahid-nasiri-17b5aa136/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[rgb(var(--accent-rgb)))] transition-colors"
                  >
                    linkedin.com/in/nahid-nasiri-17b5aa136
                  </a>
                </motion.div>

                <motion.div
                  className="flex items-center text-[rgb(var(--muted-rgb)))] group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="bg-[rgba(var(--accent-rgb),0.1)] w-8 h-8 rounded-full flex items-center justify-center mr-3">
                    <MapPin className="h-4 w-4 transition-colors text-[rgb(var(--accent-rgb)))]" />
                  </div>
                  <span>San Jose, CA, USA</span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Profile Summary */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-[rgb(var(--foreground-rgb)))] leading-relaxed text-lg relative">
                <span className="block w-1.5 h-1.5 rounded-full bg-[rgb(var(--accent-rgb)))] absolute -left-4 top-3"></span>
                Innovative and results-driven engineer specializing in AI, machine learning, and software engineering across autonomous systems and intelligent platforms. Experienced in developing, testing, and optimizing deep learning models, computer vision systems, and large language models (LLMs) to enhance performance, scalability, and reliability. Skilled in designing automation frameworks, simulation environments, and multimodal data pipelines that accelerate validation and elevate model precision. Brings a unique blend of technical rigor and creative problem-solving—bridging applied research and real-world deployment to advance the next generation of AI-enabled technologies.
              </p>
            </motion.div>

            {/* Work Experience */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center mb-6">
                <div className="h-8 w-8 rounded-lg bg-[rgba(var(--accent-rgb),0.1)] flex items-center justify-center mr-3 text-[rgb(var(--accent-rgb)))]">
                  <Briefcase className="h-4 w-4" />
                </div>
                <h2 className="section-title text-[rgb(var(--accent-rgb)))]">Work Experience</h2>
              </div>

              <motion.div
                className="mb-8 card hover:!transform-none !border-[rgba(var(--border-rgb),0.7)] !shadow-none p-0 overflow-hidden group relative"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-[rgb(var(--accent-rgb)))] opacity-60"></div>
                <div className="p-6 pl-8">
                  <div className="flex flex-wrap items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold group-hover:text-[rgb(var(--accent-rgb)))] transition-colors">Machine Learning Engineer</h3>
                    <span className="badge flex items-center">
                      <Calendar className="h-3 w-3 mr-1.5" />
                      May 2023 - Apr 2025
                    </span>
                  </div>
                  <div className="text-[rgb(var(--muted-rgb)))] mb-4">Akkodis, Inc. (AUDI OF AMERICA) | San Jose, CA</div>

                  <ul className="space-y-3">
                    <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[rgb(var(--accent-rgb)))]">
                      Built and deployed a <span className="font-medium">Transformer-based QA chatbot</span> leveraging fine-tuned Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) to assist engineers in querying validation reports, test logs, and KPIs through natural language. Improved traceability, reduced manual lookup time by <span className="font-medium">40%</span>, and increased reasoning accuracy by <span className="font-medium">25%</span>
                    </li>
                    <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[rgb(var(--accent-rgb)))]">
                      Identified tooling and automation gaps within validation workflows and implemented data-driven frameworks to streamline reporting, reduce test cycle time by <span className="font-medium">30%</span>, and increase diagnostic precision by <span className="font-medium">45%</span>
                    </li>
                    <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[rgb(var(--accent-rgb)))]">
                      Enhanced image processing pipeline to improve perception accuracy and model robustness for image classification and object detection, leading to a <span className="font-medium">47% improvement</span> in perception accuracy for traffic sign recognition scenarios
                    </li>
                    <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[rgb(var(--accent-rgb)))]">
                      Contributed to improving a personalized EV recommendation system using regression to match user preferences with EV features, boosting satisfaction and conversions
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                className="mb-8 card hover:!transform-none !border-[rgba(var(--border-rgb),0.7)] !shadow-none p-0 overflow-hidden group relative"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-[rgb(var(--accent-rgb)))] opacity-60"></div>
                <div className="p-6 pl-8">
                  <div className="flex flex-wrap items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold group-hover:text-[rgb(var(--accent-rgb)))] transition-colors">Electrical and Computer Engineering Research/Teaching Assistant – PhD</h3>
                    <span className="badge flex items-center">
                      <Calendar className="h-3 w-3 mr-1.5" />
                      Sep 2020 - Jun 2025
                    </span>
                  </div>
                  <div className="text-[rgb(var(--muted-rgb)))] mb-4">University of California, Santa Cruz | Santa Cruz, CA</div>

                  <ul className="space-y-3">
                    <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[rgb(var(--accent-rgb)))]">
                      Applied deep learning–based denoising algorithms to improve image clarity and diagnostic precision, enhancing <span className="font-medium">PET imaging signal quality by 15%</span>
                    </li>
                    <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[rgb(var(--accent-rgb)))]">
                      Unified hardware-software ecosystems for real-time sensor data acquisition, <span className="font-medium">reducing laboratory setup time by 40%</span>
                    </li>
                    <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[rgb(var(--accent-rgb)))]">
                      Leveraged analysis of fidgeting behaviors as a complementary feature to traditional psychological assessments, <span className="font-medium">improving ADHD diagnostic accuracy by 35%</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </motion.section>

            {/* Projects */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <div className="h-8 w-8 rounded-lg bg-[rgba(var(--accent-rgb),0.1)] flex items-center justify-center mr-3 text-[rgb(var(--accent-rgb)))]">
                  <Code className="h-4 w-4" />
                </div>
                <h2 className="section-title text-[rgb(var(--accent-rgb)))]">Projects</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  className="card hover:!transform-none !border-[rgba(var(--border-rgb),0.7)] p-0 overflow-hidden group relative"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="absolute top-0 left-0 w-2 h-full bg-[rgb(var(--accent-rgb)))] opacity-60"></div>
                  <div className="p-6 pl-8">
                    <h3 className="text-xl font-semibold group-hover:text-[rgb(var(--accent-rgb)))] transition-colors mb-3">Transformer-based QA Chatbot</h3>
                    <p className="mb-4 text-[rgb(var(--muted-rgb)))]">
                      Built and deployed a Transformer-based QA chatbot leveraging fine-tuned Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) to assist engineers in querying validation reports, test logs, and KPIs through natural language. Improved traceability, reduced manual lookup time by 40%, and increased reasoning accuracy by 25%.
                    </p>
                    </div>
                </motion.div>

                <motion.div
                  className="card hover:!transform-none !border-[rgba(var(--border-rgb),0.7)] p-0 overflow-hidden group relative"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="absolute top-0 left-0 w-2 h-full bg-[rgb(var(--accent-rgb)))] opacity-60"></div>
                  <div className="p-6 pl-8">
                    <h3 className="text-xl font-semibold group-hover:text-[rgb(var(--accent-rgb)))] transition-colors mb-3">Intelligent Validation & Reporting Automation</h3>
                    <p className="mb-4 text-[rgb(var(--muted-rgb)))]">
                      Identified tooling and automation gaps within validation workflows and implemented data-driven frameworks to streamline reporting, reduce test cycle time by 30%, and increase diagnostic precision by 45%.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="card hover:!transform-none !border-[rgba(var(--border-rgb),0.7)] p-0 overflow-hidden group relative"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="absolute top-0 left-0 w-2 h-full bg-[rgb(var(--accent-rgb)))] opacity-60"></div>
                  <div className="p-6 pl-8">
                    <h3 className="text-xl font-semibold group-hover:text-[rgb(var(--accent-rgb)))] transition-colors mb-3">Traffic Sign Recognition – CV Pipeline</h3>
                    <p className="mb-4 text-[rgb(var(--muted-rgb)))]">
                      Enhanced image processing pipeline to improve perception accuracy and model robustness for image classification and object detection, leading to a 47% improvement in perception accuracy for traffic sign recognition scenarios.
                    </p>
                    </div>
                </motion.div>

                <motion.div
                  className="card hover:!transform-none !border-[rgba(var(--border-rgb),0.7)] p-0 overflow-hidden group relative"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="absolute top-0 left-0 w-2 h-full bg-[rgb(var(--accent-rgb)))] opacity-60"></div>
                  <div className="p-6 pl-8">
                    <h3 className="text-xl font-semibold group-hover:text-[rgb(var(--accent-rgb)))] transition-colors mb-3">ADAS Simulation & Synthetic Data</h3>
                    <p className="mb-4 text-[rgb(var(--muted-rgb)))]">
                      Produced synthetic datasets using CARLA and Unity3D/Unreal Engine to replicate diverse driving scenarios and improve simulation-based reinforcement learning outcomes for Advanced Driver Assistance Systems.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="card hover:!transform-none !border-[rgba(var(--border-rgb),0.7)] p-0 overflow-hidden group relative"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="absolute top-0 left-0 w-2 h-full bg-[rgb(var(--accent-rgb)))] opacity-60"></div>
                  <div className="p-6 pl-8">
                    <h3 className="text-xl font-semibold group-hover:text-[rgb(var(--accent-rgb)))] transition-colors mb-3">Personalized EV Recommendation System</h3>
                    <p className="mb-4 text-[rgb(var(--muted-rgb)))]">
                      Contributed to improving a personalized EV recommendation system using regression to match user preferences with EV features, boosting satisfaction and conversions, leading to more accurate recommendations and higher user engagement.
                    </p>
                    </div>
                </motion.div>

                <motion.div
                  className="card hover:!transform-none !border-[rgba(var(--border-rgb),0.7)] p-0 overflow-hidden group relative"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="absolute top-0 left-0 w-2 h-full bg-[rgb(var(--accent-rgb)))] opacity-60"></div>
                  <div className="p-6 pl-8">
                    <h3 className="text-xl font-semibold group-hover:text-[rgb(var(--accent-rgb)))] transition-colors mb-3">PET Imaging Signal Enhancement</h3>
                    <p className="mb-4 text-[rgb(var(--muted-rgb)))]">
                      Applied deep learning–based denoising algorithms to improve image clarity and diagnostic precision, enhancing PET imaging signal quality by 15%.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.section>

            {/* Skills */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <div className="h-8 w-8 rounded-lg bg-[rgba(var(--accent-rgb),0.1)] flex items-center justify-center mr-3 text-[rgb(var(--accent-rgb)))]">
                  <Code className="h-4 w-4" />
                </div>
                <h2 className="section-title text-[rgb(var(--accent-rgb)))]">Core Skills</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <motion.div
                  className="card hover:!transform-none !border-[rgba(var(--border-rgb),0.7)] p-0 overflow-hidden group relative"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="p-5">
                    <h3 className="font-semibold mb-2 text-[rgb(var(--accent-rgb)))]">Languages & Tools</h3>
                    <p className="text-[rgb(var(--muted-rgb)))]">Python, Java, C++, MATLAB, SQL, Git, Jupyter, TensorFlow, PyTorch, OpenCV</p>
                  </div>
                  <div className="h-1 w-full bg-gradient-to-r from-[rgba(var(--accent-rgb),0.7)] to-transparent"></div>
                </motion.div>

                <motion.div
                  className="card hover:!transform-none !border-[rgba(var(--border-rgb),0.7)] p-0 overflow-hidden group relative"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="p-5">
                    <h3 className="font-semibold mb-2 text-[rgb(var(--accent-rgb)))]">Areas of Expertise</h3>
                    <p className="text-[rgb(var(--muted-rgb)))]">Machine Learning & Deep Learning (CNN, LSTM, RNN), Generative AI & LLMs (Fine-Tuning, RAG), Model Training & Optimization, A/B Testing, Simulation & Data Pipelines, Computer Vision (Object Detection, Semantic Segmentation)</p>
                  </div>
                  <div className="h-1 w-full bg-gradient-to-r from-[rgba(var(--accent-rgb),0.7)] to-transparent"></div>
                </motion.div>

                <motion.div
                  className="card hover:!transform-none !border-[rgba(var(--border-rgb),0.7)] p-0 overflow-hidden group relative"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="p-5">
                    <h3 className="font-semibold mb-2 text-[rgb(var(--accent-rgb)))]">Infrastructure & Automation</h3>
                    <p className="text-[rgb(var(--muted-rgb)))]">A/B Testing, CI/CD, MLOps, Automated Reporting Systems, Remote Test Stations, Data Pipelines</p>
                  </div>
                  <div className="h-1 w-full bg-gradient-to-r from-[rgba(var(--accent-rgb),0.7)] to-transparent"></div>
                </motion.div>

                <motion.div
                  className="card hover:!transform-none !border-[rgba(var(--border-rgb),0.7)] p-0 overflow-hidden group relative md:col-span-3"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="p-5">
                    <h3 className="font-semibold mb-2 text-[rgb(var(--accent-rgb)))]">Cloud & Platforms</h3>
                    <p className="text-[rgb(var(--muted-rgb)))]">AWS SageMaker, Azure, Google Cloud Platform, Kubernetes, Distributed Systems (DDP, FSDP)</p>
                  </div>
                  <div className="h-1 w-full bg-gradient-to-r from-[rgba(var(--accent-rgb),0.7)] to-transparent"></div>
                </motion.div>
              </div>
            </motion.section>

            {/* Education and Honors */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
              <motion.section
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className="flex items-center mb-6">
                  <div className="h-8 w-8 rounded-lg bg-[rgba(var(--accent-rgb),0.1)] flex items-center justify-center mr-3 text-[rgb(var(--accent-rgb)))]">
                    <GraduationCap className="h-4 w-4" />
                  </div>
                  <h2 className="section-title text-[rgb(var(--accent-rgb)))]">Education</h2>
                </div>

                <div className="space-y-6">
                <motion.div
                  className="card hover:!transform-none !border-[rgba(var(--border-rgb),0.7)] p-0 overflow-hidden group relative"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="absolute top-0 left-0 w-2 h-full bg-[rgb(var(--accent-rgb)))] opacity-60"></div>
                  <div className="p-6 pl-8">
                    <div className="flex flex-wrap items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold group-hover:text-[rgb(var(--accent-rgb)))] transition-colors">PhD in Electrical and Computer Engineering</h3>
                      <span className="badge flex items-center">
                        <Calendar className="h-3 w-3 mr-1.5" />
                          2025
                      </span>
                    </div>
                      <p className="text-[rgb(var(--muted-rgb)))] mb-2">University of California, Santa Cruz</p>
                      <p className="text-sm text-[rgb(var(--muted-rgb)))]">GPA: 4.0/4.0 | Thesis: "Extracting Implicit Features from Hand Fidgeting in ADHD Using Machine Learning"</p>
                  </div>
                </motion.div>

                  <motion.div
                    className="card hover:!transform-none !border-[rgba(var(--border-rgb),0.7)] p-0 overflow-hidden group relative"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                    <div className="absolute top-0 left-0 w-2 h-full bg-[rgb(var(--accent-rgb)))] opacity-60"></div>
                    <div className="p-6 pl-8">
                      <div className="flex flex-wrap items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold group-hover:text-[rgb(var(--accent-rgb)))] transition-colors">PhD in Computer Engineering (Transferred)</h3>
                        <span className="badge flex items-center">
                          <Calendar className="h-3 w-3 mr-1.5" />
                          2020
                        </span>
                      </div>
                      <p className="text-[rgb(var(--muted-rgb)))] mb-2">Istanbul Technical University, Istanbul, Turkey</p>
                      <p className="text-sm text-[rgb(var(--muted-rgb)))]">GPA: 3.8/4.0</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="card hover:!transform-none !border-[rgba(var(--border-rgb),0.7)] p-0 overflow-hidden group relative"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <div className="absolute top-0 left-0 w-2 h-full bg-[rgb(var(--accent-rgb)))] opacity-60"></div>
                    <div className="p-6 pl-8">
                      <div className="flex flex-wrap items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold group-hover:text-[rgb(var(--accent-rgb)))] transition-colors">MSc in Computer Engineering</h3>
                        <span className="badge flex items-center">
                          <Calendar className="h-3 w-3 mr-1.5" />
                          2017
                        </span>
                      </div>
                      <p className="text-[rgb(var(--muted-rgb)))] mb-2">Istanbul Şehir University, Istanbul, Turkey</p>
                      <p className="text-sm text-[rgb(var(--muted-rgb)))]">GPA: 3.94/4.0 (Best Student Award)</p>
                      </div>
                  </motion.div>

                  <motion.div
                    className="card hover:!transform-none !border-[rgba(var(--border-rgb),0.7)] p-0 overflow-hidden group relative"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <div className="absolute top-0 left-0 w-2 h-full bg-[rgb(var(--accent-rgb)))] opacity-60"></div>
                    <div className="p-6 pl-8">
                      <div className="flex flex-wrap items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold group-hover:text-[rgb(var(--accent-rgb)))] transition-colors">BSc in Computer Engineering</h3>
                        <span className="badge flex items-center">
                          <Calendar className="h-3 w-3 mr-1.5" />
                          2010
                        </span>
                      </div>
                      <p className="text-[rgb(var(--muted-rgb)))] mb-2">Iran University of Science and Technology, Tehran, Iran</p>
                      <p className="text-sm text-[rgb(var(--muted-rgb)))]">2nd Best Senior Student</p>
                    </div>
                  </motion.div>
                </div>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                  className="relative"
                >
                  <div className="flex items-center mb-6">
                    <div className="h-8 w-8 rounded-lg bg-[rgba(var(--accent-rgb),0.1)] flex items-center justify-center mr-3 text-[rgb(var(--accent-rgb)))]">
                      <Award className="h-4 w-4" />
                    </div>
                  <h2 className="section-title text-[rgb(var(--accent-rgb)))]">Honors & Awards</h2>
                  </div>

                <div className="space-y-4">
                    <motion.div
                      className="card hover:!transform-none !border-[rgba(var(--border-rgb),0.7)] p-0 overflow-hidden group relative"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                    <div className="absolute top-0 left-0 w-2 h-full bg-[rgb(var(--accent-rgb)))] opacity-60"></div>
                    <div className="p-6 pl-8">
                      <h3 className="font-semibold text-[rgb(var(--accent-rgb)))] mb-2">University Fellowship Award</h3>
                      <p className="text-[rgb(var(--muted-rgb)))] text-sm mb-1">2020–2021</p>
                      <p className="text-sm">Competitive academic fellowship awarded to less than 15% of applicants.</p>
                    </div>
                    </motion.div>

                    <motion.div
                      className="card hover:!transform-none !border-[rgba(var(--border-rgb),0.7)] p-0 overflow-hidden group relative"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                    <div className="absolute top-0 left-0 w-2 h-full bg-[rgb(var(--accent-rgb)))] opacity-60"></div>
                    <div className="p-6 pl-8">
                      <h3 className="font-semibold text-[rgb(var(--accent-rgb)))] mb-2">Graduate Research & Teaching Assistantship</h3>
                      <p className="text-[rgb(var(--muted-rgb)))] text-sm mb-1">2021–2023</p>
                      <p className="text-sm">Merit-based; granted to fewer than 20% of graduate candidates.</p>
                    </div>
                    </motion.div>

                    <motion.div
                      className="card hover:!transform-none !border-[rgba(var(--border-rgb),0.7)] p-0 overflow-hidden group relative"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                    <div className="absolute top-0 left-0 w-2 h-full bg-[rgb(var(--accent-rgb)))] opacity-60"></div>
                    <div className="p-6 pl-8">
                      <h3 className="font-semibold text-[rgb(var(--accent-rgb)))] mb-2">European Union Scholarship</h3>
                      <p className="text-[rgb(var(--muted-rgb)))] text-sm mb-1">2014–2017</p>
                      <p className="text-sm">Awarded for master's degree for ranking 1st among Computer Engineering students.</p>
                    </div>
                    </motion.div>
                  </div>
                </motion.section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />

      {/* Back to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[rgba(var(--accent-rgb),0.9)] text-white flex items-center justify-center shadow-lg z-50"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}