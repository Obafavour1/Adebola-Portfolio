import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {   
      colors: {
        blue:{
          50: '',
        },
        purple: {
          10: '',
          50: '#1E0044',
          60: '#1E0044',
          
        },
        black: {
          10: '#E9DEFF',
          50: '#0B011A',
        }
      },
      backgroundImage: {
        'bg-img-1': "url('/img/navbarbrand.png')"
      },
      screens:{
        'xs':'400px',
        '3xl':'1680px',
      }
    },
  },
  plugins: [],
};
export default config;
