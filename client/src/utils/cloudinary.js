/**
 * Cloudinary Intelligent Image Optimization & Responsive Formatting Utility
 * Automatically delivers modern next-gen image formats (AVIF / WebP) with adaptive compression.
 */

/**
 * Transforms any Cloudinary image URL with optimal format, compression, and sizing.
 *
 * @param {string} url - Original image URL
 * @param {Object} options - Transformation options
 * @param {number} [options.width] - Target width in pixels
 * @param {number} [options.height] - Target height in pixels
 * @param {string} [options.crop='fill'] - Crop mode: 'fill', 'scale', 'fit', 'thumb', 'limit'
 * @param {string} [options.gravity='auto'] - Focus detection: 'auto', 'face', 'center'
 * @param {string} [options.quality='auto'] - Adaptive quality compression (auto, auto:best, auto:good, auto:eco)
 * @param {string} [options.format='auto'] - Image format (auto delivers AVIF or WebP based on browser support)
 * @returns {string} - Optimized URL with transformations
 */
export const getOptimizedImage = (url, options = {}) => {
  if (!url || typeof url !== 'string') return '';

  // If width is passed as a direct number for backward compatibility: getOptimizedImage(url, 600)
  if (typeof options === 'number') {
    options = { width: options };
  }

  const {
    width,
    height,
    crop = 'fill',
    gravity = 'auto',
    quality = 'auto',
    format = 'auto',
  } = options;

  // Verify if it's a valid Cloudinary URL
  if (!url.includes('cloudinary.com') || !url.includes('/upload/')) {
    return url;
  }

  // Construct transformation parts
  const transformParts = [
    `f_${format}`,
    `q_${quality}`,
  ];

  if (width) transformParts.push(`w_${Math.round(width)}`);
  if (height) transformParts.push(`h_${Math.round(height)}`);
  if (crop && (width || height)) transformParts.push(`c_${crop}`);
  if (gravity && (width || height) && crop === 'fill') transformParts.push(`g_${gravity}`);

  const transformString = transformParts.join(',');

  // Pattern: https://res.cloudinary.com/[cloud_name]/image/upload/(optional existing transforms/)v[version]/[id]
  const uploadIndex = url.indexOf('/upload/');
  if (uploadIndex === -1) return url;

  const prefix = url.substring(0, uploadIndex + '/upload/'.length);
  const suffix = url.substring(uploadIndex + '/upload/'.length);

  // Check if there are already existing transformations after /upload/ (e.g., /upload/f_auto,q_auto/v1234/...)
  const versionOrIdMatch = suffix.match(/(v\d+\/.*|[a-zA-Z0-9_\-.]+\.[a-zA-Z0-9]+$)/);
  if (versionOrIdMatch) {
    const cleanSuffix = versionOrIdMatch[0];
    return `${prefix}${transformString}/${cleanSuffix}`;
  }

  return `${prefix}${transformString}/${suffix}`;
};

/**
 * Generates a responsive srcset attribute for <img> tags across multiple screen widths.
 *
 * @param {string} url - Original image URL
 * @param {number[]} [widths=[360, 640, 768, 1024, 1280]] - Array of target widths
 * @param {Object} [options={}] - Additional transformation options (height ratio, crop, etc.)
 * @returns {string} - Complete srcset string (e.g. "url 360w, url 640w, ...")
 */
export const getResponsiveSrcSet = (url, widths = [360, 640, 768, 1024, 1280], options = {}) => {
  if (!url || typeof url !== 'string') return '';
  if (!url.includes('cloudinary.com') || !url.includes('/upload/')) return '';

  return widths
    .map((w) => `${getOptimizedImage(url, { ...options, width: w })} ${w}w`)
    .join(', ');
};

/**
 * Generates an OpenGraph (1200x630) social share preview image URL.
 * Matches exact aspect ratio and dimensions required by LinkedIn, WhatsApp, Facebook, and X/Twitter.
 *
 * @param {string} url - Original image URL
 * @returns {string} - 1200x630 social card image
 */
export const getOpenGraphImage = (url) => {
  if (!url) return 'https://www.digimedigiyou.com/favicon.png';
  return getOptimizedImage(url, {
    width: 1200,
    height: 630,
    crop: 'fill',
    gravity: 'auto',
    quality: 'auto:good',
    format: 'auto',
  });
};
