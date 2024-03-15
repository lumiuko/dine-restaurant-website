/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        beaver: '#9e7f66',
        mirage: '#17192b',
        gray: '#4C4C4C',
        line: '#8E8E8E',
        red: '#B54949',
        'cod-gray': '#111111',
        'ebony-clay': '#242b37',
        'shuttle-gray': '#5c6779',
        'light-gray': '#f1f2f3'
      }
    },
    fontFamily: {
      sans: ['League Spartan', 'sans-serif']
    },
    fontSize: {
      xl: '5rem', // 80px
      l: '3rem', // 48px
      m: '1.25rem', // 20px
      s: '1.0625rem', // 17px
      'body-2': '1.25rem', // 20px
      'body-1': '1rem' // 16px
    },
    lineHeight: {
      xl: '5rem', // 80px
      l: '3rem', // 48px
      m: '1.5rem', // 24px
      s: '1.75rem', // 28px
      'body-2': '1.875rem', // 30px
      'body-1': '1.625rem' // 16px
    },
    letterSpacing: {
      xl: '-1px',
      l: '-0.5px',
      m: '-0.25px',
      s: '2.5px'
    },
    maxWidth: {
      container: '1110px'
    },
    backgroundImage: {
      'hero-mobile': 'url("/homepage/hero-bg-mobile@2x.jpg")',
      'hero-tablet': 'url("/homepage/hero-bg-tablet@2x.jpg")',
      'hero-desktop': 'url("/homepage/hero-bg-desktop-full.jpg")',
      'booking-mobile': 'url("/booking/hero-bg-mobile@2x.jpg")',
      'booking-tablet': 'url("/booking/hero-bg-tablet@2x.jpg")',
      'booking-desktop': 'url("/booking/hero-bg-desktop@2x.jpg")',
      'ready-mobile': 'url("/homepage/ready-bg-mobile@2x.jpg")',
      'ready-tablet': 'url("/homepage/ready-bg-tablet@2x.jpg")',
      'ready-desktop': 'url("/homepage/ready-bg-desktop@2x.jpg")'
    },
    boxShadow: {
      default: '0 75px 100px -50px rgb(56 66 85 / 50%)',
      dropdown: '0 15px 25px 0 rgb(56 66 85 / 25%)'
    },
    screens: {
      md: '768px',
      xl: '1280px'
    }
  },
  plugins: []
}
