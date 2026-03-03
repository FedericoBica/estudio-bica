const services = [
  {
    icon: "📊",
    title: "Contabilidad Empresarial",
    description:
      "Registración contable, estados financieros, libros obligatorios y reportes de gestión para empresas de todos los tamaños.",
  },
  {
    icon: "📋",
    title: "Asesoramiento Impositivo",
    description:
      "Liquidación de impuestos, IVA, Ganancias, Ingresos Brutos y planificación fiscal estratégica.",
  },
  {
    icon: "🔍",
    title: "Auditoría",
    description:
      "Auditoría externa de estados contables, auditoría interna y revisiones especiales con criterio independiente y riguroso.",
  },
  {
    icon: "📈",
    title: "Consultoría Financiera",
    description:
      "Análisis de rentabilidad, presupuestos, flujo de fondos y acompañamiento en la toma de decisiones estratégicas.",
  },
  {
    icon: "🏢",
    title: "Constitución de Sociedades",
    description:
      "Asesoramiento integral para la creación y registración de sociedades, estatutos, trámites comerciales y habilitaciones.",
  },
  {
    icon: "👤",
    title: "Personas Físicas",
    description:
      "Declaraciones juradas de bienes personales, Ganancias y monotributo. Atención personalizada para profesionales y autónomos.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold-500" />
            <span className="text-gold-600 text-xs font-sans font-medium tracking-[0.25em] uppercase">
              Lo que hacemos
            </span>
            <div className="h-px w-8 bg-gold-500" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-950 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-navy-500 text-lg font-light max-w-xl mx-auto">
            Soluciones contables e impositivas diseñadas para proteger y potenciar tu patrimonio.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group p-8 border border-navy-100 hover:border-navy-300 rounded-sm hover:shadow-lg transition-all duration-300 bg-white hover:bg-navy-950 relative overflow-hidden"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="text-3xl mb-5">{service.icon}</div>
              <h3 className="font-serif text-xl font-semibold text-navy-900 group-hover:text-white mb-3 transition-colors">
                {service.title}
              </h3>
              <p className="text-navy-500 group-hover:text-navy-300 text-sm leading-relaxed transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}