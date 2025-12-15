import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const THEME_KEY = 'theme-preference';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return localStorage.getItem(THEME_KEY) || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggle = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <button
      onClick={toggle}
      type="button"
      className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-emerald-400 hover:text-emerald-500 dark:border-slate-600 dark:bg-slate-900/80 dark:text-slate-200"
      aria-label="Toggle color theme"
    >
      {theme === 'dark' ? <FaSun size={14} /> : <FaMoon size={14} />}
      <span>{theme === 'dark' ? 'Light' : 'Dark'} mode</span>
    </button>
  );
};

export default ThemeToggle;

