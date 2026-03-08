import { motion } from "framer-motion";
import { Award, Heart, Sparkles } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Experiência Premium",
    description: "Mais de 10 anos dedicados à arte da beleza, com profissionais certificados e em constante atualização.",
  },
  {
    icon: Heart,
    title: "Cuidado Personalizado",
    description: "Cada cliente é única. Criamos tratamentos sob medida para realçar a sua beleza natural.",
  },
  {
    icon: Award,
    title: "Produtos de Alta Qualidade",
    description: "Trabalhamos apenas com as melhores marcas do mercado para garantir resultados excepcionais.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-salon-gold uppercase tracking-[0.2em] text-sm font-body mb-3">Conheça-nos</p>
          <h2 className="section-title text-foreground">Sobre o Bella Studio</h2>
          <div className="gold-line" />
          <p className="section-subtitle font-body mt-6">
            Somos um salão de beleza que acredita no poder transformador do autocuidado. 
            Nosso espaço foi pensado para que você se sinta especial do momento em que entra 
            até a hora de sair, renovada e confiante.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-salon-gold-light flex items-center justify-center mx-auto mb-5">
                <feature.icon className="w-6 h-6 text-salon-gold" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
