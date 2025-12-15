import React, { useEffect, useState } from 'react';
import { FaMicrophone, FaRobot, FaWaveSquare } from 'react-icons/fa';

const ProjectCard = ({ icon, title, children, delay }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), delay || 0);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      className={`bg-white/85 p-6 rounded-xl shadow-lg border border-slate-200 hover:border-emerald-400 transition transform hover:-translate-y-1 duration-300 dark:bg-slate-900 dark:border-slate-800 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="text-emerald-500 text-4xl mb-4">{icon}</div>
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <div className="text-slate-600 text-sm leading-relaxed dark:text-slate-300">{children}</div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="relative overflow-hidden px-6 py-16 bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      {/* Animated background blobs */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-emerald-300/30 blur-3xl animate-blob dark:bg-emerald-500/15" />
      <div className="pointer-events-none absolute -right-20 top-1/3 h-64 w-64 rounded-full bg-cyan-300/30 blur-3xl animate-blob animation-delay-2000 dark:bg-cyan-500/15" />
      <div className="pointer-events-none absolute left-10 bottom-0 h-64 w-64 rounded-full bg-green-200/25 blur-3xl animate-blob animation-delay-4000 dark:bg-green-500/10" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-slate-900 to-emerald-500 bg-clip-text text-transparent dark:from-white dark:to-green-300">
            📂 Featured Projects
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto dark:text-slate-300">
            A showcase of my AI-powered Somali language projects, blending advanced machine learning with practical applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            icon={<FaMicrophone />}
            title="🗣️ Somali Speech Recognition"
            delay={50}
          >
            Fine-tuned <strong>Wav2Vec2</strong> for Somali using a custom agricultural dataset.
            Built and deployed a <strong>FastAPI</strong> real-time ASR API for production use.
          </ProjectCard>

          <ProjectCard
            icon={<FaRobot />}
            title="🧠 Somali Chatbot (Falcon 7B)"
            delay={100}
          >
            Fine-tuned <strong>Falcon 7B</strong> on Somali Q&A data, focusing on agriculture-specific
            queries. Delivers context-aware, locally relevant responses.
          </ProjectCard>

          <ProjectCard
            icon={<FaWaveSquare />}
            title="🎤 Somali Text-to-Speech (TTS)"
            delay={150}
          >
            Developed natural Somali voice synthesis using <strong>XTTS v2</strong> and
            <strong> FastPitch + HiFi-GAN</strong>, producing high-quality, smooth audio output.
          </ProjectCard>
        </div>
      </div>
    </section>
  );
};

export default Projects;
