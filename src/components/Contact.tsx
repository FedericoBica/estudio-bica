"use client";
import { useState } from "react";
import { sendEmail } from "../actions/send-email";

export default function Contact() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    const result = await sendEmail(form);
  
    if (result.success) {
        setSent(true);
    } else {
        alert("Hubo un error al enviar el mensaje. Reintente más tarde.");
    }
  };

  return (
    <section id="contacto" className="py-28 bg-navy-950">
      {/* Gold top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mb-0" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold-500" />
            <span className="text-gold-400 text-xs font-sans font-medium tracking-[0.25em] uppercase">
              Hablemos
            </span>
            <div className="h-px w-8 bg-gold-500" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Contacto
          </h2>
          <p className="text-navy-300 text-lg font-light max-w-xl mx-auto">
            Completá el formulario y nos pondremos en contacto a la brevedad.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Info column */}
          <div className="md:col-span-2 flex flex-col gap-8">
            {[
              {
                icon: "📍",
                label: "Dirección",
                value: "Orinoco 5198, Malvin",
                sub: "Montevideo, Uruguay",
              },
              {
                icon: "📞",
                label: "Teléfono",
                value: "26194399",
                sub: "Lun–Vie 9 a 18 hs",
              },
              {
                icon: "✉️",
                label: "Email",
                value: "info@estudiobica.com.uy",
                sub: "",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-navy-800 rounded-sm flex items-center justify-center text-lg flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-navy-400 text-xs tracking-widest uppercase mb-1">
                    {item.label}
                  </p>
                  <p className="text-white font-medium">{item.value}</p>
                  {item.sub && (
                    <p className="text-navy-400 text-sm">{item.sub}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="border-t border-navy-800 pt-8">
              <p className="text-navy-400 text-xs tracking-widest uppercase mb-4">
                Horario de atención
              </p>
              <p className="text-navy-300 text-sm">
                Lunes a Viernes: 9:00 – 18:00 hs
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-gold-500/20 flex items-center justify-center mb-6">
                  <span className="text-3xl">✓</span>
                </div>
                <h3 className="font-serif text-2xl text-white mb-3">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-navy-400">
                  Nos pondremos en contacto a la brevedad.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-navy-400 text-xs tracking-widest uppercase mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      required
                      className="w-full bg-navy-900 border border-navy-700 focus:border-gold-500 text-white placeholder-navy-600 px-4 py-3 rounded-sm outline-none transition-colors text-sm"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-navy-400 text-xs tracking-widest uppercase mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-navy-900 border border-navy-700 focus:border-gold-500 text-white placeholder-navy-600 px-4 py-3 rounded-sm outline-none transition-colors text-sm"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-navy-400 text-xs tracking-widest uppercase mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                      className="w-full bg-navy-900 border border-navy-700 focus:border-gold-500 text-white placeholder-navy-600 px-4 py-3 rounded-sm outline-none transition-colors text-sm"
                      placeholder="+598 ..."
                    />
                  </div>
                  <div>
                    <label className="block text-navy-400 text-xs tracking-widest uppercase mb-2">
                      Asunto
                    </label>
                    <select
                      name="asunto"
                      value={form.asunto}
                      onChange={handleChange}
                      className="w-full bg-navy-900 border border-navy-700 focus:border-gold-500 text-white px-4 py-3 rounded-sm outline-none transition-colors text-sm"
                    >
                      <option value="">Seleccioná...</option>
                      <option value="contabilidad">Contabilidad</option>
                      <option value="impuestos">Impuestos</option>
                      <option value="auditoria">Auditoría</option>
                      <option value="consultoria">Consultoría</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-navy-400 text-xs tracking-widest uppercase mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full bg-navy-900 border border-navy-700 focus:border-gold-500 text-white placeholder-navy-600 px-4 py-3 rounded-sm outline-none transition-colors text-sm resize-none"
                    placeholder="Contanos en qué podemos ayudarte..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full py-4 bg-gold-500 hover:bg-gold-400 text-navy-950 font-medium text-sm tracking-widest uppercase transition-colors rounded-sm"
                >
                  Enviar Consulta
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}