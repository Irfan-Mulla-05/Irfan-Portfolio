import { motion } from 'framer-motion';
import { GraduationCap, MapPin, UserCheck, Calendar } from 'lucide-react';

const SectionLabel = ({ children }) => (
  <p className="text-sky-400 font-semibold tracking-widest text-xs uppercase mb-3 text-gradient-sky">{children}</p>
);

const About = () => {
  return (
    <section id="about" className="py-24 px-6 sm:px-12 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <SectionLabel>Who I Am</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white mb-4">About Me</h2>
          <div className="w-12 h-1 bg-gradient-sky rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Summary */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="pro-card p-8 md:p-10 h-full">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-8 shadow-inner shadow-sky-500/20">
              <UserCheck className="text-sky-400" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white font-outfit mb-5">Professional Summary</h3>
            <p className="text-slate-400 leading-relaxed text-base">
              Full-stack software developer with hands-on experience building production-grade MERN stack applications featuring REST APIs, JWT authentication, and real-time data processing. Demonstrated leadership as a hackathon finalist and team lead. Strong foundation in Data Structures and Algorithms (DSA) and scalable system design.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-slate-300 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <MapPin size={16} className="text-sky-400" /> Sangli, Maharashtra, India
            </div>
          </motion.div>

          {/* Education */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="pro-card p-8 md:p-10 h-full">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-8 shadow-inner shadow-blue-500/20">
              <GraduationCap className="text-blue-400" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white font-outfit mb-8">Education</h3>

            <div className="space-y-8 relative pl-6 border-l-2 border-white/10" style={{ borderImage: 'linear-gradient(to bottom, #38bdf8, #3b82f6) 1' }}>
              {[
                { degree: 'B.Tech – CSE', school: 'Sanjay Ghodawat University', year: '2023 – 2027', score: 'CGPA 8.6' },
                { degree: '12th – HSC', school: 'Vidyamandir Jr. College', year: '2021 – 2023', score: '74%' },
                { degree: '10th – CBSE', school: 'Venkateshwar Public School', year: '2020 – 2021', score: '86%' },
              ].map((edu, i) => (
                <motion.div key={i} whileHover={{ x: 5 }} className="relative transition-transform">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-gradient-sky shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                  <h4 className="text-lg font-bold text-white font-outfit">{edu.degree}</h4>
                  <p className="text-slate-400 text-sm mt-1 mb-3">{edu.school}</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="flex items-center gap-1.5 text-xs text-slate-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                      <Calendar size={12} /> {edu.year}
                    </span>
                    <span className="text-xs text-sky-100 bg-gradient-sky px-3 py-1.5 rounded-full font-bold shadow-md shadow-sky-500/20">
                      {edu.score}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
