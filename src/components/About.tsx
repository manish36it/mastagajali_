import { motion } from "framer-motion";
import instagramLogo from "@/assets/logos/instagram.png";
import facebookLogo from "@/assets/logos/facebook.png";
import zomatoLogo from "@/assets/logos/zomato.png";
import swiggyLogo from "@/assets/logos/swiggy.png";
import justdialLogo from "@/assets/logos/justdial.png";

const socialPlatforms = [
  {
    name: "Instagram",
    handle: "@mastagajali07",
    href: "https://www.instagram.com/mastagajali07/",
    logo: instagramLogo,
  },
  {
    name: "Facebook",
    handle: "@snap2.0multicuisine",
    href: "https://www.facebook.com/snap2.0multicuisine/",
    logo: facebookLogo,
  },
  {
    name: "Zomato",
    handle: "Masta Gajali Mazgaon",
    href: "https://www.zomato.com/mumbai/restaurants?q=Masta%20Gajali%20Mazgaon",
    logo: zomatoLogo,
  },
  {
    name: "Swiggy",
    handle: "Masta Gajali Mazgaon",
    href: "https://www.swiggy.com/search?query=Masta%20Gajali%20Mazgaon",
    logo: swiggyLogo,
  },
  {
    name: "Justdial",
    handle: "Masta Gajali Mazgaon",
    href: "https://www.justdial.com/Mumbai/Masta-Gajali-Mazgaon",
    logo: justdialLogo,
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background section-shell">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary bg-sunset-gradient bg-clip-text text-transparent">
              Our Story
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Where the Ocean Meets
              <br />
              <span className="text-gradient-gold">Tradition</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Nestled in the heart of Byculla East, Masta Gajali has been serving Mumbai's
              most authentic coastal seafood for generations. Every dish tells a story—of
              fishermen setting sail at dawn, of family recipes passed down through decades,
              and of the vibrant culinary spirit that makes this city unforgettable.
            </p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { number: "558+", label: "Happy Reviews" },
                { number: "4.8", label: "Google Rating" },
                { number: "50+", label: "Signature Dishes" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5, type: "spring", damping: 16 }}
                  whileHover={{ y: -6, scale: 1.05 }}
                  className="relative text-center rounded-xl glass-card card-hover-lift px-4 py-5 shadow-warm/40 overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-x-0 -bottom-6 h-16 bg-gradient-to-t from-golden/10 via-transparent to-transparent"
                    animate={{ opacity: [0.1, 0.4, 0.1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.4 }}
                  />
                  <motion.div
                    className="font-display text-3xl font-bold text-primary relative z-10"
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="font-body text-sm text-muted-foreground mt-1 relative z-10">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-12"
            >
              <p className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-primary mb-4">
                Follow Us on Social Platforms
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {socialPlatforms.map((platform, index) => (
                  <motion.a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + index * 0.06, duration: 0.4 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="rounded-xl glass-card card-hover-lift border border-golden/25 px-3 py-3 flex items-center gap-3 text-left"
                  >
                    <div className="w-9 h-9 rounded-full bg-background/60 border border-border flex items-center justify-center overflow-hidden shrink-0">
                      <img src={platform.logo} alt={platform.name} className="w-6 h-6 object-contain" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-body text-xs text-muted-foreground">{platform.name}</p>
                      <p className="font-body text-sm font-semibold text-foreground truncate">{platform.handle}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
