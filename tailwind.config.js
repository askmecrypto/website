module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.{html,js}"
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8B5CF6", // violet-500 - dyor.net inspired purple
          50: "#F5F3FF", // violet-50
          100: "#EDE9FE", // violet-100
          500: "#8B5CF6", // violet-500
          600: "#7C3AED", // violet-600
          700: "#6D28D9", // violet-700
          800: "#5B21B6", // violet-800
          900: "#4C1D95", // violet-900
        },
        secondary: {
          DEFAULT: "#6B7280", // gray-500
          50: "#F9FAFB", // gray-50
          100: "#F3F4F6", // gray-100
          200: "#E5E7EB", // gray-200
          300: "#D1D5DB", // gray-300
          400: "#9CA3AF", // gray-400
          500: "#6B7280", // gray-500
          600: "#4B5563", // gray-600
          700: "#374151", // gray-700
          800: "#1F2937", // gray-800
          900: "#111827", // gray-900
        },
        accent: {
          DEFAULT: "#06B6D4", // cyan-500 - electric blue like dyor.net
          50: "#ECFEFF", // cyan-50
          100: "#CFFAFE", // cyan-100
          200: "#A5F3FC", // cyan-200
          300: "#67E8F9", // cyan-300
          400: "#22D3EE", // cyan-400
          500: "#06B6D4", // cyan-500
          600: "#0891B2", // cyan-600
          700: "#0E7490", // cyan-700
        },
        background: {
          light: "#FFFFFF", // white for light theme
          dark: "#000000", // black for dark theme
        },
        surface: {
          light: "#F9FAFB", // gray-50 for light theme
          dark: "#111827", // gray-900 for dark theme
        },
        card: {
          light: "#FFFFFF", // white for light theme cards
          dark: "#111827", // gray-900 for dark theme cards
        },
        text: {
          primary: {
            light: "#111827", // gray-900 for light theme
            dark: "#F9FAFB", // gray-50 for dark theme
          },
          secondary: {
            light: "#6B7280", // gray-500 for light theme
            dark: "#D1D5DB", // gray-300 for dark theme
          },
        },
        border: {
          light: "#E5E7EB", // gray-200 for light theme
          dark: "#374151", // gray-700 for dark theme
        },
        success: {
          DEFAULT: "#10B981", // emerald-500 - bright green
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600
          700: "#047857", // emerald-700
        },
        warning: {
          DEFAULT: "#F59E0B", // amber-500
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600
          700: "#B45309", // amber-700
        },
        error: {
          DEFAULT: "#EF4444", // red-500
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600
          700: "#B91C1C", // red-700
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'minimal-light': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'minimal-dark': '0 1px 3px rgba(0, 0, 0, 0.3)',
        'card-light': '0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)',
        'card-dark': '0 4px 6px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2)',
        'elevated-light': '0 8px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
        'elevated-dark': '0 8px 15px rgba(0, 0, 0, 0.4), 0 4px 6px rgba(0, 0, 0, 0.3)',
        'neon': '0 0 20px rgba(139, 92, 246, 0.5)', // purple glow
        'neon-cyan': '0 0 20px rgba(6, 182, 212, 0.5)', // cyan glow
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-subtle': 'pulseSubtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'theme-transition': 'themeTransition 0.3s ease-out',
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
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(139, 92, 246, 0.8)' },
        },
        themeTransition: {
          '0%': { opacity: '0.8' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}