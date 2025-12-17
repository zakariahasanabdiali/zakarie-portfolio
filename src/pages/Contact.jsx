import React, { useState, useMemo } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const formFields = useMemo(() => ({
    name: { label: 'Name', type: 'text', required: true, placeholder: 'Your name' },
    email: { label: 'Email', type: 'email', required: true, placeholder: 'you@example.com' },
    message: { label: 'Message', type: 'textarea', required: true, placeholder: 'How can I help?' },
  }), []);

  const onSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const fd = new FormData(e.currentTarget);
    const name = fd.get('name')?.trim();
    const email = fd.get('email')?.trim();
    const message = fd.get('message')?.trim();

    if (!name || !email || !message) {
      setError('Please fill in all fields.');
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setSending(true);

    // === Your EmailJS IDs ===
    const SERVICE_ID = 'service_pgt6ukf'; // your service ID
    const TEMPLATE_ID = 'template_sszhhuk'; // replace with your template ID
    const PUBLIC_KEY = 'NzXNExVNf6maqFWGh'; // replace with your public key
    // ======================

    emailjs.send(SERVICE_ID, TEMPLATE_ID, { name, email, message }, PUBLIC_KEY)
      .then(() => {
        setSuccess('Message sent successfully!');
        e.target.reset();
      })
      .catch(() => setError('Failed to send message. Try again later.'))
      .finally(() => setSending(false));
  };

  const whatsappNumber = '+252614439473';
  const sendWhatsApp = () => {
    const text = 'Hi, I saw your portfolio and want to get in touch.';
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="px-5 sm:px-6 py-16 scroll-mt-24 bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2">

        {/* Left Info */}
        <div>
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-slate-900 via-emerald-600 to-cyan-500 bg-clip-text text-transparent dark:from-white dark:to-green-300">
            📫 Get in Touch
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Open for work, internships, collaborations, and freelance projects in AI, speech tech, and web development.
          </p>

          <div className="mt-8 space-y-4">
            <InfoRow icon={<FaEnvelope />} label="Email">
              <a href="mailto:zakihasanabdi443@gmail.com" className="hover:underline">zakihasanabdi443@gmail.com</a>
            </InfoRow>

            <InfoRow icon={<FaMapMarkerAlt />} label="Location">Mogadishu, Somalia</InfoRow>

            <div className="flex items-center gap-4 pt-2">
              <a href="https://github.com/zakariahasanabdiali" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white"><FaGithub size={22} /></a>
              <a href="https://linkedin.com/in/ZakariaHasanAbdiAli" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white"><FaLinkedin size={22} /></a>
              <a href="https://twitter.com/ZakariaHasan04" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white"><FaTwitter size={22} /></a>
            </div>

            <button onClick={sendWhatsApp} className="mt-4 w-full bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-lg transition">
              Contact via WhatsApp
            </button>

            {success && <p className="mt-4 text-green-600 dark:text-green-400">{success}</p>}
            {error && <p className="mt-4 text-red-500 dark:text-red-300">{error}</p>}
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg dark:bg-slate-900 dark:border-slate-800">
          <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Send a Message</h3>
          <form onSubmit={onSubmit} className="space-y-4">
            {Object.entries(formFields).map(([name, config]) => (
              <div key={name}>
                <label className="block text-sm mb-1 text-slate-600 dark:text-slate-300" htmlFor={name}>{config.label}</label>
                {config.type === 'textarea' ? (
                  <textarea id={name} name={name} rows="5" required={config.required} placeholder={config.placeholder}
                    className="w-full rounded-lg bg-slate-100 border border-slate-300 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
                ) : (
                  <input id={name} name={name} type={config.type} required={config.required} placeholder={config.placeholder}
                    className="w-full rounded-lg bg-slate-100 border border-slate-300 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
                )}
              </div>
            ))}
            <button type="submit" disabled={sending} className="w-full rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:opacity-60 px-4 py-2 font-medium text-white transition shadow-lg shadow-emerald-200/40 dark:shadow-emerald-900/30">
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
