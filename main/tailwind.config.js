/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBrown: '#6D2E00',
        customSkin: '#E2C8B5',
        customPeach: '#F26565',
        customLigthBrown: '#B16F3F',
        fed8bc: '#FED8BC',
        ffbe82: '#FFBE82',
        ffe485: '#FFE485',
        c1a43e: '#C1A43E',
        customCream: '#EFEAE6',
      },
      height: {
        500: '500px',
        400: '400px',
      },
      boxShadow: {
        'left-right-bottom': '5px 5px 5px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 25px 50px -12px rgba(0, 0, 0, 0.75)',
      },
      borderRadius: {
        'tl-lg': '0.5rem',
      },
    },
  },
  plugins: [],
}
