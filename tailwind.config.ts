import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-dark': '#0a0a0f',
        'cyber-darker': '#050508',
        'cyber-accent': '#00ff9d',
        'cyber-blue': '#00d4ff',
        'cyber-purple': '#b347ff',
      },
    },
  },
  plugins: [],
}

export default config
