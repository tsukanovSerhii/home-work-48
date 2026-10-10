import React from 'react';
import ItemCard from './ItemCard';

export default function Features() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">Що ми пропонуємо</h2>
        <p className="text-gray-400">Передові рішення, які допомагають бізнесу зростати швидше</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
        <ItemCard 
          title="Креативний Дизайн" 
          description="Неповторні інтерфейси, які захоплюють з першого погляду та залишають незабутнє враження."
          image="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
        />
        <ItemCard 
          title="Швидка Розробка" 
          description="Оптимізований код та сучасний стек технологій для максимальної продуктивності вашого продукту."
          image="https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=800&q=80"
        />
      </div>
    </section>
  );
}
