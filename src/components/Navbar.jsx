import React, { useState, useEffect, useRef } from 'react';
import ThemeToggle from './ThemeToggle';

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

const NavLink = ({ to, label, active, onClick }) => (
  <a
    href={to}
    onClick={onClick}
    className={`block px-4 py-2 rounded-md
      ${active ? 'text-emerald-500 font-semibold bg-emerald-100 dark:bg-emerald-900/30' : 'text-slate-700 dark:text-slate-300'}
      hover:text-emerald-500 dark:hover:text-emerald-300 transition-all`}
  >
    {label}
  </a>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const sectionRefs = useRef({});

  const links = [
    { to: '#home', label: 'Home' },
    { to: '#about', label: 'About' },
    { to: '#projects', label: 'Projects' },
    { to: '#certificates', label: 'Certificates' },
    { to: '#resume', label: 'Resume' },
    { to: '#contact', label: 'Contact' },
  ];

  const handleLinkClick = (to) => {
    scrollToId(to.replace('#', ''));
    setActiveLink(to);
    setMenuOpen(false);
  };

  // ESC key close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Scroll Spy
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // center detection
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(`#${entry.target.id}`);
        }
      });
    }, observerOptions);

    links.forEach((link) => {
      const section = document.getElementById(link.to.replace('#', ''));
      if (section) {
        sectionRefs.current[link.to] = section;
        observer.observe(section);
      }
    });

    return () => {
      Object.values(sectionRefs.current).forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-900 px-4 sm:px-6 py-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#home');
          }}
          className="flex items-center gap-2"
        >
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-green-400 via-emerald-500 to-cyan-400 text-slate-950 font-black flex items-center justify-center">
            Z
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold bg-gradient-to-r from-slate-900 via-emerald-600 to-cyan-500 bg-clip-text text-transparent dark:from-white dark:via-green-200 dark:to-cyan-200">
              Zakarie
            </span>
            <span className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-4 text-sm font-medium">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              label={link.label}
              active={activeLink === link.to}
              onClick={() => handleLinkClick(link.to)}
            />
          ))}
          <ThemeToggle />
        </div>

        {/* Hamburger */}
        <button
          className="sm:hidden text-2xl font-bold"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-xl sm:hidden flex justify-center items-start">
          <div
            className="mt-20 bg-white dark:bg-slate-950 rounded-xl p-8 w-full max-w-xs flex flex-col gap-4 items-stretch
            animate-slideFromTop max-h-[80vh] overflow-y-auto shadow-xl"
          >
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                label={link.label}
                active={activeLink === link.to}
                onClick={() => handleLinkClick(link.to)}
              />
            ))}
            <ThemeToggle />
          </div>

          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-2xl font-bold text-white"
            onClick={() => setMenuOpen(false)}
          >
            ✖
          </button>
        </div>
      )}

      {/* Slide from top animation */}
      <style>{`
        @keyframes slideFromTop {
          0% { transform: translateY(-50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slideFromTop {
          animation: slideFromTop 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
