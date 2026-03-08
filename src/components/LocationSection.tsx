import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="contato" className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-salon-gold uppercase tracking-[0.2em] text-sm font-body mb-3">Onde Estamos</p>
          <h2 className="section-title text-foreground">Localização</h2>
          <div className="gold-line" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden h-[350px] md:h-full min-h-[350px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d-46.6544!3d-23.5616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQxLjgiUyA0NsKwMzknMTUuOCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Bella Studio"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-8"
          >
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-salon-gold-light flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-salon-gold" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Endereço</h3>
                <p className="text-muted-foreground font-body text-sm">
                  Rua da Beleza, 123 - Jardins<br />
                  São Paulo - SP, 01234-567
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-salon-gold-light flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-salon-gold" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Horário de Funcionamento</h3>
                <p className="text-muted-foreground font-body text-sm">
                  Segunda a Sexta: 09:00 - 19:00<br />
                  Sábado: 09:00 - 17:00<br />
                  Domingo: Fechado
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-salon-gold-light flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-salon-gold" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Contato</h3>
                <p className="text-muted-foreground font-body text-sm">
                  Telefone: (11) 3456-7890<br />
                  WhatsApp: (11) 99999-9999
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
