import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_NAME, FULL_URL } from '../../constants';

interface EnhancedSEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  jsonLd?: Record<string, any>;
  breadcrumbs?: Array<{ name: string; item: string }>;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({ 
  title, 
  description, 
  path, 
  image = "https://loremflickr.com/1200/630/roof,house", 
  jsonLd,
  breadcrumbs 
}) => {
  const url = `${FULL_URL}${path}`;

  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${FULL_URL}${crumb.item}`
    }))
  } : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={COMPANY_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="BR-PR" />
      <meta name="geo.placename" content="Curitiba" />
      <meta name="geo.position" content="-25.4808;-49.2719" />
      <meta name="ICBM" content="-25.4808, -49.2719" />

      {/* Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
      
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default EnhancedSEO;