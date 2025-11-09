"use client";

import * as React from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Award, Briefcase, Calendar, ChevronUp, Code, Download, ExternalLink, Github, GraduationCap, Languages, Linkedin, Mail, MapPin, Phone, Store } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export default function ResumePage() {
  // Ensure file is downloaded when user directly visits the page
  useEffect(() => {
    // This check prevents the redirect if someone is just viewing the resume page
    const params = new URLSearchParams(window.location.search);
    if (params.get("download") === "true") {
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = "Nahid_Nasiri_Resume.pdf";
      link.click();
    }
  }, []);

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

            <Link
              href="/resume.pdf"
              target="_blank"
              className="ml-auto flex items-center btn btn-primary !py-2 !px-4 !text-sm group"
              aria-label="Download resume"
            >
              <span className="relative z-10">Download PDF</span>
              <Download className="ml-2 h-4 w-4 relative z-10" />
              <span className="absolute inset-0 bg-[rgba(var(--accent-rgb),0.9)] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
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
                Machine Learning Engineer specializing in AI systems, Generative AI, and intelligent automation. PhD researcher building production-grade ML pipelines, computer vision systems, and large language models. Experienced in developing, testing, and optimizing deep learning models to enhance performance, scalability, and reliability. Skilled in designing automation frameworks, simulation environments, and multimodal data pipelines that accelerate validation and elevate model precision.
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
                    <div className="flex flex-wrap items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold group-hover:text-[rgb(var(--accent-rgb)))] transition-colors">DevIO</h3>
                      <span className="badge flex items-center">
                        <Calendar className="h-3 w-3 mr-1.5" />
                        Feb 2025 - Present
                      </span>
                    </div>
                    <p className="mb-4 text-[rgb(var(--muted-rgb)))] italic">
                      AI-powered local LLM client ranked Top 20 in App Store Developer Tools
                    </p>
                    <ul className="space-y-2">
                      <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[rgb(var(--accent-rgb)))]">
                        Built secure mobile client for Ollama LLMs ensuring offline-first privacy
                      </li>
                      <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[rgb(var(--accent-rgb)))]">
                        Architected with BLoC pattern and service layer abstraction
                      </li>
                      <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[rgb(var(--accent-rgb)))]">
                        Delivered streaming UI with adaptive layouts, dark/light modes
                      </li>
                      <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[rgb(var(--accent-rgb)))]">
                        Tracked engagement with Firebase Analytics to guide feature iteration
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  className="card hover:!transform-none !border-[rgba(var(--border-rgb),0.7)] p-0 overflow-hidden group relative"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="absolute top-0 left-0 w-2 h-full bg-[rgb(var(--accent-rgb)))] opacity-60"></div>
                  <div className="p-6 pl-8">
                    <div className="flex flex-wrap items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold group-hover:text-[rgb(var(--accent-rgb)))] transition-colors">Habitly</h3>
                      <span className="badge flex items-center">
                        <Calendar className="h-3 w-3 mr-1.5" />
                        Sep 2024 - Nov 2024
                      </span>
                    </div>
                    <p className="mb-4 text-[rgb(var(--muted-rgb)))] italic">
                      Cross-platform habit-tracking app with streak system and offline-first design
                    </p>
                    <ul className="space-y-2">
                      <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[rgb(var(--accent-rgb)))]">
                        Built with Flutter, Hive, and Riverpod for state management
                      </li>
                      <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[rgb(var(--accent-rgb)))]">
                        Created custom animations and calendar-based streak tracking, improving retention by 40%
                      </li>
                      <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[rgb(var(--accent-rgb)))]">
                        Integrated Sign-in with Apple/Google and analytics dashboard
                      </li>
                      <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[rgb(var(--accent-rgb)))]">
                        Designed offline-first sync architecture for uninterrupted usage
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  className="card hover:!transform-none !border-[rgba(var(--border-rgb),0.7)] p-0 overflow-hidden group relative md:col-span-2"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="absolute top-0 left-0 w-2 h-full bg-[rgb(var(--accent-rgb)))] opacity-60"></div>
                  <div className="p-6 pl-8">
                    <div className="flex flex-wrap items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold group-hover:text-[rgb(var(--accent-rgb)))] transition-colors">TradeAutomation</h3>
                      <span className="badge flex items-center">
                        <Calendar className="h-3 w-3 mr-1.5" />
                        Jun 2025 - Present
                      </span>
                    </div>
                    <p className="mb-4 text-[rgb(var(--muted-rgb)))] italic">
                      Algorithmic trading framework for Forex/Gold with adaptive risk management
                    </p>
                    <ul className="space-y-2">
                      <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[rgb(var(--accent-rgb)))]">
                        Developed trading strategies in Python + MetaTrader 5 with session-adaptive logic
                      </li>
                      <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[rgb(var(--accent-rgb)))]">
                        Integrated advanced risk controls: equity sync, spread/volatility guards, trailing stops
                      </li>
                      <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[rgb(var(--accent-rgb)))]">
                        Built monitoring with Telegram alerts, CLI dashboards, and analytics
                      </li>
                      <li className="relative pl-6 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[rgb(var(--accent-rgb)))]">
                        Added modular config system with JSON-based profiles (conservative, scalping)
                      </li>
                    </ul>
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
                    <h3 className="font-semibold mb-2 text-[rgb(var(--accent-rgb)))]">Core</h3>
                    <p className="text-[rgb(var(--muted-rgb)))]">Flutter, Dart, Firebase, Riverpod, BLoC, REST APIs</p>
                  </div>
                  <div className="h-1 w-full bg-gradient-to-r from-[rgba(var(--accent-rgb),0.7)] to-transparent"></div>
                </motion.div>

                <motion.div
                  className="card hover:!transform-none !border-[rgba(var(--border-rgb),0.7)] p-0 overflow-hidden group relative"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="p-5">
                    <h3 className="font-semibold mb-2 text-[rgb(var(--accent-rgb)))]">Mobile</h3>
                    <p className="text-[rgb(var(--muted-rgb)))]">Cross-platform UI/UX, Custom Animations, Push Notifications, Deep Linking</p>
                  </div>
                  <div className="h-1 w-full bg-gradient-to-r from-[rgba(var(--accent-rgb),0.7)] to-transparent"></div>
                </motion.div>

                <motion.div
                  className="card hover:!transform-none !border-[rgba(var(--border-rgb),0.7)] p-0 overflow-hidden group relative"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="p-5">
                    <h3 className="font-semibold mb-2 text-[rgb(var(--accent-rgb)))]">Web</h3>
                    <p className="text-[rgb(var(--muted-rgb)))]">React, Next.js, JavaScript, Fullstack Development</p>
                  </div>
                  <div className="h-1 w-full bg-gradient-to-r from-[rgba(var(--accent-rgb),0.7)] to-transparent"></div>
                </motion.div>

                <motion.div
                  className="card hover:!transform-none !border-[rgba(var(--border-rgb),0.7)] p-0 overflow-hidden group relative"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="p-5">
                    <h3 className="font-semibold mb-2 text-[rgb(var(--accent-rgb)))]">AI/ML</h3>
                    <p className="text-[rgb(var(--muted-rgb)))]">LLM Integration, Ollama API, Prompt Engineering, Data Privacy</p>
                  </div>
                  <div className="h-1 w-full bg-gradient-to-r from-[rgba(var(--accent-rgb),0.7)] to-transparent"></div>
                </motion.div>

                <motion.div
                  className="card hover:!transform-none !border-[rgba(var(--border-rgb),0.7)] p-0 overflow-hidden group relative"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="p-5">
                    <h3 className="font-semibold mb-2 text-[rgb(var(--accent-rgb)))]">Trading</h3>
                    <p className="text-[rgb(var(--muted-rgb)))]">Python Algorithmic Trading, MetaTrader 5, Risk Management, Strategy Optimization</p>
                  </div>
                  <div className="h-1 w-full bg-gradient-to-r from-[rgba(var(--accent-rgb),0.7)] to-transparent"></div>
                </motion.div>

                <motion.div
                  className="card hover:!transform-none !border-[rgba(var(--border-rgb),0.7)] p-0 overflow-hidden group relative"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="p-5">
                    <h3 className="font-semibold mb-2 text-[rgb(var(--accent-rgb)))]">Tools</h3>
                    <p className="text-[rgb(var(--muted-rgb)))]">VS Code, Android Studio, Xcode, Cursor, Git, GitHub Actions</p>
                  </div>
                  <div className="h-1 w-full bg-gradient-to-r from-[rgba(var(--accent-rgb),0.7)] to-transparent"></div>
                </motion.div>

                <motion.div
                  className="card hover:!transform-none !border-[rgba(var(--border-rgb),0.7)] p-0 overflow-hidden group relative md:col-span-3"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="p-5">
                    <h3 className="font-semibold mb-2 text-[rgb(var(--accent-rgb)))]">DevOps</h3>
                    <p className="text-[rgb(var(--muted-rgb)))]">CI/CD Pipelines, TestFlight, Firebase Distribution, Store Deployment</p>
                  </div>
                  <div className="h-1 w-full bg-gradient-to-r from-[rgba(var(--accent-rgb),0.7)] to-transparent"></div>
                </motion.div>
              </div>
            </motion.section>

            {/* Education and Other Info */}
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

                <motion.div
                  className="card hover:!transform-none !border-[rgba(var(--border-rgb),0.7)] p-0 overflow-hidden group relative"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="absolute top-0 left-0 w-2 h-full bg-[rgb(var(--accent-rgb)))] opacity-60"></div>
                  <div className="p-6 pl-8">
                    <div className="flex flex-wrap items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold group-hover:text-[rgb(var(--accent-rgb)))] transition-colors">Beykent University, Istanbul</h3>
                      <span className="badge flex items-center">
                        <Calendar className="h-3 w-3 mr-1.5" />
                        Sep 2020 - Jun 2025 (Graduated)
                      </span>
                    </div>
                    <p className="text-[rgb(var(--muted-rgb)))] mb-2">Bachelor of Computer Engineering</p>
                    <p className="text-sm text-[rgb(var(--muted-rgb)))]">Relevant Coursework: Mobile Application Development, Data Structures & Algorithms, Software Engineering, Database Systems</p>
                  </div>
                </motion.div>
              </motion.section>

              <div className="space-y-6">
                <motion.section
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="relative"
                >
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-[1px] h-[85%] bg-gradient-to-b from-transparent via-[rgba(var(--accent-rgb),0.2)] to-transparent"></div>

                  <div className="flex items-center mb-6">
                    <div className="h-8 w-8 rounded-lg bg-[rgba(var(--accent-rgb),0.1)] flex items-center justify-center mr-3 text-[rgb(var(--accent-rgb)))]">
                      <Languages className="h-4 w-4" />
                    </div>
                    <h2 className="section-title text-[rgb(var(--accent-rgb)))]">Languages</h2>
                  </div>

                  <motion.div
                    className="card hover:!transform-none !border-[rgba(var(--border-rgb),0.7)] p-0 overflow-hidden group relative"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <div className="absolute top-0 left-0 w-2 h-full bg-[rgb(var(--accent-rgb)))] opacity-60"></div>
                    <div className="p-6 pl-8 flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[rgb(var(--accent-rgb)))]"></div>
                        <span>English <span className="text-[rgb(var(--muted-rgb)))]">(fluent)</span></span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[rgb(var(--accent-rgb)))]"></div>
                        <span>Persian <span className="text-[rgb(var(--muted-rgb)))]">(fluent)</span></span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[rgb(var(--accent-rgb)))]"></div>
                        <span>Turkish <span className="text-[rgb(var(--muted-rgb)))]">(fluent)</span></span>
                      </div>
                    </div>
                  </motion.div>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="relative"
                >
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-[1px] h-[85%] bg-gradient-to-b from-transparent via-[rgba(var(--accent-rgb),0.2)] to-transparent"></div>

                  <div className="flex items-center mb-6">
                    <div className="h-8 w-8 rounded-lg bg-[rgba(var(--accent-rgb),0.1)] flex items-center justify-center mr-3 text-[rgb(var(--accent-rgb)))]">
                      <Award className="h-4 w-4" />
                    </div>
                    <h2 className="section-title text-[rgb(var(--accent-rgb)))]">Certificates</h2>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <motion.div
                      className="card hover:!transform-none !border-[rgba(var(--border-rgb),0.7)] p-0 overflow-hidden group relative"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <a
                        href="https://www.coursera.org/account/accomplishments/certificate/N11PZXEGFP3Z"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-5 transition-all duration-300"
                        aria-label="iOS and Android App Developer certificate from IBM"
                      >
                        <h3 className="font-semibold text-[rgb(var(--accent-rgb)))]">iOS and Android App Developer</h3>
                        <p className="text-[rgb(var(--muted-rgb)))] text-sm mb-2">IBM • May 2025</p>
                        <p className="text-sm">Cross-platform mobile app development with Flutter and Dart.</p>
                      </a>
                      <div className="h-1 w-full bg-gradient-to-r from-[rgba(var(--accent-rgb),0.7)] to-transparent"></div>
                    </motion.div>

                    <motion.div
                      className="card hover:!transform-none !border-[rgba(var(--border-rgb),0.7)] p-0 overflow-hidden group relative"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <a
                        href="https://www.coursera.org/account/accomplishments/certificate/XR63KAWRL2NZ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-5 transition-all duration-300"
                        aria-label="Generative AI for Mobile Applications certificate from Coursera"
                      >
                        <h3 className="font-semibold text-[rgb(var(--accent-rgb)))]">Generative AI for Mobile Applications</h3>
                        <p className="text-[rgb(var(--muted-rgb)))] text-sm mb-2">Coursera • Apr 2025</p>
                        <p className="text-sm">AI-driven tools and techniques for enhancing mobile app development.</p>
                      </a>
                      <div className="h-1 w-full bg-gradient-to-r from-[rgba(var(--accent-rgb),0.7)] to-transparent"></div>
                    </motion.div>

                    <motion.div
                      className="card hover:!transform-none !border-[rgba(var(--border-rgb),0.7)] p-0 overflow-hidden group relative"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <a
                        href="https://www.coursera.org/account/accomplishments/verify/MM9CP3REWHSY"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-5 transition-all duration-300"
                        aria-label="Python Programming Language certificate from Meta"
                      >
                        <h3 className="font-semibold text-[rgb(var(--accent-rgb)))]">Python Programming Language</h3>
                        <p className="text-[rgb(var(--muted-rgb)))] text-sm mb-2">Meta • Mar 2024</p>
                        <p className="text-sm">Advanced Python programming concepts including OOP, APIs, and testing.</p>
                      </a>
                      <div className="h-1 w-full bg-gradient-to-r from-[rgba(var(--accent-rgb),0.7)] to-transparent"></div>
                    </motion.div>
                  </div>
                </motion.section>
              </div>
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