import type { Config } from "tailwindcss"



  function addSvgPatterns({ matchUtilities, theme }: any) {
    matchUtilities(
      {
        'bg-grid': (value: any) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
          )}")`,
        }),
        'bg-grid-small': (value: any) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
          )}")`,
        }),
        'bg-dot': (value: any) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
    );
  }

const defaultTheme = require("tailwindcss/defaultTheme");
 
const svgToDataUri = require("mini-svg-data-uri");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}



const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        home:{
          1:"#AC6AFF",
          2:"#FFC876",
          3:"#FF776F",
          4:"#7ADB78",
          5:"#858DFF",
          6:"#FF98E2",
        },
        stroke: {
          1: "#26242C",
        },
        n: {
          1: "#FFFFFF",
          2: "#CAC6DD",
          3: "#ADA8C3",
          4: "#757185",
          5: "#3F3A52",
          6: "#252134",
          7: "#15131D",
          8: "#0E0C15",
          9: "#474060",
          10: "#43435C",
          11: "#1B1B2E",
          12: "#2E2A41",
          13: "#6C7275",
        },

        dark:{
          1: '#1C1F2E',
          2: '#161925',
          3: '#252A41',
          4: '#1E2757',
        },
        blue: {
          1: '#0E78F9',
        },
        sky: {
          1: '#C9DDFF',
          2: '#ECF0FF',
          3: '#F5FCFF',
        },
        orange: {
          1: '#FF742E',
        },
        purple: {
          1: '#830EF9',
        },
        yellow: {
          1: '#F9A90E',
        },
      },
      letterSpacing: {
        tagline: ".15em",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      opacity: {
        15: ".15",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
      backgroundImage: {
        hero: "url('/images/hero-background.png\')",
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient": "conic-gradient(from 225deg, #A100FFFF, #591B64, #AC6AFF)",
        "mainb": "linear-gradient(to bottom, #111827, #020617);",
        "revb":  "linear-gradient(to bottom, #000000, #0d060a, #140c15, #15121e, #111827)",
        "feat": "linear-gradient(to bottom, #030619, #080315, #0b020f, #0a0009, #070004, #090206, #0a0408, #0c060a, #110b12, #140f18, #14141f, #111825)",
        "ltob": "linear-gradient(to bottom, #111825, #14121d, #130c14, #0c060a, #000000);",
        "btopb":"linear-gradient(to bottom, #0f0e16, #0d0c17, #0b0b18, #070919, #04071a);",
        "bg3lg": "linear-gradient(to bottom, #020617, #0b101e, #0d1221, #050919, #020617);",
        "bg3blb": "linear-gradient(to bottom, #010101, #11131f, #12131f, #14121e, #15121e, #140d17, #110910, #0b0407, #000000);",
        "bgbluegra": "linear-gradient(to bottom, #4114e3, #7a5af0, #a791f9, #d2c8fe, #ffffff);",
        "herob": "linear-gradient(to bottom, #000000, #1a151b, #1e2635, #0c3b49, #07504c);",
        "herorev": "linear-gradient(to bottom, #074f4b, #0c3a48, #1d2634, #1a151b, #000000);",
        "revhero": "linear-gradient(to bottom, #000000, #140e13, #1b1922, #1c2432, #123442);",
        "cyantob":"linear-gradient(to bottom, #133442, #122c3b, #112534, #101d2d, #111827);",
        "footer": "linear-gradient(to bottom, #111827, #0f1523, #0c111f, #070c1b, #000000);",
        "bene": "linear-gradient(to bottom, #07504c, #004249, #003342, #0d2535, #111726);",
        "about": "linear-gradient(to bottom, #111726, #121e2e, #122535, #132c3c, #133442);"
      },
      keyframes: {
        shimmer: {
          from:{
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 2s infinite",

      },
    },
  },
  plugins:
   [addVariablesForColors, addSvgPatterns,
    require("tailwindcss-animate")],
    
} satisfies Config



export default config