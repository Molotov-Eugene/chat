/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx}',
    './.index.html'
  ],
  theme: {
    extend: {
      dropShadow: {
        'dark': [
          '0 4px 3px rgba(214, 211, 209, 0.05)',
          '0 2px 2px rgb(214, 211, 209, 0.04)',
        ]
      },
      colors: {
        'mainColor-1': '#fef3c7',
        'mainColor-2': '#ecfdf5',
        'mainColor-3': '#ffffff',
        'mainFontColor': '#3e5641',
        'mainColorDark-1': '#111827',
        'mainColorDark-2': '#334155',
        'mainCOlorDark-3': '#e2e8f0',
        'mainFontColorDark': '#d6d3d1',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      }
    },
  },
  darkMode: ['class'],
  plugins: [],
}

