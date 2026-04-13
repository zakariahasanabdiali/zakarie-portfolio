import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AIChatBot from "./components/AIChatBot"; // 1. Soo dhoway Bot-ka

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

const App = () => {
  return (
    /** 
     * modern-bg: Waxay qaadataa background-ka iftiimaya ee index.css
     * text-slate-900 dark:text-white: Waxay saxtaa farta Light & Dark mode
     */
    <div className="min-h-screen flex flex-col scroll-smooth modern-bg text-slate-900 dark:text-white transition-colors duration-500">
      
      {/* NAVBAR: Had iyo jeer wuu ku yaal dusha sare */}
      <Navbar />

      <main className="flex-1">
        {/* HOME SECTION: Hero area */}
        <section id="home">
          <Home />
        </section>

        {/* SECTION WRAPPER: Waxaan u dhexaysiinay 'space-y-32' si boggaga aysan isugu dhowaan */}
        <div className="space-y-32 pb-20">
          
          <section id="about">
            <About />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="certificates">
            <Certificates />
          </section>

          <section id="resume">
            <Resume />
          </section>

          <section id="contact">
            <Contact />
          </section>
          
        </div>
      </main>

      {/* FOOTER: Macluumaadka xuquuqda iyo baraha bulshada */}
      <Footer />

      {/* AI CHAT BOT: Wuxuu had iyo jeer ku yaal geeska midig ee hoose (Fixed) */}
      <AIChatBot />

    </div>
  );
};

export default App;