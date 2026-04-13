import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 transition-colors duration-500">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Contact Info */}
        <div>
          <h2 className="text-5xl font-black mb-6 uppercase tracking-tighter text-slate-900 dark:text-white">
            GET IN <span className="gradient-text">TOUCH</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed">
            I'm always open to discussing AI projects, internships, or collaborations. 
            Let's build the future together.
          </p>
          
          <div className="space-y-6">
            <ContactInfo icon={<FaEnvelope />} label="Email" value="zakihasanabdi443@gmail.com" />
            <ContactInfo icon={<FaWhatsapp />} label="WhatsApp" value="+252 614 439 473" />
          </div>

          <div className="flex gap-4 mt-10">
            <SocialIcon icon={<FaGithub />} href="https://github.com/zakariahasanabdiali" />
            <SocialIcon icon={<FaLinkedin />} href="https://linkedin.com/in/ZakariaHasanAbdiAli" />
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className="glass p-10 rounded-[2.5rem] border border-slate-200 dark:border-white/10 shadow-2xl">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input label="Name" type="text" placeholder="John Doe" />
              <Input label="Email" type="email" placeholder="john@example.com" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Message</label>
              <textarea 
                rows="5" 
                className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all text-slate-900 dark:text-white placeholder:text-slate-400" 
                placeholder="How can I help?"
              ></textarea>
            </div>

            <button className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-[#030712] rounded-2xl font-black transition-all shadow-lg shadow-emerald-500/20 active:scale-95">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

const Input = ({ label, type, placeholder }) => (
  <div className="flex flex-col gap-2">
    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">{label}</label>
    <input 
      type={type} 
      placeholder={placeholder} 
      className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all text-slate-900 dark:text-white placeholder:text-slate-400" 
    />
  </div>
);

const ContactInfo = ({ icon, label, value }) => (
  <div className="flex items-center gap-4 group">
    <div className="w-14 h-14 rounded-2xl glass border border-slate-200 dark:border-white/10 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform shadow-sm">
      {icon}
    </div>
    <div>
      <p className="text-[10px] uppercase font-black text-slate-400 dark:text-slate-500 tracking-[0.2em]">{label}</p>
      <p className="text-slate-900 dark:text-white font-bold text-lg">{value}</p>
    </div>
  </div>
);

const SocialIcon = ({ icon, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    className="w-14 h-14 rounded-2xl glass border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/50 transition-all shadow-sm"
  >
    {React.cloneElement(icon, { size: 24 })}
  </a>
);

export default Contact;