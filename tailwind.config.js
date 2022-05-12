module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      sans: ['"Montserrat"', "sans-serif"],
    },
    extend: {
      colors: {
        shark: {
          DEFAULT: "#202223",
          50: "#787F83",
          100: "#6E7578",
          200: "#5A6063",
          300: "#474B4E",
          400: "#333738",
          500: "#202223",
          600: "#050606",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        concrete: {
          DEFAULT: "#F2F2F2",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FFFFFF",
          500: "#F2F2F2",
          600: "#D6D6D6",
          700: "#BABABA",
          800: "#9E9E9E",
          900: "#828282",
        },
      },
    },
  },
  plugins: [],
};