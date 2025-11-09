"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
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
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;
      
      sections.forEach(section => {
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionTop = (section as HTMLElement).offsetTop - 150;
        const sectionId = section.getAttribute('id');
        const scrollPosition = scrollY + window.innerHeight * 0.3;
        
        if (scrollPosition > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId || "home");
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Research & Engineering", href: "#hire-me", id: "hire-me" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];
  
  return (
    <>
      {/* Floating Glass Header */}
    <motion.header 
        initial={{ y: -100, opacity: 0, x: "-50%" }}
        animate={{ 
          y: 0, 
          opacity: 1,
          x: "-50%",
          scale: isScrolled ? 0.98 : 1,
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed z-50 w-[95%] max-w-7xl"
        style={{
          top: isScrolled ? '12px' : '16px',
          left: '50%',
        }}
      >
        <div
          className={`relative rounded-2xl transition-all duration-500 ${
        isScrolled 
              ? "bg-white/40 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(6,182,212,0.2),0_0_0_1px_rgba(255,255,255,0.3),0_0_60px_rgba(6,182,212,0.1)]"
              : "bg-white/30 backdrop-blur-lg shadow-[0_8px_32px_0_rgba(6,182,212,0.1),0_0_0_1px_rgba(255,255,255,0.2),0_0_40px_rgba(6,182,212,0.05)]"
      }`}
    >
          {/* Glowing border effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-cyan-400/20 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
          
          <div className="px-6 py-4 md:px-8 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="#home" 
                className="text-xl font-bold font-secondary relative z-10 group"
            onClick={closeMenu}
            aria-label="Go to homepage"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && closeMenu()}
          >
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                  className="text-slate-900 group-hover:text-cyan-600 transition-colors duration-300"
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
                <motion.span 
                  className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
          </Link>
          
          {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
              >
                <Link
                  href={item.href}
                      className={`relative px-4 py-2 font-medium font-secondary text-sm transition-all duration-300 rounded-lg group ${
                    activeSection === item.id 
                      ? "text-cyan-600" 
                          : "text-slate-700 hover:text-cyan-500"
                  }`}
                  onClick={closeMenu}
                  aria-current={activeSection === item.id ? "page" : undefined}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && closeMenu()}
                >
                      <span className="relative z-10">{item.name}</span>
                      {/* Glowing hover effect */}
                      <motion.div
                        className={`absolute inset-0 rounded-lg ${
                          activeSection === item.id
                            ? "bg-cyan-500/10 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                            : "bg-cyan-500/0 group-hover:bg-cyan-500/10 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                        }`}
                        initial={false}
                        animate={{
                          opacity: activeSection === item.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      {/* Active indicator */}
                      {activeSection === item.id && (
                        <motion.div
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                          layoutId="activeIndicator"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 125 }}
              className="ml-2"
            >
                  <Link 
                    href="#contact" 
                    className="relative inline-flex items-center gap-2 px-5 py-2 font-medium font-secondary text-sm rounded-lg overflow-hidden group bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-[0_4px_20px_rgba(6,182,212,0.4)] hover:shadow-[0_6px_30px_rgba(6,182,212,0.6)] hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 active:scale-95 active:from-cyan-600 active:to-blue-600 transition-all duration-300"
                    onClick={closeMenu}
                    aria-label="Contact me"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && closeMenu()}
                  >
                    <span className="relative z-10 text-white">Let's Connect</span>
                    <ArrowRight className="h-3.5 w-3.5 relative z-10 text-white transition-transform group-hover:translate-x-1" />
                  </Link>
            </motion.div>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.05 }}
              transition={{ delay: 0.2 }}
                  className="p-2.5 rounded-lg text-slate-700 hover:text-cyan-600 hover:bg-white/20 transition-all duration-300"
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
        </div>
      </motion.header>
      
      {/* Mobile Glassy Slide-Down Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
              onClick={closeMenu}
            />
            
            {/* Glass Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-20 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md rounded-2xl bg-white/40 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(6,182,212,0.2),0_0_0_1px_rgba(255,255,255,0.3)] border border-white/20 overflow-hidden"
            >
              {/* Glowing border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/30 via-blue-400/30 to-cyan-400/30 opacity-50 blur-xl -z-10"></div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                <Link 
                  href="#home" 
                    className="text-xl font-bold font-secondary relative group"
                  onClick={closeMenu}
                  aria-label="Go to homepage"
                  tabIndex={isOpen ? 0 : -1}
                >
                    <span className="text-slate-900 group-hover:text-cyan-600 transition-colors">Nahid</span>
                  <span className="text-cyan-500">.</span>
                </Link>
                <motion.button
                    whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                    className="p-2 rounded-lg text-slate-700 hover:text-cyan-600 hover:bg-white/20 transition-all"
                  onClick={toggleMenu}
                  aria-label="Close menu"
                  tabIndex={isOpen ? 0 : -1}
                >
                  <X className="h-6 w-6" />
                </motion.button>
              </div>
              
                <nav className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * (index + 1) }}
                  >
                    <Link
                      href={item.href}
                        className={`relative block py-3 px-4 text-base font-medium font-secondary rounded-lg transition-all duration-300 group ${
                        activeSection === item.id
                            ? "text-cyan-600 bg-cyan-500/10 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                            : "text-slate-700 hover:text-cyan-600 hover:bg-white/20"
                      }`}
                      onClick={closeMenu}
                      aria-current={activeSection === item.id ? "page" : undefined}
                      tabIndex={isOpen ? 0 : -1}
                    >
                        <span className="relative z-10">{item.name}</span>
                        {activeSection === item.id && (
                          <motion.div
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                            layoutId="mobileActiveIndicator"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
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
                      className="block w-full py-3 px-5 font-medium font-secondary text-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-[0_4px_20px_rgba(6,182,212,0.4)] hover:shadow-[0_6px_30px_rgba(6,182,212,0.6)] transition-all duration-300"
                    onClick={closeMenu}
                    tabIndex={isOpen ? 0 : -1}
                  >
                    Let's Connect
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
} 