import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPython, FaRobot, FaDatabase, FaMicrophone, FaTools } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden transition-colors duration-500">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          {/* Cinwaanka oo isbedelaya */}
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter text-slate-900 dark:text-white">
            ABOUT <span className="gradient-text">ME</span>
          </h2>
          {/* Qoraalka hordhaca oo isbedelaya */}
          <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            I’m a recent graduate with a <strong className="text-slate-900 dark:text-white font-bold">BSc in Computer Sciences</strong> from Zam Zam University.
            My passion is creating AI solutions for Somali speakers — from speech recognition to LLMs.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <SkillCard icon={<FaCode />} title="Web Development" details="React, Tailwind, Next.js" />
          <SkillCard icon={<FaPython />} title="Python Frameworks" details="FastAPI, Flask, Django" />
          <SkillCard icon={<FaRobot />} title="AI & ML" details="Transformers, PyTorch, LLMs" />
          <SkillCard icon={<FaDatabase />} title="Data Science" details="Pandas, NumPy, SQL" />
          <SkillCard icon={<FaMicrophone />} title="Speech Tech" details="Wav2Vec2, XTTS v2" />
          <SkillCard icon={<FaTools />} title="Tools" details="Git, Docker, VS Code" />
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ icon, title, details }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    // Border-ku hadda waa slate-200 marka light mode la jiro si uu u muuqdo
    className="glass p-8 rounded-[2rem] border border-slate-200 dark:border-white/5 hover:border-emerald-500/30 transition-all group"
  >
    <div className="text-emerald-500 text-4xl mb-6 group-hover:scale-110 transition-transform">{icon}</div>
    {/* Skill Title */}
    <h4 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{title}</h4>
    {/* Skill Details */}
    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{details}</p>
  </motion.div>
);

export default About;