import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords = [], 
  ogImage = '/og-image.jpg',
  ogType = 'website',
  canonical
}) => {
  const siteTitle = title ? `${title} | Kaleidon` : 'Kaleidon - Professional Web & App Development Services';
  const siteDescription = description || 'Transform your business with our professional web and mobile app development services. We create exceptional digital experiences that drive measurable results.';
  const siteKeywords = keywords.length > 0 
    ? keywords.join(', ') 
    : 'web development, app development, mobile apps, digital solutions, software development, react, nodejs';
  
  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
};

export default SEO;
