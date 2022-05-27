/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate');

const withExportImages = require('next-export-optimize-images');

module.exports = withExportImages({
  ...nextTranslate(),
  images: {
    domains: ['res.cloudinary.com'],
  },
});
