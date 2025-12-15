import React from 'react';
import ThemeToggle from './ThemeToggle';

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const NavLink = ({ to, label }) => {
  const handleClick = (e) => {
    e.preventDefault();
    scrollToId(to.replace('#', ''));
  };
  return (
    <a
      href={to}
      onClick={handleClick}
      className="text-slate-600 hover:text-emerald-500 dark:text-slate-300 dark:hover:text-emerald-300"
    >
      {label}
    </a>
  );
};

const Navbar = () => (
  <nav className="bg-white/80 text-slate-900 backdrop-blur border-b border-slate-200 px-4 sm:px-6 py-4 shadow-lg sticky top-0 z-50 dark:bg-slate-950/80 dark:text-white dark:border-slate-900">
    <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-3 sm:gap-6">
      <a
        href="#home"
        onClick={(e) => {
          e.preventDefault();
          scrollToId('home');
        }}
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
      <div className="flex items-center gap-3 sm:gap-4 text-sm font-medium flex-wrap justify-end">
        <div className="flex gap-3 sm:gap-4 flex-wrap justify-end">
          <NavLink to="#home" label="Home" />
          <NavLink to="#about" label="About" />
          <NavLink to="#projects" label="Projects" />
          <NavLink to="#certificates" label="Certificates" />
          <NavLink to="#resume" label="Resume" />
          <NavLink to="#contact" label="Contact" />
        </div>
        <ThemeToggle />
      </div>
    </div>
  </nav>
);

export default Navbar;