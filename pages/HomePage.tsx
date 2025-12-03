import React from 'react';
import Hero from '../components/Home/Hero';
import Socials from '../components/Home/Socials';
import AboutSection from '../components/Home/AboutSection';
import ServicesSection from '../components/Home/ServicesSection';
import FeaturesSection from '../components/Home/FeaturesSection';
import PreventionSection from '../components/Home/PreventionSection';
import ContactSection from '../components/Home/ContactSection';
import TestimonialsSection from '../components/Home/TestimonialsSection';
import SeoExpansionSection from '../components/Home/SeoExpansionSection';
import ComparisonSection from '../components/Home/ComparisonSection';
import EnhancedSEO from '../components/SEO/EnhancedSEO';
import { COMPANY_NAME, CNPJ, ADDRESS_STREET, ADDRESS_CITY, ADDRESS_STATE, PHONE_LANDLINE } from '../constants';

const HomePage: React.FC = () => {
  const schema = {
      "@context": "https://schema.org",
      "@type": "RoofingContractor",
      "name": COMPANY_NAME,
      "legalName": "Alphaenge Fabricacao de Calhas e Telhados LTDA",
      "image": "https://loremflickr.com/800/600/roofing,logo",
      "url": "https://www.acquateccalhas.com.br",
      "telephone": "+554130535740",
      "email": "contato@acquateccalhas.com.br",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": ADDRESS_STREET,
        "addressLocality": ADDRESS_CITY,
        "addressRegion": ADDRESS_STATE,
        "postalCode": "81030-360",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -25.4808, 
        "longitude": -49.2719
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      },
      "priceRange": "$$",
      "taxID": CNPJ
  };

  return (
    <main>
      <EnhancedSEO 
        title="Acquatec Calhas e Telhados - Curitiba PR | Instalação e Manutenção"
        description="Especialista em calhas, rufos e telhados em Curitiba desde 1996. Instalação, manutenção, limpeza e reformas. Orçamento grátis! ☎ (41) 3053-5740"
        path="/"
        jsonLd={schema}
      />
      <Hero />
      <FeaturesSection />
      <AboutSection />
      <ServicesSection />
      <ComparisonSection />
      <TestimonialsSection />
      <PreventionSection />
      <Socials />
      <ContactSection />
      <SeoExpansionSection />
    </main>
  );
};

export default HomePage;