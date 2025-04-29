
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import Location from '@/components/Location';
import Delivery from '@/components/Delivery';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Menu />
      <Location />
      <Delivery />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
