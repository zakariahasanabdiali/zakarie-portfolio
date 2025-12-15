import React, { useEffect, useState } from 'react';
import { FaCode, FaPython, FaRobot, FaDatabase, FaMicrophone, FaTools } from 'react-icons/fa';

const About = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="px-6 py-16 bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div
          className={`text-center transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-slate-900 via-emerald-600 to-cyan-500 bg-clip-text text-transparent dark:from-white dark:via-green-200 dark:to-cyan-200">
            About Me
          </h2>
          <p className="max-w-3xl mx-auto text-slate-600 leading-relaxed dark:text-slate-300">
            I’m a recent graduate with a <strong>BSc in Computer & Information Sciences</strong> from Zam Zam University (2025).
            My passion lies in creating practical AI solutions for Somali speakers — including
            Automatic Speech Recognition (ASR), Text-to-Speech (TTS), and intelligent chatbots — delivered as clean, scalable web services.
          </p>
        </div>

        {/* Skills Section */}
        <div
          className={`mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-700 delay-100 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <SkillCard icon={<FaCode />} title="Web Development" details="HTML, CSS, JavaScript, React" />
          <SkillCard icon={<FaPython />} title="Python Frameworks" details="FastAPI, Flask, Django" />
          <SkillCard icon={<FaRobot />} title="AI & ML" details="Transformers, PyTorch, TensorFlow" />
          <SkillCard icon={<FaDatabase />} title="Data Science" details="Pandas, NumPy, Matplotlib" />
          <SkillCard icon={<FaMicrophone />} title="Speech Tech" details="Wav2Vec2, XTTS v2" />
          <SkillCard icon={<FaTools />} title="Tools" details="Git, GitHub, VS Code, Google Colab" />
        </div>

        {/* Goals */}
        <div
          className={`mt-16 transition-all duration-700 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h3 className="text-2xl font-semibold mb-4 text-center">🎯 My Goals</h3>
          <ul className="max-w-3xl mx-auto list-disc pl-6 text-slate-600 space-y-2 dark:text-slate-300">
            <li>✅ Leverage my Computer Science degree to build impactful solutions</li>
            <li>🔍 Secure a remote AI/IT internship (paid or unpaid)</li>
            <li>🌍 Continue contributing to the Somali AI & tech ecosystem</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ icon, title, details }) => (
  <div className="bg-white/80 p-6 rounded-xl shadow-lg border border-slate-200 hover:border-emerald-400 transition dark:bg-slate-900 dark:border-slate-800">
    <div className="text-emerald-500 text-3xl mb-4">{icon}</div>
    <h4 className="text-lg font-bold mb-2">{title}</h4>
    <p className="text-slate-600 text-sm dark:text-slate-300">{details}</p>
  </div>
);

export default About;
