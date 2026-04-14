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

  // Function si menu-ga u xirmo marka link la taabto
  const handleNavLinkClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Certificates", id: "certificates" },
    { name: "Resume", id: "resume" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* 1. NAVBAR CONTAINER: Waxaan u dhexaysiinay 'pointer-events-none' si website-ka hoostiisa loo taabto */}
      <div className="fixed top-0 inset-x-0 z-[100] flex justify-center px-6 py-6 pointer-events-none">
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`w-full max-w-5xl flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 pointer-events-auto ${
            scrolled ? "glass shadow-2xl py-4" : "bg-transparent"
          }`}
        >
          {/* Logo */}
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

          {/* Mobile Toggle Button - Halkan ayaan badhnaka ka dhignay mid la taaban karo */}
          <button 
            className="md:hidden text-emerald-500 p-2 pointer-events-auto" 
            onClick={() => setIsOpen(true)}
          >
            <HiMenuAlt3 size={28} />
          </button>
        </motion.nav>
      </div>

      {/* 2. MOBILE MENU OVERLAY: Waxaan ka soo saarnay div-kii hore si uu si madax banaan u shaqeeyo */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/95 dark:bg-[#030712]/95 backdrop-blur-3xl z-[150] flex flex-col items-center justify-center gap-8 md:hidden pointer-events-auto"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)} 
              className="absolute top-10 right-10 text-emerald-500 p-2"
            >
              <HiX size={35} />
            </button>
            
            {/* Links */}
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => handleNavLinkClick(link.id)}
                className="text-4xl font-black uppercase tracking-tighter text-slate-900 dark:text-white hover:text-emerald-500 transition-colors"
              >
                {link.name}
              </button>
            ))}
            
            <div className="mt-4">
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;