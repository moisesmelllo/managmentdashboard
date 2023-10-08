/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Mona Sans', 'sans'],
      },
      
      colors: {
        'purple': '#879FFF',
        'softblue': '#EFF3F4'
      },
    },
  },
  plugins: [],
}
