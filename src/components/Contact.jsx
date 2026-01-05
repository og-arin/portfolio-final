import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-40 text-center">
      <div className="glass-ember max-w-2xl mx-auto p-12 inline-block border border-white/5 shadow-2xl">
        <h2 className="text-white text-3xl font-bold mb-8 tracking-tighter italic">Connect  with  Me</h2>
        <div className="flex justify-center gap-14 mb-10 text-ember">
          <a href="mailto:arink47200003@gmail.com" className="hover:scale-125 hover:text-white transition-all"><Mail size={32}/></a>
          <a href="https://github.com/theguyinblackhoodie" className="hover:scale-125 hover:text-white transition-all"><Github size={32}/></a>
          <a href="https://www.linkedin.com/in/arin-kulkarni-30b981317" className="hover:scale-125 hover:text-white transition-all"><Linkedin size={32}/></a>
        </div>
        <p className="text-[9px] text-slate-600 tracking-[0.5em] uppercase">Status: Online // Connection Encrypted</p>
      </div>
    </section>
  );
};

export default Contact;