import React from 'react';

const Projects = () => {
  const projs = [
    { 
      title: "Omni-Recon", 
      desc: "A comprehensive reconnaissance framework designed to automate the initial stages of target discovery and information gathering.", 
      tag: "RECON / OSINT",
      link: "https://github.com/og-arin/omni-recon" 
    },
    { 
      title: "Nmap Basics", 
      desc: "An essential guide to network discovery and security auditing using Nmap to identify active hosts and open ports.", 
      tag: "NETWORK SECURITY",
      link: "https://github.com/og-arin/nmap-writeup" 
    },
    { 
      title: "Campus Connect", 
      desc: "A centralized student portal designed to streamline campus communication, resource management, and academic tracking.", 
      tag: "WEB APP / PORTAL",
      link: "https://github.com/og-arin/campus-connect-portal" 
    }
  ];

  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <h2 className="text-md font-black tracking-[0.5em] uppercase mb-16 text-center text-ember">
        Project_log
      </h2>
      <div className="grid md:grid-cols-2 gap-8 items-stretch justify-center">
        {projs.map((p, i) => (
          <div 
            key={i} 
            onClick={() => window.open(p.link, "_blank", "noopener,noreferrer")}
            className={`glass-ember p-12 group cursor-pointer hover:bg-ember/[0.05] transition-all border border-white/5 relative 
              ${i === 2 ? 'md:col-span-2 md:max-w-[50%] md:mx-auto w-full' : ''}`}
          >
            <span className="text-ember text-[9px] font-bold tracking-widest">{p.tag}</span>
            <h3 className="text-3xl font-bold text-white mt-4 mb-4 uppercase group-hover:text-ember transition-colors">
              {p.title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">{p.desc}</p>
            
            <div className="absolute top-8 right-8 text-ember opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>

            <div className="w-12 h-0.5 bg-ember/30 group-hover:w-full transition-all duration-700" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
