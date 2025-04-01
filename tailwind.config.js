/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables dark mode via a class
  theme: {
    extend: {
      colors: {
        background: "#121212",  // Main background
        surface: "#1F1F1F",     // Cards, modals, etc.
        primary: "#1E40AF",     // Primary buttons, links
        secondary: "#3B82F6",   // Secondary buttons, hover states
        accent: "#10B981",      // Accents (icons, badges, etc.)
        error: "#CF6679",       // Error messages
        textPrimary: "#FFFFFF", // Main text
        textSecondary: "#A3A3A3", // Muted text
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(135deg, #1F1F1F 0%, #121212 100%)',
      },
    },
  },
  plugins: [],
}
