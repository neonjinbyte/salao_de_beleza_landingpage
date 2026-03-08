import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppSection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <MessageCircle className="w-12 h-12 text-primary-foreground/80 mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
            Agende pelo WhatsApp
          </h2>
          <p className="text-primary-foreground/80 font-body text-base md:text-lg mb-8 max-w-lg mx-auto">
            Prefere agendar de forma rápida? Envie uma mensagem pelo WhatsApp e nossa equipe responderá em instantes.
          </p>
          <Button variant="whatsapp" size="lg" className="text-base px-10 py-6" asChild>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Conversar no WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsAppSection;
