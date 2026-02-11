import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, ShieldCheck, Leaf, Package } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const heroRef = useRef(null);
  const productsRef = useRef(null);
  const certsRef = useRef(null);

  const fruits = [
    {
      name: "Valencia Orange",
      category: "Premium Citrus",
      badge: "In Season",
      origin: "Spain & South Africa",
      grade: "Extra Class (A+)",
      description:
        "Known for their exceptional juiciness and perfectly balanced sugar-to-acid ratio. Hand-picked at peak ripeness for global export.",
      image:
        "https://images.unsplash.com/photo-1547514701-42782101795e?w=800&q=80",
    },
    {
      name: "Gold Cavendish Banana",
      category: "Tropical Reserve",
      badge: "Tropical Reserve",
      origin: "Ecuador & Costa Rica",
      grade: "Premium Export Tier",
      description:
        "Uniform size and flawless golden skin characterize our Cavendish selection. Transported in state-of-the-art climate-controlled chambers.",
      image:
        "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&q=80",
    },
    {
      name: "Heritage Kiwi",
      category: "Antioxidant Rich",
      badge: "Antioxidant Rich",
      origin: "New Zealand (Zespri)",
      grade: "Superior Selection",
      description:
        "Vibrant green flesh with a refreshing, tang-sweet profile. Sourced from orchards practicing regenerative agriculture for superior flavor.",
      image:
        "https://images.pexels.com/photos/27911421/pexels-photo-27911421.jpeg?auto=compress&fit=crop&w=800&q=80",
    },
    {
      name: "Ruby Strawberry",
      category: "Boutique Harvest",
      badge: "Air Freight Only",
      origin: "California & Egypt",
      grade: "Connoisseur Tier",
      description:
        "Intensely fragrant and deep red to the core. Our berries are harvested at midnight to preserve cellular integrity during rapid transport.",
      image:
        "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800&q=80",
    },
    {
      name: "Crisp Fuji Apple",
      category: "Global Reserve",
      badge: "Global Reserve",
      origin: "Japan & Washington State",
      grade: "High-Density Class",
      description:
        "Remarkable firmness and honey-like sweetness. Each apple undergoes laser-scan sorting to ensure 100% aesthetic and internal perfection.",
      image:
        "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&q=80",
    },
  ];

  const certifications = [
    { icon: Package, label: "Global G.A.P." },
    { icon: Award, label: "ISO 9001:2015" },
    { icon: Leaf, label: "Organic Certified" },
    { icon: ShieldCheck, label: "Fair Trade" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from(heroRef.current.querySelectorAll(".hero-element"), {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Product cards animation
      gsap.from(productsRef.current.querySelectorAll(".product-card"), {
        scrollTrigger: {
          trigger: productsRef.current,
          start: "top 75%",
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });

      // Certifications animation
      gsap.from(certsRef.current.querySelectorAll(".cert-item"), {
        scrollTrigger: {
          trigger: certsRef.current,
          start: "top 85%",
        },
        scale: 0.5,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-background-light">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-24 bg-primary overflow-hidden"
      >
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Leaf className="text-accent" size={400} />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="hero-element flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-accent"></div>
              <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase">
                The Export Collection
              </span>
            </div>

            <h1 className="hero-element text-white text-5xl md:text-7xl font-serif font-bold mb-8">
              Our{" "}
              <span className="italic bg-gradient-to-r from-accent via-[#E5C185] to-accent bg-clip-text text-transparent">
                Premium Harvest
              </span>
            </h1>

            <p className="hero-element text-slate-300 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              A curated selection of the world's most exceptional fruits,
              sourced from verified partner orchards across five continents.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section
        ref={productsRef}
        className="py-24 px-6 md:px-12 bg-background-light"
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {fruits.map((fruit, index) => (
              <div
                key={index}
                className="product-card group bg-white border border-slate-100 shadow-sm overflow-hidden flex flex-col"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={fruit.image}
                    alt={fruit.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/400x500?text=Fruit+Image";
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-primary text-accent text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                    {fruit.badge}
                  </div>
                </div>

                <div className="p-10 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-3xl font-serif text-primary">
                      {fruit.name}
                    </h3>
                    <Award className="text-accent" size={24} />
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                        Origin
                      </span>
                      <span className="text-sm font-medium">
                        {fruit.origin}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                        Grade
                      </span>
                      <span className="text-sm font-medium">{fruit.grade}</span>
                    </div>
                  </div>

                  <p className="text-slate-600 font-light text-sm leading-relaxed mb-10 flex-1 italic">
                    {fruit.description}
                  </p>

                  <button className="w-full border border-primary text-primary hover:bg-primary hover:text-white py-4 text-[10px] font-bold tracking-[0.2em] uppercase transition-all">
                    Export Specifications
                  </button>
                </div>
              </div>
            ))}

            {/* Custom Sourcing Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center bg-primary p-12 text-center border border-accent/20"
            >
              <ShieldCheck className="text-accent mb-6" size={60} />
              <h3 className="text-white text-3xl font-serif mb-6">
                Custom Global Sourcing
              </h3>
              <p className="text-slate-300 font-light text-sm mb-10 leading-relaxed">
                Do you require a specific variety or organic certification not
                listed here? Our global network can accommodate bespoke
                wholesale orders.
              </p>
              <a
                href="#"
                className="inline-block bg-accent text-primary px-8 py-4 font-bold text-[10px] tracking-[0.2em] uppercase transition-all hover:bg-white"
              >
                Inquire Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section
        ref={certsRef}
        className="py-16 bg-white border-t border-slate-100"
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-item flex items-center gap-2">
                <cert.icon size={20} />
                <span className="text-xs font-bold uppercase tracking-widest">
                  {cert.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
