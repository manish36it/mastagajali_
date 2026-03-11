import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import specialNonVegThali from "@/assets/special-non-veg-thali.png";
import pomfretFry from "@/assets/pomfret-fry.webp";
import prawnsFry from "@/assets/prawns-fry.webp";
import crabThali from "@/assets/crab-thali.webp";
import stuffedCrab from "@/assets/stuffed-crab.jpg";
import makhlaFry from "@/assets/makhla-fry.webp";
import paneerChilliFry from "@/assets/paneer-chilli-fry.webp";
import muttonBhakariThali from "@/assets/mutton-bhakari-thali.jpg";
import vegThali from "@/assets/veg-thali.jpg";

const dishes = [
  {
    name: "Special Non Veg Thali",
    description: "A full coastal thali loaded with fish, curries, sides, and authentic Konkan flavors.",
    price: "₹420",
    image: specialNonVegThali,
  },
  {
    name: "Surmai Fry",
    description: "Fresh surmai marinated in traditional masala and fried crisp for a rich seafood bite.",
    price: "₹350",
    image: pomfretFry,
  },
  {
    name: "Prawns Fry",
    description: "Juicy prawns tossed in bold spices and pan-fried for a fiery and flavorful experience.",
    price: "₹420",
    image: prawnsFry,
  },
  {
    name: "Crab Thali",
    description: "A seafood lover’s complete meal featuring crab preparations served with rice and sides.",
    price: "₹450",
    image: crabThali,
  },
  {
    name: "Stuffed Crab",
    description: "Crab meat packed with coastal masala, stuffed and cooked for a rich, spicy seafood delight.",
    price: "₹585",
    image: stuffedCrab,
  },
  {
    name: "Makhla Fry",
    description: "Coastal-style makhla fry, marinated and cooked to bring out its signature smoky flavor.",
    price: "₹320",
    image: makhlaFry,
  },
  {
    name: "Paneer Chilli Fry",
    description: "Soft paneer cubes stir-fried with chillies, onion, and spices in Indo-coastal style.",
    price: "₹280",
    image: paneerChilliFry,
  },
  {
    name: "Mutton Bhakari Thali",
    description: "Traditional mutton thali served with bhakari, rich gravy, and authentic coastal spices.",
    price: "₹625.00",
    image: muttonBhakariThali,
  },
  {
    name: "Veg Thali",
    description: "Classic vegetarian thali with sabzi, dal, rice, roti, and traditional sides.",
    price: "₹195.00",
    image: vegThali,
  },
];

const SignatureDishes = () => {
  return (
    <section id="menu" className="py-24 bg-muted/50 section-shell">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary bg-sunset-gradient bg-clip-text text-transparent">
            Signature Dishes
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4">
            Taste the <span className="text-gradient-gold">Legends</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group glass-card rounded-xl overflow-hidden shadow-warm hover:shadow-golden transition-shadow duration-500 card-hover-lift"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <h3 className="font-display text-xl font-bold text-foreground">{dish.name}</h3>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{dish.description}</p>
                <Link
                  to="/menu"
                  className="inline-block mt-3 font-body text-xs font-semibold text-primary hover:text-golden transition-colors bg-primary/10 border border-primary/20 px-3 py-1 rounded-full"
                >
                  See Full Menu →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;
