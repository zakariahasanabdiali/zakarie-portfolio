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
  <nav className="bg-gray-800 text-white px-6 py-4 shadow-md sticky top-0 z-50">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold">Zakarie</h1>
      <div className="flex gap-6">
        <NavLink to="/" label="Home" />
        <NavLink to="/about" label="About" />
        <NavLink to="/projects" label="Projects" />
        <NavLink to="/resume" label="Resume" />
        <NavLink to="/contact" label="Contact" />

      </div>
    </div>
  </nav>
);

export default Navbar;