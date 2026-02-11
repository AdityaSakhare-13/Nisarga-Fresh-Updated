import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Globe, Mail, Phone, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary pt-32 pb-12 px-6 md:px-12 text-white border-t border-accent/20">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-8">
              <div className="border border-accent/50 rounded-full p-1.5">
                <Leaf className="text-accent" size={20} />
              </div>
              <span className="text-xl font-serif font-bold uppercase tracking-tight">
                FruitExport <span className="text-accent">Pro</span>
              </span>
            </Link>
            <p className="text-slate-400 font-light text-sm leading-relaxed mb-10 max-w-xs">
              Refining the global fruit trade through architectural precision and environmental respect.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/50 hover:text-accent transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="text-white/50 hover:text-accent transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="text-white/50 hover:text-accent transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Exploration Links */}
          <div>
            <h4 className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-10">
              Exploration
            </h4>
            <ul className="space-y-5 text-sm font-light text-slate-300">
              <li>
                <Link to="/products" className="hover:text-accent transition-colors">
                  The Collection
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-accent transition-colors">
                  Global Logistics
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  Our Heritage
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Sustainable Impact
                </a>
              </li>
            </ul>
          </div>

          {/* Governance Links */}
          <div>
            <h4 className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-10">
              Governance
            </h4>
            <ul className="space-y-5 text-sm font-light text-slate-300">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Compliance & Certs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Trade Agreements
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Quality Control
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Privacy Protocol
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-10">
              Intelligence
            </h4>
            <p className="text-sm font-light text-slate-300 mb-8">
              Receive our quarterly market harvest analysis.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border-b border-white/20 focus:border-accent outline-none py-3 text-sm placeholder:text-white/30"
              />
              <button className="absolute right-0 bottom-3 text-accent hover:text-white transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase">
            © 2024 FruitExport Pro. Defining the Standard.
          </p>
          <div className="flex gap-10 text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase">
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
