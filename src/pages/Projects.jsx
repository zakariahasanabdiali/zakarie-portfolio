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
      className={`bg-slate-900 p-6 rounded-xl shadow-lg border border-slate-800 hover:border-green-400 transition transform hover:-translate-y-1 duration-300 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="text-green-400 text-4xl mb-4">{icon}</div>
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <div className="text-slate-300 text-sm leading-relaxed">{children}</div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="px-6 py-16 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent">
            📂 Featured Projects
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto">
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
