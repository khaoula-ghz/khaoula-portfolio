/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        blush: {
          50: '#fdf2f4',
          100: '#fce7eb',
          200: '#f9d0d9',
          300: '#f4a9ba',
          400: '#ec7a97',
          500: '#e0527a',
          600: '#ce3664',
          700: '#ad2550',
          800: '#8f2245',
          900: '#7a2040',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf8f0',
          200: '#faeeda',
          300: '#f5dec0',
          400: '#eec79a',
          500: '#e5ac72',
          600: '#d99356',
          700: '#b57644',
          800: '#925f3c',
          900: '#764e34',
        },
        sage: {
          50: '#f4f7f4',
          100: '#e3ebe3',
          200: '#c7d9c7',
          300: '#9ebf9e',
          400: '#76a176',
          500: '#568556',
          600: '#426a42',
          700: '#365436',
          800: '#2d442d',
          900: '#263826',
        },
        mauve: {
          50: '#f9f5f7',
          100: '#f3ecf0',
          200: '#e9dae2',
          300: '#d7bfcb',
          400: '#c09eac',
          500: '#a87e8e',
          600: '#8f6274',
          700: '#764f5e',
          800: '#62444f',
          900: '#543b44',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
