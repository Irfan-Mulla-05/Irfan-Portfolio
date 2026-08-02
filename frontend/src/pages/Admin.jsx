import { useState, useEffect } from 'react';
import axios from 'axios';
import { Users, UserX, BarChart, Lock, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');
  const [stats, setStats] = useState({
    total: 0,
    skippedCount: 0,
    roleStats: {},
    visitors: []
  });
  const [loading, setLoading] = useState(true);

  // Admin PIN - keep it simple for the portfolio
  const ADMIN_PIN = '@dmin123'; 

  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode === ADMIN_PIN) {
      setIsAuthenticated(true);
      fetchStats();
    } else {
      setError('Incorrect passcode');
      setPasscode('');
    }
  };

  const fetchStats = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:5000/api/visitor');
      setStats(res.data);
    } catch (err) {
      console.error("Error fetching stats", err);
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/15 blur-[100px] rounded-full pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-sm pro-card p-10 relative z-10"
        >
          <div className="w-14 h-14 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-6 mx-auto shadow-inner shadow-sky-500/20">
            <Lock className="text-sky-400" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-center text-white font-outfit mb-2">Admin Access</h2>
          <p className="text-slate-400 text-center text-sm mb-8">Please enter your passcode to view visitor analytics.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder="Enter PIN"
              className="w-full px-5 py-4 bg-black/30 border border-white/10 rounded-xl text-center text-white text-lg tracking-widest focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/30 transition-all shadow-inner"
              autoFocus
            />
            {error && <p className="text-red-400 text-sm text-center font-medium">{error}</p>}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-sky text-white font-bold text-sm tracking-wide transition-all shadow-lg shadow-sky-500/25 hover:scale-[1.02] active:scale-95"
            >
              Unlock Dashboard
            </button>
          </form>
          <div className="mt-6 text-center">
             <a href="/" className="text-sm text-slate-500 hover:text-sky-400 transition-colors">← Back to Portfolio</a>
          </div>
        </motion.div>
      </div>
    );
  }

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-sky-400 text-lg font-medium tracking-wider">Loading Analytics...</div>;
  }

  return (
    <div className="min-h-screen p-6 sm:p-12 text-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        <header className="border-b border-white/10 pb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold font-outfit text-white flex items-center gap-3">
              Visitor <span className="text-gradient-sky">Analytics</span> <ShieldCheck className="text-sky-400 mt-1" size={28}/>
            </h1>
            <p className="text-slate-400 mt-2 font-medium">Real-time portfolio tracking dashboard</p>
          </div>
          <a href="/" className="px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 text-sm font-semibold transition-all shadow-sm">
            Exit Admin
          </a>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="pro-card p-8 flex items-center gap-6">
            <div className="p-4 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 shadow-inner">
              <Users size={32} />
            </div>
            <div>
              <p className="text-slate-400 mb-1 text-sm font-semibold uppercase tracking-wider">Total Visitors</p>
              <h2 className="text-4xl font-bold text-white font-outfit">{stats.total}</h2>
            </div>
          </div>

          <div className="pro-card p-8 flex items-center gap-6">
            <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shadow-inner">
              <BarChart size={32} />
            </div>
            <div>
              <p className="text-slate-400 mb-1 text-sm font-semibold uppercase tracking-wider">Identified</p>
              <h2 className="text-4xl font-bold text-white font-outfit">{stats.total - stats.skippedCount}</h2>
            </div>
          </div>

          <div className="pro-card p-8 flex items-center gap-6">
            <div className="p-4 rounded-xl bg-slate-500/10 border border-slate-500/20 text-slate-400 shadow-inner">
              <UserX size={32} />
            </div>
            <div>
              <p className="text-slate-400 mb-1 text-sm font-semibold uppercase tracking-wider">Skipped</p>
              <h2 className="text-4xl font-bold text-white font-outfit">{stats.skippedCount}</h2>
            </div>
          </div>
        </div>

        <div className="pro-card overflow-hidden">
          <div className="p-6 border-b border-white/10 bg-black/20">
            <h3 className="text-xl font-bold font-outfit text-white">Role Distribution</h3>
          </div>
          <div className="p-8 bg-[#0a0f1c]/50">
            {Object.keys(stats.roleStats).length === 0 ? (
              <p className="text-slate-500 text-center py-4">No role data available yet.</p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {Object.entries(stats.roleStats).map(([role, count]) => (
                  <div key={role} className="bg-black/40 border border-white/10 rounded-2xl p-6 text-center shadow-inner hover:border-sky-500/30 transition-colors">
                    <h4 className="text-slate-400 text-sm font-bold mb-3 uppercase tracking-wider">{role}</h4>
                    <p className="text-4xl font-bold text-gradient-sky">{count}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="pro-card overflow-hidden">
          <div className="p-6 border-b border-white/10 bg-black/20">
            <h3 className="text-xl font-bold font-outfit text-white">Visitor Log</h3>
          </div>
          <div className="overflow-x-auto bg-[#0a0f1c]/50">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 bg-black/30">
                  <th className="p-5 font-semibold text-sm tracking-wider uppercase">Name</th>
                  <th className="p-5 font-semibold text-sm tracking-wider uppercase">Role</th>
                  <th className="p-5 font-semibold text-sm tracking-wider uppercase">Status</th>
                  <th className="p-5 font-semibold text-sm tracking-wider uppercase">Time</th>
                  <th className="p-5 font-semibold text-sm tracking-wider uppercase">IP Address</th>
                </tr>
              </thead>
              <tbody>
                {stats.visitors.slice().reverse().map((visitor, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-5 font-medium text-slate-200">{visitor.name || <span className="text-slate-600 italic">Anonymous</span>}</td>
                    <td className="p-5">
                      {visitor.role && visitor.role !== 'null' ? (
                        <span className="px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold uppercase tracking-wider border border-sky-500/20">{visitor.role}</span>
                      ) : (
                        <span className="text-slate-600 italic">None</span>
                      )}
                    </td>
                    <td className="p-5">
                      {visitor.skipped ? (
                        <span className="text-slate-400 text-sm flex items-center gap-2 font-medium"><UserX size={15}/> Skipped</span>
                      ) : (
                        <span className="text-sky-400 text-sm flex items-center gap-2 font-medium"><Users size={15}/> Identified</span>
                      )}
                    </td>
                    <td className="p-5 text-slate-400 text-sm">
                      {new Date(visitor.timestamp).toLocaleString()}
                    </td>
                    <td className="p-5 font-mono text-xs text-slate-500">{visitor.ip || 'Unknown'}</td>
                  </tr>
                ))}
                {stats.visitors.length === 0 && (
                  <tr>
                    <td colSpan="5" className="p-8 text-center text-slate-500">No visitors logged yet.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Admin;
