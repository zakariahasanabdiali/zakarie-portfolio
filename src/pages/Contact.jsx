import React, { useMemo, useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  // Simple mailto fallback (replace with Formspree action to post)
  const formFields = useMemo(
    () => ({
      name: { label: 'Name', type: 'text', required: true, placeholder: 'Your name' },
      email: { label: 'Email', type: 'email', required: true, placeholder: 'you@example.com' },
      message: { label: 'Message', type: 'textarea', required: true, placeholder: 'How can I help?' },
    }),
    []
  );

  const onSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get('name')?.trim();
    const email = fd.get('email')?.trim();
    const message = fd.get('message')?.trim();

    setError('');
    if (!name || !email || !message) {
      setError('Please fill in all fields.');
      return;
    }
    const emailOk = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
    if (!emailOk) {
      setError('Please enter a valid email address.');
      return;
    }

    setSending(true);
    // mailto fallback; replace with Formspree/EmailJS endpoint when ready.
    window.location.href = `mailto:zakihasanabdi443@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(
      name || 'Visitor'
    )}&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`;
    setTimeout(() => setSending(false), 800);
  };

  return (
    <section id="contact" className="relative overflow-hidden px-5 sm:px-6 py-16 scroll-mt-24 bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      {/* Animated background blobs */}
      <div className="pointer-events-none absolute -left-24 -top-16 h-56 w-56 rounded-full bg-emerald-300/20 blur-3xl animate-blob dark:bg-emerald-500/12" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl animate-blob animation-delay-2000 dark:bg-cyan-500/12" />
      <div className="pointer-events-none absolute left-6 bottom-0 h-64 w-64 rounded-full bg-green-200/18 blur-3xl animate-blob animation-delay-4000 dark:bg-green-500/10" />

      <div className="relative max-w-6xl mx-auto grid gap-10 lg:grid-cols-2">
        {/* Left: Info / Social */}
        <div>
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-slate-900 via-emerald-600 to-cyan-500 bg-clip-text text-transparent dark:from-white dark:to-green-300">
            📫 Get in Touch
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            I’m open to work, internships, collaborations, and freelance projects in AI, speech tech, and web development.
          </p>

          <div className="mt-8 space-y-4">
            <InfoRow icon={<FaEnvelope />} label="Email">
              <a href="mailto:zakihasanabdi443@gmail.com" className="hover:underline">
                zakihasanabdi443@gmail.com
              </a>
            </InfoRow>

            <InfoRow icon={<FaMapMarkerAlt />} label="Location">
              Mogadishu, Somalia
            </InfoRow>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/zakariahasanabdiali"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-white"
                aria-label="GitHub"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://linkedin.com/in/ZakariaHasanAbdiAli"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://twitter.com/ZakariaHasan04"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-white"
                aria-label="Twitter"
              >
                <FaTwitter size={22} />
              </a>
            </div>

            <p className="mt-6 text-slate-300">
              Let’s build the future of Somali Tech together 🇸🇴🚀
            </p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg dark:bg-slate-900 dark:border-slate-800">
          <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Send a Message</h3>
          {/* For Formspree: replace onSubmit with action + method="POST" and remove handler
              <form action="https://formspree.io/f/your-id" method="POST"> */}
          <form onSubmit={onSubmit} className="space-y-4">
            {Object.entries(formFields).map(([name, config]) => (
              <div key={name}>
              <label className="block text-sm mb-1 text-slate-600 dark:text-slate-300" htmlFor={name}>
                  {config.label}
                </label>
                {config.type === 'textarea' ? (
                  <textarea
                    id={name}
                    name={name}
                    rows="5"
                    required={config.required}
                    className="w-full rounded-lg bg-slate-100 border border-slate-300 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                    placeholder={config.placeholder}
                  />
                ) : (
                  <input
                    id={name}
                    name={name}
                    type={config.type}
                    required={config.required}
                    className="w-full rounded-lg bg-slate-100 border border-slate-300 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:bg-slate-800 dark:border-slate-700 dark:text-white"
                    placeholder={config.placeholder}
                  />
                )}
              </div>
            ))}

            {error ? (
              <p className="text-sm text-red-500 dark:text-red-300" role="alert">
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={sending}
              className="w-full rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:opacity-60 px-4 py-2 font-medium text-white transition shadow-lg shadow-emerald-200/40 dark:shadow-emerald-900/30"
            >
              {sending ? 'Sending…' : 'Send Message'}
            </button>
            
          </form>
        </div>
      </div>
    </section>
  );
};

const InfoRow = ({ icon, label, children }) => (
  <div className="flex items-start gap-3">
    <div className="text-emerald-500 mt-1">{icon}</div>
    <div>
      <div className="text-sm text-slate-500 dark:text-slate-400">{label}</div>
      <div className="text-slate-700 dark:text-slate-200">{children}</div>
    </div>
  </div>
);

export default Contact;
