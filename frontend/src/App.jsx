import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Gallery from './components/Gallery';
import ResumePreview from './components/ResumePreview';
import Contact from './components/Contact';
import VisitorPopup from './components/VisitorPopup';
import Admin from './pages/Admin';

function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen text-white font-inter selection:bg-sky-500/30 selection:text-white">
      {/* Sky gradient scroll progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-sky z-[60] origin-left shadow-[0_0_15px_rgba(56,189,248,0.6)]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Subtle radial glow — top only */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-sky-500/10 rounded-full blur-[120px]" />
      </div>

      <VisitorPopup />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Gallery />
        <ResumePreview />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 flex flex-col items-center gap-4 text-center text-slate-500 text-sm relative z-10">
        <p>© 2025 Irfan Mulla · Built with ❤️ using MERN Stack</p>
        <a href="/admin" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg border border-sky-500/20 bg-sky-500/10 text-sky-400 font-medium hover:bg-sky-500/20 hover:text-sky-300 transition-colors shadow-sm shadow-sky-500/10">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          Admin Login
        </a>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Navigate to="/admin" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
