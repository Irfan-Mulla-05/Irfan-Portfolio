import { motion } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';

const EXPERIENCE = [
  {
    role: 'Google Student Ambassador',
    org: 'Sanjay Ghodawat University',
    duration: 'Aug 2025 – Dec 2025',
    points: [
      'Represented Google programs on campus to empower student developers.',
      'Organized workshops and events, increasing tech participation by 30%.',
      'Built and mentored a vibrant student developer community.',
    ],
  },
  {
    role: 'Event Coordinator',
    org: 'ACSES, Sanjay Ghodawat University',
    duration: 'Aug 2025 – May 2026',
    points: [
      'Organized coding contests, technical workshops, and seminars.',
      'Managed end-to-end event execution for 200+ students.',
      'Collaborated with faculty and industry speakers.',
    ],
  },
];

const Experience = () => (
  <section id="experience" className="py-24 px-6 sm:px-12 relative overflow-hidden">
    <div className="absolute top-0 right-1/3 w-80 h-80 bg-blue-500/10 blur-[120px] rounded-full z-[-1]" />
    
    <div className="max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
        <p className="text-sky-400 font-semibold tracking-widest text-xs uppercase mb-3">My Journey</p>
        <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white mb-4">Experience</h2>
        <div className="w-12 h-1 bg-gradient-sky rounded-full" />
      </motion.div>

      <div className="space-y-8">
        {EXPERIENCE.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="pro-card p-8 group relative overflow-hidden hover:!border-sky-500/30"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0 group-hover:bg-gradient-sky group-hover:border-transparent transition-all shadow-inner shadow-sky-500/20">
                  <Briefcase size={22} className="text-sky-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-outfit">{exp.role}</h3>
                  <p className="text-slate-400 text-sm mt-1">{exp.org}</p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-sky-300 bg-sky-500/10 px-4 py-2 rounded-full border border-sky-500/20 shrink-0 h-fit">
                <Calendar size={13} /> {exp.duration}
              </span>
            </div>

            <ul className="space-y-3 px-2">
              {exp.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-4 text-sm text-slate-300 leading-relaxed font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-sky shadow-[0_0_5px_rgba(56,189,248,0.8)] mt-2 shrink-0" />
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
