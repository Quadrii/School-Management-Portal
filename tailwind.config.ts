import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", 
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": 
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        qSky:"#C3EBFA",
        qSkylight:"#EDF9FD",
        qpurple:"#CFCEFF", 
        qPurpleLight:"#F1F0FF", 
        qYellow:"#FAE27C",
        qYellowLight:"#FEFCE8"
      }
    },
  },
  plugins: [], 
};
export default config;
