import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
        if (titleRef.current) {
            const scrollY = window.scrollY;
            titleRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
            titleRef.current.style.opacity = `${1 - scrollY / 800}`;
        }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-deep-black">
      {/* Background Visual */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-black/40 z-10"></div>
         <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay z-10 pointer-events-none"></div>
         <img 
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2560&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-60 scale-105 animate-pulse-slow"
         />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <h1 ref={titleRef} className="font-display text-[15vw] leading-[0.8] font-bold uppercase text-white mix-blend-overlay tracking-tight">
          Beyond<br />
          <span className="text-transparent text-stroke block hover:text-neon-volt transition-colors duration-700 cursor-none">Limits</span>
        </h1>
      </div>

      {/* Scroller */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 mix-blend-difference">
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white">Scroll</span>
        <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-neon-volt animate-[slideDown_1.5s_infinite]"></div>
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;