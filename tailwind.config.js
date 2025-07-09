/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
      },
      fontFamily: {
        sans: ['Vazirmatn', 'IRANSans', 'Tahoma', 'Arial', 'sans-serif'],
        persian: ['Vazirmatn', 'IRANSans', 'Tahoma', 'Arial', 'sans-serif'],
        latin: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-rtl'),
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.rtl': {
          direction: 'rtl',
        },
        '.ltr': {
          direction: 'ltr',
        },
        '.font-persian': {
          fontFamily: theme('fontFamily.persian'),
        },
        '.text-right-rtl': {
          textAlign: 'right',
          '[dir="ltr"] &': {
            textAlign: 'left',
          },
        },
        '.text-left-rtl': {
          textAlign: 'left',
          '[dir="ltr"] &': {
            textAlign: 'right',
          },
        },
        '.mr-auto-rtl': {
          marginRight: 'auto',
          '[dir="ltr"] &': {
            marginRight: '0',
            marginLeft: 'auto',
          },
        },
        '.ml-auto-rtl': {
          marginLeft: 'auto',
          '[dir="ltr"] &': {
            marginLeft: '0',
            marginRight: 'auto',
          },
        },
      }
      addUtilities(newUtilities)
    }
  ],
}