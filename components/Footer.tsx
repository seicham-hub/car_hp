import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-neon-volt text-deep-black py-20 px-6 relative overflow-hidden">
      <div className="max-w-[90%] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
                <h3 className="font-display text-5xl md:text-7xl font-bold leading-none mb-6">
                    LET'S BREAK<br/>THE RULES.
                </h3>
                <a href="mailto:hello@noir.com" className="inline-block border-b-2 border-black text-xl font-mono hover:pb-2 transition-all">
                    HELLO@NOIR.COM
                </a>
            </div>
            <div className="flex flex-col justify-between h-full">
                <div className="flex space-x-8 text-sm font-bold uppercase tracking-widest">
                    <a href="#" className="hover:underline">Instagram</a>
                    <a href="#" className="hover:underline">Twitter</a>
                    <a href="#" className="hover:underline">LinkedIn</a>
                </div>
                <p className="mt-12 text-xs font-mono opacity-60">
                    © 2024 NOIR LUXURY GROUP. <br/> ALL RIGHTS RESERVED.
                </p>
            </div>
        </div>
        
        <div className="mt-32 border-t border-black pt-4 flex justify-between items-end">
             <h1 className="font-display text-[12vw] leading-none font-bold opacity-10 select-none pointer-events-none">
                NOIR
            </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;