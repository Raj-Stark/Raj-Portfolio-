/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "rj-store": "url('./assets/portfolio/rjStore.png')",
        "rj-jobs": "url('./assets/portfolio/rjJobs.png')",
        "rj-pix": "url('./assets/portfolio/rjPix.png')",
      },
    },
    fontFamily: {
      signature: ["Oswald"],
    },
  },
  plugins: [],
};
