/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          dark: "#0F253A",
          medium: "#21394F",
          light: "#293952",
          lighter: "#45556C",
        },
      },
      width: {
        "90%": "90%",
      },
    },
  },
  plugins: [],
};
