const stats = [
  { value: "+35", label: "Años de experiencia" },
  { value: "+150", label: "Clientes activos" },
  { value: "100%", label: "Compromiso con cada cliente" },
];

const team = [
  {
    name: "Cr. Juan Bica",
    role: "Socio fundador",
    specialty: "Impuestos · Auditoría",
    initials: "JB",
  },
  {
    name: "Cra. María Bica",
    role: "Socia",
    specialty: "Contabilidad · Finanzas",
    initials: "MB",
  },
  {
    name: "Cr. Lucas Torres",
    role: "Contador Senior",
    specialty: "Pymes · Monotributo",
    initials: "LT",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="py-28 bg-navy-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold-500" />
            <span className="text-gold-600 text-xs font-sans font-medium tracking-[0.25em] uppercase">
              Quiénes somos
            </span>
            <div className="h-px w-8 bg-gold-500" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-950 mb-4">
            Sobre el Estudio
          </h2>
        </div>

        {/* Two columns: text + stats */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <p className="text-navy-700 text-lg leading-relaxed mb-6">
              Estudio Bica es un estudio contable con más de 35 años de trayectoria,
              fundado con el objetivo de brindar un asesoramiento profesional cercano,
              claro y de alto nivel.
            </p>
            <p className="text-navy-600 leading-relaxed mb-6">
              Trabajamos con empresas, comercios, profesionales independientes y personas
              físicas, adaptando nuestros servicios a las necesidades particulares de cada
              cliente. Nuestra filosofía es simple: tratamos cada caso con la misma
              atención y rigor que aplicaríamos a nuestros propios asuntos.
            </p>
            <p className="text-navy-600 leading-relaxed">
              Estamos al día con la normativa contable e impositiva vigente, incorporando
              herramientas tecnológicas que nos permiten trabajar con eficiencia sin
              perder el trato personalizado que nos caracteriza.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-6 p-6 bg-white border border-navy-100 rounded-sm"
              >
                <span className="font-serif text-4xl font-bold text-navy-900 min-w-[80px]">
                  {stat.value}
                </span>
                <div className="h-10 w-px bg-gold-500/50" />
                <span className="text-navy-600 font-sans text-sm leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        {/* <div>
          <h3 className="font-serif text-2xl font-semibold text-navy-900 text-center mb-12">
            Nuestro Equipo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="text-center p-8 bg-white border border-navy-100 rounded-sm hover:shadow-md transition-shadow"
              >
                <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-navy-900 flex items-center justify-center">
                  <span className="font-serif text-2xl font-bold text-white">
                    {member.initials}
                  </span>
                </div>
                <h4 className="font-serif text-lg font-semibold text-navy-900 mb-1">
                  {member.name}
                </h4>
                <p className="text-gold-600 text-sm font-medium mb-2">{member.role}</p>
                <p className="text-navy-500 text-xs tracking-wide">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}