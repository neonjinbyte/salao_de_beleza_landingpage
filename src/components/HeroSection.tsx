import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";
import heroImg from "@/assets/hero-salon.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Interior elegante do salão de beleza Bella Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-salon-gold font-body text-sm md:text-base uppercase tracking-[0.25em] mb-4"
          >
            Salão de Beleza Premium
          </motion.p>

          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-semibold text-primary-foreground leading-tight mb-6">
            Sua beleza merece{" "}
            <span className="italic text-salon-gold">cuidado especial</span>
          </h1>

          <p className="text-primary-foreground/80 text-base md:text-lg font-body leading-relaxed mb-10 max-w-lg">
            Transforme-se em um ambiente sofisticado e acolhedor. Descubra serviços exclusivos que realçam sua beleza natural com qualidade e carinho.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="gold" size="lg" className="text-base px-8 py-6" asChild>
              <a href="#agendamento">
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Horário
              </a>
            </Button>
            <Button variant="whatsapp" size="lg" className="text-base px-8 py-6" asChild>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
