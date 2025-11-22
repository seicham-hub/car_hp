import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 mix-blend-difference text-white ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-[95%] mx-auto flex justify-between items-center">
        <div className="font-display font-bold text-3xl tracking-tighter select-none cursor-pointer group">
            NOIR<span className="text-neon-volt">.</span>
        </div>

        <div className="hidden md:flex space-x-12 font-sans text-xs font-bold tracking-[0.2em] uppercase">
            {['Philosophy', 'Collection', 'Innovation', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="relative overflow-hidden group pb-1">
                    <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-[150%] block">{item}</span>
                    <span className="absolute top-0 left-0 z-10 text-neon-volt transition-transform duration-300 translate-y-[150%] group-hover:translate-y-0 block">{item}</span>
                </a>
            ))}
        </div>

        <button className="md:hidden text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;