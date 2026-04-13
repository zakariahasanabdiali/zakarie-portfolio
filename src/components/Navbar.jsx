import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { HiMenuAlt3, HiX } from "react-icons/hi"; 

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Certificates", id: "certificates" },
    { name: "Resume", id: "resume" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <div className="fixed top-0 inset-x-0 z-[100] flex justify-center px-6 py-6 pointer-events-none">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`w-full max-w-5xl flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 pointer-events-auto ${
          scrolled ? "glass shadow-2xl py-4" : "bg-transparent"
        }`}
      >
        {/* Logo - text-slate-900 (Light) iyo dark:text-white (Dark) */}
        <div className="font-black text-2xl tracking-tighter flex items-center gap-2 text-slate-900 dark:text-white">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-[#030712] text-sm">Z</div>
          <span className="hidden sm:block">ZAKARIE</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-[13px] font-bold uppercase tracking-widest text-slate-900 dark:text-white opacity-60 hover:opacity-100 hover:text-emerald-500 dark:hover:text-emerald-400 transition-all"
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Toggle Button */}
        <button className="md:hidden text-emerald-500" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            // Background isbedelaya (White in Light, Dark in Dark)
            className="fixed inset-0 bg-white/95 dark:bg-[#030712]/95 backdrop-blur-2xl z-[110] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-10 right-10 text-emerald-500">
              <HiX size={35} />
            </button>
            
            {navLinks.map((link) => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                onClick={() => setIsOpen(false)}
                // Mobile links text color
                className="text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white hover:text-emerald-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <div className="mt-4">
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;