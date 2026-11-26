/** Same theme the page used with the Tailwind CDN. Build: see .github/workflows/build-css.yml */
module.exports = {
  content: ['./index.html'],
  theme: { extend: {
    colors: {
      ink: 'rgb(var(--ink) / <alpha-value>)', surface: 'rgb(var(--surface) / <alpha-value>)', surface2: 'rgb(var(--surface2) / <alpha-value>)',
      cream: 'rgb(var(--cream) / <alpha-value>)', fg: 'rgb(var(--fg) / <alpha-value>)', rose: 'rgb(var(--rose) / <alpha-value>)',
      rose2: 'rgb(var(--rose2) / <alpha-value>)', lilac: 'rgb(var(--lilac) / <alpha-value>)',
    },
    fontFamily: { serif: ['Fraunces', 'serif'], sans: ['Manrope', 'sans-serif'] },
  } },
};
