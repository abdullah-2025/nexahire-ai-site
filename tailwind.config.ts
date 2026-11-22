import type { Config } from 'tailwindcss'

/*
 * `theme.colors` (not `extend`) replaces Tailwind's default palette, so blue, teal,
 * sky and the other stock palettes cannot be used. Every color is a brand token
 * from src/styles/tokens.css; the channel forms support /opacity modifiers.
 */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: 'rgb(var(--white-ch) / <alpha-value>)',
      black: '#000000',
      ink: 'rgb(var(--ink-ch) / <alpha-value>)',
      'ink-hover': 'var(--ink-800)',
      canvas: 'var(--surface-canvas)',
      raised: 'var(--surface-raised)',
      subtle: 'var(--surface-subtle)',
      line: 'var(--border-hairline)',
      muted: 'var(--text-secondary)',
      taupe: 'rgb(var(--taupe-ch) / <alpha-value>)',
      'taupe-hover': 'var(--taupe-600)',
      'taupe-soft': 'var(--taupe-300)',
      'taupe-tint': 'var(--brand-taupe-tint)',
      'taupe-line': 'var(--brand-taupe-line)',
      bronze: 'rgb(var(--bronze-ch) / <alpha-value>)',
      'bronze-hover': 'var(--bronze-700)',
      'bronze-tint': 'var(--brand-accent-tint)',
      'on-dark': 'rgb(var(--stone-50-ch) / <alpha-value>)',
      'on-dark-muted': 'var(--on-dark-muted)',
      sand: 'var(--sand-500)',
      plum: 'var(--plum-600)',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        card: 'var(--shadow-card)',
        lift: 'var(--shadow-lift)',
      },
      backgroundImage: { hero: 'var(--hero-gradient)' },
      borderColor: { DEFAULT: 'var(--border-hairline)' },
    },
  },
  plugins: [],
} satisfies Config
