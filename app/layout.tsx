import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Family Shield | Pausa antes de pagar",
  description: "Un protocolo familiar sencillo para verificar solicitudes urgentes antes de actuar.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}