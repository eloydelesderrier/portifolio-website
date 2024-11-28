/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage:{
        circularLight: 
        "repeating-radial-gradient(rgba(63, 67, 82) 2px,#09090b 5px,#09090b 100px)",
      
        circularDark: 
        "repeating-radial-gradient(rgba(63, 67, 82) 2px,#09090b 8px,#09090b  100px)",  
    
        circularLightLg: 
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#09090b  80px)",  
        
        circularDarkLg: 
        "repeating-radial-gradient(rgba(63, 67, 82) 2px,#09090b 8px,#09090b  80px)",  
        
        circularLightMd: 
        "repeating-radial-gradient(rgba(63, 67, 82) 2px,#09090b 5px,#09090b  60px)",  
        
        circularDarkMd: 
        "repeating-radial-gradient(rgba(63, 67, 82) 2px,#09090b 8px,#09090b  60px)",  
        
        circularLightSm: 
        "repeating-radial-gradient(rgba(63, 67, 82) 2px,#09090b 5px,#09090b  40px)",  
        
        circularDarkSm: 
        "repeating-radial-gradient(rgba(63, 67, 82) 2px,#09090b 8px,#09090b 40px)",  
      },
    },
  
  },
  plugins: [],
};
