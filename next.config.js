/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate');

// const withExportImages = require('next-export-optimize-images');

module.exports = {
  ...nextTranslate(),
  images: {
    minimumCacheTTL: 31536000,
    domains: ['res.cloudinary.com'],
  },
};
