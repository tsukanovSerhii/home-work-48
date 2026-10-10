import React, { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Дякуємо, ${formData.name}! Ми зв'яжемося з вами за адресою ${formData.email}.`);
  };

  return (
    <section className="w-full max-w-xl mx-auto px-4 py-16">
      <form 
        onSubmit={handleSubmit}
        className="flex flex-col items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-3">Готові розпочати?</h2>
          <p className="text-gray-400 text-sm">
            Залиште свої контакти і наша команда зв'яжеться з вами найближчим часом.
          </p>
        </div>
        
        <div className="w-full flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Ваше ім'я</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              placeholder="Іван Іваненко"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Ваш Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              placeholder="ivan@example.com"
            />
          </div>
        </div>
        
        <button 
          type="submit" 
          className="mt-8 w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-lg hover:opacity-90 transition-all shadow-[0_10px_30px_rgba(99,102,241,0.4)] hover:shadow-[0_15px_40px_rgba(99,102,241,0.6)] hover:-translate-y-1"
        >
          Відправити запит
        </button>
      </form>
    </section>
  );
}
