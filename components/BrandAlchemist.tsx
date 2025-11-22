import React, { useState } from 'react';
import { generateBrandPhilosophy } from '../services/geminiService';

const BrandAlchemist: React.FC = () => {
  const [input, setInput] = useState('');
  const [manifesto, setManifesto] = useState('THE VOID AWAITS YOUR COMMAND.');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setLoading(true);
    // Simulate a "digital noise" effect before showing result
    setManifesto("ANALYZING PATTERNS...");
    
    try {
        const result = await generateBrandPhilosophy(input);
        setManifesto(result);
    } catch (e) {
        setManifesto("SYSTEM OVERLOAD.");
    } finally {
        setLoading(false);
    }
  };

  return (
    <section id="innovation" className="py-32 px-6 md:px-20 bg-deep-black border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neon-volt/5 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
                <h2 className="font-display text-6xl md:text-8xl font-bold text-white mb-8">
                    DIGITAL <span className="text-neon-volt">ALCHEMY</span>
                </h2>
                <p className="font-sans text-white/60 text-lg leading-relaxed max-w-md mb-12">
                    Harness the neural network. Input your vision, and our AI Architect will construct your reality. This is not code; it is poetry.
                </p>

                <div className="relative group">
                    <input 
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="ENTER KEYWORDS (E.G., SPEED, SILENCE, GOLD)"
                        className="w-full bg-transparent border-b border-white/30 py-4 text-xl text-white font-sans tracking-widest uppercase focus:outline-none focus:border-neon-volt transition-colors placeholder:text-white/20"
                    />
                    <button 
                        onClick={handleGenerate}
                        disabled={loading}
                        className="absolute right-0 bottom-4 text-neon-volt font-bold tracking-widest hover:text-white transition-colors disabled:opacity-50"
                    >
                        {loading ? 'PROCESSING' : 'GENERATE'}
                    </button>
                </div>
            </div>

            <div className="relative min-h-[400px] flex items-center justify-center p-10 border border-white/5 bg-white/[0.02] backdrop-blur-sm">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="relative z-10">
                    <p className="font-display text-3xl md:text-5xl leading-tight text-white uppercase text-center animate-pulse">
                        "{manifesto}"
                    </p>
                </div>
                
                {/* Decorative Corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-neon-volt"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-neon-volt"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-neon-volt"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-neon-volt"></div>
            </div>
        </div>
    </section>
  );
};

export default BrandAlchemist;