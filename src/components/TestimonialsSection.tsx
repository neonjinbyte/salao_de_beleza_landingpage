import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana Carolina",
    review: "Melhor salão que já frequentei! O atendimento é impecável e o resultado sempre supera minhas expectativas. Amo o ambiente acolhedor e sofisticado.",
    rating: 5,
  },
  {
    name: "Juliana Mendes",
    review: "Fiz coloração e hidratação, ficou perfeito! As profissionais são muito atenciosas e usam produtos de altíssima qualidade. Super recomendo!",
    rating: 5,
  },
  {
    name: "Fernanda Lima",
    review: "Ambiente lindo, profissionais incríveis e resultado maravilhoso. Sempre saio me sentindo renovada e confiante. É meu refúgio de autocuidado!",
    rating: 5,
  },
  {
    name: "Patrícia Souza",
    review: "Fiz minha maquiagem de casamento aqui e ficou absolutamente perfeita. Toda a equipe é muito profissional e dedicada. Gratidão eterna!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-salon-gold uppercase tracking-[0.2em] text-sm font-body mb-3">Depoimentos</p>
          <h2 className="section-title text-foreground">O que nossas clientes dizem</h2>
          <div className="gold-line" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border relative"
            >
              <Quote className="w-8 h-8 text-salon-gold/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-salon-gold text-salon-gold" />
                ))}
              </div>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6 italic">
                "{testimonial.review}"
              </p>
              <p className="font-display text-base font-semibold text-foreground">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
