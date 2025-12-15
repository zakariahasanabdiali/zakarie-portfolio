import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavLink = ({ to, label }) => {
  const { pathname } = useLocation();
  const active = pathname === to;
  return (
    <Link to={to} className={active ? 'text-blue-400 font-semibold' : 'hover:text-blue-400'}>
      {label}
    </Link>
  );
};

const Navbar = () => (
  <nav className="bg-slate-950/80 backdrop-blur border-b border-slate-900 text-white px-6 py-4 shadow-lg sticky top-0 z-50">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2 group">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-green-400 via-emerald-500 to-cyan-400 text-slate-950 font-black flex items-center justify-center shadow-lg shadow-green-500/30">
          Z
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-lg font-bold bg-gradient-to-r from-white via-green-200 to-cyan-200 bg-clip-text text-transparent tracking-wide">
            Zakarie
          </span>
          <span className="text-xs uppercase text-slate-400 tracking-[0.3em] group-hover:text-green-300 transition">
            Portfolio
          </span>
        </div>
      </Link>
      <div className="flex gap-6 text-sm font-medium">
        <NavLink to="/" label="Home" />
        <NavLink to="/about" label="About" />
        <NavLink to="/projects" label="Projects" />
        <NavLink to="/certificates" label="Certificates" />
        <NavLink to="/resume" label="Resume" />
        <NavLink to="/contact" label="Contact" />

      </div>
    </div>
  </nav>
);

export default Navbar;