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
  noindex = false,
  schema = null,
}) => {
  useEffect(() => {
    // 1. Set Page Title
    const siteName = 'DMDY — 360° Digital Growth Partner & Performance Marketing Agency';
    const fullTitle = title
      ? (title.includes('DMDY') ? title : `${title} — DMDY`)
      : siteName;
    const prevTitle = document.title;
    document.title = fullTitle;

    // 2. Resolve image and full canonical URL
    const ogImageUrl = image
      ? getOpenGraphImage(image)
      : 'https://www.digimedigiyou.com/favicon.png';

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
    setMetaTag('name', 'title', fullTitle);
    setMetaTag('name', 'description', finalDescription);

    // Robots meta directive
    if (noindex) {
      setMetaTag('name', 'robots', 'noindex, nofollow');
    } else {
      setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    }

    // OpenGraph Meta (WhatsApp, LinkedIn, Facebook, Slack, iMessage)
    setMetaTag('property', 'og:type', type === 'article' ? 'article' : 'website');
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', finalDescription);
    setMetaTag('property', 'og:image', ogImageUrl);
    setMetaTag('property', 'og:image:width', '1200');
    setMetaTag('property', 'og:image:height', '630');
    setMetaTag('property', 'og:image:alt', title || 'DMDY Digital Growth');
    setMetaTag('property', 'og:url', currentUrl);
    setMetaTag('property', 'og:site_name', 'DMDY');

    // Twitter Card Meta
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', finalDescription);
    setMetaTag('name', 'twitter:image', ogImageUrl);

    // Safe ISO date formatter
    const safeIsoDate = (val) => {
      if (!val) return new Date().toISOString();
      const d = new Date(val);
      return isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
    };

    // Canonical link
    setLinkTag('canonical', currentUrl);

    // Dynamic Article Meta (if type === 'article')
    if (type === 'article') {
      if (author) setMetaTag('property', 'article:author', author);
      if (publishedTime) setMetaTag('property', 'article:published_time', safeIsoDate(publishedTime));
      if (Array.isArray(tags) && tags.length > 0) {
        setMetaTag('property', 'article:tag', tags.join(', '));
      }
    }

    // 3. Inject Google Rich Snippet (Schema.org JSON-LD)
    let schemaScript = document.getElementById('dynamic-page-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'dynamic-page-schema';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    if (schema) {
      schemaScript.textContent = JSON.stringify(schema);
    } else if (type === 'article') {
      const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        'headline': title,
        'description': finalDescription,
        'image': [ogImageUrl],
        'datePublished': safeIsoDate(publishedTime),
        'dateModified': safeIsoDate(publishedTime),
        'author': {
          '@type': 'Person',
          'name': author,
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'DMDY - Digi Me Digi You',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://www.digimedigiyou.com/favicon.png',
          },
        },
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': currentUrl,
        },
      };
      schemaScript.textContent = JSON.stringify(articleSchema);
    } else if (type === 'service') {
      const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': title,
        'description': finalDescription,
        'provider': {
          '@type': 'Organization',
          'name': 'DMDY - Digi Me Digi You',
          'url': 'https://www.digimedigiyou.com',
          'logo': 'https://www.digimedigiyou.com/favicon.png',
        },
        'areaServed': 'Worldwide',
        'serviceType': title,
      };
      schemaScript.textContent = JSON.stringify(serviceSchema);
    }

    // Cleanup when unmounting: restore default agency title & reset schema
    return () => {
      document.title = prevTitle;
      const scriptToRemove = document.getElementById('dynamic-page-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [title, description, image, url, type, author, publishedTime, tags, noindex, schema]);

  return null;
};

export default SEO;
