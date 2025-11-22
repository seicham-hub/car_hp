import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import BrandAlchemist from './components/BrandAlchemist';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-deep-black min-h-screen w-full selection:bg-neon-volt selection:text-black">
      <Cursor />
      <Navigation />
      
      <main>
        <Hero />
        
        {/* Philosophy Section */}
        <section id="philosophy" className="py-32 md:py-48 px-6 md:px-20 flex flex-col items-center justify-center text-center bg-deep-black">
            <div className="max-w-4xl reveal-on-scroll">
                <h2 className="font-display text-3xl md:text-5xl text-white leading-snug mb-8 uppercase">
                    We do not compete.<br/>
                    <span className="text-gray-500">We dominate the space between</span> <br/>
                    <span className="text-neon-volt">impulse</span> and <span className="text-neon-volt">action.</span>
                </h2>
                <p className="font-sans text-white/50 text-sm md:text-base max-w-lg mx-auto tracking-wide leading-loose">
                    Born from the asphalt, elevated by design. Our mission is to strip away the inessential, leaving only raw performance and striking aesthetics. 
                </p>
            </div>
        </section>

        {/* Infinite Marquee */}
        <div className="bg-neon-volt text-black py-4 overflow-hidden whitespace-nowrap border-y border-black">
            <div className="inline-block animate-marquee">
                <span className="text-4xl font-display font-bold mx-8">SPEED IS LIFE</span>
                <span className="text-4xl font-display font-bold mx-8">///</span>
                <span className="text-4xl font-display font-bold mx-8">DESIGNED FOR CHAOS</span>
                <span className="text-4xl font-display font-bold mx-8">///</span>
                <span className="text-4xl font-display font-bold mx-8">NO COMPROMISE</span>
                <span className="text-4xl font-display font-bold mx-8">///</span>
                <span className="text-4xl font-display font-bold mx-8">SPEED IS LIFE</span>
                <span className="text-4xl font-display font-bold mx-8">///</span>
                <span className="text-4xl font-display font-bold mx-8">DESIGNED FOR CHAOS</span>
                <span className="text-4xl font-display font-bold mx-8">///</span>
                <span className="text-4xl font-display font-bold mx-8">NO COMPROMISE</span>
                 <span className="text-4xl font-display font-bold mx-8">///</span>
            </div>
        </div>

        <Gallery />
        
        <BrandAlchemist />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;