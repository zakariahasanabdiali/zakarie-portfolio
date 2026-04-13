import React from 'react';
import {
  FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaTwitter,
  FaMapMarkerAlt, FaGraduationCap, FaTrophy
} from 'react-icons/fa';
import { SiHuggingface } from 'react-icons/si';

const Resume = () => (
  <section id="resume" className="relative overflow-hidden px-5 sm:px-6 py-24 scroll-mt-24 transition-colors duration-500">
    {/* Animated background blobs */}
    <div className="pointer-events-none absolute -left-20 -top-16 h-56 w-56 rounded-full bg-emerald-300/20 blur-3xl animate-blob dark:bg-emerald-500/12" />
    <div className="pointer-events-none absolute right-0 top-1/3 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl animate-blob animation-delay-2000 dark:bg-cyan-500/12" />

    <div className="relative max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">
          MY <span className="gradient-text">RESUME</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-3 text-lg">
          Download my full resume or view key professional highlights below.
        </p>
      </div>

      <div className="text-center mb-16">
        <a href="/resume.pdf" download className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-[#030712] px-10 py-4 rounded-2xl font-black shadow-lg shadow-emerald-500/20 transition-all active:scale-95">
          <FaDownload /> DOWNLOAD FULL RESUME (PDF)
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <InfoCard icon={<FaGraduationCap />} title="Education">
          BSc in Computer & Information Sciences — Zam Zam University (2025)
        </InfoCard>
        
        <InfoCard icon={<FaTrophy className="text-yellow-500" />} title="Zindi Africa">
          <a href="https://zindi.africa/users/zakarie" target="_blank" rel="noreferrer" className="hover:text-emerald-500 transition-colors">
            Active Data Science Competitor. Solving African challenges through AI.
          </a>
        </InfoCard>

        <InfoCard icon={<SiHuggingface className="text-orange-400" />} title="Hugging Face">
          <a href="https://huggingface.co/zakihassan04" target="_blank" rel="noreferrer" className="hover:text-emerald-500 transition-colors">
            huggingface.co/zakihassan04
          </a>
        </InfoCard>

        <InfoCard icon={<FaGithub />} title="GitHub">
          <a href="https://github.com/zakariahasanabdiali" target="_blank" rel="noreferrer" className="hover:text-emerald-500 transition-colors">
            github.com/zakariahasanabdiali
          </a>
        </InfoCard>

        <InfoCard icon={<FaLinkedin className="text-blue-500" />} title="LinkedIn">
          <a href="https://linkedin.com/in/ZakariaHasanAbdiAli" target="_blank" rel="noreferrer" className="hover:text-emerald-500 transition-colors">
            Zakarie Hasan Abdi Ali
          </a>
        </InfoCard>

        <InfoCard icon={<FaEnvelope className="text-emerald-500" />} title="Email">
          zakihasanabdi443@gmail.com
        </InfoCard>
      </div>
    </div>
  </section>
);

const InfoCard = ({ icon, title, children }) => (
  <div className="glass p-8 rounded-[2rem] border border-slate-200 dark:border-white/10 transition-all hover:border-emerald-500/30">
    <div className="flex items-center gap-3 mb-4 text-emerald-500 text-2xl">
      {icon}
      <span className="text-slate-900 dark:text-white font-black uppercase tracking-widest text-xs">{title}</span>
    </div>
    <div className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-relaxed">{children}</div>
  </div>
);

export default Resume;