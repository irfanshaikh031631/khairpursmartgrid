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
        grid: {
          darkest: '#080E1E',
          darker: '#0D1527',
          card: '#131F37',
          border: '#1E2D4A',
          cyan: '#00F0FF',
          blue: '#2563EB',
          emerald: '#10B981',
          amber: '#F59E0B',
          rose: '#EF4444',
          subtle: '#94A3B8',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 240, 255, 0.35)',
        'glow-blue': '0 0 25px -5px rgba(37, 99, 235, 0.4)',
        'glow-rose': '0 0 25px -5px rgba(239, 68, 68, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
      }
    },
  },
  plugins: [],
}
