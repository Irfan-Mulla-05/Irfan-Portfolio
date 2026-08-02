import { motion } from 'framer-motion';
import { Trophy, Award, Star } from 'lucide-react';

const ACHIEVEMENTS = [
  { title: 'Finalist – HackNova 24-Hour Hackathon', desc: 'Team Lead – CampusSetu. Built a comprehensive campus platform in 24 hours.', icon: Trophy },
  { title: 'Finalist – RIT Ideathon 2025', desc: 'Developed KrishiRakshak AI – an intelligent smart farming solution.', icon: Award },
  { title: 'Top 15 – Webverse Hackathon 2024', desc: 'Selected from over 50 competing teams for an innovative web solution.', icon: Star },
];

const Achievements = () => (
  <section id="achievements" className="py-24 px-6 sm:px-12 relative overflow-hidden">
    <div className="max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
        <p className="text-sky-400 font-semibold tracking-widest text-xs uppercase mb-3">Milestones</p>
        <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white mb-4">Achievements</h2>
        <div className="w-12 h-1 bg-gradient-sky rounded-full" />
      </motion.div>

      <div className="space-y-6">
        {ACHIEVEMENTS.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="pro-card group flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 hover:!border-sky-500/30"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-sky p-[1px] shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all duration-300">
              <div className="w-full h-full bg-[#0f172a] rounded-xl flex items-center justify-center group-hover:bg-transparent transition-colors">
                <item.icon className="text-sky-400 group-hover:text-white transition-colors" size={24} />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-outfit mb-2 group-hover:text-sky-300 transition-colors">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
