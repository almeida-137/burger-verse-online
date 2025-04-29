
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Truck, ShoppingCart, Utensils } from 'lucide-react';

const DeliveryCard = ({ title, description, icon, buttonText, buttonLink, logoSrc }: any) => {
  return (
    <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-burger/10 text-burger mb-6 mx-auto">
          {icon}
        </div>
        
        {logoSrc && (
          <div className="flex justify-center mb-5">
            <img 
              src={logoSrc} 
              alt={title} 
              className="h-8 object-contain" 
            />
          </div>
        )}
        
        <h3 className="text-xl font-bold text-burger-dark text-center mb-4">{title}</h3>
        <p className="text-burger-text/80 text-center mb-6">{description}</p>
        
        <Button 
          asChild 
          className="w-full bg-burger hover:bg-burger-hover text-white font-medium"
        >
          <a href={buttonLink} target="_blank" rel="noopener noreferrer">
            {buttonText}
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

const Delivery = () => {
  const deliveryOptions = [
    {
      title: "Delivery Próprio",
      description: "Peça diretamente conosco e receba em sua casa com rapidez e qualidade.",
      icon: <Truck size={32} />,
      buttonText: "Pedir Agora",
      buttonLink: "https://wa.me/5521999999999?text=Olá,%20gostaria%20de%20fazer%20um%20pedido!"
    },
    {
      title: "iFood",
      description: "Encontre nossos produtos no iFood e aproveite as promoções exclusivas.",
      icon: <ShoppingCart size={32} />,
      buttonText: "Pedir no iFood",
      buttonLink: "https://www.ifood.com.br",
      logoSrc: "https://seeklogo.com/images/I/ifood-logo-F56AD28B29-seeklogo.com.png"
    },
    {
      title: "Retirada no Local",
      description: "Faça seu pedido e retire em nossa loja sem precisar enfrentar filas.",
      icon: <Utensils size={32} />,
      buttonText: "Fazer Pedido",
      buttonLink: "https://wa.me/5521999999999?text=Olá,%20gostaria%20de%20fazer%20um%20pedido%20para%20retirar%20na%20loja!"
    }
  ];

  return (
    <section id="delivery" className="py-20 bg-gradient-to-b from-burger-background to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-burger-dark mb-4">
            PEÇA SEU <span className="text-burger">DELIVERY</span>
          </h2>
          <p className="text-burger-text/80 max-w-2xl mx-auto">
            Entregamos em toda a cidade! Escolha a opção de delivery que preferir e receba nossos hambúrgueres artesanais fresquinhos em sua casa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deliveryOptions.map((option, index) => (
            <DeliveryCard key={index} {...option} />
          ))}
        </div>
        
        <div className="mt-16 bg-burger/10 rounded-2xl p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-burger-dark mb-4">Promoção de Delivery</h3>
              <p className="text-burger-text/80 mb-6">
                Ganhe <span className="font-semibold text-burger">10% de desconto</span> na sua primeira compra pelo nosso aplicativo ou site.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="currentColor">
                    <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-2.86-1.21-6.08-1.21-8.94 0L5.65 5.67c-.19-.29-.58-.38-.87-.2-.28.18-.37.54-.22.83L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22C22.72 14.44 20.7 11.25 17.6 9.48zM7 15.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"></path>
                  </svg>
                  Android
                </Button>
                <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"></path>
                  </svg>
                  iOS
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1626201850116-456e47a5d3c5?q=80&w=800" 
                alt="Delivery App" 
                className="max-w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
