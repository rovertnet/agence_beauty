/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      bgImage: {
        'bg-img':"url('./public/bgr.jpg')"
      }
    },
  },
  plugins: [],
}

