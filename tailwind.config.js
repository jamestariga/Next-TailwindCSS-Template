/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        menlo: [
          'Menlo',
          ' Monaco',
          'Lucida Console',
          'Liberation Mono',
          'DejaVu Sans Mono',
          'Bitstream Vera Sans Mono',
          'Courier New',
          'monospace',
        ],
      },
      screens: {
        'max2xl': { max: '1535px' },

        maxXl: { max: '1279px' },

        maxLg: { max: '1023px' },

        maxMd: { max: '767px' },

        maxSm: { max: '639px' },
      },
    },
  },
  plugins: [],
}
