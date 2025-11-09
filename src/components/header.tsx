"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };
  
  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position with improved threshold detection
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;
      
      sections.forEach(section => {
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const scrollPosition = scrollY + window.innerHeight * 0.3;
        
        if (scrollPosition > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId || "home");
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Why Hire Me?", href: "#hire-me", id: "hire-me" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];
  
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-3 bg-[rgba(255,255,255,0.8)] backdrop-blur-xl shadow-lg border-b border-[rgba(6,182,212,0.2)]" 
          : "py-5 bg-[rgba(255,255,255,0.4)] backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="#home" 
            className="text-xl font-bold font-heading relative z-10 group"
            onClick={closeMenu}
            aria-label="Go to homepage"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && closeMenu()}
          >
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-slate-900"
              >
                Nahid
              </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-cyan-500"
            >
              .
            </motion.span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full group-hover:w-full transition-all duration-300"></span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
              >
                <Link
                  href={item.href}
                  className={`px-4 py-2 font-medium relative group text-sm transition-colors rounded-md ${
                    activeSection === item.id 
                      ? "text-cyan-600" 
                      : "text-slate-700 hover:text-cyan-600"
                  }`}
                  onClick={closeMenu}
                  aria-current={activeSection === item.id ? "page" : undefined}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && closeMenu()}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-transform origin-left duration-300 ${
                    activeSection === item.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}></span>
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 125 }}
            >
              <Link 
                href="#contact" 
                className="ml-3 btn btn-primary !py-2 !text-xs group relative overflow-hidden"
                onClick={closeMenu}
                aria-label="Contact me"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && closeMenu()}
              >
                <span className="relative z-10">Let's Connect</span>
                <ArrowRight className="h-3.5 w-3.5 hero-icon relative z-10" />
                <span className="absolute inset-0 bg-[rgba(var(--accent-rgb),0.9)] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Link>
            </motion.div>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ delay: 0.2 }}
              className="p-2 text-[rgb(var(--foreground-rgb))] hover:bg-[rgba(var(--foreground-rgb),0.05)] hover:text-[rgb(var(--accent-rgb))] rounded-lg transition-all"
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              tabIndex={0}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[rgba(255,255,255,0.95)] backdrop-blur-xl flex flex-col overflow-y-auto"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex justify-between items-center mb-10">
                <Link 
                  href="#home" 
                  className="text-xl font-bold font-heading relative group"
                  onClick={closeMenu}
                  aria-label="Go to homepage"
                  tabIndex={isOpen ? 0 : -1}
                >
                  <span className="text-slate-900">Nahid</span>
                  <span className="text-cyan-500">.</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full group-hover:w-full transition-all duration-300"></span>
                </Link>
                <motion.button
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="p-2 text-[rgb(var(--foreground-rgb))] hover:bg-[rgba(var(--foreground-rgb),0.05)] hover:text-[rgb(var(--accent-rgb))] rounded-lg transition-all"
                  onClick={toggleMenu}
                  aria-label="Close menu"
                  tabIndex={isOpen ? 0 : -1}
                >
                  <X className="h-6 w-6" />
                </motion.button>
              </div>
              
              <nav className="flex flex-col space-y-4 mb-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * (index + 1) }}
                  >
                    <Link
                      href={item.href}
                      className={`block py-3 px-4 text-lg font-medium rounded-lg transition-all ${
                        activeSection === item.id
                          ? "bg-cyan-50 text-cyan-600"
                          : "text-slate-700 hover:bg-cyan-50 hover:text-cyan-600"
                      }`}
                      onClick={closeMenu}
                      aria-current={activeSection === item.id ? "page" : undefined}
                      tabIndex={isOpen ? 0 : -1}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-4"
                >
                  <Link
                    href="#contact"
                    className="block w-full py-3 px-5 font-medium rounded-lg text-center transition-all bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
                    onClick={closeMenu}
                    tabIndex={isOpen ? 0 : -1}
                  >
                    Let's Connect
                  </Link>
                </motion.div>
              </nav>
              
              {/* Mobile menu decorative elements */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
} 