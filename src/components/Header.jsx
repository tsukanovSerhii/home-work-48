import React from 'react';

export default function Header() {
  return (
    <header className="w-full flex justify-center pt-6 px-4 sticky top-0 z-50">
      <div className="w-full max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-between px-6 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <div className="text-xl font-bold tracking-wide">
          <span className="text-indigo-400">Neo</span>Space
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Про нас</a>
          <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Послуги</a>
        </nav>
        <button className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/30">
          Увійти
        </button>
      </div>
    </header>
  );
}
