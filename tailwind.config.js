/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    animation: {
      "gradient-x": "gradient-x 8s ease-in-out infinite",
    },
    keyframes: {
      "gradient-x": {
        "0%, 100%": {
          "background-size": "400% 400%",
          "background-position": "left center",
        },
        "50%": {
          "background-size": "400% 400%",
          "background-position": "right center",
        },
      },
    },
  },

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  plugins: [],
};
