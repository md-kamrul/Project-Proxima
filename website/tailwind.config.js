/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "comic_neue": [
        "Comic Neue", "cursive "
      ],
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

