import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Mail, ArrowRight } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";

const ROLES = ["MERN Stack Developer", "Problem Solver", "Creative Thinker"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-20 px-6 sm:px-12 relative overflow-hidden">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-7"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-300 text-sm font-medium cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            Open to opportunities
          </motion.div>

          <div>
            <h1 className="text-5xl sm:text-6xl md:text-[4.5rem] font-bold font-outfit leading-[1.1] tracking-tight text-white mb-2">
              Hi, I'm <br />
              <span className="text-gradient-sky">Irfan Mulla</span>
            </h1>
            <div className="h-10 overflow-hidden relative">
              <AnimatePresence mode='wait'>
                <motion.p
                  key={roleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-xl md:text-2xl text-slate-400 font-medium font-outfit absolute"
                >
                  {ROLES[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <p className="text-slate-400 text-lg max-w-lg leading-relaxed">
            Building scalable, high-performance web applications with real-world impact. Combining beautiful UI with robust architectures.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-sky text-white font-semibold transition-all shadow-lg shadow-sky-500/25 animate-pulse-sky"
            >
              View Projects
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="public/resume.pdf" download
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-200 font-semibold transition-all glass-panel"
            >
              <FileText size={17} className="text-sky-400" />
              Download Resume
            </motion.a>
          </div>

          <div className="flex gap-4 pt-4">
            {[
              { icon: Github, href: "https://github.com/Irfan-Mulla-05" },
              { icon: Linkedin, href: "https://linkedin.com/in/irfan-mulla-ikm" },
              { icon: SiLeetcode, href: "https://leetcode.com/u/irfan_5/" },
          
            ].map((s, i) => (
              <motion.a 
                whileHover={{ scale: 1.1, translateY: -4 }}
                whileTap={{ scale: 0.9 }}
                key={i} href={s.href} target="_blank" rel="noreferrer"
                className="p-3.5 rounded-xl border border-white/10 bg-white/5 text-slate-400 hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-500/10 transition-all shadow-sm"
              >
                <s.icon size={22} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Profile Image with subtle animations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-80 h-80 sm:w-[400px] sm:h-[400px] group">
            {/* Glow */}
            <div className="absolute inset-0 bg-sky-500/20 rounded-[2.5rem] blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 border border-sky-500/30 rounded-[2.5rem] rotate-3 group-hover:rotate-6 transition-transform duration-700" />
            <div className="absolute inset-0 bg-[#0f172a] border border-white/10 rounded-[2.5rem] -rotate-2 group-hover:-rotate-4 overflow-hidden z-10 transition-transform duration-700 shadow-xl">
              <img
                src="/profile.png"
                alt="Irfan Mulla"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                onError={e => { e.currentTarget.style.display = 'none'; }}
              />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 z-20 glass-panel border border-white/10 px-6 py-4 rounded-2xl shadow-xl backdrop-blur-md"
            >
              <p className="text-3xl font-bold font-outfit text-gradient-sky">10+</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">Projects Done</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
import { AnimatePresence } from 'framer-motion';
export default Hero;
