import React from 'react';
import { motion } from 'framer-motion';
import { FaMicrophone, FaRobot, FaWaveSquare, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  return (
    // bg-slate-100/50 (Light) iyo dark:bg-[#030712]/50 (Dark)
    <section id="projects" className="py-24 px-6 bg-slate-100/50 dark:bg-[#030712]/50 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Text color: text-slate-900 (Light) iyo dark:text-white (Dark) */}
        <h2 className="text-4xl md:text-5xl font-black mb-12 uppercase tracking-tighter text-center md:text-left text-slate-900 dark:text-white">
          FEATURED <span className="gradient-text">PROJECTS</span>
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard 
            icon={<FaMicrophone />} 
            title="Somali ASR" 
            tags={["PyTorch", "FastAPI"]}
            desc="Fine-tuned Wav2Vec2 for Somali agriculture voice recognition."
          />
          <ProjectCard 
            icon={<FaRobot />} 
            title="Somali Chatbot" 
            tags={["Falcon 7B", "NLP"]}
            desc="AI chatbot built on Falcon 7B, specifically for Somali context."
          />
          <ProjectCard 
            icon={<FaWaveSquare />} 
            title="Somali TTS" 
            tags={["XTTS v2", "AI"]}
            desc="Natural Somali voice synthesis for modern web applications."
          />
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ icon, title, desc, tags }) => (
  <motion.div whileHover={{ scale: 1.02 }} className="glass p-8 rounded-[2.5rem] relative overflow-hidden group">
    {/* Background Icon opacity */}
    <div className="absolute top-0 right-0 p-6 opacity-5 dark:opacity-10 group-hover:opacity-20 transition-opacity text-6xl text-slate-900 dark:text-white">
      {icon}
    </div>
    
    <div className="text-emerald-500 text-3xl mb-6">{icon}</div>
    
    {/* Title: Isbedelaya */}
    <h4 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{title}</h4>
    
    {/* Desc: Isbedelaya (Slate-600 ee Light, Slate-400 ee Dark) */}
    <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">{desc}</p>
    
    <div className="flex gap-2 mb-6">
      {tags.map(tag => (
        <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full border border-emerald-500/20">
          {tag}
        </span>
      ))}
    </div>

    {/* Button Text: text-slate-900 (Light) iyo dark:text-white (Dark) */}
    <button className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-500 transition-colors">
      View Project <FaExternalLinkAlt size={12} />
    </button>
  </motion.div>
);

export default Projects;