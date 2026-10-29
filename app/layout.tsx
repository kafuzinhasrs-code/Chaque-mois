import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chaque Mois — Le bilan de vos clients, envoyé sans y penser",
  description:
    "Saisissez vos chiffres en une minute. Le bilan mensuel de chaque client part tout seul, le 1er du mois, à vos couleurs.",
  openGraph: {
    title: "Chaque Mois — Le bilan de vos clients, envoyé sans y penser",
    description:
      "Le bilan mensuel de vos clients, prêt en une minute et envoyé le 1er du mois.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${instrument.variable}`}>
      <body>{children}</body>
    </html>
  );
}
