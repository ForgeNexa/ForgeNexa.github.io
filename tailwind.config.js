/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        forge: {
          bg: '#0F1115',
          panel: '#161920',
          border: '#242933',
          hover: '#1E232E',
          accent: '#388BFD',
          text: '#C9D1D9',
          muted: '#8B949E',
          lightBg: '#F6F8FA',
          lightPanel: '#FFFFFF',
          lightBorder: '#D0D7DE',
          lightText: '#24292F',
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
