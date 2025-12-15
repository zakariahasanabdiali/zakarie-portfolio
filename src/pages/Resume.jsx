import React from 'react';
import {
  FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaTwitter,
  FaMapMarkerAlt, FaGraduationCap
} from 'react-icons/fa';
import { SiHuggingface } from 'react-icons/si';

const Resume = () => (
  <section className="px-6 py-16 bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-slate-900 via-emerald-600 to-cyan-500 bg-clip-text text-transparent dark:from-white dark:to-green-300">
          📄 My Resume
        </h2>
        <p className="text-slate-600 mt-2 dark:text-slate-300">
          Download my full resume or view key highlights below.
        </p>
      </div>

      {/* Download Button */}
      <div className="text-center">
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 px-6 py-3 rounded-lg text-white font-medium shadow-lg shadow-emerald-200/40 transition dark:shadow-emerald-900/30"
        >
          <FaDownload /> Download Full Resume (PDF)
        </a>
      </div>

      {/* Info Cards */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <InfoCard icon={<FaGraduationCap />} title="Education">
          BSc in Computer & Information Sciences — Zam Zam University (2025)
        </InfoCard>
        <InfoCard icon={<FaMapMarkerAlt />} title="Location">
          Mogadishu, Somalia
        </InfoCard>
        <InfoCard icon={<FaEnvelope />} title="Email">
          <a href="mailto:zakihasanabdi443@gmail.com" className="hover:underline">
            zakihasanabdi443@gmail.com
          </a>
        </InfoCard>

        {/* NEW: Hugging Face */}
        <InfoCard icon={<SiHuggingface />} title="Hugging Face">
          <a
            href="https://huggingface.co/zakihassan04"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            huggingface.co/zakihassan04
          </a>
        </InfoCard>

        <InfoCard icon={<FaGithub />} title="GitHub">
          <a
            href="https://github.com/zakariahasanabdiali"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            github.com/zakariahasanabdiali
          </a>
        </InfoCard>
        <InfoCard icon={<FaTwitter />} title="Twitter">
          <a
            href="https://twitter.com/ZakariaHasan04"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            @ZakariaHasan04
          </a>
        </InfoCard>
        <InfoCard icon={<FaLinkedin />} title="LinkedIn">
          <a
            href="https://linkedin.com/in/ZakariaHasanAbdiAli"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Zakarie Hasan Abdi Ali
          </a>
        </InfoCard>
      </div>
    </div>
  </section>
);

const InfoCard = ({ icon, title, children }) => (
  <div className="bg-white border border-slate-200 rounded-lg p-5 shadow hover:border-emerald-400 transition dark:bg-slate-900 dark:border-slate-800">
    <div className="flex items-center gap-3 mb-2 text-emerald-500 text-xl">
      {icon}<span className="text-slate-900 font-semibold dark:text-white">{title}</span>
    </div>
    <p className="text-slate-600 text-sm dark:text-slate-300">{children}</p>
  </div>
);

export default Resume;
