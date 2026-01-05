import React, { useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CursorFirefly = () => {
  const springConfig = { damping: 25, stiffness: 100, mass: 0.8 };
  const fireflyX = useSpring(0, springConfig);
  const fireflyY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      fireflyX.set(e.clientX + 25);
      fireflyY.set(e.clientY + 25);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [fireflyX, fireflyY]);

  return (
    <motion.div
      style={{ translateX: fireflyX, translateY: fireflyY }}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
    >
      {/* ROTATED CONTAINER: Isse poora jugnu thoda tedha dikhega */}
      <div className="relative flex items-center justify-center -rotate-[15deg]">
        
        {/* BIGGER WINGS - 45 Degree Base Angle */}
        {/* Left Wing */}
        <motion.div 
          animate={{ rotate: [-45, -70, -45], scaleX: [1, 1.1, 1] }}
          transition={{ duration: 0.12, repeat: Infinity, ease: "linear" }}
          className="absolute -left-6 bottom-3 w-8 h-4 bg-white/10 rounded-full blur-[0.5px] border border-white/10 origin-right shadow-[0_0_10px_rgba(255,255,255,0.05)]"
          style={{ rotate: "-45deg" }}
        />
        
        {/* Right Wing */}
        <motion.div 
          animate={{ rotate: [45, 70, 45], scaleX: [1, 1.1, 1] }}
          transition={{ duration: 0.12, repeat: Infinity, ease: "linear" }}
          className="absolute -right-6 bottom-3 w-8 h-4 bg-white/10 rounded-full blur-[0.5px] border border-white/10 origin-left shadow-[0_0_10px_rgba(255,255,255,0.05)]"
          style={{ rotate: "30deg" }}
        />

        {/* BODY - Slightly Larger and Rotated */}
        <div className="w-3.5 h-6 bg-[#0a0a0a] rounded-full relative overflow-hidden border border-white/10 shadow-2xl">
          {/* Bioluminescent Tail (Pulsing Light) */}
          <motion.div 
            animate={{ 
              opacity: [0.4, 1, 0.4],
              backgroundColor: ["#92400E", "#F59E0B", "#92400E"] 
            }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 w-full h-3/5"
          />
        </div>

        {/* GLOW LAYERS */}
        <motion.div 
          animate={{ scale: [1, 1.6, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="absolute w-14 h-14 bg-ember/20 rounded-full blur-xl"
        />
        <div className="absolute w-28 h-28 bg-ember/5 rounded-full blur-3xl" />

      </div>
    </motion.div>
  );
};

export default CursorFirefly;