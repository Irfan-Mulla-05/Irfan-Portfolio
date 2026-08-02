import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects')
      .then(res => setProjects(res.data))
      .catch(() => setProjects([
        { _id: '1', title: 'KrishiRakshak AI', description: 'AI-driven crop disease detection and smart farm management system built for RIT Ideathon 2025.', tech: ['React', 'Node.js', 'Python', 'MongoDB'], link: '#', github: '#' },
        { _id: '2', title: 'CampusSetu', description: 'Unified campus management and student communication portal built as team lead at HackNova 2024.', tech: ['MERN', 'Socket.io', 'Tailwind', 'JWT'], link: '#', github: '#' },
        { _id: '3', title: 'Portfolio Website', description: 'Full-stack MERN portfolio with visitor tracking, admin dashboard, and image gallery.', tech: ['React', 'Express', 'MongoDB', 'Framer Motion'], link: '#', github: '#' },
      ]));
  }, []);

  return (
    <section id="projects" className="py-24 px-6 sm:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-sky-500/5 via-transparent to-transparent z-[-1]" />

      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <p className="text-sky-400 font-semibold tracking-widest text-xs uppercase mb-3">What I've Built</p>
          <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white mb-4">Featured <span className="text-gradient-sky">Projects</span></h2>
          <div className="w-12 h-1 bg-gradient-sky rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project._id || idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="pro-card flex flex-col group overflow-hidden hover:!border-sky-500/40"
            >
              {/* Top area */}
              <div className="h-48 bg-[#0a0f1c] relative overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-blue-600/10 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px]" />

                {/* Actions appear on hover */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300">

                  {project.github && (
                    <a
                      href="https://github.com/Irfan-Mulla-05"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 hover:border-sky-500/50 flex items-center justify-center transition-all shadow-lg shadow-black/20"
                    >
                      <Github size={18} />
                    </a>
                  )}

                  {project.link && (
                    <a
                      href="https://github.com/Irfan-Mulla-05"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-gradient-sky text-white flex items-center justify-center hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all"
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  )}

                </div>
              </div>

              {/* Body */}
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white font-outfit mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-sky transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.tech?.map(t => (
                    <span key={t} className="text-[11px] font-semibold px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/10 text-sky-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
