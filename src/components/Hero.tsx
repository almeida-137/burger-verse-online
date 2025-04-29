
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-20 flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-burger-background opacity-90 z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%200h20v20H0V0zm10%2010a2%202%200%201%200%200-4%202%202%200%200%200%200%204z%22%20fill%3D%22%23F97316%22%20fill-opacity%3D%22.05%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 md:pr-12 space-y-6 text-center md:text-left">
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-burger-dark">
              SABORES <span className="text-burger">EXTRAORDINÁRIOS</span> EM CADA MORDIDA
            </h1>
            <p className="text-lg md:text-xl text-burger-text/80 max-w-lg">
              Experimente os melhores hambúrgueres artesanais da cidade, com ingredientes frescos e combinações únicas que vão surpreender seu paladar.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button className="bg-burger hover:bg-burger-hover text-white font-medium text-lg px-8 py-6">
                Ver Cardápio
              </Button>
              <Button variant="outline" className="border-burger text-burger hover:bg-burger hover:text-white font-medium text-lg px-8 py-6">
                Delivery
              </Button>
            </div>
            
            {/* Special Offer Badge */}
            <div className="inline-block mt-8 bg-burger/10 border border-burger/20 rounded-full px-6 py-3">
              <p className="text-burger-dark font-medium flex items-center">
                <span className="bg-burger text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  🔥
                </span>
                Promoção: 10% de desconto na primeira compra online!
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 mt-12 md:mt-0 relative">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-burger/20 absolute -top-5 -left-5 animate-pulse-gentle"></div>
              <img 
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1500" 
                alt="Hambúrguer Artesanal" 
                className="relative z-10 rounded-3xl shadow-2xl animate-float max-w-full"
              />
              <div className="hidden md:block absolute -bottom-10 -right-10 bg-white p-4 rounded-2xl shadow-xl z-20 rotate-6 animate-float">
                <div className="flex items-center gap-3">
                  <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">✓</div>
                  <p className="font-medium text-burger-dark">100% ingredientes selecionados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
