import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaPaperPlane, FaTimes } from 'react-icons/fa';

const ZAKARIE_DATA = {
  "magaca": "Magacaygu waa Zakarie Hasan Abdi Ali.",
  "waxbarashada": "Zakarie wuxuu ka qalin-jabiyay Zam Zam University sanadkii 2025, isagoo qaatay BSc Computer & Information Sciences.",
  "xirfadda": "Zakarie waa khabiir ku takhasusay Software Development iyo AI, gaar ahaan Somali Speech Recognition (ASR), TTS, iyo dhisidda Chatbots.",
  "projects": "Mashaariicdiisa waxaa ka mid ah: Somali ASR (Wav2Vec2), Somali Chatbot (Falcon 7B), iyo Somali TTS (XTTS v2).",
  "location": "Zakarie wuxuu degan yahay magaalada Muqdisho, Soomaaliya.",
  "contact": "Waxaad kala xiriiri kartaa Email: zakihasanabdi443@gmail.com ama WhatsApp: +252614439473.",
  "skills": "Xirfadihiisa waxaa ka mid ah: Python, React, FastAPI, PyTorch, iyo dhisidda Somali AI Models.",
};

const AIChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Asc! Waxaan ahay kaaliyaha Zakarie ee AI-ga. Maxaan kaa caawiyaa?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = input.toLowerCase();
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = "Raali ahow, su'aashaas si fiican uma fahmin. Fadlan i weydii wax ku saabsan Zakarie (tusaale: waxbarashadiisa, mashaariicdiisa, ama xiriirka).";

      // Improved Logic with more keywords
      if (userMsg.includes("magac") || userMsg.includes("waa kuma") || userMsg.includes("kuma")) 
        botResponse = ZAKARIE_DATA.magaca;
      else if (userMsg.includes("wax") || userMsg.includes("university") || userMsg.includes("degree") || userMsg.includes("zam zam")) 
        botResponse = ZAKARIE_DATA.waxbarashada;
      else if (userMsg.includes("project") || userMsg.includes("mashaariic") || userMsg.includes("dhisay") || userMsg.includes("shaqo")) 
        botResponse = ZAKARIE_DATA.projects;
      else if (userMsg.includes("xiriir") || userMsg.includes("contact") || userMsg.includes("whatsapp") || userMsg.includes("nambar")) 
        botResponse = ZAKARIE_DATA.contact;
      else if (userMsg.includes("ai") || userMsg.includes("xirfad") || userMsg.includes("aqoon") || userMsg.includes("skills")) 
        botResponse = ZAKARIE_DATA.skills;
      else if (userMsg.includes("meel") || userMsg.includes("joogo") || userMsg.includes("location") || userMsg.includes("deganyahay")) 
        botResponse = ZAKARIE_DATA.location;
      else if (userMsg.includes("hi") || userMsg.includes("asc") || userMsg.includes("hello") || userMsg.includes("hay")) 
        botResponse = "Bacdal salaan, soo dhawoow! Waxaan diyaar u ahay inaan kaaga sheekeeyo khibradda Zakarie.";

      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200]">
      <AnimatePresence>
        {!isOpen ? (
          <motion.button
            initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 bg-emerald-500 text-[#030712] rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)] flex items-center justify-center text-2xl hover:bg-emerald-400 transition-all active:scale-90 pointer-events-auto"
          >
            <FaRobot />
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="w-[350px] md:w-[400px] h-[550px] bg-white dark:bg-[#0b0f1a] rounded-[2.5rem] border border-slate-200 dark:border-white/10 flex flex-col overflow-hidden shadow-2xl pointer-events-auto"
          >
            {/* Header */}
            <div className="p-6 bg-emerald-500 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg text-[#030712]"><FaRobot /></div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-[#030712]">Zakarie AI</h3>
                  <p className="text-[10px] text-[#030712]/70 font-bold uppercase">Online & Ready</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-[#030712]/60 hover:text-[#030712] transition-colors"><FaTimes size={20} /></button>
            </div>

            {/* Chat Body */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide bg-slate-50 dark:bg-transparent">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                    ? 'bg-emerald-500 text-[#030712] rounded-tr-none font-bold' 
                    : 'bg-white dark:bg-white/10 text-slate-800 dark:text-white rounded-tl-none border border-slate-200 dark:border-white/5'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start italic text-[10px] text-emerald-500 font-bold uppercase tracking-widest animate-pulse ml-2">Kaaliyuhu wuu qorayaa...</div>
              )}
            </div>

            {/* Input Footer */}
            <div className="p-4 bg-white dark:bg-white/5 border-t border-slate-200 dark:border-white/5 flex gap-2">
              <input
                type="text" value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Weydii su'aal..."
                className="flex-1 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-slate-900 dark:text-white transition-all placeholder:text-slate-400"
              />
              <button onClick={handleSend} className="p-3 bg-emerald-500 text-[#030712] rounded-xl hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20">
                <FaPaperPlane />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIChatBot;