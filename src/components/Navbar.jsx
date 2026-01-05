import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
      <div className="glass-ember py-4 px-10 flex justify-between items-center border border-white/5 shadow-2xl">
        <h1 className="text-ember font-bold tracking-tighter text-xl uppercase italic">
          Arin <span className="text-white"> Kulkarni</span>
        </h1>
        <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.3em]">
          <a href="#hero" className="text-slate-400 hover:text-ember transition-all">Home</a>
          <a href="#skills" className="text-slate-400 hover:text-ember transition-all">Skills</a>
          <a href="#projects" className="text-slate-400 hover:text-ember transition-all">Projects</a>
          <a href="#contact" className="text-slate-400 hover:text-ember transition-all">Contact</a>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-ember rounded-full animate-pulse shadow-[0_0_10px_#F59E0B]"></div>
          <span className="text-[9px] text-ember font-black tracking-widest uppercase">Secured</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;