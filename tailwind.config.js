module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'instagram-angle':
          "url('https://res.cloudinary.com/dt3k2apqd/image/upload/v1654161769/Mo%C3%ABt%20Lashes/promos/Instagram_start_shta2t.gif')",
        'instagram-linear':
          "url('https://res.cloudinary.com/dt3k2apqd/image/upload/v1654082252/Mo%C3%ABt%20Lashes/promos/Instagram_promo_img_3_czpf5e.jpg')",
        'pink-on-pink':
          "url('https://res.cloudinary.com/dt3k2apqd/image/upload/v1654084513/Mo%C3%ABt%20Lashes/promos/pink-pink_bjpdw3.png')",
        'black-on-pink':
          "url('https://res.cloudinary.com/dt3k2apqd/image/upload/v1654084532/Mo%C3%ABt%20Lashes/promos/black-pink_nbhbew.png')",
        'pink-on-black':
          "url('https://res.cloudinary.com/dt3k2apqd/image/upload/v1654084524/Mo%C3%ABt%20Lashes/promos/pink-black_znsbxj.png')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
