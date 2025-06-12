import type { Metadata, Viewport } from "next";
import "./globals.css";
import { StructuredData } from "@/components/ui/StructuredData";
import { ChatBot } from "@/components/ui/ChatBot";

export const metadata: Metadata = {
  title: "AI Agency - Automatización IA que Transforma Negocios",
  description: "Automatizamos tus procesos más críticos con Lead Generation Agents, Customer Support IA y N8N Workflows. +300% ROI garantizado en 30 días. Consulta gratuita.",
  keywords: [
    "automatización IA",
    "inteligencia artificial",
    "lead generation agents",
    "customer support IA",
    "N8N workflows",
    "automatización empresarial",
    "agentes IA",
    "transformación digital"
  ],
  authors: [{ name: "AI Agency" }],
  creator: "AI Agency",
  publisher: "AI Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aiagency.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "AI Agency - Automatización IA que Transforma Negocios",
    description: "Automatizamos tus procesos más críticos con Lead Generation Agents, Customer Support IA y N8N Workflows. +300% ROI garantizado en 30 días.",
    url: 'https://aiagency.com',
    siteName: 'AI Agency',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Agency - Automatización IA',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Agency - Automatización IA que Transforma Negocios",
    description: "Automatizamos tus procesos más críticos con IA. +300% ROI garantizado en 30 días.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <StructuredData />
      </head>
      <body className="antialiased">
        {children}
        {/* AI Chatbot Widget */}
        <ChatBot />
      </body>
    </html>
  );
}
