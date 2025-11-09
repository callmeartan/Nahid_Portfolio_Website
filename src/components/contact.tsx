"use client";

import { useState, useRef } from "react";
import { Send, CheckCircle, AlertTriangle, Mail } from "lucide-react";
import { motion, useInView } from "framer-motion";

type FormStatus = "idle" | "submitting" | "success" | "error";
type FieldError = { message: string } | null;

interface FormState {
  name: string;
  email: string;
  message: string;
  errors: {
    name: FieldError;
    email: FieldError;
    message: FieldError;
  };
  status: FormStatus;
}

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
    errors: {
      name: null,
      email: null,
      message: null
    },
    status: "idle"
  });
  
  const updateField = (field: keyof Pick<FormState, "name" | "email" | "message">, value: string) => {
    setForm(prev => ({
      ...prev,
      [field]: value,
      errors: {
        ...prev.errors,
        [field]: null
      }
    }));
  };
  
  const validateForm = (): boolean => {
    let isValid = true;
    const errors = {
      name: null as FieldError,
      email: null as FieldError,
      message: null as FieldError
    };
    
    // Name validation
    if (!form.name.trim()) {
      errors.name = { message: "Name is required" };
      isValid = false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      errors.email = { message: "Email is required" };
      isValid = false;
    } else if (!emailRegex.test(form.email)) {
      errors.email = { message: "Please enter a valid email" };
      isValid = false;
    }
    
    // Message validation
    if (!form.message.trim()) {
      errors.message = { message: "Message is required" };
      isValid = false;
    } else if (form.message.length < 10) {
      errors.message = { message: "Message is too short" };
      isValid = false;
    }
    
    setForm(prev => ({
      ...prev,
      errors
    }));
    
    return isValid;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setForm(prev => ({ ...prev, status: "submitting" }));
    
    // Simulate API call with timeout
    try {
      // Replace with your actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setForm({
        name: "",
        email: "",
        message: "",
        errors: {
          name: null,
          email: null,
          message: null
        },
        status: "success"
      });
      
      // Reset success state after 5 seconds
      setTimeout(() => {
        setForm(prev => ({ ...prev, status: "idle" }));
      }, 5000);
      
    } catch (error) {
      setForm(prev => ({ ...prev, status: "error" }));
    }
  };
  
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  
  return (
    <section ref={sectionRef} id="contact" className="py-20 md:py-28 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(var(--background-alt-rgb),0.2)] to-[rgba(var(--background-rgb),1)] -z-10"></div>
      
      {/* Animated background elements */}
      <motion.div 
        className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-[rgba(var(--accent-rgb),0.02)] rounded-full blur-3xl -z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.8 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div 
        className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-[rgba(var(--accent-light-rgb),0.03)] rounded-full blur-3xl -z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.8 } : { opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />
      
      <div className="container mx-auto">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
        >
          <h2 className="section-title font-heading mb-4">Get In Touch</h2>
          <p className="section-description">
            Have a project in mind or want to discuss collaboration opportunities? Send me a message and I'll get back to you as soon as possible.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Contact info card */}
          <motion.div 
            className="order-2 md:order-1 relative"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, delay: 0.2 }
              }
            }}
          >
            <div className="relative rounded-2xl overflow-hidden bg-white/70 backdrop-blur-xl p-8 border border-white/40 shadow-lg">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[rgba(var(--accent-rgb),0.6)] to-transparent"></div>
              
              <h3 className="text-2xl font-bold mb-6 font-heading">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-[rgba(var(--accent-rgb),0.1)] text-[rgb(var(--accent-rgb))]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <a 
                      href="mailto:nnasiri@ucsc.edu" 
                      className="text-[rgb(var(--muted-rgb))] hover:text-[rgb(var(--accent-rgb))] transition-colors"
                    >
                      nnasiri@ucsc.edu
                    </a>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[rgba(var(--border-rgb),0.5)]"></div>
                  
                  <div className="pl-16 py-4 relative">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-[1px] bg-[rgba(var(--border-rgb),0.5)]"></div>
                    <p className="text-[rgb(var(--muted-rgb))] text-sm">
                      I'm currently open to freelance opportunities, collaborations, and full-time positions.
                    </p>
                  </div>
                </div>
                
                <div className="pl-16 relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-[1px] bg-[rgba(var(--border-rgb),0.5)]"></div>
                  <p className="text-[rgb(var(--muted-rgb))] text-sm">
                    I typically respond within 24-48 hours.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact form */}
          <motion.div 
            className="order-1 md:order-2"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, delay: 0.2 }
              }
            }}
          >
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/40 shadow-lg overflow-hidden">
              <form ref={formRef} onSubmit={handleSubmit} className="p-8">
                {/* Name input */}
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      className={`input-field w-full ${form.errors.name ? 'border-red-500 focus:ring-red-200' : ''}`}
                      placeholder="Your name"
                      disabled={form.status === "submitting"}
                    />
                    {form.errors.name && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-xs mt-1"
                      >
                        {form.errors.name.message}
                      </motion.p>
                    )}
                  </div>
                </div>
                
                {/* Email input */}
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className={`input-field w-full ${form.errors.email ? 'border-red-500 focus:ring-red-200' : ''}`}
                      placeholder="Your email"
                      disabled={form.status === "submitting"}
                    />
                    {form.errors.email && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-xs mt-1"
                      >
                        {form.errors.email.message}
                      </motion.p>
                    )}
                  </div>
                </div>
                
                {/* Message input */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      value={form.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      className={`input-field w-full min-h-[150px] resize-y ${form.errors.message ? 'border-red-500 focus:ring-red-200' : ''}`}
                      placeholder="Your message"
                      disabled={form.status === "submitting"}
                    ></textarea>
                    {form.errors.message && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-xs mt-1"
                      >
                        {form.errors.message.message}
                      </motion.p>
                    )}
                  </div>
                </div>
                
                {/* Status messages */}
                {form.status === "success" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-3 rounded-lg bg-[rgba(var(--accent-rgb),0.1)] text-[rgb(var(--accent-rgb))] flex items-center gap-2"
                  >
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <p className="text-sm">Message sent successfully! I'll get back to you soon.</p>
                  </motion.div>
                )}
                
                {form.status === "error" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-3 rounded-lg bg-red-100/10 text-red-500 flex items-center gap-2"
                  >
                    <AlertTriangle className="h-5 w-5 flex-shrink-0" />
                    <p className="text-sm">Something went wrong. Please try again later.</p>
                  </motion.div>
                )}
                
                {/* Submit button */}
                <motion.button
                  type="submit"
                  className="w-full group relative overflow-hidden rounded-lg px-6 py-3 font-medium bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-[0_4px_20px_rgba(6,182,212,0.4)] hover:shadow-[0_6px_30px_rgba(6,182,212,0.6)] hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 active:scale-95 active:from-cyan-600 active:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  disabled={form.status === "submitting"}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center text-white">
                    {form.status === "submitting" ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 