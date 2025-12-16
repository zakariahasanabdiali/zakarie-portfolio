import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -80; // height of navbar
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

const NavLink = ({ to, label, onClick, delay }) => (
  <a
    href={to}
    onClick={onClick}
    className={`block px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-300 transition-colors transform opacity-0 animate-slideFade`}
    style={{ animationDelay: delay ? `${delay}ms` : '0ms', animationFillMode: 'forwards' }}
  >
    {label}
  </a>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (to) => {
    scrollToId(to.replace('#', ''));
    setMenuOpen(false); // close menu after click
  };

  const links = [
    { to: '#home', label: 'Home' },
    { to: '#about', label: 'About' },
    { to: '#projects', label: 'Projects' },
    { to: '#certificates', label: 'Certificates' },
    { to: '#resume', label: 'Resume' },
    { to: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white/80 text-slate-900 backdrop-blur border-b border-slate-200 px-4 sm:px-6 py-4 shadow-lg sticky top-0 z-50 dark:bg-slate-950/80 dark:text-white dark:border-slate-900">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-3 sm:gap-6">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollToId('home'); }}
          className="flex items-center gap-2 group"
        >
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-green-400 via-emerald-500 to-cyan-400 text-slate-950 font-black flex items-center justify-center shadow-lg shadow-green-500/30">
            Z
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold bg-gradient-to-r from-slate-900 via-emerald-600 to-cyan-500 bg-clip-text text-transparent tracking-wide dark:from-white dark:via-green-200 dark:to-cyan-200">
              Zakarie
            </span>
            <span className="text-xs uppercase text-slate-500 tracking-[0.3em] group-hover:text-green-500 transition dark:text-slate-400 dark:group-hover:text-green-300">
              Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Menu + Hamburger */}
        <div className="flex items-center gap-3 sm:gap-4 text-sm font-medium flex-wrap justify-end">
          {/* Desktop Menu */}
          <div className="hidden sm:flex gap-3 sm:gap-4 flex-wrap justify-end">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} label={link.label} onClick={() => handleLinkClick(link.to)} />
            ))}
          </div>

          <ThemeToggle />

          {/* Hamburger Button */}
          <button
            className="sm:hidden text-2xl font-bold ml-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex justify-center items-center sm:hidden">
          <div className="bg-white dark:bg-slate-950 rounded-xl p-8 flex flex-col gap-6 items-center shadow-xl">
            {links.map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                label={link.label}
                onClick={() => handleLinkClick(link.to)}
                delay={index * 100} // staggered animation
              />
            ))}
            <ThemeToggle />
          </div>
        </div>
      )}

      {/* Custom CSS animation */}
      <style>
        {`
          @keyframes slideFade {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slideFade {
            animation-name: slideFade;
            animation-duration: 400ms;
            animation-timing-function: ease-out;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
