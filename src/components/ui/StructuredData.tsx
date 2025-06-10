export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI Agency",
    "description": "Automatización IA que transforma negocios con Lead Generation Agents, Customer Support IA y N8N Workflows",
    "url": "https://aiagency.com",
    "logo": "https://aiagency.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+52-55-1234-5678",
      "contactType": "Customer Service",
      "availableLanguage": ["Spanish", "English"]
    },
    "sameAs": [
      "https://linkedin.com/company/aiagency",
      "https://twitter.com/aiagency"
    ],
    "service": [
      {
        "@type": "Service",
        "name": "Lead Generation Agents",
        "description": "Agentes IA que identifican, califican y nutren prospectos automáticamente"
      },
      {
        "@type": "Service", 
        "name": "Customer Support IA",
        "description": "Asistentes conversacionales que resuelven el 80% de consultas instantáneamente"
      },
      {
        "@type": "Service",
        "name": "N8N Automations", 
        "description": "Workflows inteligentes que conectan todas tus herramientas y procesos"
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AI Agency",
    "url": "https://aiagency.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://aiagency.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
    </>
  );
} 