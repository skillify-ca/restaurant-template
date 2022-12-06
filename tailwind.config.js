/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-banner": "url('/public/assets/bannerbackground.png')",
      },
    },
  },
  plugins: [],
};
