/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'light-green': '#76B947',
        'olive-green': '#8A9A5B',
        'earth-brown': '#A87048',
        'soft-beige': '#D3C0A6',
        'sun-yellow': '#F2C14E',
        'vibrant-orange': '#E67E22',
      },
    },
  },
  plugins: [],
};
