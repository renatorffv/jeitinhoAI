import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import { site } from "@/components/site";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const body = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: "JeitinhoAI — Tecnologia com IA, do seu jeito",
  description:
    "Sites simples, apps com agentes de IA, atendimento com IA no WhatsApp e soluções sob medida para o seu negócio.",
  openGraph: {
    title: "JeitinhoAI — Tecnologia com IA, do seu jeito",
    description: "De um jeitinho aí no seu negócio: sites, agentes de IA e atendimento 24h no WhatsApp.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#112a4b",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
