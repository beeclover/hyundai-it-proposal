const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    plugin(function ({ addComponents }) {
      addComponents({
        '.inset-center': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
      });
    }),
  ],
};
