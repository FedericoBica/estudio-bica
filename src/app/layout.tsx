import type { Metadata } from "next";
import "./globals.css";
import SchemaOrg from "../components/SchemaOrg";

const BASE_URL = "https://www.estudiobica.com.uy";

export const metadata: Metadata = {

    metadataBase: new URL(BASE_URL),

      // ── Título ──────────────────────────────────────────────────────────────
    title: {
      default: "Estudio Bica | Contadores Públicos en Montevideo, Uruguay",
      template: "%s | Estudio Bica",
    },
    // ── Descripción ─────────────────────────────────────────────────────────
    description:
      "Estudio contable en Montevideo. Servicios de contabilidad, impuestos, auditoría y consultoría financiera para empresas y personas. Más de 35 años de experiencia.",
    // ── Keywords ─────────────────────────────────────────────────────────────
    keywords: [
      "estudio contable Montevideo",
      "contador público Uruguay",
      "contador",
      "contador publico",
      "dgi",
      "impuestos",
      "contabilidad empresas Montevideo",
      "asesoramiento impositivo Uruguay",
      "auditoría Montevideo",
      "declaración jurada Uruguay",
      "BPS DGI Uruguay",
      "contador Malvin Montevideo",
      "estudio Bica",
    ],
    // ── Autor / Publisher ────────────────────────────────────────────────────
    authors: [{ name: "Estudio Bica", url: BASE_URL }],
    creator: "Estudio Bica",
    publisher: "Estudio Bica",
    // ── Canonical ────────────────────────────────────────────────────────────
    alternates: {
      canonical: "/",
    },
    // ── Open Graph (Facebook, LinkedIn, WhatsApp) ────────────────────────────
    openGraph: {
      type: "website",
      locale: "es_UY",
      url: BASE_URL,
      siteName: "Estudio Bica",
      title: "Estudio Bica | Contadores Públicos en Montevideo",
      description:
        "Contabilidad, impuestos y auditoría para empresas y personas en Montevideo. Más de 20 años de experiencia. Consultanos sin compromiso.",
      images: [
        {
          url: "/og-image.png", // 1200×630 px — creá esta imagen
          width: 1200,
          height: 630,
          alt: "Estudio Bica — Contadores Públicos Montevideo",
        },
      ],
    },
    // ── Twitter / X Card ────────────────────────────────────────────────────
    twitter: {
      card: "summary_large_image",
      title: "Estudio Bica | Contadores Públicos en Montevideo",
      description:
        "Contabilidad, impuestos y auditoría para empresas y personas en Montevideo.",
      images: ["/og-image.png"],
    },

    // ── Robots ───────────────────────────────────────────────────────────────
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    // ── Google Search Console ────────────────────────────────────────────────
    // 1. Entrá a https://search.google.com/search-console
    // 2. Agregá tu dominio → elegí "Etiqueta HTML"
    // 3. Copiá el valor del atributo content="" y pegalo acá:
    verification: {
      google: "REEMPLAZAR_CON_TU_CODIGO",
    },
  };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <SchemaOrg />
      </head>
      <body>{children}</body>
    </html>
  );
}