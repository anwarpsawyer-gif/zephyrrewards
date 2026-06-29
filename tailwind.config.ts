import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        zephyr: {
          navy: "#071A2C",
          navy2: "#0B2238",
          blue: "#0E7C86",
          blueSoft: "#D7F3F0",
          ivory: "#F8F4EC",
          ivory2: "#FFFDF8",
          gold: "#C9A227",
          goldSoft: "#F2E3A4",
          slate: "#64748B",
          ink: "#102033"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Cormorant Garamond", "Georgia", "serif"]
      },
      borderRadius: {
        zephyr: "1.5rem",
        "zephyr-lg": "2rem"
      },
      boxShadow: {
        zephyr: "0 24px 80px rgba(7, 26, 44, 0.12)",
        "zephyr-card": "0 18px 60px rgba(7, 26, 44, 0.18)",
        gold: "0 0 40px rgba(201, 162, 39, 0.22)"
      },
      backgroundImage: {
        "zephyr-radial":
          "radial-gradient(circle at top right, rgba(14,124,134,0.16), transparent 34%), radial-gradient(circle at 20% 10%, rgba(201,162,39,0.12), transparent 30%)",
        "zephyr-grid":
          "linear-gradient(rgba(7,26,44,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(7,26,44,0.04) 1px, transparent 1px)"
      },
      backgroundSize: {
        "zephyr-grid": "48px 48px"
      }
    }
  },
  plugins: []
};

export default config;
