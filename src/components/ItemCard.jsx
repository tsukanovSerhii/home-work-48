import React from 'react';

export default function ItemCard({ title, description, image }) {
  return (
    <div className="group flex flex-col items-center text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-indigo-500/50 hover:shadow-[0_10px_40px_rgba(99,102,241,0.2)]">
      <div className="w-full h-48 md:h-56 rounded-xl overflow-hidden mb-5 relative">
        <div className="absolute inset-0 bg-indigo-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-300 z-10"></div>
        <img src={image} alt={title} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
      </div>
      <div className="px-2 pb-4">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
