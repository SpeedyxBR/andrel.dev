import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../index.css";
import "../styles/background-dark.scss";
import "../styles/background-light.scss";
import "../styles/ipad-responsive.scss";
import "../styles/ipad-optimizations.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrel Carvalho - Desenvolvedor Web Full Stack",
  description: "Portfólio de Andrel Carvalho, desenvolvedor web fullstack especializado em React, Node.js, Next.js, TypeScript. Criando experiências digitais únicas e inovadoras.",
  keywords: "desenvolvedor web, full stack, react, react native, node.js, typescript, javascript, frontend, backend, next.js, portfólio, desenvolvedor brasileiro",
  authors: [{ name: "Andrel Carvalho" }],
  creator: "Andrel Carvalho",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://andrelcarvalho.dev",
    title: "Andrel Carvalho - Desenvolvedor Web Full Stack | Portfolio",
    description: "Portfólio de Andrel Carvalho, desenvolvedor web fullstack especializado em React, Node.js, Next.js, TypeScript. Criando experiências digitais únicas e inovadoras.",
    siteName: "Andrel Carvalho - Desenvolvedor Web",
    images: [
      {
        url: "https://andrelcarvalho.dev/andrel.jpeg",
        width: 1200,
        height: 630,
        alt: "Andrel Carvalho",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrel Carvalho - Desenvolvedor Web Full Stack | Portfolio",
    description: "Portfólio de Andrel Carvalho, desenvolvedor web fullstack especializado em React, Node.js, Next.js, TypeScript. Criando experiências digitais únicas e inovadoras.",
    images: ["https://andrelcarvalho.dev/andrel.jpeg"],
    creator: "@andrel_carvalho",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://andrelcarvalho.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
