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
        green: '#C0DF85',
        orange: '#FF8811',
        blueOcean: '#011627',
        greenBush: '#4B644A',
      },
      screens: {
        'sm': '340px'
      },
    },
  },
  plugins: [],
}
export default config
