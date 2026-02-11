import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Thermometer,
  ShieldCheck,
  Leaf,
  ArrowRight,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const fruitsRef = useRef(null);
  const servicesRef = useRef(null);

  const stats = [
    { value: "64+", label: "Importing Nations" },
    { value: "180k", label: "Tons Exported Annually" },
    { value: "12", label: "Logistics Hubs" },
    { value: "0%", label: "Quality Compromise" },
  ];

  const fruits = [
    {
      name: "Golden Valencia",
      category: "Premium Citrus",
      description:
        "Exceptional sweetness and juice content, sourced from heritage groves.",
      image:
        "https://images.unsplash.com/photo-1547514701-42782101795e?w=800&q=80",
    },
    {
      name: "Grand Cavendish",
      category: "Exotic Reserve",
      description:
        "Perfectly ripened under tropical canopy for unmatched creaminess.",
      image:
        "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&q=80",
    },
    {
      name: "Ruby Sovereign",
      category: "Boutique Harvest",
      description:
        "Hand-picked at peak maturity to ensure explosive flavor and color.",
      image:
        "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800&q=80",
    },
  ];

  const services = [
    {
      icon: Thermometer,
      title: "Precision Thermal Control",
      description:
        "Advanced real-time monitoring of atmosphere and temperature levels.",
    },
    {
      icon: ShieldCheck,
      title: "Elite Certification",
      description:
        "Surpassing GlobalG.A.P and organic standards across all territories.",
    },
    {
      icon: Leaf,
      title: "Regenerative Sourcing",
      description:
        "Committed to ethical partnerships that preserve the land for generations.",
    },
  ];

  useEffect(() => {
    // Hero Section Animations
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current.querySelectorAll(".hero-line"), {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.from(heroRef.current.querySelector(".hero-image"), {
        scale: 1.3,
        duration: 2,
        ease: "power2.out",
      });

      // Stats Counter Animation
      gsap.from(statsRef.current.querySelectorAll(".stat-item"), {
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
      });

      // Fruits Grid Animation
      gsap.from(fruitsRef.current.querySelectorAll(".fruit-card"), {
        scrollTrigger: {
          trigger: fruitsRef.current,
          start: "top 80%",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      });

      // Services Section Animation
      gsap.from(servicesRef.current.querySelector(".services-image"), {
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 70%",
        },
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(servicesRef.current.querySelectorAll(".service-item"), {
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 70%",
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-background-light">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen w-full flex items-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=1920&q=80"
            alt="Citrus fruits"
            className="hero-image w-full h-full object-cover scale-105"
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/1920x1080?text=Fruit+Image";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-3xl">
            <div className="hero-line flex items-center gap-4 mb-8">
              <span className="w-12 h-px bg-accent"></span>
              <span className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase">
                The Pinnacle of Global Agriculture
              </span>
            </div>

            <h1 className="hero-line text-white text-6xl md:text-8xl font-serif leading-[1.1] mb-8">
              Elevating the <br />
              <span className="italic bg-gradient-to-r from-accent via-[#E5C185] to-accent bg-clip-text text-transparent">
                Art of Citrus
              </span>
            </h1>

            <p className="hero-line text-slate-300 text-lg md:text-xl font-light mb-12 leading-relaxed max-w-xl">
              Bridging continents with nature's finest harvest. We curate and
              export the world's most exquisite citrus and seasonal fruits to
              the most discerning global markets.
            </p>

            <div className="hero-line flex flex-wrap gap-6">
              <Link
                to="/products"
                className="bg-accent text-primary px-10 py-4 font-bold text-[10px] tracking-[0.25em] uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-0.5"
              >
                Explore Collection
              </Link>
              <Link
                to="/about"
                className="px-10 py-4 border border-white/20 text-white font-bold text-[10px] tracking-[0.25em] uppercase hover:bg-white hover:text-primary transition-all"
              >
                Our Heritage
              </Link>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 right-12 hidden lg:block"
        >
          <div className="flex items-center gap-4 text-white/40">
            <span className="text-[10px] tracking-widest uppercase">
              Scroll to Discover
            </span>
            <span className="w-px h-12 bg-accent/30"></span>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="bg-primary py-24 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <img
            src="https://images.unsplash.com/photo-1592312040779-49d0b8a46bda?w=800&q=80"
            alt="Orchard"
            className="object-cover h-full w-full"
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/800x600?text=Fruit+Image";
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-item text-center lg:border-r border-white/10 px-4 last:border-r-0"
              >
                <p className="text-4xl md:text-6xl font-serif text-accent mb-4">
                  {stat.value}
                </p>
                <p className="text-[9px] font-bold text-white/50 uppercase tracking-[0.3em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Fruits Section */}
      <section ref={fruitsRef} className="py-32 bg-background-light">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
            <div className="max-w-2xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-serif text-primary mb-6"
              >
                Seasonal Masterpieces
              </motion.h2>
              <div className="w-20 h-1.5 bg-accent mb-8"></div>
              <p className="text-slate-600 font-light text-xl leading-relaxed italic">
                From the sun-drenched groves of the Mediterranean to the
                tropical reserves of the Equator.
              </p>
            </div>
            <Link
              to="/products"
              className="mt-8 md:mt-0 text-accent font-bold text-[10px] tracking-[0.3em] uppercase group flex items-center gap-3"
            >
              View Full Portfolio
              <ArrowRight
                className="group-hover:translate-x-2 transition-transform"
                size={20}
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fruits.map((fruit, index) => (
              <div
                key={index}
                className="fruit-card group relative aspect-[4/5] overflow-hidden bg-primary"
              >
                <img
                  src={fruit.image}
                  alt={fruit.name}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x500?text=Fruit+Image";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10 w-full">
                  <span className="text-accent text-[9px] font-bold tracking-[0.4em] uppercase mb-3 block">
                    {fruit.category}
                  </span>
                  <h3 className="text-white text-3xl font-serif mb-4">
                    {fruit.name}
                  </h3>
                  <p className="text-slate-300 text-sm font-light opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {fruit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section ref={servicesRef} className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-6xl font-serif text-primary leading-tight mb-8">
                Uncompromising <br />
                <span className="italic text-secondary">Global Logistics</span>
              </h2>
              <p className="text-slate-600 text-lg font-light mb-12 leading-relaxed">
                Our proprietary cold-chain infrastructure ensures that the
                journey from tree to table maintains the cellular integrity of
                every piece of fruit.
              </p>

              <div className="space-y-8">
                {services.map((service, index) => (
                  <div key={index} className="service-item flex gap-6">
                    <service.icon className="text-accent" size={30} />
                    <div>
                      <h4 className="text-lg font-bold mb-1">
                        {service.title}
                      </h4>
                      <p className="text-sm text-slate-500 font-light">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 relative services-image">
              <div className="aspect-[4/5] bg-primary relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80"
                  alt="Logistics"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/800x600?text=Fruit+Image";
                  }}
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-accent p-12 hidden md:block">
                <p className="text-primary font-serif text-3xl italic">
                  "The Gold Standard in Fruit Trade"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
