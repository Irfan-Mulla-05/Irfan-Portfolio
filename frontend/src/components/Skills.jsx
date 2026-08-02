import { motion } from 'framer-motion';

const SKILLS = [
  { title: 'Languages', items: ['Java', 'JavaScript', 'Python', 'SQL', 'C++'] },
  { title: 'Frontend', items: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'] },
  { title: 'Backend & DB', items: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'REST APIs'] },
  { title: 'Core Concepts', items: ['DSA', 'OOP', 'OS', 'DBMS', 'Git / GitHub'] },
];

const Skills = () => (
  <section id="skills" className="py-24 px-6 sm:px-12 relative overflow-hidden">
    <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full z-[-1]" />
    
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
        <p className="text-sky-400 font-semibold tracking-widest text-xs uppercase mb-3">What I Know</p>
        <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white mb-4">Technical <span className="text-gradient-sky">Skills</span></h2>
        <div className="w-12 h-1 bg-gradient-sky rounded-full" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="pro-card p-8 group hover:!border-sky-500/30"
          >
            <div className="w-full h-1 rounded-full bg-gradient-sky mb-6 opacity-60 group-hover:opacity-100 group-hover:shadow-[0_0_10px_rgba(56,189,248,0.5)] transition-all" />
            <h3 className="text-sm font-bold text-white font-outfit mb-5 uppercase tracking-wider">{cat.title}</h3>
            <ul className="space-y-3">
              {cat.items.map(skill => (
                <li key={skill} className="flex items-center gap-3 text-sm text-slate-400 group-hover:text-slate-200 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 opacity-60 group-hover:opacity-100 group-hover:shadow-[0_0_6px_rgba(56,189,248,0.8)]" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
