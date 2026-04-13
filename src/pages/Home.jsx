import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaArrowRight, FaGithub, FaLinkedin, FaCheckCircle, 
  FaRobot, FaBrain, FaMicrochip, FaWaveSquare, FaAtom
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2'; 
import profile from '../assets/profile.jpg';

// Liiska Icons-ka AI-ga ee isbed-beddelaya (Badges)
const aiFeatures = [
  { icon: <FaRobot />, text: "AI Agents" },
  { icon: <FaBrain />, text: "Neural Networks" },
  { icon: <FaMicrochip />, text: "Deep Learning" },
  { icon: <FaWaveSquare />, text: "ASR & TTS Expert" },
  { icon: <HiSparkles />, text: "NLP Researcher" },
];

const Home = () => {
  const [featureIndex, setFeatureIndex] = useState(0);
  const [isAIView, setIsAIView] = useState(false);

  // 1. Timer-ka bedelaya Skill Badges-ka (3 ilbiriqsi kasta)
  useEffect(() => {
    const featureTimer = setInterval(() => {
      setFeatureIndex((prev) => (prev + 1) % aiFeatures.length);
    }, 3000);
    return () => clearInterval(featureTimer);
  }, []);

  // 2. Timer-ka bedelaya Sawirkaaga iyo AI Core-ka (8 ilbiriqsi kasta)
  useEffect(() => {
    const viewTimer = setInterval(() => {
      setIsAIView((prev) => !prev);
    }, 8000); 
    return () => clearInterval(viewTimer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 modern-bg -z-10 opacity-70" />
      
      {/* Dynamic Glow Blobs */}
      <div className={`absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-[100px] animate-blob transition-colors duration-1000 ${isAIView ? 'bg-blue-500/10' : 'bg-emerald-500/10'}`} />
      <div className={`absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-[100px] animate-blob animation-delay-2000 transition-colors duration-1000 ${isAIView ? 'bg-cyan-500/10' : 'bg-blue-500/10'}`} />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">
        
        {/* Left Content */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-emerald-600 dark:text-emerald-400 text-xs font-black tracking-widest uppercase mb-8 border border-emerald-500/20 shadow-sm">
            <HiSparkles size={16} className="animate-pulse" /> 2025 Graduate & AI Innovator
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 text-slate-900 dark:text-white">
            ZAKARIE <br /> 
            <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 bg-clip-text text-transparent italic">
              HASAN
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed mb-10">
            Building the future of <span className="text-slate-900 dark:text-white font-bold underline decoration-emerald-500/30 text-2xl">Somali AI</span>. 
            Specializing in ASR, TTS, and Large Language Models for the Horn of Africa.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#projects" 
              className="px-10 py-4 bg-emerald-500 hover:bg-emerald-400 text-[#030712] rounded-2xl font-black shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-3 group">
              View Projects <FaArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <div className="flex gap-3">
              <SocialBtn icon={<FaGithub />} href="https://github.com/zakariahasanabdiali" />
              <SocialBtn icon={<FaLinkedin />} href="https://linkedin.com/in/ZakariaHasanAbdiAli" />
            </div>
          </div>
        </motion.div>

        {/* Right Side: DYNAMIC PHOTO / AI SWITCHER */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative flex justify-center lg:justify-end">
          <div className="relative group">
            
            {/* Background Glow that changes color */}
            <div className={`absolute -inset-4 rounded-[3rem] blur-xl opacity-50 group-hover:opacity-100 transition-all duration-1000 ${isAIView ? 'bg-gradient-to-tr from-blue-500/30 to-cyan-500/30' : 'bg-gradient-to-tr from-emerald-500/30 to-blue-500/30'}`} />
            
            <div className="relative w-72 h-[24rem] md:w-[28rem] md:h-[36rem] glass p-3 rounded-[3.5rem] shadow-2xl overflow-hidden border border-white/10">
               
               <AnimatePresence mode="wait">
                {!isAIView ? (
                  /* VIEW 1: HUMAN PROFILE */
                  <motion.img
                    key="human"
                    src={profile}
                    alt="Zakarie"
                    initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 0.9, filter: 'blur(20px)' }}
                    transition={{ duration: 1 }}
                    className="w-full h-full object-cover rounded-[3rem]"
                  />
                ) : (
                  /* VIEW 2: AI NEURAL INTERFACE */
                  <motion.div
                    key="ai-core"
                    initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
                    transition={{ duration: 1 }}
                    className="w-full h-full rounded-[3rem] bg-slate-900/90 flex flex-col items-center justify-center relative overflow-hidden"
                  >
                    {/* Background Tech Patterns */}
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                    
                    {/* Rotating Orbits */}
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute w-64 h-64 border border-emerald-500/20 rounded-full border-dashed" />
                    <motion.div animate={{ rotate: -360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} className="absolute w-48 h-48 border border-blue-500/20 rounded-full border-dashed" />

                    <div className="relative z-10 text-center flex flex-col items-center">
                      <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }} transition={{ duration: 2, repeat: Infinity }} className="text-emerald-500 mb-6">
                        <FaBrain size={100} className="drop-shadow-[0_0_25px_rgba(16,185,129,0.8)]" />
                      </motion.div>
                      <h3 className="text-emerald-400 font-black tracking-[0.3em] uppercase text-sm mb-2">Neural Interface</h3>
                      <div className="flex gap-1.5">
                        {[1, 2, 3].map(i => (
                          <motion.div key={i} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity }} className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
               </AnimatePresence>
              
              {/* Dynamic Skill Badge (Top Right) */}
              <div className="absolute top-8 right-8 z-30">
                <AnimatePresence mode="wait">
                  <motion.div key={featureIndex} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5 }}
                    className="glass px-5 py-3 rounded-2xl flex items-center gap-3 border border-white/20 shadow-xl backdrop-blur-md">
                    <div className="text-emerald-500 text-xl">{aiFeatures[featureIndex].icon}</div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white">{aiFeatures[featureIndex].text}</span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Status Badge (Bottom) */}
              <div className="absolute bottom-8 left-8 right-8 glass py-4 px-6 rounded-2xl flex items-center justify-between border border-white/10 shadow-2xl backdrop-blur-3xl z-30">
                <div className="flex items-center gap-3">
                  <div className={`w-2.5 h-2.5 rounded-full animate-ping ${isAIView ? 'bg-blue-500' : 'bg-emerald-500'}`} />
                  <span className="text-[11px] font-black uppercase tracking-widest text-slate-900 dark:text-white">
                    {isAIView ? 'System Processing' : 'Zakarie Active'}
                  </span>
                </div>
                <FaCheckCircle className={isAIView ? 'text-blue-500' : 'text-emerald-500'} size={18} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialBtn = ({ icon, href }) => (
  <motion.a whileHover={{ y: -5 }} href={href} target="_blank" rel="noreferrer"
    className="p-4 rounded-2xl glass border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-all shadow-sm">
    {React.cloneElement(icon, { size: 24 })}
  </motion.a>
);

export default Home;