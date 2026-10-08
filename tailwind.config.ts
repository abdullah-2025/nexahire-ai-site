import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'rgb(var(--foreground-channels) / <alpha-value>)',
        primary: 'var(--primary)',
        secondary: 'rgb(var(--secondary-channels) / <alpha-value>)',
        accent: 'rgb(var(--accent-channels) / <alpha-value>)',
        border: 'var(--border)',
        'muted-foreground': 'var(--muted-foreground)',
        'surface-tint': 'var(--surface-tint)',
      },
      boxShadow: { teal: 'var(--shadow-card)' },
      borderColor: { DEFAULT: 'var(--border)' },
    },
  },
  plugins: [],
} satisfies Config
