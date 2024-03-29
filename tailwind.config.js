/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hex': "url('/hexbgv2.png')",
      },
      colors: {
        'nav-color': "rgba(35, 33, 33, 0.72)",
      },
      fontFamily: {
        ndLogos: ["ND-Logos", 'sans-serif'],
        tourney900: ["Tourney-Black", 'sans-serif'],
        tourney700: ["Tourney-Bold", 'sans-serif'],
        wokStencilCaps: ["Wok-Stencil-Caps", 'sans-serif'],
        homemadeApple: ["Homemade-Apple", 'sans-serif'],
        handWritingBlack: ["Handwriting-Black", 'sans-serif'],
        mechsuit: ["Mechsuit", 'sans-serif'],
      },
      transitionTimingFunction: {
        'clock-tick': 'cubic-bezier(.4,2.08,.55,.44);'
      }
    },
  },
  plugins: [],
}
