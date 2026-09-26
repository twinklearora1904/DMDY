import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/authContextInstance';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Admin Login | DMDY - Growth Marketing Agency';
    if (user) {
      navigate('/admin');
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      navigate('/admin');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please verify your credentials.');
    }
  };

  if (loading) return null;

  return (
    <div className="min-h-screen flex items-center justify-center pt-28 sm:pt-36 pb-12 sm:pb-20 bg-slate-50 font-sans relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-center relative z-10">
        <div className="bg-white p-6 sm:p-12 rounded-2xl sm:rounded-3xl w-full max-w-md border border-slate-200/90 shadow-xl shadow-slate-200/60 relative overflow-hidden">
          
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#00AED6]/10 text-[#00AED6] border border-[#00AED6]/20 uppercase tracking-widest mb-4">
              <Sparkles className="w-3 h-3 text-[#00AED6]" /> Management Console
            </div>

            <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center mx-auto mb-3 text-[#00AED6]">
              <ShieldCheck className="w-6 h-6" />
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Admin <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623]">Portal</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1.5 font-normal">
              Authorized DMDY Personnel Only
            </p>
          </div>
          
          {error && (
            <div className="bg-rose-50 text-rose-700 border border-rose-200 p-3.5 rounded-xl mb-6 text-xs text-center font-semibold">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Work Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@dmdy.in"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50/70 border border-slate-200/90 rounded-xl text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#00AED6] focus:ring-2 focus:ring-[#00AED6]/20 transition-all" 
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50/70 border border-slate-200/90 rounded-xl text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#00AED6] focus:ring-2 focus:ring-[#00AED6]/20 transition-all" 
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full py-3.5 px-6 rounded-xl text-white font-bold text-xs sm:text-sm shadow-xl bg-gradient-to-r from-[#00AED6] via-[#E6007A] to-[#F5A623] hover:opacity-95 flex items-center justify-center gap-2 mt-6 transition-all duration-300"
            >
              Sign In to Dashboard <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-center text-xs text-slate-400 mt-4 font-medium flex items-center justify-center gap-1.5">
              <Lock className="w-3 h-3 text-slate-400" /> 256-bit encrypted secure admin session
            </p>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;
