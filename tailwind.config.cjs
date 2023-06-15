/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      transparent: 'transparent',
      'deep-twilight-blue': '#313244',
      'dreamy-lavender': '#B4BEFE',
      'enchanted-meadow': '#A6E3A1',
      'golden-honeydew': '#F9E2AF',
      'lilac-dream': '#CBA6F7',
      'midnight-indigo': '#1E1E2E',
      'midnight-navy': '#11111B',
      'misty-lilac': '#CDD6F4',
      'peach-sorbet': '#FAB387',
      'pearl-white': '#EEEEEE',
      'sky-blue-bliss': '#89B4FA',
      'shadowed-slate': '#303143',
      'slate-mist': '#6C7086',
      'slate-steel': '#45475A',
      'whispering-rose': '#F2CDCD',
    },
    fontFamily: {
      mono: ['Roboto-mono', ...defaultTheme.fontFamily.mono],
      serif: ['Roboto-serif', ...defaultTheme.fontFamily.serif],
    },
    extend: {
      boxShadow: {
        card: '0.5px 0.5px 0.8px 0 rgb(21 22 35 / 0.36), 1.6px 1.7px 2.6px -0.8px rgb(21 22 35 / 0.36), 4.1px 4.2px 6.6px -1.7px rgb(21 22 35 / 0.36), 10px 10.1px 16px -2.5px rgb(21 22 35 / 0.25)',
      },
      spacing: {},
    },
  },
  plugins: [],
};
