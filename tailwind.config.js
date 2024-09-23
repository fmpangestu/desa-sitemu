/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'loop-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-500%)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        loop:'loop-scroll 20s linear infinite',
      },
      clipPath: {
        diagonal: 'polygon(0 0, 100% 0, 100% 70%, 0% 100%)',
      },
    },
  },
  plugins: [require('daisyui')],
};
