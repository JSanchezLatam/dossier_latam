import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dossier LATAM",
  description: "Dossier interactivo para clientes potenciales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
