import React from 'react';

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center text-center pt-24 pb-16 px-4">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
        Майбутнє Вже Тут
      </h1>
      <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-light mb-10 leading-relaxed">
        Створюємо неперевершені цифрові рішення. Бездоганний дизайн, сучасні технології та абсолютна увага до деталей, які перетворюють ідеї на реальність.
      </p>
      <button className="px-8 py-3.5 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transform hover:-translate-y-1">
        Розпочати проект
      </button>
    </section>
  );
}
