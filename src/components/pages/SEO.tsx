import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Andrel Carvalho - Desenvolvedor Web Full Stack",
  description = "Portfólio de Andrel Carvalho, desenvolvedor web fullstack especializado em React, Node.js, Next.js, TypeScript. Criando experiências digitais únicas e inovadoras.",
  keywords = "desenvolvedor web, full stack, react, react native, node.js, typescript, javascript, frontend, backend, next.js, portfólio, desenvolvedor brasileiro",
  image = "/andrel.jpeg",
  url = "https://andrelcarvalho.dev",
  type = "website",
}) => {
  const fullTitle = `${title} | Portfolio`;
  const siteName = "Andrel Carvalho - Desenvolvedor Web";

  // Dados estruturados JSON-LD
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Andrel Carvalho",
    jobTitle: "Desenvolvedor Web Full Stack",
    description: description,
    url: url,
    sameAs: [
      "https://github.com/SpeedyxBR",
      "https://linkedin.com/in/andrel-carvalho",
      "https://andrelcarvalho.dev",
    ],
    knowsAbout: [
      "React",
      "TypeScript",
      "Node.js",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "BR",
      addressRegion: "São Paulo",
    },
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang="pt-BR" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Andrel Carvalho" />
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta name="language" content="Portuguese" />
      <meta name="geo.region" content="BR-SP" />
      <meta name="geo.placename" content="São Paulo" />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={`https://andrelcarvalho.dev${image}`}
      />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={`https://andrelcarvalho.dev${image}`}
      />
      <meta name="twitter:creator" content="@andrel_carvalho" />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#3B82F6" />
      <meta name="msapplication-TileColor" content="#3B82F6" />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    </Helmet>
  );
};

export default SEO;
