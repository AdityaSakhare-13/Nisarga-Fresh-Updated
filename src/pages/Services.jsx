import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Ship,
  ShieldCheck,
  Globe,
  Thermometer,
  Gavel,
  BarChart3,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const heroRef = useRef(null);
  const mainServicesRef = useRef(null);
  const additionalRef = useRef(null);
  const ctaRef = useRef(null);

  const mainServices = [
    {
      icon: Ship,
      title: "Advanced Logistics",
      description:
        "Multi-modal transportation solutions featuring proprietary cold-chain technology. We manage port-to-port and door-to-door delivery with surgical precision.",
      features: [
        "Real-time GPS & Temperature Tracking",
        "Customs Brokerage & Documentation",
        "Warehousing & Last-Mile Distribution",
      ],
      image:
        "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80",
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      description:
        "Our 12-point inspection protocol ensures only the finest specimens enter the global market. We maintain rigorous standards at every transition point.",
      features: [
        "GlobalG.A.P Certified Inspections",
        "Ethylene & Brix Content Testing",
        "Phytosanitary Compliance Verification",
      ],
      image:
        "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800&q=80",
    },
    {
      icon: Globe,
      title: "Market Intelligence",
      description:
        "Strategic trade consulting and market analysis. We leverage decades of data to help partners navigate seasonal shifts and international trade policies.",
      features: [
        "Seasonal Harvest Forecasting",
        "Financial Risk Management",
        "B2B Network Facilitation",
      ],
      image:
        "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&fit=crop&w=800&q=80",
    },
  ];

  const additionalServices = [
    {
      icon: Thermometer,
      title: "Isothermal Precision",
      description:
        "Custom-tailored cold chain solutions optimized for the specific respiration rates of each fruit variety.",
    },
    {
      icon: Gavel,
      title: "Regulatory Authority",
      description:
        "Full-spectrum compliance handling for EU, US, and Asian market entry requirements.",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description:
        "Access to proprietary trade dashboards for predictive analysis on pricing and availability.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from(heroRef.current.querySelectorAll(".hero-text"), {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Main services cards
      gsap.from(mainServicesRef.current.querySelectorAll(".service-card"), {
        scrollTrigger: {
          trigger: mainServicesRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        immediateRender: false,
      });

      // Additional services image
      gsap.from(additionalRef.current.querySelector(".additional-image"), {
        scrollTrigger: {
          trigger: additionalRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        immediateRender: false,
      });

      // Additional services items
      gsap.from(additionalRef.current.querySelectorAll(".additional-item"), {
        scrollTrigger: {
          trigger: additionalRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        immediateRender: false,
      });

      // CTA animation
      gsap.from(ctaRef.current, {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        immediateRender: false,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-background-light">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full py-32 md:py-48 flex items-center bg-primary overflow-hidden"
      >
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1920&q=80"
            alt="Logistics"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/1920x1080?text=Fruit+Image";
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full text-center">
          <div>
            <div className="hero-text inline-flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-accent"></div>
              <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase">
                Tailored Trade Solutions
              </span>
              <div className="h-[1px] w-12 bg-accent"></div>
            </div>

            <h1 className="hero-text text-white text-5xl md:text-7xl font-serif font-bold leading-tight mb-8">
              Architecting the Future of <br />
              <span className="italic bg-gradient-to-r from-accent via-[#E5C185] to-accent bg-clip-text text-transparent">
                Global Produce Trade
              </span>
            </h1>

            <p className="hero-text text-slate-300 text-lg md:text-xl font-light mb-0 mx-auto max-w-2xl leading-relaxed">
              From deep-sea logistics to precision quality control, we provide
              the infrastructure that powers the world's most sophisticated
              fruit supply chains.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section
        ref={mainServicesRef}
        className="py-32 px-6 md:px-12 bg-background-light"
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="service-card group bg-white p-10 border border-slate-100 shadow-sm transition-all hover:shadow-2xl hover:border-accent/20"
              >
                <div className="w-16 h-16 border border-accent/30 flex items-center justify-center mb-8 transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                  <service.icon
                    className="text-accent group-hover:text-white"
                    size={30}
                  />
                </div>

                <h3 className="text-2xl font-serif text-primary mb-6">
                  {service.title}
                </h3>

                <p className="text-slate-600 font-light leading-relaxed mb-8">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-10 text-sm text-slate-500 font-medium">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="h-64 overflow-hidden mb-8">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/400x500?text=Fruit+Image";
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section
        ref={additionalRef}
        className="py-32 bg-primary text-white overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative order-2 lg:order-1 additional-image">
              <div className="absolute -top-10 -right-10 w-40 h-40 border-r border-t border-accent/30 hidden lg:block"></div>
              <img
                src="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&q=80"
                alt="Precision logistics"
                className="relative z-10 w-full aspect-square object-cover shadow-2xl"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/400x400?text=Fruit+Image";
                }}
              />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 border-l border-b border-accent/30 hidden lg:block"></div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight italic">
                Uncompromising{" "}
                <span className="text-accent">Trade Standards.</span>
              </h2>

              <p className="text-lg font-light text-slate-300 mb-12 leading-relaxed">
                Our services aren't just operations; they're commitments.
                FruitExport Pro integrates advanced real-time monitoring with
                decades of logistical expertise to ensure that the integrity of
                the harvest is maintained across every border.
              </p>

              <div className="space-y-12">
                {additionalServices.map((service, index) => (
                  <div
                    key={index}
                    className="additional-item flex gap-8 items-start"
                  >
                    <service.icon
                      className="text-accent flex-shrink-0"
                      size={40}
                    />
                    <div>
                      <h4 className="text-xl font-serif mb-3">
                        {service.title}
                      </h4>
                      <p className="text-sm text-slate-400 font-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div
            ref={ctaRef}
            className="bg-primary/5 rounded-sm p-12 md:p-20 border border-accent/10 text-center max-w-5xl mx-auto"
          >
            <h2 className="text-4xl font-serif text-primary mb-8">
              Ready to Scale Your Import-Export Operations?
            </h2>
            <p className="text-slate-600 mb-12 font-light italic text-lg max-w-2xl mx-auto">
              Join the elite network of wholesalers and retailers who trust
              FruitExport Pro for their seasonal procurement strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-primary text-white py-5 px-12 rounded-sm font-bold text-xs tracking-[0.3em] uppercase hover:bg-primary/90 transition-all shadow-xl">
                Request a Service Proposal
              </button>
              <button className="bg-transparent text-primary border border-primary/20 py-5 px-12 rounded-sm font-bold text-xs tracking-[0.3em] uppercase hover:bg-primary/5 transition-all">
                Speak to an Advisor
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
