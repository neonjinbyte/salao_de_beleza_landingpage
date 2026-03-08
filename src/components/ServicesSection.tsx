import { motion } from "framer-motion";
import { Scissors, Paintbrush, Droplets, Hand, Eye, Gem, Palette, Sparkles } from "lucide-react";

const services = [
  { icon: Scissors, name: "Corte Feminino", description: "Cortes modernos e personalizados", price: "R$ 80" },
  { icon: Paintbrush, name: "Escova", description: "Escova modelada e alinhada", price: "R$ 60" },
  { icon: Palette, name: "Coloração", description: "Mechas, luzes e coloração completa", price: "R$ 150" },
  { icon: Droplets, name: "Hidratação Capilar", description: "Tratamento profundo de hidratação", price: "R$ 90" },
  { icon: Hand, name: "Manicure", description: "Esmaltação com acabamento perfeito", price: "R$ 40" },
  { icon: Gem, name: "Pedicure", description: "Cuidado completo para os pés", price: "R$ 50" },
  { icon: Eye, name: "Design de Sobrancelha", description: "Modelagem profissional e harmoniosa", price: "R$ 45" },
  { icon: Sparkles, name: "Alongamento de Unhas", description: "Unhas em gel e fibra de vidro", price: "R$ 120" },
  { icon: Paintbrush, name: "Maquiagem Profissional", description: "Make para eventos e ocasiões especiais", price: "R$ 180" },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-salon-gold uppercase tracking-[0.2em] text-sm font-body mb-3">Nossos Serviços</p>
          <h2 className="section-title text-foreground">Cardápio de Serviços</h2>
          <div className="gold-line" />
          <p className="section-subtitle font-body mt-6">
            Oferecemos uma variedade de serviços para cuidar da sua beleza de forma completa.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-salon-gold/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-salon-rose-light flex items-center justify-center shrink-0 group-hover:bg-salon-gold-light transition-colors duration-300">
                  <service.icon className="w-5 h-5 text-primary group-hover:text-salon-gold transition-colors duration-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-display text-lg font-semibold text-foreground">{service.name}</h3>
                    <span className="text-salon-gold font-body font-bold text-lg shrink-0">{service.price}</span>
                  </div>
                  <p className="text-muted-foreground font-body text-sm">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
