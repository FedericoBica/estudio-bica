export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-800 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-sm bg-navy-800 flex items-center justify-center">
            <span className="text-white font-serif font-bold text-sm">B</span>
          </div>
          <span className="font-serif text-white text-sm font-semibold tracking-wide">
            Estudio Bica
          </span>
        </div>

        {/* Copyright */}
        <p className="text-navy-500 text-xs text-center">
          © {new Date().getFullYear()} Estudio Bica. Todos los derechos reservados.
        </p>

        {/* Links */}
        <div className="flex gap-6">
          {["Inicio", "Servicios", "Nosotros", "Contacto"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-navy-500 hover:text-navy-300 text-xs transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}