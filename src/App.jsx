import { useState, useEffect } from "react";
import Projects from "./pages/Projects";
import { motion } from "framer-motion";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorHovered, setCursorHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (menuOpen) setMenuOpen(false);
    };

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [menuOpen]);

  // Hero heading text lines
  const heroLines = ["CRAFTING", "DIGITAL", "EXPERIENCES"];

  // About statement words for stagger animation
  const aboutText = "I design and build immersive, performant, and visually engaging web experiences using React, Tailwind CSS, and modern animation tools.";
  const aboutWords = aboutText.split(" ");

  return (
    <div className="bg-[#070707] text-white min-h-screen scroll-smooth relative selection:bg-white selection:text-black font-inter overflow-hidden">

      {/* 🔥 CUSTOM CURSOR (Hidden on mobile) */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: mousePos.x - 8,
          y: mousePos.y - 8,
          scale: cursorHovered ? 4 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-white/30 rounded-full pointer-events-none z-50 hidden md:block transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: mousePos.x - 20,
          y: mousePos.y - 20,
          scale: cursorHovered ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.8 }}
      />

      {/* NOISE & SUBTLE GRID OVERLAY */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-40 opacity-40"></div>
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-between px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="w-px h-full bg-white/[0.03]"></div>
        <div className="w-px h-full bg-white/[0.03] hidden md:block"></div>
        <div className="w-px h-full bg-white/[0.03] hidden md:block"></div>
        <div className="w-px h-full bg-white/[0.03]"></div>
      </div>

      {/* FIXED NAVBAR */}
      <nav className="fixed top-0 left-0 w-full px-6 md:px-16 lg:px-24 py-6 flex justify-between items-center z-50 pointer-events-auto mix-blend-difference">
        <a
          href="#"
          className="font-syne font-bold text-lg md:text-xl tracking-wider text-white hover:opacity-80 transition-opacity duration-300"
          onMouseEnter={() => setCursorHovered(true)}
          onMouseLeave={() => setCursorHovered(false)}
        >
          MOHAMMED FAIZ
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10 font-inter text-sm font-medium tracking-widest uppercase text-white">
          <a
            href="#about"
            className="hover:opacity-60 transition-opacity duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white hover:after:w-full after:transition-all after:duration-300"
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:opacity-60 transition-opacity duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white hover:after:w-full after:transition-all after:duration-300"
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            Projects
          </a>
          <a
            href="#resume"
            className="hover:opacity-60 transition-opacity duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white hover:after:w-full after:transition-all after:duration-300"
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            Resume
          </a>
          <a
            href="#contact"
            className="hover:opacity-60 transition-opacity duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white hover:after:w-full after:transition-all after:duration-300"
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none z-50 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 flex flex-col gap-1.5 items-end">
            <span className={`h-0.5 w-full bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`h-0.5 w-4 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`h-0.5 w-full bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-[#070707] z-40 flex flex-col justify-center items-center gap-8 text-2xl font-syne font-bold uppercase tracking-widest"
        >
          <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-white/60 transition-colors">About</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-white/60 transition-colors">Projects</a>
          <a href="#resume" onClick={() => setMenuOpen(false)} className="hover:text-white/60 transition-colors">Resume</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-white/60 transition-colors">Contact</a>
        </motion.div>
      )}

      {/* HERO SECTION */}
      <section className="min-h-screen w-full px-6 md:px-16 lg:px-24 flex flex-col justify-center relative z-10 max-w-7xl mx-auto pt-20 pb-10">
        <div className="flex flex-col justify-center flex-grow">
          {/* Small Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-8 md:mb-12"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-inter text-xs md:text-sm font-semibold tracking-[0.3em] text-white/70 uppercase">
              FRONTEND DEVELOPER
            </span>
          </motion.div>

          {/* Massive Heading */}
          <div className="flex flex-col gap-2 md:gap-4 pointer-events-auto">
            {heroLines.map((line, index) => (
              <div key={index} className="overflow-hidden py-1">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 1.2,
                    delay: 0.3 + index * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-[14vw] md:text-[9vw] font-syne font-black leading-[0.85] tracking-tight uppercase text-white select-none"
                  onMouseEnter={() => setCursorHovered(true)}
                  onMouseLeave={() => setCursorHovered(false)}
                >
                  {line}
                </motion.h1>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 pt-12 border-t border-white/10 text-xs md:text-sm font-inter tracking-widest uppercase text-white/50"
        >
          <div>
            <p className="text-white/80 font-medium">MOHAMMED FAIZ</p>
            <p className="mt-1">BASED IN SURAT, GUJARAT, INDIA</p>
          </div>

          <div className="flex items-center gap-2 animate-bounce">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
            <span className="text-white font-medium tracking-[0.2em]">SCROLL TO EXPLORE</span>
          </div>

          <div>
            <p className="text-white/80 font-medium text-right sm:text-left">STATUS</p>
            <p className="mt-1 text-emerald-400">AVAILABLE FOR FREELANCE & INTERNSHIPS</p>
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="min-h-screen w-full px-6 md:px-16 lg:px-24 py-32 flex flex-col justify-center relative z-10 max-w-7xl mx-auto scroll-mt-12">
        <div className="mb-12 flex items-center gap-4">
          <span className="text-xs md:text-sm font-syne font-semibold tracking-widest text-white/50 uppercase">[ 01 / ABOUT ]</span>
          <div className="h-px w-12 bg-white/20"></div>
        </div>

        {/* Large Paragraph Text Reveal */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-syne font-medium leading-[1.2] md:leading-[1.15] tracking-tight max-w-6xl mb-24">
          {aboutWords.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0.2, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.03,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block mr-3 md:mr-5 mb-2"
            >
              {word}
            </motion.span>
          ))}
        </h2>

        {/* Content Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-16 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm hover:bg-white/[0.05] transition-all duration-500"
          >
            <h3 className="text-xs font-inter tracking-[0.2em] text-white/40 uppercase mb-3">01 // NAME</h3>
            <p className="text-xl md:text-2xl font-syne font-bold text-white">Mohammed Faiz</p>
            <p className="text-sm text-gray-400 mt-2 leading-relaxed">Creative Developer focused on crafting premium digital experiences.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm hover:bg-white/[0.05] transition-all duration-500"
          >
            <h3 className="text-xs font-inter tracking-[0.2em] text-white/40 uppercase mb-3">02 // ROLE</h3>
            <p className="text-xl md:text-2xl font-syne font-bold text-white">Frontend Developer</p>
            <p className="text-sm text-gray-400 mt-2 leading-relaxed">Specializing in high-performance UI engineering and interactive design.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm hover:bg-white/[0.05] transition-all duration-500"
          >
            <h3 className="text-xs font-inter tracking-[0.2em] text-white/40 uppercase mb-3">03 // SKILLS</h3>
            <p className="text-xl md:text-2xl font-syne font-bold text-white">React & Tailwind</p>
            <p className="text-sm text-gray-400 mt-2 leading-relaxed">JavaScript, GSAP, Lenis, Framer Motion, and modern web animation.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm hover:bg-white/[0.05] transition-all duration-500"
          >
            <h3 className="text-xs font-inter tracking-[0.2em] text-white/40 uppercase mb-3">04 // LOCATION</h3>
            <p className="text-xl md:text-2xl font-syne font-bold text-white">Surat, India</p>
            <p className="text-sm text-gray-400 mt-2 leading-relaxed">Gujarat, India. Available for remote work and global collaborations.</p>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="w-full px-6 md:px-16 lg:px-24 py-32 relative z-10 max-w-7xl mx-auto scroll-mt-12">
        <div className="mb-6 flex items-center gap-4">
          <span className="text-xs md:text-sm font-syne font-semibold tracking-widest text-white/50 uppercase">[ 02 / SELECTED WORK ]</span>
          <div className="h-px w-12 bg-white/20"></div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-syne font-bold tracking-tight text-white">
            SELECTED WORK
          </h2>
          <p className="text-sm font-inter text-gray-400 tracking-widest uppercase max-w-xs">
            Recent projects showcasing creative frontend development & polished UI design.
          </p>
        </div>

        <Projects />
      </section>

      {/* RESUME SECTION */}
      <section id="resume" className="w-full px-6 md:px-16 lg:px-24 py-32 relative z-10 max-w-7xl mx-auto scroll-mt-12">
        <div className="mb-6 flex items-center gap-4">
          <span className="text-xs md:text-sm font-syne font-semibold tracking-widest text-white/50 uppercase">[ 03 / CURRICULUM VITAE ]</span>
          <div className="h-px w-12 bg-white/20"></div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-syne font-bold tracking-tight text-white">
            RESUME
          </h2>
          <div className="flex gap-4 flex-wrap">
            <a
              href="/Faiz_Vachhiyat_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white text-black font-inter font-semibold text-sm hover:bg-neutral-200 transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2"
              onMouseEnter={() => setCursorHovered(true)}
              onMouseLeave={() => setCursorHovered(false)}
            >
              <span>View Resume</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </a>

            <a
              href="/Faiz_Vachhiyat_Resume.pdf"
              download
              className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-inter font-semibold text-sm backdrop-blur-md border border-white/10 transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2"
              onMouseEnter={() => setCursorHovered(true)}
              onMouseLeave={() => setCursorHovered(false)}
            >
              <span>Download PDF</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Premium Resume Preview Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full bg-neutral-900/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl p-4 md:p-8"
        >
          <div className="w-full h-[500px] md:h-[800px] rounded-2xl overflow-hidden border border-white/10 bg-black/50">
            <iframe
              src="/Faiz_Vachhiyat_Resume.pdf"
              title="Mohammed Faiz Resume"
              className="w-full h-full"
            />
          </div>
          <p className="text-center text-gray-400 mt-6 text-xs md:text-sm tracking-widest uppercase font-inter">
            If preview is not visible in your browser, please use the download or view buttons above.
          </p>
        </motion.div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="min-h-screen w-full px-6 md:px-16 lg:px-24 flex flex-col justify-center items-center text-center relative z-10 max-w-7xl mx-auto scroll-mt-12">
        {/* Small Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-50-50 bg-emerald-500 animate-ping"></span>
          <span className="font-inter text-xs md:text-sm font-semibold tracking-[0.3em] text-white/50 uppercase">
            LET'S WORK TOGETHER
          </span>
        </motion.div>

        {/* Large Clickable Heading */}
        <motion.a
          href="mailto:mfaiz06123@gmail.com"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="group block relative my-6 pointer-events-auto"
          onMouseEnter={() => setCursorHovered(true)}
          onMouseLeave={() => setCursorHovered(false)}
        >
          <h2 className="text-[16vw] md:text-[13vw] font-syne font-black tracking-tighter leading-none text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-gray-300 group-hover:to-white transition-all duration-500 select-none">
            GET IN TOUCH
          </h2>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1.5 md:h-3 bg-white group-hover:w-full transition-all duration-500 rounded-full"></div>
        </motion.a>

        <p className="text-gray-400 text-sm md:text-lg font-inter max-w-xl mx-auto mt-8 mb-12 leading-relaxed">
          I'm currently available for freelance projects, frontend engineering roles, and creative collaborations. Let's build something extraordinary together.
        </p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 pointer-events-auto"
        >
          <a
            href="mailto:mfaiz06123@gmail.com"
            className="px-10 py-5 rounded-full bg-white text-black font-inter font-semibold text-base hover:bg-neutral-200 transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95 flex items-center gap-3"
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            <span>mfaiz06123@gmail.com</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="w-full px-6 md:px-16 lg:px-24 py-12 border-t border-white/10 relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-xs md:text-sm text-gray-500 font-inter tracking-wider uppercase pointer-events-auto">
        <div>
          <p>COPYRIGHT © 2026 MOHAMMED FAIZ</p>
          <p className="text-gray-600 mt-1 text-[10px]">DESIGN INSPIRED BY LUKE BAFFAIT</p>
        </div>

        <div className="flex items-center gap-8 font-medium text-gray-400">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300 py-1"
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/fz12dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300 py-1"
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            GitHub
          </a>
          <a
            href="mailto:mfaiz06123@gmail.com"
            className="hover:text-white transition-colors duration-300 py-1"
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            Email
          </a>
        </div>

        <div>
          <a
            href="#"
            className="flex items-center gap-2 hover:text-white transition-colors duration-300"
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            <span>BACK TO TOP</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
          </a>
        </div>
      </footer>

    </div>
  );
}

export default App;
