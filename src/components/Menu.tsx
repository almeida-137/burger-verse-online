
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

// Menu data
const menuData = {
  burgers: [
    {
      id: 1,
      name: "Classic Burger",
      description: "Hambúrguer de carne bovina, queijo cheddar, alface, tomate, cebola e molho especial.",
      price: "R$ 29,90",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500",
      isPopular: true
    },
    {
      id: 2,
      name: "Cheeseburger Duplo",
      description: "Dois hambúrgueres, queijo duplo, bacon crocante e molho especial.",
      price: "R$ 34,90",
      image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=500",
      isPopular: true
    },
    {
      id: 3,
      name: "Burger Vegetariano",
      description: "Hambúrguer de grão de bico com vegetais grelhados, queijo e molho de ervas.",
      price: "R$ 27,90",
      image: "https://images.unsplash.com/photo-1550317138-10000687a72b?q=80&w=500",
      isVegetarian: true
    },
    {
      id: 4,
      name: "BBQ Bacon",
      description: "Hambúrguer com bacon, cebola caramelizada, queijo e molho BBQ.",
      price: "R$ 32,90",
      image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?q=80&w=500"
    },
    {
      id: 5,
      name: "Cheese Salada",
      description: "Hambúrguer com queijo derretido, alface, tomate e cebola roxa.",
      price: "R$ 26,90",
      image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=500"
    },
    {
      id: 6,
      name: "Burger Especial",
      description: "Hambúrguer gourmet com blend especial da casa, queijo brie e geleia de bacon.",
      price: "R$ 39,90",
      image: "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?q=80&w=500",
      isPopular: true
    },
  ],
  sides: [
    {
      id: 7,
      name: "Batata Frita",
      description: "Porção de batatas fritas crocantes.",
      price: "R$ 15,90",
      image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=500"
    },
    {
      id: 8,
      name: "Anéis de Cebola",
      description: "Anéis de cebola empanados e fritos.",
      price: "R$ 18,90",
      image: "https://images.unsplash.com/photo-1639024471283-53a9c21e1f48?q=80&w=500"
    },
    {
      id: 9,
      name: "Nuggets",
      description: "Nuggets de frango com molho especial.",
      price: "R$ 19,90",
      image: "https://images.unsplash.com/photo-1562967915-6ba607ff7d05?q=80&w=500"
    },
  ],
  drinks: [
    {
      id: 10,
      name: "Refrigerante",
      description: "Refrigerante à sua escolha (350ml).",
      price: "R$ 6,90",
      image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=500"
    },
    {
      id: 11,
      name: "Milk-shake",
      description: "Milk-shake cremoso nos sabores chocolate, baunilha ou morango.",
      price: "R$ 14,90",
      image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=500",
      isPopular: true
    },
    {
      id: 12,
      name: "Suco Natural",
      description: "Suco natural de frutas da estação.",
      price: "R$ 9,90",
      image: "https://images.unsplash.com/photo-1588929473475-d16ea2d4a28b?q=80&w=500"
    },
  ],
  desserts: [
    {
      id: 13,
      name: "Brownie com Sorvete",
      description: "Brownie quente com sorvete de baunilha e calda de chocolate.",
      price: "R$ 16,90",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=500",
      isPopular: true
    },
    {
      id: 14,
      name: "Cheesecake",
      description: "Cheesecake com calda de frutas vermelhas.",
      price: "R$ 15,90",
      image: "https://images.unsplash.com/photo-1533134242443-d4fd258fdff1?q=80&w=500"
    },
  ]
};

const MenuItem = ({ item }: { item: any }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow menu-item-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-burger-dark">{item.name}</h3>
          <span className="font-display font-bold text-burger">{item.price}</span>
        </div>
        <p className="text-burger-text/70 text-sm mb-4">{item.description}</p>
        <div className="flex justify-between items-center">
          <div className="space-x-2">
            {item.isPopular && (
              <Badge className="bg-burger text-white">Popular</Badge>
            )}
            {item.isVegetarian && (
              <Badge className="bg-green-600 text-white">Vegetariano</Badge>
            )}
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-burger hover:text-white hover:bg-burger"
          >
            + Adicionar
          </Button>
        </div>
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-burger-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-burger text-white mb-3">Nosso Menu</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-burger-dark mb-4">
            <span className="text-burger">CARDÁPIO</span> DELICIOSO
          </h2>
          <p className="text-burger-text/80 max-w-2xl mx-auto">
            Nosso cardápio é preparado com ingredientes selecionados e receitas exclusivas, 
            proporcionando uma experiência gastronômica única.
          </p>
        </div>

        <Tabs defaultValue="burgers" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white/50 backdrop-blur-sm">
              <TabsTrigger value="burgers" className="text-sm md:text-base">Hambúrgueres</TabsTrigger>
              <TabsTrigger value="sides" className="text-sm md:text-base">Acompanhamentos</TabsTrigger>
              <TabsTrigger value="drinks" className="text-sm md:text-base">Bebidas</TabsTrigger>
              <TabsTrigger value="desserts" className="text-sm md:text-base">Sobremesas</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="burgers" className="mt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuData.burgers.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="sides" className="mt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuData.sides.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="drinks" className="mt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuData.drinks.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="desserts" className="mt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuData.desserts.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Menu;
