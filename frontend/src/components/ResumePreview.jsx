import { motion } from 'framer-motion';
import { Download, ExternalLink, FileText } from 'lucide-react';

const ResumePreview = () => (
  <section id="resume" className="py-24 px-6 sm:px-12 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-sky-500/10 blur-[120px] rounded-full z-[-1]" />
    
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <p className="text-sky-400 font-semibold tracking-widest text-xs uppercase mb-3">My CV</p>
          <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white mb-4">Resume Showcase</h2>
          <div className="w-12 h-1 bg-gradient-sky rounded-full" />
        </div>
        <div className="flex gap-4 shrink-0">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="public/resume.pdf" target="_blank" rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-200 text-sm font-semibold transition-all glass-panel"
          >
            <ExternalLink size={16} className="text-sky-400" /> Open PDF
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf" download
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-sky text-white text-sm font-bold transition-all shadow-lg shadow-sky-500/30"
          >
            <Download size={16} /> Download
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pro-card p-3 group hover:border-sky-500/40 relative overflow-hidden"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-[2rem] blur opacity-10 group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />
        
        <div className="relative rounded-2xl overflow-hidden bg-white min-h-[600px] border border-white/10">
          <iframe src="/resume.pdf" title="Resume" className="w-full min-h-[600px] md:min-h-[820px] bg-white" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0d0d18] rounded-2xl -z-10">
            <FileText size={48} className="text-slate-700 mb-6 group-hover:text-sky-500/50 transition-colors" />
            <p className="text-slate-500 text-base font-outfit">
              Add <span className="text-sky-400 font-semibold px-2 py-1 bg-white/5 rounded-md border border-white/10">resume.pdf</span> to the <span className="text-slate-300 font-mono text-sm bg-white/5 px-2 py-1 rounded-md border border-white/10">public/</span> folder
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ResumePreview;
