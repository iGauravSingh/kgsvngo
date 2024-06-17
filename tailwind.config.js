import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/custom.css",
  ],
  theme: {
    fontFamily: {
      sans: [
        "SF Pro Display",
        "Helvetica Neue",
        "Arial",
        "sans-serif",
      ],
      popins: [
        "Poppins",
        "sans-serif"
      ],
      Sacramento: [
        "Sacramento", 
        "cursive",
      ],
      CormorantUpright: [
        "Cormorant Upright", "serif"
      ],
      Roboto: [
        "Roboto", "sans-serif"
      ],
      DancingScript: [
        "Dancing Script", "cursive"
      ]
    },
    fontSize: {
      xs: "0.75rem", // 12 px
      sm: "0.875rem", // 14
      base: "1.0625rem", // 17
      lg: ["1.1875rem", "1.21"], // 19
      xl: "1.3125rem", // 21px
      "2xl": "1.5rem", //24px
      "3xl": "1.75rem", //28px
      "4xl": ["2.4rem","1.1"], // 40px
      "5xl": ["4.5rem","1.05"], //72px
    },
    
    extend: {
      backgroundImage: {
        'associtae': "url('/posters/bgbg.jpg')",
        'tagline': "url('/posters/bannerngo.jpg')"
      },
      colors: {
        background: "#000",
        backgroundContrast: "#111",
        textBlack: "#1d1d1f",
        white: "#fff",
        yellowngo: "#F3CA52",
        greenngo: "#254d42",
        greendarknago: "#F3CA52",
        greensyn: '#254d42',
        ngodark: '#222627',
      },
      keyframes: {
        "carousel-move": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        
      },
      animation: {
        "carousel-move": "carousel-move var(--duration,80s) infinite"
      },
    },
  },
  plugins: [],
}

