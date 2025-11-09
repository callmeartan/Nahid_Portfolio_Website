/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-heading)', 'var(--font-sans)', 'system-ui', 'sans-serif'],
        secondary: ['var(--font-secondary)', 'var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        blue: {
          50: "#eef2ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        green: {
          50: "#f0fdf4",
          100: "#dcfce7",
          500: "#22c55e",
          600: "#16a34a",
        },
        purple: {
          50: "#faf5ff",
          100: "#f3e8ff",
          500: "#a855f7",
          600: "#9333ea",
        },
        yellow: {
          50: "#fefce8",
          100: "#fef9c3",
          500: "#eab308",
          600: "#ca8a04",
        },
        red: {
          50: "#fef2f2",
          100: "#fee2e2",
          500: "#ef4444",
          600: "#dc2626",
        },
        border: "#3c3c4b",
        input: "#3c3c4b",
        ring: "#f0f0f0",
        background: "#0a0a0e",
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#f0f0f0",
          foreground: "#0a0a0e",
        },
        secondary: {
          DEFAULT: "#19191f",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#ff4444",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#19191f",
          foreground: "#b4b4be",
        },
        accent: {
          DEFAULT: "#f0f0f0",
          light: "#c8c8d2",
          foreground: "#0a0a0e",
        },
        popover: {
          DEFAULT: "#19191f",
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "#19191f",
          foreground: "#ffffff",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "pulse": {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        "pulse-slow": {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
        "float": {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        "spin-once": {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        "wiggle": {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        "bounce-custom": {
          '0%, 100%': { 
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': { 
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          },
        },
        "blink": {
          '0%': { opacity: 1 },
          '50%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-once": "spin-once 0.5s ease-in-out",
        "wiggle": "wiggle 1s ease-in-out infinite",
        "bounce-custom": "bounce-custom 1s infinite",
        "pulse-slow": "pulse-slow 3s infinite",
        "float": "float 4s ease-in-out infinite",
        "blink": "blink 0.9s infinite",
      },
      spacing: {
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.2)',
        'soft-lg': '0 5px 25px rgba(0, 0, 0, 0.25)',
        'glow': '0 0 20px rgba(255, 255, 255, 0.15)',
        'glow-lg': '0 0 30px rgba(255, 255, 255, 0.25)',
        'inner-sm': 'inset 0 1px 2px rgba(0, 0, 0, 0.15)',
      },
      transitionProperty: {
        'width': 'width',
        'height': 'height',
        'spacing': 'margin, padding',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.125rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0.01em' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '0.01em' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '0' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.01em' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.01em' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.01em' }],
        '5xl': ['3rem', { lineHeight: '1.16', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1.16', letterSpacing: '-0.02em' }],
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
} 