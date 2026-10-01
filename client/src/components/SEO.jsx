import { useEffect } from 'react';
import { getOpenGraphImage } from '../utils/cloudinary';

/**
 * Dynamic SEO & OpenGraph Management Component
 * Automatically injects per-page meta tags, OpenGraph previews (for LinkedIn, WhatsApp, Facebook),
 * Twitter Cards, canonical links, and Schema.org BlogPosting structured data.
 */
const SEO = ({
  title,
  description,
  image,
  url,
  type = 'website',
  author = 'DMDY Intelligence',
  publishedTime,
  tags = [],
}) => {
  useEffect(() => {
    // 1. Set Page Title
    const siteName = 'DMDY — 360° Digital Growth Partner';
    const fullTitle = title ? `${title} — DMDY Intelligence` : siteName;
    const prevTitle = document.title;
    document.title = fullTitle;

    // 2. Resolve image and full canonical URL
    const ogImageUrl = image
      ? getOpenGraphImage(image)
      : 'https://dmdy.in/favicon.png';

    const currentUrl = url || window.location.href;
    const finalDescription = description || 'A 360° performance digital marketing consultancy driving predictable revenue through SEO, paid ads, and conversion optimization.';

    // Helper to safely set or create a meta tag
    const setMetaTag = (attributeName, attributeValue, contentValue) => {
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentValue);
      return element;
    };

    // Helper to set or create link tag
    const setLinkTag = (rel, href) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
      return element;
    };

    // Standard Search Meta
    setMetaTag('name', 'description', finalDescription);

    // OpenGraph Meta (WhatsApp, LinkedIn, Facebook, Slack, iMessage)
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', finalDescription);
    setMetaTag('property', 'og:image', ogImageUrl);
    setMetaTag('property', 'og:image:width', '1200');
    setMetaTag('property', 'og:image:height', '630');
    setMetaTag('property', 'og:image:alt', title || 'DMDY Growth Analysis');
    setMetaTag('property', 'og:url', currentUrl);
    setMetaTag('property', 'og:site_name', 'DMDY');

    // Twitter Card Meta
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', finalDescription);
    setMetaTag('name', 'twitter:image', ogImageUrl);

    // Canonical link
    setLinkTag('canonical', currentUrl);

    // Dynamic Article Meta (if type === 'article')
    if (type === 'article') {
      if (author) setMetaTag('property', 'article:author', author);
      if (publishedTime) setMetaTag('property', 'article:published_time', new Date(publishedTime).toISOString());
      tags.forEach((tag) => setMetaTag('property', 'article:tag', tag));
    }

    // 3. Inject Google Rich Snippet (Schema.org JSON-LD BlogPosting)
    let schemaScript = document.getElementById('dynamic-page-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'dynamic-page-schema';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    if (type === 'article') {
      const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        'headline': title,
        'description': finalDescription,
        'image': [ogImageUrl],
        'datePublished': publishedTime ? new Date(publishedTime).toISOString() : new Date().toISOString(),
        'dateModified': publishedTime ? new Date(publishedTime).toISOString() : new Date().toISOString(),
        'author': {
          '@type': 'Person',
          'name': author,
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'DMDY - Digi Me Digi You',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://dmdy.in/favicon.png',
          },
        },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': currentUrl,
        },
      };
      schemaScript.textContent = JSON.stringify(articleSchema);
    }

    // Cleanup when unmounting: restore default agency title & reset schema
    return () => {
      document.title = prevTitle;
      const scriptToRemove = document.getElementById('dynamic-page-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [title, description, image, url, type, author, publishedTime, tags]);

  return null;
};

export default SEO;
