import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const VisitorPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [skipReady, setSkipReady] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsOpen(true), 300);
    setTimeout(() => setSkipReady(true), 5000);
  }, []);

  const handleSubmit = async (skipped = false) => {
    try {
      await axios.post('https://irfan-portfolio-37il.onrender.com/', { name, role: skipped ? null : role, skipped });
    } catch { /* silent */ }
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030712]/90 backdrop-blur-xl px-4"
        >
          <motion.div
            initial={{ scale: 0.95, y: 16, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 16, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="w-full max-w-md bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl shadow-sky-500/20 overflow-hidden relative"
          >
            {/* Top accent bar */}
            <div className="h-1 bg-gradient-sky w-full" />

            <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-500/20 blur-3xl rounded-full" />

            <div className="p-8 relative z-10">
              <h2 className="text-2xl font-bold text-white font-outfit mb-1.5 flex items-center gap-2">
                Welcome <span role="img" aria-label="wave">👋</span>
              </h2>
              <p className="text-slate-400 text-sm mb-7">A quick intro helps me understand who's visiting.</p>

              <div className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Enter Name"
                    className="w-full px-4 py-3.5 bg-black/30 border border-white/10 rounded-xl text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/30 transition-all shadow-inner"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">You Are</label>
                  <select
                    value={role}
                    onChange={e => setRole(e.target.value)}
                    className="w-full px-4 py-3.5 bg-black/30 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/30 transition-all appearance-none text-white [&>option]:bg-[#0f172a] [&>option]:text-white shadow-inner"
                  >
                    <option value="" disabled>Select your role</option>
                    <option value="Recruiter">Recruiter</option>
                    <option value="Developer">Developer</option>
                    <option value="Student">Student</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="flex gap-3 pt-4">
                  <motion.button
                    whileHover={skipReady ? { scale: 1.02 } : {}}
                    whileTap={skipReady ? { scale: 0.98 } : {}}
                    onClick={() => handleSubmit(true)}
                    disabled={!skipReady}
                    className="flex-1 py-3.5 rounded-xl border border-white/10 bg-white/5 text-slate-400 text-sm font-semibold hover:bg-white/10 hover:text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
                  >
                    {skipReady ? 'Skip' : 'Wait...'}
                  </motion.button>
                  <motion.button
                    whileHover={role ? { scale: 1.02 } : {}}
                    whileTap={role ? { scale: 0.98 } : {}}
                    onClick={() => handleSubmit(false)}
                    disabled={!role}
                    className="flex-1 py-3.5 rounded-xl bg-gradient-sky text-white text-sm font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-sky-500/30"
                  >
                    Enter Site
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VisitorPopup;
