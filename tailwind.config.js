/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        warning: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 }
        },
        appear: {
          '0%': { opacity: 0, transform: 'translate3d(0px, 0px, 0px) scale3d(0.8, 0.8, 0.8) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)' },
          '100%': { transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 1 }
        }
      },
      animation: {
        appear: 'appear 0.5s ease-in-out 1'
      }
    },
  },
  plugins: [],
}

