import React from 'react';
import Header from '../components/Header';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-black bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black text-white flex flex-col font-sans selection:bg-indigo-500/30">
      <Header />
      <main className="flex-grow w-full flex flex-col items-center">
        {children}
      </main>
    </div>
  );
}
