"use client";

import Link from "next/link";
import { Mail, Github, Linkedin, Instagram, Heart, ArrowUp, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Footer() {
  const [currentYear] = useState(new Date().getFullYear());
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState<"idle" | "success" | "error">("idle");
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || email.trim() === "") return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubscribeStatus("success");
      setEmail("");
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubscribeStatus("idle");
      }, 3000);
    }, 1000);
  };
  
  const links = [
    { title: "Home", href: "#home" },
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
    { title: "Education", href: "#education" },
    { title: "Contact", href: "#contact" },
  ];
  
  const socialLinks = [
    { 
      name: "LinkedIn", 
      icon: <Linkedin className="h-5 w-5" />, 
      href: "https://www.linkedin.com/in/nahid-nasiri-17b5aa136/",
      label: "LinkedIn profile" 
    },
    { 
      name: "Email", 
      icon: <Mail className="h-5 w-5" />, 
      href: "mailto:nnasiri@ucsc.edu",
      label: "Send email" 
    }
  ];
  
  return (
    <footer className="relative bg-[rgba(var(--background-alt-rgb),0.8)] border-t border-[rgba(var(--border-rgb),0.3)] py-16 overflow-hidden">
      {/* Gradient border top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[rgba(var(--accent-rgb),0.6)] to-transparent"></div>

      <div className="container mx-auto pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div>
            <Link href="#home" className="text-xl font-bold font-heading mb-6 inline-block relative group">
              <span className="text-[rgb(var(--foreground-rgb))]">Nahid</span>
              <span className="text-[rgb(var(--accent-rgb))]">.</span>
              <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[rgba(var(--accent-rgb),0.5)] rounded-full group-hover:w-full transition-all duration-300"></span>
            </Link>
            <p className="text-[rgb(var(--muted-rgb))] mb-6 text-sm leading-relaxed">
              Machine Learning Engineer and PhD researcher building production-grade AI systems across computer vision, large language models, and intelligent automation. Specializing in ML pipelines, validation automation, and simulation-driven workflows.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 bg-[rgba(var(--foreground-rgb),0.03)] text-[rgb(var(--foreground-rgb))] hover:bg-[rgba(var(--accent-rgb),0.1)] hover:text-[rgb(var(--accent-rgb))] hover:scale-110 rounded-full transition-all duration-300"
                  aria-label={link.label}
                  tabIndex={0}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-6 font-heading relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/3 h-[2px] bg-[rgba(var(--accent-rgb),0.4)] rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.title}>
                  <Link 
                    href={link.href} 
                    className="text-[rgb(var(--muted-rgb))] hover:text-[rgb(var(--accent-rgb))] hover:translate-x-1 transition-all text-sm flex items-center"
                    tabIndex={0}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[rgba(var(--accent-rgb),0.5)] mr-2 opacity-0 transition-opacity group-hover:opacity-100"></span>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-base font-bold mb-6 font-heading relative inline-block">
              Contact
              <span className="absolute bottom-0 left-0 w-1/3 h-[2px] bg-[rgba(var(--accent-rgb),0.4)] rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-[rgb(var(--accent-rgb))]" />
                <div>
                  <p className="text-sm font-medium mb-1">Email:</p>
                  <a 
                    href="mailto:nnasiri@ucsc.edu" 
                    className="text-sm text-[rgb(var(--muted-rgb))] hover:text-[rgb(var(--accent-rgb))] transition-colors group-hover:underline"
                  >
                    nnasiri@ucsc.edu
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 mr-3 mt-0.5 flex items-center justify-center text-[rgb(var(--accent-rgb))]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[rgba(var(--accent-rgb),0.3)]"></span>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Location:</p>
                  <p className="text-sm text-[rgb(var(--muted-rgb))]">San Jose, CA, USA</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-base font-bold mb-6 font-heading relative inline-block">
              Stay Updated
              <span className="absolute bottom-0 left-0 w-1/3 h-[2px] bg-[rgba(var(--accent-rgb),0.4)] rounded-full"></span>
            </h3>
            <p className="text-sm text-[rgb(var(--muted-rgb))] mb-4 leading-relaxed">
              Subscribe to my newsletter for project updates and tech insights.
            </p>
            <form className="flex flex-col space-y-2" onSubmit={handleSubscribe}>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="input-field !py-2.5 !text-sm w-full pr-10 focus:border-[rgb(var(--accent-rgb))]"
                  aria-label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting || subscribeStatus === "success"}
                />
                <Send className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[rgb(var(--muted-rgb))]" />
              </div>
              <button 
                type="submit" 
                className={`btn btn-primary !py-2.5 !text-sm w-full flex items-center justify-center ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                } ${
                  subscribeStatus === "success" ? 'bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600' : ''
                }`}
                aria-label="Subscribe to newsletter"
                disabled={isSubmitting || subscribeStatus === "success"}
              >
                {isSubmitting ? 'Subscribing...' : subscribeStatus === "success" ? 'Subscribed ✓' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-[rgba(var(--border-rgb),0.7)] py-6 mt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm text-[rgb(var(--muted-rgb))] mb-4 md:mb-0">
            © {currentYear} Nahid Nasiri. All rights reserved.
          </p>
          <div className="text-sm text-[rgb(var(--muted-rgb))]">
            <Link href="#" className="hover:text-[rgb(var(--accent-rgb))] transition-colors mr-4 hover:underline">Privacy Policy</Link>
            <Link href="#" className="hover:text-[rgb(var(--accent-rgb))] transition-colors hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-[rgba(var(--accent-rgb),0.9)] text-[rgb(var(--background-rgb))] shadow-lg hover:bg-[rgb(var(--accent-rgb))] focus:outline-none focus:ring-2 focus:ring-[rgba(var(--accent-rgb),0.5)] transition-all duration-300 transform hover:scale-110"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
} 