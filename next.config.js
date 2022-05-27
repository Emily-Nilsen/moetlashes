/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate');

// const withExportImages = require('next-export-optimize-images');

module.exports = {
  ...nextTranslate(),
  images: {
    domains: ['res.cloudinary.com'],
  },
};
