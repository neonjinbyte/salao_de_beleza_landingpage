import { motion } from "framer-motion";
import galleryHair from "@/assets/gallery-hair.jpg";
import galleryMakeup from "@/assets/gallery-makeup.jpg";
import gallerySalon from "@/assets/gallery-salon.jpg";
import galleryBrows from "@/assets/gallery-brows.jpg";
import galleryNails from "@/assets/gallery-nails.jpg";
import galleryColor from "@/assets/gallery-color.jpg";

const images = [
  { src: galleryHair, alt: "Penteado profissional", label: "Cabelo" },
  { src: galleryMakeup, alt: "Maquiagem profissional", label: "Maquiagem" },
  { src: gallerySalon, alt: "Ambiente do salão", label: "Ambiente" },
  { src: galleryBrows, alt: "Design de sobrancelha", label: "Sobrancelha" },
  { src: galleryNails, alt: "Unhas decoradas", label: "Unhas" },
  { src: galleryColor, alt: "Coloração capilar", label: "Coloração" },
];

const GallerySection = () => {
  return (
    <section id="galeria" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-salon-gold uppercase tracking-[0.2em] text-sm font-body mb-3">Nosso Trabalho</p>
          <h2 className="section-title text-foreground">Galeria</h2>
          <div className="gold-line" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end">
                <span className="text-primary-foreground font-display text-lg font-semibold p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  {image.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
