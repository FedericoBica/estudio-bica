import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Estudio Bica | Contadores Públicos",
  description:
    "Estudio Bica — Servicios contables, impositivos y de auditoría con más de 20 años de trayectoria. Comprometidos con la confianza.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}