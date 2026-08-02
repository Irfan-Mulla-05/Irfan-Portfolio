import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      let currentSection = 'Home';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 200) {
          currentSection = section.charAt(0).toUpperCase() + section.slice(1);
        }
      }
      setActiveTab(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="w-8 h-8 rounded-lg bg-gradient-sky flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-sky-500/30">
              I
            </motion.div>
            <span className="text-lg font-bold font-outfit text-white tracking-tight group-hover:text-sky-300 transition-colors">
              Irfan Mulla
            </span>
          </a>

          {/* Desktop Nav - Stitch style pill */}
          <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-xl bg-white/5 border border-white/5 backdrop-blur-md">
            {NAV_ITEMS.map(item => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveTab(item.label)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  activeTab === item.label
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {activeTab === item.label && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-white/10 rounded-lg shadow-sm"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf" download 
              className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/5 transition-colors text-sm font-semibold text-white shadow-lg backdrop-blur-md"
            >
              Resume ↓
            </motion.a>
          </div>

          <button className="lg:hidden text-slate-300 p-2" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 z-[60] bg-[#030712]/95 flex flex-col justify-center items-center"
          >
            <button className="absolute top-6 right-6 text-slate-400 hover:text-white p-2" onClick={() => setIsMobileMenuOpen(false)}>
              <X size={28} />
            </button>
            <div className="flex flex-col items-center gap-5 text-xl">
              {NAV_ITEMS.map(item => (
                <motion.a
                  key={item.label}
                  whileHover={{ scale: 1.1, color: '#38bdf8' }}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-300 font-outfit font-medium transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf" download
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-6 px-8 py-3 rounded-xl bg-gradient-sky text-white font-bold transition-colors shadow-lg shadow-sky-500/30"
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
