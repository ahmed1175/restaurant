import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        
        'bg-img-2': "url('/hero-slider-3.jpg')",
      
        'bg-img-4':"url('/special-dish-banner.jpg')",
        'bg-img-5':"url('/testimonial.jpg')",
        'bg-img-6':"url('/event-1.jpg')",
        'bg-img-7':"url('/event-2.jpg')",
        'bg-img-8':"url('/event-3.jpg')",
        'bg-img-9':"url('/footer-bg.jpg')",
'bg-img-10':"url('/form-pattern.png')",


      },
      colors:{
        gold:"#e4c590",
        white:"#ffffff",
        black:"#000000",
        gray:"#212529",
        smFont:"#838383"
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { scale: '1.1' },
          '50%': { scale: '1' },
        }
      },
      animation: {
        wiggle: 'wiggle 4s ease-in-out infinite',
      },
      
    },
  },
  plugins: [],
};
export default config;
