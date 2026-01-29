import React from 'react';

const Skills = () => {
  const stack = ["Python", "HTML/CSS","SQL", "Javascript", "Linux", "Networking", "Bash", "OSINT"];
  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto px-6">
      <h2 className="text-center text-white/10 text-9xl font-black mb-[-40px] tracking-tighter uppercase select-none">Expertise</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
        {stack.map((s, i) => (
          <div key={i} className="glass-ember p-8 text-center border border-white/5 hover:border-ember/30 transition-all group">
            <p className="text-ember font-bold text-[10px] tracking-widest group-hover:text-white uppercase">{s}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
