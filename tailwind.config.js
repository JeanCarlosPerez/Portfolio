/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#005aff",
        
"secondary": "#0000ff",
        
"accent": "#00abbd",
        
"neutral": "#0b0b0b",
        
"base-100": "#1c2e38",
        
"info": "#008ab4",
        
"success": "#00b40b",
        
"warning": "#f77f00",
        
"error": "#e12157",
        },
      },
    ],
  },
  
  plugins: [require("daisyui"), require("tailwindcss-animated")],

  
}