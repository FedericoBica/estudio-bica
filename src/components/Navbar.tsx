"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "Inicio",    href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre Nosotros",  href: "#nosotros" },
  { label: "Contacto",  href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-navy-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-sm flex items-center justify-center bg-navy-900 group-hover:bg-navy-800 transition-colors">
            <span className="text-white font-serif font-bold text-lg leading-none">B</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`font-serif font-semibold text-lg tracking-wide transition-colors ${scrolled ? "text-navy-900" : "text-white"}`}>
              Estudio Bica
            </span>
            <span className={`text-[10px] font-sans font-medium tracking-widest uppercase transition-colors ${scrolled ? "text-navy-500" : "text-navy-200"}`}>
              Contadores Públicos
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium tracking-wide relative group transition-colors ${
                scrolled ? "text-navy-700 hover:text-navy-950" : "text-navy-100 hover:text-white"
              }`}
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#contacto"
            className="ml-2 px-5 py-2.5 bg-navy-900 hover:bg-navy-800 text-white text-sm font-medium tracking-wide rounded-sm transition-colors"
          >
            Consultar
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-navy-900" : "bg-white"} ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-navy-900" : "bg-white"} ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-navy-900" : "bg-white"} ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-navy-100 ${open ? "max-h-64" : "max-h-0"}`}>
        <nav className="flex flex-col px-6 py-4 gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-navy-800 font-medium py-1 border-b border-navy-50"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}