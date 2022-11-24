/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  safelist:[
    // NOTE: Safelist Tailwind max-width classes 
    //       https://tailwindcss.com/docs/max-width
    {
      pattern: /max\-w\-*/,
      variants: ['sm']
    }
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
