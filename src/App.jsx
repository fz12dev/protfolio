import { useState, useEffect } from "react";
import Projects from "./pages/Projects";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen scroll-smooth">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-600 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* NAVBAR */}
      <nav
        className={`fixed w-full px-6 md:px-10 py-4 flex justify-between items-center z-50 transition
        ${scrolled ? "bg-black/60 backdrop-blur-xl border-b border-white/10" : "bg-transparent"}`}
      >
        <h1 className="font-bold text-xl">Faiz.dev</h1>

        <div className="hidden md:flex space-x-6 text-gray-400">
          <a href="#" className="hover:text-white transition hover:underline underline-offset-4">Home</a>
          <a href="#projects" className="hover:text-white transition hover:underline underline-offset-4">Projects</a>
          <a href="#resume" className="hover:text-white transition hover:underline underline-offset-4">Resume</a>
          <a href="#contact" className="hover:text-white transition hover:underline underline-offset-4">Contact</a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-16 w-full bg-black/90 backdrop-blur-md flex flex-col items-center gap-6 py-6 z-40">
          <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#resume" onClick={() => setMenuOpen(false)}>Resume</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}


      {/* HERO */}
<section className="px-6 md:px-10 pt-32 pb-20">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* Left Content */}
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold leading-tight"
      >
        Hi, I'm{" "}
        <span className="text-purple-400 bg-purple-500/10 px-3 rounded">
          Faiz
        </span>
      </motion.h1>

      <TypeAnimation
        sequence={[
          "Frontend Developer",
          1500,
          "React Developer",
          1500,
          "UI Designer",
          1500,
        ]}
        speed={50}
        repeat={Infinity}
        className="text-purple-400 mt-4 md:text-lg text-sm"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-400 mt-4 max-w-xl"
      >
        I build modern web apps using React, Tailwind CSS and clean UI design.
      </motion.p>

      <div className="flex gap-3 md:gap-4 mt-6 flex-wrap">
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 bg-purple-500 rounded-full hover:bg-purple-600 transition shadow-lg shadow-purple-500/30"
        >
          View Projects
        </motion.a>

        <motion.a
          href="/Faiz_Vachhiyat_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 border border-purple-500 rounded-full hover:bg-purple-500 transition"
        >
          View Resume
        </motion.a>
      </div>
    </div>

    {/* Right Image */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-purple-500 rounded-full blur-3xl opacity-30"></div>

        <img
          src="/profile.jpeg"
          alt="Mohammed Faiz"
          className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-purple-500 shadow-2xl shadow-purple-500/30"
        />
      </div>
    </motion.div>

  </div>
</section>

      {/* SKILLS */}
      <section className="px-6 md:px-10 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl mb-6">Skills</h2>

          <div className="flex flex-wrap gap-4">
            {["React", "Tailwind", "JavaScript", "PHP", "MySQL"].map((skill, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm hover:bg-purple-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 transition duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="px-6 md:px-10 py-24 scroll-mt-24"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl mb-10">Projects</h2>
          <Projects />
        </div>
      </motion.section>

      {/* RESUME */}
      <motion.section
        id="resume"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="px-6 md:px-10 py-24 scroll-mt-24"
      >
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl mb-6">Resume</h2>

          {/* Buttons */}
          <div className="flex gap-4 mb-6 flex-wrap">
            <a
              href="/Faiz_Vachhiyat_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-purple-500 rounded-md hover:bg-purple-600 transition"
            >
              View Resume
            </a>

            <a
              href="/Faiz_Vachhiyat_Resume.pdf"
              download
              className="px-6 py-2 border border-purple-500 rounded-md hover:bg-purple-500 transition"
            >
              Download Resume
            </a>
          </div>

          {/* 🔥 Resume Preview */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-purple-500/10 hover:scale-[1.02] hover:shadow-purple-500/20 transition duration-300">
            <iframe
              src="/Faiz_Vachhiyat_Resume.pdf"
              title="Resume"
              className="w-full h-125 md:h-200"
            />
            <p className="text-center text-gray-400 mt-2 text-sm md:text-lg">
              If preview not visible, use "View Resume"
            </p>
          </div>

        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center py-20 scroll-mt-24"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl">Contact Me</h2>

          <p className="text-gray-400 mt-4">
            Open for internships and freelance projects
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <a
              href="mailto:mfaiz06123@gmail.com"
              className="px-6 py-3 bg-purple-500 rounded-full hover:bg-purple-600 transition"
            >
              Email Me
            </a>

            <a
              href="https://github.com/fz12dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-purple-500 rounded-full hover:bg-purple-500 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 text-sm border-t border-white/10">

        <div className="flex justify-center gap-6 mb-2">
          <a href="https://github.com/fz12dev" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            GitHub
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            LinkedIn
          </a>
        </div>

        © {new Date().getFullYear()} Faiz. Built with React & Tailwind.

      </footer>

    </div>
  );
}

export default App;
// const projects = [
//   { title: 'Jewellery E-Commerce', desc: 'Modern shopping website built with React.' },
//   { title: 'Agency Website', desc: 'Responsive landing page with smooth animations.' },
//   { title: 'Portfolio Website', desc: 'Personal portfolio showcasing projects and skills.' },
// ]

// export default function App() {
//   return (
//     <div className="min-h-screen bg-slate-950 text-white">
//       <header className="max-w-6xl mx-auto px-6 py-20">
//         <p className="text-purple-400 font-semibold">Hello, I'm</p>
//         <h1 className="text-5xl md:text-7xl font-bold mt-2">Mohammed Faiz</h1>
//         <p className="text-slate-300 mt-6 max-w-2xl text-lg">
//           Frontend Developer specializing in React, Tailwind CSS, and modern web experiences.
//         </p>
//         <div className="mt-8 flex gap-4">
//           <a href="#projects" className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-semibold">
//             View Projects
//           </a>
//           <a href="#contact" className="border border-slate-600 hover:border-purple-500 px-6 py-3 rounded-xl font-semibold">
//             Contact Me
//           </a>
//         </div>
//       </header>

//       <section className="max-w-6xl mx-auto px-6 py-12">
//         <h2 className="text-3xl font-bold mb-6">Skills</h2>
//         <div className="flex flex-wrap gap-3">
//           {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Git', 'Vite'].map(skill => (
//             <span key={skill} className="bg-slate-800 px-4 py-2 rounded-full">
//               {skill}
//             </span>
//           ))}
//         </div>
//       </section>

//       <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
//         <h2 className="text-3xl font-bold mb-6">Projects</h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           {projects.map(project => (
//             <div key={project.title} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
//               <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//               <p className="text-slate-400">{project.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section id="contact" className="max-w-6xl mx-auto px-6 py-12 pb-20">
//         <h2 className="text-3xl font-bold mb-4">Contact</h2>
//         <p className="text-slate-300">Email: your-email@example.com</p>
//         <p className="text-slate-300 mt-2">GitHub: github.com/yourusername</p>
//       </section>
//     </div>
//   )
// }
