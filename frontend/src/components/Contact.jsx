import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MessageSquare } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import axios from 'axios';
import { SiLeetcode } from "react-icons/si";

const SOCIALS = [
  { icon: FaGithub, href: 'https://github.com/Irfan-Mulla-05', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/irfan-mulla-ikm', label: 'LinkedIn' },
  { icon: SiLeetcode, href: 'https://leetcode.com/u/irfan_5/', label: 'LeetCode' },
  { icon: FaInstagram, href: 'https://www.instagram.com/ikm_7007/?__pwa=1', label: 'Instagram' },
  { icon: FaWhatsapp, href: 'https://wa.me/918767865949', label: 'WhatsApp' },
];

const Input = ({ label, ...props }) => (
  <div className="space-y-2">
    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">{label}</label>
    {props.rows ? (
      <textarea {...props} className="w-full px-5 py-4 bg-black/20 border border-white/10 rounded-xl text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/30 transition-all resize-none shadow-inner" />
    ) : (
      <input {...props} className="w-full px-5 py-4 bg-black/20 border border-white/10 rounded-xl text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/30 transition-all shadow-inner" />
    )}
  </div>
);

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setStatus('Sending...');
    try {
      const { data } = await axios.post('https://irfan-portfolio-mrvf.onrender.com/api/contact', form);
      setStatus(data.message || 'Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      const msg = err.response?.data?.error || 'Failed to send. Please try again.';
      setStatus(msg);
    }
    setLoading(false);
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-12 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky-500/5 blur-[150px] rounded-full z-[-1]" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <p className="text-sky-400 font-semibold tracking-widest text-xs uppercase mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white mb-4">Contact</h2>
          <div className="w-12 h-1 bg-gradient-sky rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left panel */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-6">
            <div className="pro-card p-8 group hover:border-sky-500/30">
              <div className="w-12 h-12 rounded-xl bg-gradient-sky p-[1px] mb-8">
                <div className="w-full h-full bg-[#0f172a] rounded-xl flex items-center justify-center group-hover:bg-transparent transition-colors">
                  <MessageSquare className="text-sky-400 group-hover:text-white transition-colors" size={20} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white font-outfit mb-3">Let's Work Together</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Open to full-time roles, freelance projects, and hackathon collaborations. I'd love to hear from you.
              </p>
              <a href="mailto:irfankmulla05@gmail.com" className="inline-flex items-center gap-3 text-sm font-semibold text-white bg-white/5 py-3 px-5 rounded-full border border-white/10 hover:border-sky-500/50 hover:bg-sky-500/10 transition-all">
                <Mail size={16} className="text-sky-400" />
                irfankmulla05@gmail.com
              </a>
            </div>

            <div className="pro-card p-6 flex flex-col items-center sm:items-start">
              <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-4">Find me on</p>
              <div className="flex gap-4">
                {SOCIALS.map((s, i) => (
                  <motion.a 
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    key={i} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                    className="w-12 h-12 rounded-xl border border-white/10 bg-black/20 text-slate-400 hover:text-white hover:border-sky-500/40 hover:bg-sky-500/20 flex items-center justify-center transition-all shadow-inner"
                  >
                    <s.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="pro-card p-8 md:p-10 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Input label="Name" type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Irfan Mulla" />
                <Input label="Email" type="email" name="email" required value={form.email} onChange={handleChange} placeholder="irfankmulla05@gmail.com" />
              </div>
              <Input label="Message" name="message" required rows="5" value={form.message} onChange={handleChange} placeholder="Tell me about your project or opportunity…" />

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-sky text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all shadow-lg shadow-sky-500/25 disabled:opacity-60"
              >
                <Send size={18} /> {loading ? 'Sending…' : 'Send Message'}
              </motion.button>

              {status && (
                <p className={`text-center text-sm font-semibold pt-2 ${status.includes('success') || status.includes('Sending') ? 'text-sky-400' : 'text-red-400'}`}>
                  {status}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
