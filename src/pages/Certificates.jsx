import React, { useEffect, useState } from 'react';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import cs50xImg from '../../certificate/CS50x.jpg';
import ibmImg from '../../certificate/IBM.jpg';
import lfxImg from '../../certificate/LinuxFoundationX.jpg';

const certificates = [
  {
    title: 'CS50x: Introduction to Computer Science',
    issuer: 'HarvardX / edX',
    date: 'Completed',
    file: cs50xImg,
  },
  {
    title: 'IBM AI0101EN: Introduction to AI',
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
    <section className="px-6 py-16 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-10">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent">
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
              className={`bg-slate-900 border border-slate-800 rounded-xl p-6 shadow hover:border-green-400 transition transform ${
                mounted ? 'animate-[fade-in-up_0.6s_ease]' : ''
              }`}
            >
              <div className="flex items-center gap-3 text-green-400 text-2xl mb-3">
                <FaCertificate />
                <div className="text-white font-semibold text-lg">{cert.title}</div>
              </div>
              <p className="text-sm text-slate-300">Issuer: {cert.issuer}</p>
              <p className="text-sm text-slate-400 mb-3">Date: {cert.date}</p>
              {cert.file ? (
                <a
                  href={cert.file}
                  className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 font-medium"
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

