/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    { test: /\\.(png|jp(e*)g|svg|gif)$/, use: ['file-loader'], }
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}