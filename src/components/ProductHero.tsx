export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-950"
    >
      {/* Background geometric pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 60px,
              rgba(255,255,255,0.15) 60px,
              rgba(255,255,255,0.15) 61px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 60px,
              rgba(255,255,255,0.15) 60px,
              rgba(255,255,255,0.15) 61px
            )`,
          }}
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-navy-950 to-transparent" />

      {/* Gold accent line top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Label */}
        <div
          className="inline-flex items-center gap-3 mb-8 opacity-0-init animate-fade-in"
          style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
        >
          <div className="h-px w-12 bg-gold-500" />
          <span className="text-gold-400 text-xs font-sans font-medium tracking-[0.25em] uppercase">
            Contadores Públicos
          </span>
          <div className="h-px w-12 bg-gold-500" />
        </div>

        {/* Heading */}
        <h1
          className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-6 opacity-0-init animate-fade-up"
          style={{ animationDelay: "350ms", animationFillMode: "forwards" }}
        >
          Estudio
          <span className="block italic font-normal text-gold-400">Bica</span>
        </h1>

        {/* Divider */}
        <div
          className="flex justify-center mb-8 opacity-0-init animate-fade-in"
          style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
        >
          <div className="h-px w-24 bg-gold-500/60" />
        </div>

        {/* Tagline */}
        <p
          className="text-navy-200 text-lg md:text-xl font-sans font-light max-w-2xl mx-auto leading-relaxed mb-12 opacity-0-init animate-fade-up"
          style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
        >
          Precisión, confianza y compromiso en cada número.
          Acompañamos a empresas y personas a tomar las mejores decisiones financieras.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0-init animate-fade-up"
          style={{ animationDelay: "750ms", animationFillMode: "forwards" }}
        >
          <a
            href="#servicios"
            className="px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-950 font-medium text-sm tracking-widest uppercase transition-colors rounded-sm"
          >
            Nuestros Servicios
          </a>
          <a
            href="#contacto"
            className="px-8 py-4 border border-white/30 hover:border-white/60 text-white font-medium text-sm tracking-widest uppercase transition-colors rounded-sm"
          >
            Contactanos
          </a>
        </div>
      </div>

    </section>
  );
}