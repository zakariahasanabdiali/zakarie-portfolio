import React, { useEffect, useState } from 'react';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import cs50xImg from '../../certificate/CS50x.jpg';
import ibmImg from '../../certificate/IBM.jpg';
import lfxImg from '../../certificate/LinuxFoundationX.jpg';
import aiImg from '../../certificate/understanding prompt engineering.jpg';

const certificates = [
  {
    title: 'Understanding_Prompt_Engineering',
    issuer: 'Datacamp',
    date: 'Completed',
    file: aiImg,
  },
  {
    title: 'CS50x: Introduction to Computer Science',
    issuer: 'HarvardX / edX',
    date: 'Completed ',
    file: cs50xImg,
  },
  {
    title: 'IBM AI0101EN: Introduction to AI ',
    issuer: 'IBM / edX',
    date: 'Completed',
    file: ibmImg,
  },
  {
    title: 'LFS112x: Introduction to Cloud Infrastructure Technologies',
    issuer: 'LinuxFoundationX / edX',
    date: 'Completed',
    file: lfxImg,
  },
];

const Certificates = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="certificates" className="relative overflow-hidden px-5 sm:px-6 py-16 scroll-mt-24 bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      {/* Animated background blobs */}
      <div className="pointer-events-none absolute -left-16 -top-10 h-56 w-56 rounded-full bg-emerald-300/20 blur-3xl animate-blob dark:bg-emerald-500/12" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl animate-blob animation-delay-2000 dark:bg-cyan-500/12" />
      <div className="pointer-events-none absolute left-6 bottom-0 h-64 w-64 rounded-full bg-green-200/18 blur-3xl animate-blob animation-delay-4000 dark:bg-green-500/10" />

      <div className="relative max-w-6xl mx-auto">
        <header className="text-center mb-10">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-slate-900 via-emerald-600 to-cyan-500 bg-clip-text text-transparent dark:from-white dark:to-green-300">
            🎓 Certificates
          </h2>
        </header>

        <div
          className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {certificates.map((cert, idx) => (
            <article
              key={idx}
              className={`bg-white border border-slate-200 rounded-xl p-6 shadow hover:border-emerald-400 transition transform dark:bg-slate-900 dark:border-slate-800 ${
                mounted ? 'animate-[fade-in-up_0.6s_ease]' : ''
              }`}
            >
              <div className="flex items-center gap-3 text-emerald-500 text-2xl mb-3">
                <FaCertificate />
                <div className="text-slate-900 font-semibold text-lg dark:text-white">{cert.title}</div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">Issuer: {cert.issuer}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">Date: {cert.date}</p>
              {cert.file ? (
                <a
                  href={cert.file}
                  className="inline-flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-500 font-medium dark:text-emerald-300 dark:hover:text-emerald-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Certificate <FaExternalLinkAlt size={12} />
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

