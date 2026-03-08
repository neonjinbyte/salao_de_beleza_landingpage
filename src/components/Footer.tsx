import { Instagram, Phone, MessageCircle, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-2xl font-semibold mb-4">
              Bella<span className="text-salon-gold">Studio</span>
            </h3>
            <p className="text-primary-foreground/60 font-body text-sm leading-relaxed">
              Seu espaço de beleza e autocuidado. Transformando vidas através da arte da beleza desde 2014.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Horários</h4>
            <div className="space-y-2 text-primary-foreground/60 font-body text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-salon-gold" />
                <span>Seg-Sex: 09:00 - 19:00</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-salon-gold" />
                <span>Sábado: 09:00 - 17:00</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-salon-gold" />
                <span>Domingo: Fechado</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-primary-foreground/60 font-body text-sm">
              <a href="tel:+551134567890" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4 text-salon-gold" />
                (11) 3456-7890
              </a>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <MessageCircle className="w-4 h-4 text-salon-gold" />
                (11) 99999-9999
              </a>
              <a href="https://instagram.com/bellastudio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Instagram className="w-4 h-4 text-salon-gold" />
                @bellastudio
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-salon-gold shrink-0 mt-0.5" />
                <span>Rua da Beleza, 123 - Jardins, São Paulo - SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/40 font-body text-sm">
            © {new Date().getFullYear()} Bella Studio. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
