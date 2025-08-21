import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [sending, setSending] = useState(false);

  // Simple mailto fallback (replace with Formspree action to post)
  const onSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get('name');
    const email = fd.get('email');
    const message = fd.get('message');

    setSending(true);
    // mailto fallback
    window.location.href = `mailto:zakihasanabdi443@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(
      name || 'Visitor'
    )}&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`;
    setTimeout(() => setSending(false), 800);
  };

  return (
    <section className="px-6 py-16 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2">
        {/* Left: Info / Social */}
        <div>
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-white to-green-300 bg-clip-text text-transparent">
            📫 Get in Touch
          </h2>
          <p className="mt-3 text-slate-300">
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
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
          {/* For Formspree: replace onSubmit with action + method="POST" and remove handler
              <form action="https://formspree.io/f/your-id" method="POST"> */}
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                name="name"
                type="text"
                required
                className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="How can I help?"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full rounded-lg bg-green-600 hover:bg-green-500 disabled:opacity-60 px-4 py-2 font-medium transition"
            >
              {sending ? 'Sending…' : 'Send Message'}
            </button>
          </form>

          {/* mini note for Formspree */}
         
        </div>
      </div>
    </section>
  );
};

const InfoRow = ({ icon, label, children }) => (
  <div className="flex items-start gap-3">
    <div className="text-green-400 mt-1">{icon}</div>
    <div>
      <div className="text-sm text-slate-400">{label}</div>
      <div className="text-slate-200">{children}</div>
    </div>
  </div>
);

export default Contact;
