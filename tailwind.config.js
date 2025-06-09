/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        'lg': '0 2px 4px rgba(0, 0, 0, 0.75)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function({ addUtilities, theme }) {
      const textShadow = theme('textShadow');
      const utilities = Object.entries(textShadow).map(([key, value]) => ({
        [`.text-shadow-${key}`]: {
          textShadow: value,
        },
      }));
      addUtilities(utilities, ['responsive', 'hover']);
    }
  ],
}
