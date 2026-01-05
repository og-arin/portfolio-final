import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Ember Glow */}
      <div className="absolute top-[15%] right-[10%] w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-[130px]" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-ember p-16 text-center max-w-4xl mx-4 border border-white/5"
      >
        <span className="text-ember text-[10px] font-black tracking-[0.5em] uppercase py-2 px-6 border border-ember/20 rounded-full bg-ember/5 mb-8 inline-block">
          Software Developer | Cybersecurity Amateur | Video Editor
        </span>
        <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tighter mb-6">
          ARIN KULKARNI<span className="text-ember">.</span>
        </h1>
        <p className="text-slate-400 text-lg font-light leading-relaxed max-w-2xl mx-auto mb-12">
          <span className="text-ember font-bold">Full-Stack Developer</span> & <span className="text-ember font-bold">Security Researcher</span> specialized in <span className="text-ember font-bold">Python Automation</span> and <span className="text-ember font-bold">Network Reconnaissance</span>. Combining technical depth with a creative edge to build and document secure digital architectures.
        </p>
        <div className="flex gap-6 justify-center">
          <a href="https://github.com/theguyinblackhoodie" target="_blank" className="px-10 py-4 bg-ember text-black rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 shadow-lg shadow-ember/20 transition-all">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/arin-kulkarni-30b981317" target="_blank" className="px-10 py-4 border border-ember/40 text-ember rounded-full font-black text-xs uppercase tracking-widest hover:bg-ember/5 transition-all">
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;  