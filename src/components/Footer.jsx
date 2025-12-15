import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-slate-600 py-6 mt-16 border-t border-slate-200 dark:bg-slate-950 dark:text-slate-300 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Zakarie Hasan Abdi. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/zakariahasanabdiali" target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/ZakariaHasanAbdiAli" target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white">
            <FaLinkedin size={20} />
          </a>
          <a href="https://twitter.com/ZakariaHasan04" target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white">
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
