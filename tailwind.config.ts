import type { Config } from "tailwindcss";
const svgToDataUri = require("mini-svg-data-uri");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
        black: {
          DEFAULT: "#000",
          100: "#000319",
          200: "rgba(17, 25, 40, 0.75)",
          300: "rgba(255, 255, 255, 0.125)",
        },
        white: {
          DEFAULT: "#FFF",
          100: "#BEC1DD",
          200: "#C1C2D3",
        },
        magicGradientLight: {
          100: '#FF0055',
          200: '#00AAFF',
        },
        magicGradientDark: {
          100: '#E2CBFF',
          200: '#393BB2',
        },
        blue: { "100": "#E4ECFF" },
        purple: "#CBACF9",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Tambahan dari file kedua jika belum ada
        backgroundColor: {
          primary: "#021526",
          secondary: "#F0ECE5",
          base: "#FFFFFF",
          invertPrimary: "#e6e8e8",
        },
      },
      textColor: {
        primary: "#201D30",
        secondary: "#F0ECE5",
      },
      fontFamily: {
        pixelify: ["Pixelify Sans", "sans-serif"],
        poppinsBold: ["Poppins Bold", "sans-serif"],
        poppinsSemiBold: ["Poppins SemiBold", "sans-serif"],
        poppinsRegular: ["Poppins Regular", "sans-serif"],
        interRegular: ["Inter Regular", "sans-serif"],
        interMedium: ["Inter Medium", "sans-serif"],
        press: ["Press Start 2P", "cursive"],
        volkhov: ["Volkhov", "sans-serif"],
        vt323: ["VT323", "sans-serif"],
      },
      borderRadius: {
        lg: "0.5rem", // 8px
        md: "0.375rem", // 6px (0.5rem - 2px)
        sm: "0.25rem", // 4px (0.5rem - 4px)
      },
      screens: {
        xs: "375px",
        sm: "425px",
        md: "576px",
        lg: "768px",
        xl: "1024px",
        "1xl": "1279.98px",
        "2xl": "1440px",
        '300': '300px',
        '315': '315px',
        '320': '320px',
        '340': '340px',
        '350': '350px',
        '360': '360px',
        '370': '370px',
        '576': '576px',
        '400': '400px',
        '420': '420px',
        '430': '430px',
        '435': '435px',
        '460': '460px',
        '495':'495px',
        '768': '768px',
        '700': '700px',
        '550': '550px',
        '630': '630px',
        '800': '800px',
        '820': '820px',
        '830': '830px',
        '850': '850px',
        '882': '882px',
        '895': '895px',
        '500': '500px',
        '600': '600px',
        '650': '650px',
        '900': '900px',
        '990': '990px',
        '1000': '1000px',
        '1024': '1024px',
        '1040': '1040px',
        '1045': '1045px',
        '1080': '1080px',
        '1100': '1100px',
        '1330': '1330px',
        '1140': '1140px',
        '1200': '1200px',
        '1210': '1210px',
        '1240': '1240px',
        '1250': '1250px',
        '1260': '1260px',
        '1275': '1275px',
        '1300': '1300px',
        '1348': '1348px',
        '1350': '1350px',
        '1360': '1360px',
        '1280': '1280px',
        '1400': '1400px',
        '1460': '1460px',
      },
      maxWidth: {
        "base-content": "300px",
        "xs-content": "320px",
        "sm-content": "352px",
        "md-content": "512px",
        "lg-content": "648px",
        "xl-content": "992px",
        "max-container": "1512px",
      },
      backgroundSize: {
        "100%": "100%",
      },
      keyframes: {
        'scroll-vertical': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        moveHorizontal: {
          "0%": { transform: "translateX(-50%) translateY(-10%)" },
          "50%": { transform: "translateX(50%) translateY(10%)" },
          "100%": { transform: "translateX(-50%) translateY(-10%)" },
        },
        moveInCircle: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        moveVertical: {
          "0%": { transform: "translateY(-50%)" },
          "50%": { transform: "translateY(50%)" },
          "100%": { transform: "translateY(-50%)" },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        'scroll-vertical': 'scroll-vertical 20s linear infinite',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor")),
          type: "color",
        }
      );
    },
  ],
};

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  addBase({ ":root": newVars });
}

export default config;
