// Datos estructurados Schema.org para Google
// Esto le dice a Google exactamente qué es el negocio, dónde está,
// qué servicios ofrece y cómo contactarlo → aparece en el Knowledge Panel

export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // ── 1. Negocio local ──────────────────────────────────────────────
      {
        "@type": "AccountingService",
        "@id": "https://www.estudiobica.com.uy/#business",
        name: "Estudio Bica",
        alternateName: "Estudio Contable Bica",
        url: "https://www.estudiobica.com.uy",
        logo: {
          "@type": "ImageObject",
          url: "https://www.estudiobica.com.uy/logo.png",
        },
        image: "https://www.estudiobica.com.uy/og-image.png",
        description:
          "Estudio contable en Montevideo especializado en contabilidad empresarial, asesoramiento impositivo, auditoría y consultoría financiera para empresas y personas físicas.",
        telephone: "26194399",
        email: "info@estudiobica.com.uy",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Orinoco 5198",
          addressLocality: "Malvin",
          addressRegion: "Montevideo",
          addressCountry: "UY",
        },
        geo: {
          "@type": "GeoCoordinates",
          // Reemplazá con las coordenadas exactas de Google Maps
          latitude: -34.8977,
          longitude: -56.1085,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        priceRange: "$$",
        currenciesAccepted: "UYU",
        areaServed: {
          "@type": "City",
          name: "Montevideo",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios Contables",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Contabilidad Empresarial",
                description:
                  "Registración contable, estados financieros y libros obligatorios.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Asesoramiento Impositivo",
                description:
                  "Liquidación de impuestos, IVA, IRAE, BPS y planificación fiscal.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Auditoría",
                description:
                  "Auditoría externa de estados contables con criterio independiente.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Consultoría Financiera",
                description:
                  "Análisis de rentabilidad, presupuestos y flujo de fondos.",
              },
            },
          ],
        },
        sameAs: [
          // Agregá tus perfiles cuando los tengas:
          // "https://www.linkedin.com/company/estudio-bica",
          // "https://www.google.com/maps?cid=TU_CID_DE_GOOGLE_MAPS",
        ],
      },

      // ── 2. Sitio web ──────────────────────────────────────────────────
      {
        "@type": "WebSite",
        "@id": "https://www.estudiobica.com.uy/#website",
        url: "https://www.estudiobica.com.uy",
        name: "Estudio Bica",
        publisher: {
          "@id": "https://www.estudiobica.com.uy/#business",
        },
        inLanguage: "es-UY",
      },

      // ── 3. Página principal ───────────────────────────────────────────
      {
        "@type": "WebPage",
        "@id": "https://www.estudiobica.com.uy/#webpage",
        url: "https://www.estudiobica.com.uy",
        name: "Estudio Bica | Contadores Públicos en Montevideo",
        isPartOf: {
          "@id": "https://www.estudiobica.com.uy/#website",
        },
        about: {
          "@id": "https://www.estudiobica.com.uy/#business",
        },
        description:
          "Estudio contable en Montevideo. Servicios de contabilidad, impuestos, auditoría y consultoría financiera para empresas y personas.",
        inLanguage: "es-UY",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}