import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

// Soo dhowaynta sawirada
import gabiImg from '../../certificate/gabi school.png'; // New: Gabi School
import cs50xImg from '../../certificate/CS50x.jpg';
import ibmImg from '../../certificate/IBM.jpg';
import lfxImg from '../../certificate/LinuxFoundationX.jpg';
import aiImg from '../../certificate/understanding.jpg';
import pycon2024Img from '../../certificate/pycon2024.jpg';
import pycon2025Img from '../../certificate/pycon2025.jpg';

const certificates = [
  {
    title: 'Full Stack Web Development & AI Integration',
    issuer: 'Gabi School',
    date: 'Jan 2026',
    file: gabiImg,
    category: 'Full Stack & AI',
    description: 'Specialized in building modern web apps with AI API (OpenAI) integration.'
  },
  {
    title: 'PyCon Somalia 2025 Participation',
    issuer: 'PyCon Somalia / PSF',
    date: '2025',
    file: pycon2025Img,
    category: 'Python & AI'
  },
  {
    title: 'PyCon Somalia 2024 Participation',
    issuer: 'PyCon Somalia / PSF',
    date: '2024',
    file: pycon2024Img,
    category: 'Python'
  },
  {
    title: 'Understanding Prompt Engineering',
    issuer: 'Datacamp',
    date: 'Completed',
    file: aiImg,
    category: 'AI'
  },
  {
    title: 'CS50x: Introduction to Computer Science',
    issuer: 'HarvardX / edX',
    date: 'Completed',
    file: cs50xImg,
    category: 'Computer Science'
  },
  {
    title: 'IBM AI0101EN: Introduction to AI',
    issuer: 'IBM / edX',
    date: 'Completed',
    file: ibmImg,
    category: 'AI'
  },
  {
    title: 'LFS112x: Cloud Infrastructure Technologies',
    issuer: 'LinuxFoundationX / edX',
    date: 'Completed',
    file: lfxImg,
    category: 'Cloud'
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="relative py-24 px-6 overflow-hidden transition-colors duration-500">
      {/* Background Blobs */}
      <div className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[100px] animate-blob" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px] animate-blob animation-delay-4000" />

      <div className="relative max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-slate-900 via-emerald-600 to-blue-500 bg-clip-text text-transparent dark:from-white dark:via-emerald-200 dark:to-blue-200 uppercase tracking-tighter">
            GRADUATED & <span className="gradient-text">CERTIFIED</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Professional certifications in <span className="text-slate-900 dark:text-white font-bold underline decoration-emerald-500/30">Full Stack Development</span>, 
            AI Research, and Cloud Infrastructure.
          </p>
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, idx) => (
            <motion.article
              key={idx}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`glass p-8 rounded-[2.5rem] border flex flex-col h-full group relative overflow-hidden transition-all shadow-xl ${
                idx === 0 ? 'border-emerald-500/50 ring-1 ring-emerald-500/20' : 'border-slate-200 dark:border-white/10'
              }`}
            >
              {/* Special Tag for the latest accomplishment */}
              {idx === 0 && (
                <div className="absolute top-0 right-0 bg-emerald-500 text-[#030712] text-[9px] font-black px-4 py-1 rounded-bl-xl uppercase tracking-[0.2em]">
                  Latest
                </div>
              )}

              {/* Category Tag */}
              <div className="mb-4 inline-block w-fit px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
                {cert.category}
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-2xl group-hover:scale-110 transition-transform ${
                  idx === 0 ? 'bg-emerald-500 text-[#030712]' : 'bg-emerald-500/10 text-emerald-500'
                }`}>
                  <FaCertificate size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold leading-tight text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                    {cert.title}
                  </h3>
                </div>
              </div>

              {cert.description && (
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 italic leading-relaxed">
                  {cert.description}
                </p>
              )}

              <div className="mt-auto space-y-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-black text-slate-400 dark:text-slate-500 tracking-widest">Issuer</span>
                  <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{cert.issuer}</p>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/5">
                  <span className="text-xs font-medium text-slate-500">{cert.date}</span>
                  {cert.file && (
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-xs font-black text-emerald-600 dark:text-emerald-400 hover:opacity-70 transition-opacity uppercase tracking-widest"
                    >
                      View Doc <FaExternalLinkAlt size={10} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;