require('dotenv').config();
const enablePurge = process.env.ENABLE_PURGE || false;
module.exports = {
  theme: {
    extend: {
      spacing: {
        70: "20rem",
      },
      screens: {
        lg: { min: "1200px" },
        sm: { min: "640px", max: "767px" },
        md: { min: "768px", max: "1023px" },
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover", "focus"],
    },
  },
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [],
};
