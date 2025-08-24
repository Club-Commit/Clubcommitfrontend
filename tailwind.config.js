/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class", // enable dark mode toggle via class
  theme: {
    extend: {
      colors: {
        // 🌈 Light Theme
        light: {
          primary: "#FF6B6B", // coral red
          secondary: "#FFB6B9", // soft pink
          background: "#FFF5F5", // off-white pink
          surface: "#F7E9E9", // beige-pink
          text: "#2D2D2D", // dark charcoal
          subtext: "#6B4F4F", // warm brown
          success: "#4CAF50", // green
          error: "#FF5252", // error red
        },
        // 🌙 Dark Theme
        dark: {
          primary: "#FF6B6B",
          secondary: "#FFB6B9",
          background: "#1E1E1E",
          surface: "#2C2C2C",
          text: "#FFFFFF",
          subtext: "#CCCCCC",
          success: "#4CAF50",
          error: "#FF5252",
        },
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"], // Logo / Branding
        heading: ["Inter", "sans-serif"], // H1, H2
        body: ["Nunito", "sans-serif"], // Paragraphs
        ui: ["Inter", "sans-serif"], // Buttons / UI
      },
      fontSize: {
        logo: ["3rem", { lineHeight: "1" }], // Commit logo
        h1: ["2rem", { fontWeight: "600" }], // Headlines
        h2: ["1.5rem", { fontWeight: "500" }], // Subtitles
        body: ["1rem", { fontWeight: "400" }], // Body text
        subtext: ["0.875rem", { fontWeight: "400" }], // Captions
        button: ["1rem", { fontWeight: "600", letterSpacing: "0.05em" }],
      },
      borderRadius: {
        card: "1.25rem", // 20px rounded cards
        button: "0.75rem", // 12px rounded buttons
      },
      boxShadow: {
        soft: "0 4px 12px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
