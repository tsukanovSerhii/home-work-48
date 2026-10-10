import React from 'react';
import MainLayout from './layouts/MainLayout';
import Hero from './components/Hero';
import Features from './components/Features';
import Form from './components/Form';

function App() {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <Form />
    </MainLayout>
  );
}

export default App;
