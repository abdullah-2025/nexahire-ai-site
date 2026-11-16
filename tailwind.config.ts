import type { Config } from 'tailwindcss'

const channels = (name: string) => `rgb(var(--${name}-channels) / <alpha-value>)`

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: channels('foreground'),
        body: 'var(--body)',
        primary: channels('primary'),
        'primary-hover': 'var(--primary-hover)',
        secondary: channels('secondary'),
        accent: channels('accent'),
        'accent-text': 'var(--accent-text)',
        'accent-tint': 'var(--accent-tint)',
        border: 'var(--border)',
        control: 'var(--control-border)',
        focus: 'var(--focus)',
        'muted-foreground': 'var(--muted-foreground)',
        'surface-tint': 'var(--surface-tint)',
        white: channels('white'),
        panel: channels('panel'),
        'panel-2': channels('panel-2'),
        'panel-text': channels('panel-text'),
        'panel-muted': channels('panel-muted'),
        'panel-link': channels('panel-link'),
        success: 'var(--success)',
        warning: 'var(--warning)',
        danger: 'var(--danger)',
        info: 'var(--info)',
      },
      boxShadow: { teal: 'var(--shadow-card)' },
      borderColor: { DEFAULT: 'var(--border)' },
    },
  },
  plugins: [],
} satisfies Config
