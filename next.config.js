/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate');

const withPlugins = require('next-compose-plugins');
const withExportImages = require('next-export-optimize-images');

// module.exports = {
//   ...nextTranslate(),
// };

module.exports = withPlugins(
  [
    withExportImages,
    // your other plugins here
  ],
  {
    ...nextTranslate(),
  }
);
