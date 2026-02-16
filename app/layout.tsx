import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Latam Digital - Consultoría en Tecnología e Innovación",
  description:
    "Empresa especializada en consultoría tecnológica, gestión digital 360 e innovación digital aplicada. 19 años de experiencia transformando la tecnología en valor de negocio en Latinoamérica.",
  keywords: [
    "consultoría tecnológica",
    "transformación digital",
    "inteligencia artificial",
    "IA",
    "bioinformática",
    "innovación digital",
    "Panamá",
    "Latinoamérica",
  ],
  authors: [{ name: "Latam Digital", url: "https://dossier-latam.vercel.app" }],
  openGraph: {
    title: "Latam Digital - Consultoría en Tecnología e Innovación",
    description:
      "19 años transformando la tecnología en valor real para el negocio",
    url: "https://dossier-latam.vercel.app",
    siteName: "Latam Digital",
    locale: "es_PA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Latam Digital - Consultoría en Tecnología e Innovación",
    description:
      "19 años transformando la tecnología en valor real para el negocio",
  },
  robots: {
    index: true,
    follow: true,
  },
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
