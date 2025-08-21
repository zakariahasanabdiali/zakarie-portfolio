import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-16 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Zakaria Hasan Abdi. All rights reserved.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://github.com/zakariahasanabdiali" target="_blank" rel="noreferrer" className="hover:text-white">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/ZakariaHasanAbdiAli" target="_blank" rel="noreferrer" className="hover:text-white">
            <FaLinkedin size={20} />
          </a>
          <a href="https://twitter.com/ZakariaHasan04" target="_blank" rel="noreferrer" className="hover:text-white">
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
