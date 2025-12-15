import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/profile.jpg'; // Ensure your image is here

const Home = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Glow background */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-16 md:flex-row md:py-24">
        {/* Left: text */}
        <div
          className={`w-full md:w-1/2 transform transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl space-y-2">
            <span className="inline-flex items-center gap-3 animate-text-glow">
              <span className="animate-hero-wave text-4xl md:text-5xl text-white">☁️</span>
              <span className="bg-gradient-to-r from-white via-white to-green-300 bg-clip-text text-transparent">
                Hello, I’m Zakarie
              </span>
            </span>
            <span className="block h-1 w-24 bg-gradient-to-r from-green-400/80 via-cyan-300/70 to-transparent rounded-full animate-underline-glow" />
          </h1>

          <p className="mt-4 max-w-xl text-slate-300 md:text-lg">
            Software Developer & AI Enthusiast from Somalia — building practical
            Somali-language AI: ASR and  Chatbots.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <Link
              to="/projects"
              className="rounded-xl bg-green-600 px-5 py-2.5 font-medium text-white transition hover:bg-green-500"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="rounded-xl border border-slate-600 px-5 py-2.5 font-medium text-slate-200 transition hover:border-slate-400 hover:text-white"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right: circular photo */}
        <div
          className={`w-full md:w-1/2 flex justify-center transform transition-all duration-700 delay-100 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="relative">
            <img
              src={profile}
              alt="Zakarie profile"
              className="h-56 w-56 rounded-full object-cover shadow-xl ring-4 ring-green-400 md:h-72 md:w-72"
            />
            {/* badge */}
            <div className="absolute -bottom-4 -right-4 rounded-full bg-slate-800/80 px-4 py-2 text-sm text-slate-200 backdrop-blur-md shadow">
              <span className="inline-block animate-pulse">⚡ AI + Web</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
