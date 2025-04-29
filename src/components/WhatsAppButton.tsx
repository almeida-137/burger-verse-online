
import React from 'react';
import { WhatsApp } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/5521999999999?text=Olá,%20gostaria%20de%20fazer%20um%20pedido!" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Contato via WhatsApp"
    >
      <WhatsApp size={24} />
    </a>
  );
};

export default WhatsAppButton;
