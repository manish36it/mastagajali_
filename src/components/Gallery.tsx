import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import diningExperience from "@/assets/gallery/dining-experience.png";
import restaurantBanner from "@/assets/gallery/restaurant-banner.png";
import wallArtTurban from "@/assets/gallery/wall-art-turban.png";
import gallery2 from "@/assets/gallery/gallery2.webp";
import gallery3 from "@/assets/gallery/gallery3.webp";
import gallery5 from "@/assets/gallery/gallery5.jpg";
import gallery7BatateCheKappa from "@/assets/gallery/gallery7-batate-che-kappa.webp";
import gallery9 from "@/assets/gallery/gallery9.jpg";
import new1 from "@/assets/gallery/new-1.jpg";
import new2 from "@/assets/gallery/new-2.jpg";
import new4 from "@/assets/gallery/new-4.webp";
import new5 from "@/assets/gallery/new-5.jpg";
import new6 from "@/assets/gallery/new-6.jpg";
import new7 from "@/assets/gallery/new-7.webp";
import new8 from "@/assets/gallery/new-8.webp";

const galleryItems: { src: string; title: string; caption: string }[] = [
  { src: restaurantBanner, title: "Masta Gajali", caption: "Welcome to our world of coastal flavors" },
  { src: diningExperience, title: "Dining Experience", caption: "Warm ambience for family & friends" },
  { src: wallArtTurban, title: "Wall Art", caption: "Culture-rich visual details" },
  { src: gallery2, title: "Gallery 2", caption: "Fresh flavors and vibrant presentation" },
  { src: gallery3, title: "Gallery 3", caption: "A delicious coastal spread" },
  { src: gallery5, title: "Gallery 5", caption: "Authentic taste served with care" },
  { src: gallery7BatateCheKappa, title: "Batate Che Kappa", caption: "A classic Konkan favorite" },
  { src: gallery9, title: "Gallery 9", caption: "Memorable bites and moments" },
  { src: new1, title: "New Highlight 1", caption: "Freshly added gallery moment" },
  { src: new2, title: "New Highlight 2", caption: "Another beautiful plate from Masta Gajali" },
  { src: new4, title: "New Highlight 4", caption: "Signature flavors in every frame" },
  { src: new5, title: "New Highlight 5", caption: "Freshly added gallery moment" },
  { src: new6, title: "New Highlight 6", caption: "Another new gallery highlight" },
  { src: new7, title: "New Highlight 7", caption: "Freshly added gallery moment" },
  { src: new8, title: "New Highlight 8", caption: "Another new gallery highlight" },
];

interface GalleryProps {
  /** When true, hide the section title (e.g. when used on dedicated /gallery page) */
  standalone?: boolean;
}

const Gallery = ({ standalone = false }: GalleryProps) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [direction, setDirection] = useState<0 | 1 | -1>(0);

  const navigate = (dir: 1 | -1) => {
    if (selected === null) return;
    setDirection(dir);
    setSelected((selected + dir + galleryItems.length) % galleryItems.length);
  };

  const openAt = (index: number) => {
    setDirection(0);
    setSelected(index);
  };

  return (
    <section id="gallery" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Animated rangoli corner decorations */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 opacity-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="0" cy="0" r="80" fill="none" stroke="hsl(var(--golden))" strokeWidth="0.5" />
          <circle cx="0" cy="0" r="60" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" />
          <circle cx="0" cy="0" r="40" fill="none" stroke="hsl(var(--golden))" strokeWidth="0.5" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 opacity-10 rotate-90"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="100" cy="0" r="80" fill="none" stroke="hsl(var(--golden))" strokeWidth="0.5" />
          <circle cx="100" cy="0" r="60" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" />
          <circle cx="100" cy="0" r="40" fill="none" stroke="hsl(var(--golden))" strokeWidth="0.5" />
        </svg>
      </motion.div>

      <div className="container mx-auto px-6 md:px-12">
        {!standalone && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", damping: 20 }}
            className="text-center mb-16"
          >
            <motion.span
              className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              📸 Gallery
            </motion.span>
            <motion.h2
              className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Gallery <span className="text-gradient-gold">Highlights</span>
            </motion.h2>
            <motion.p
              className="font-body text-muted-foreground mt-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              चवीचा प्रवास — A journey of flavors
            </motion.p>
          </motion.div>
        )}

        {/* Masonry-style grid with enhanced animations */}
        {galleryItems.length > 0 ? (
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85, y: 30, rotate: -3 }}
              whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: i * 0.06,
                duration: 0.55,
                type: "spring",
                stiffness: 100,
                damping: 18,
              }}
              variants={{
                rest: { scale: 1, rotate: 0, zIndex: 1 },
                hover: {
                  scale: 1.04,
                  rotate: 2,
                  zIndex: 10,
                  transition: { duration: 0.3, type: "spring", stiffness: 400, damping: 25 },
                },
              }}
              animate="rest"
              whileHover="hover"
              className="break-inside-avoid cursor-pointer group relative rounded-xl overflow-hidden shadow-warm border-2 border-transparent hover:border-golden/50 hover:shadow-golden transition-all duration-300"
              onClick={() => openAt(i)}
            >
              {/* Image with zoom on hover */}
              <motion.div className="overflow-hidden">
                <motion.img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </motion.div>

              {/* Shimmer overlay on hover */}
              <motion.div
                className="absolute inset-0 pointer-events-none overflow-hidden"
                variants={{
                  rest: {},
                  hover: {},
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent w-1/2"
                  variants={{
                    rest: { x: "-100%" },
                    hover: {
                      x: "200%",
                      transition: { duration: 0.7, ease: "easeInOut" },
                    },
                  }}
                />
              </motion.div>

              {/* Gradient overlay + caption */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[hsl(20,15%,10%/0.9)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              >
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <motion.p
                    className="font-display text-sm font-bold text-primary-foreground"
                    initial={{ y: 10, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                  >
                    {item.title}
                  </motion.p>
                  <motion.p
                    className="font-body text-xs text-golden"
                    initial={{ y: 8, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.05 }}
                  >
                    {item.caption}
                  </motion.p>
                </div>
              </motion.div>

              {/* Decorative corner with subtle pulse */}
              <motion.div
                className="absolute top-2 right-2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.2, rotate: 15 }}
              >
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <path d="M12 2L14 8L20 8L15 12L17 18L12 14L7 18L9 12L4 8L10 8Z" fill="hsl(var(--golden))" />
                </svg>
              </motion.div>
            </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="font-body text-muted-foreground">No gallery images available right now.</p>
          </div>
        )}
      </div>

      {/* Lightbox with slide + scale animations */}
      <AnimatePresence mode="wait" custom={direction}>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-[hsl(20,15%,5%/0.96)] flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              key={selected}
              custom={direction}
              initial={{
                scale: 0.8,
                opacity: 0,
                x: direction === 1 ? 80 : direction === -1 ? -80 : 0,
              }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              exit={{
                scale: 0.85,
                opacity: 0,
                x: direction === 1 ? -60 : direction === -1 ? 60 : 0,
              }}
              transition={{
                type: "spring",
                damping: 28,
                stiffness: 300,
              }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={galleryItems[selected].src}
                alt={galleryItems[selected].title}
                className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              />
              <motion.div
                className="text-center mt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="font-display text-xl text-primary-foreground font-bold">
                  {galleryItems[selected].title}
                </p>
                <p className="font-body text-golden text-sm">{galleryItems[selected].caption}</p>
              </motion.div>

              <motion.button
                onClick={() => setSelected(null)}
                className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-golden transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={() => navigate(-1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 text-foreground flex items-center justify-center hover:bg-golden hover:text-accent-foreground transition-colors"
                whileHover={{ scale: 1.1, x: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={() => navigate(1)}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 text-foreground flex items-center justify-center hover:bg-golden hover:text-accent-foreground transition-colors"
                whileHover={{ scale: 1.1, x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
