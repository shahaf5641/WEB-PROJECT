module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust this path to match your project's structure
  ],
  theme: {
    extend: {
      transform: {
        'preserve-3d': 'preserve-3d',
        'rotate-y-180': 'rotateY(180deg)',
      },
      perspective: {
        '1000': '1000px',
      },
      backface: {
        'hidden': 'backface-visibility: hidden',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.preserve-3d': {
          transformStyle: 'preserve-3d',
        },
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
      }

      addUtilities(newUtilities)
    },
  ],
}
