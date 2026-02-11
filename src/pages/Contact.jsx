import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const mapRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    inquiry: "Institutional Supply",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const offices = [
    {
      icon: MapPin,
      title: "European Operations",
      content: "12 Quai de la Joliette\n13002 Marseille, France",
    },
    {
      icon: MapPin,
      title: "Asia-Pacific Liaison",
      content: "8 Marina View, Asia Square Tower 1\nSingapore 018960",
    },
    {
      icon: Phone,
      title: "Direct Intelligence",
      content: "+33 (0) 4 91 23 45 67 (EU)\n+65 6789 0123 (APAC)",
    },
    {
      icon: Mail,
      title: "Electronic Correspondence",
      content: "trade@nisargafresh.com\nconcierge@nisargafresh.com",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from(heroRef.current.querySelectorAll(".hero-element"), {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Form animation
      gsap.from(formRef.current, {
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 75%",
        },
        x: -80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // Form fields
      gsap.from(formRef.current.querySelectorAll(".form-field"), {
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 75%",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
      });

      // Contact info animation
      gsap.from(infoRef.current, {
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 75%",
        },
        x: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(infoRef.current.querySelectorAll(".info-item"), {
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 75%",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
      });

      // Map section
      gsap.from(mapRef.current.querySelector(".map-content"), {
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 85%",
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-background-light">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-24 bg-primary overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <img
            src="https://images.pexels.com/photos/8867431/pexels-photo-8867431.jpeg?auto=compress&fit=crop&w=800&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="hero-element flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-accent"></div>
              <span className="text-accent text-xs font-bold tracking-[0.3em] uppercase">
                Global Logistics Center
              </span>
            </div>

            <h1 className="hero-element text-white text-5xl md:text-7xl font-serif font-bold leading-tight mb-8">
              Establish Your <br />
              <span className="italic bg-gradient-to-r from-accent via-[#E5C185] to-accent bg-clip-text text-transparent">
                Global Presence
              </span>
            </h1>

            <p className="hero-element text-slate-300 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              Our dedicated trade specialists are prepared to facilitate your
              entry into the world's most exclusive fruit markets. Reach out to
              discuss institutional partnerships or luxury supply chain
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Contact Form */}
            <div ref={formRef} className="lg:col-span-7">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
                  Partnership Inquiry
                </h2>
                <p className="text-slate-600 font-light">
                  Please provide your details below. Our corporate relations
                  team will respond within 24 business hours.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
              >
                <div className="form-field space-y-2">
                  <label className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Julian Sterling"
                    className="w-full bg-transparent border-b border-slate-200 focus:border-accent outline-none py-4 text-sm transition-all font-light placeholder:text-slate-400"
                    required
                  />
                </div>

                <div className="form-field space-y-2">
                  <label className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Sterling Global Imports"
                    className="w-full bg-transparent border-b border-slate-200 focus:border-accent outline-none py-4 text-sm transition-all font-light placeholder:text-slate-400"
                    required
                  />
                </div>

                <div className="form-field space-y-2">
                  <label className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="j.sterling@example.com"
                    className="w-full bg-transparent border-b border-slate-200 focus:border-accent outline-none py-4 text-sm transition-all font-light placeholder:text-slate-400"
                    required
                  />
                </div>

                <div className="form-field space-y-2">
                  <label className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">
                    Nature of Inquiry
                  </label>
                  <select
                    name="inquiry"
                    value={formData.inquiry}
                    onChange={handleChange}
                    className="w-full bg-white border-b border-slate-200 focus:border-accent outline-none py-4 text-sm transition-all font-light"
                  >
                    <option>Institutional Supply</option>
                    <option>Orchard Partnership</option>
                    <option>Logistics Solutions</option>
                    <option>Media & Press</option>
                  </select>
                </div>

                <div className="form-field md:col-span-2 space-y-2">
                  <label className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we assist your global expansion?"
                    rows="4"
                    className="w-full bg-transparent border-b border-slate-200 focus:border-accent outline-none py-4 text-sm transition-all font-light placeholder:text-slate-400 resize-none"
                    required
                  ></textarea>
                </div>

                <div className="form-field md:col-span-2">
                  <button
                    type="submit"
                    className="bg-primary text-white px-12 py-5 rounded-sm font-bold text-xs tracking-[0.3em] uppercase hover:bg-primary/90 transition-all shadow-xl w-full md:w-auto"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div ref={infoRef} className="lg:col-span-5 space-y-16">
              <div>
                <h3 className="text-accent text-xs font-bold tracking-[0.4em] uppercase mb-8">
                  Headquarters
                </h3>
                <div className="space-y-10">
                  {offices.map((office, index) => (
                    <div key={index} className="info-item flex gap-6">
                      <office.icon
                        className="text-accent flex-shrink-0"
                        size={24}
                      />
                      <div>
                        <h4 className="text-lg font-serif text-primary mb-2">
                          {office.title}
                        </h4>
                        <p className="text-sm text-slate-500 font-light leading-relaxed whitespace-pre-line">
                          {office.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="info-item bg-primary/5 p-8 border border-accent/20 rounded-sm">
                <h4 className="text-xl font-serif text-primary mb-4 italic">
                  Request a Private Consultation
                </h4>
                <p className="text-sm text-slate-600 font-light mb-6">
                  Schedule a direct video call with our regional trade directors
                  for large-scale procurement strategies.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-accent uppercase hover:gap-5 transition-all"
                >
                  Book Appointment <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section ref={mapRef} className="w-full h-[400px] relative">
        <img
          src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1920&q=80"
          alt="Global network"
          className="w-full h-full object-cover grayscale opacity-20"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="map-content text-center">
            <h2 className="text-primary text-3xl font-serif italic mb-2">
              Bridging Continents
            </h2>
            <p className="text-accent text-[10px] font-bold uppercase tracking-[0.4em]">
              Integrated Logistics Network
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
