
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-burger-dark mb-4">
            ONDE <span className="text-burger">ESTAMOS</span>
          </h2>
          <p className="text-burger-text/80 max-w-2xl mx-auto">
            Visite nossa hamburgueria e desfrute de uma experiência gastronômica única em um ambiente aconchegante.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-lg h-[400px] md:h-[500px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.3566603697485!2d-43.18050095677392!3d-22.906395421570864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f58a6a00a9d%3A0x3f251d85272f76f7!2sCentro%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1sen!2sbr!4v1712683627058!5m2!1sen!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do restaurante"
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Info */}
          <div className="bg-burger-background p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-display font-bold text-burger-dark mb-6">Informações</h3>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-burger rounded-full p-3 text-white h-min">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-burger-dark mb-1">Endereço</h4>
                  <p className="text-burger-text/80">Av. Rio Branco, 156</p>
                  <p className="text-burger-text/80">Centro - Rio de Janeiro, RJ</p>
                  <p className="text-burger-text/80">CEP: 20040-901</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-burger rounded-full p-3 text-white h-min">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-burger-dark mb-1">Horário de Funcionamento</h4>
                  <p className="text-burger-text/80">Segunda a Sexta: 11h às 23h</p>
                  <p className="text-burger-text/80">Sábado e Domingo: 12h às 00h</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-burger rounded-full p-3 text-white h-min">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-burger-dark mb-1">Contato</h4>
                  <p className="text-burger-text/80">Telefone: (21) 3333-4444</p>
                  <p className="text-burger-text/80">Email: contato@burgerverse.com.br</p>
                </div>
              </div>

              <div className="pt-4">
                <a 
                  href="https://wa.me/5521999999999?text=Olá,%20gostaria%20de%20fazer%20um%20pedido!" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
                    Atendimento WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
