import React from 'react';

const items = [
    { id: 1, title: 'VELOCITY', img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2670&auto=format&fit=crop', span: 'md:col-span-2 md:row-span-2' },
    { id: 2, title: 'PRECISION', img: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2670&auto=format&fit=crop', span: 'md:col-span-1 md:row-span-1' },
    { id: 3, title: 'CONTROL', img: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2670&auto=format&fit=crop', span: 'md:col-span-1 md:row-span-1' },
    { id: 4, title: 'AESTHETIC', img: 'https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=2670&auto=format&fit=crop', span: 'md:col-span-2 md:row-span-1' },
];

const Gallery: React.FC = () => {
  return (
    <section id="collection" className="bg-deep-black py-20 px-4">
        <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
            {items.map((item) => (
                <div key={item.id} className={`relative group overflow-hidden ${item.span}`}>
                    <div className="absolute inset-0 bg-gray-900 animate-pulse"></div>
                    <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                    
                    <div className="absolute bottom-6 left-6 z-10 mix-blend-difference">
                        <h3 className="font-display text-4xl font-bold text-white translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            {item.title}
                        </h3>
                    </div>
                    
                    {/* Overlay Line */}
                    <div className="absolute top-0 left-0 w-full h-full border border-white/0 group-hover:border-white/10 transition-all duration-500 scale-95 group-hover:scale-100"></div>
                </div>
            ))}
        </div>
    </section>
  );
};

export default Gallery;