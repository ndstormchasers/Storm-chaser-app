/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.tsx", "./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  corePlugins: {
    space: false,
  },
  theme: {
    // NOTE to AI: You can extend the theme with custom colors or styles here.
    extend: {
      colors: {
        storm: {
          50: '#f8fafc',   // Light storm cloud
          100: '#f1f5f9',  // Very light gray
          200: '#e2e8f0',  // Light gray
          300: '#cbd5e1',  // Medium light gray
          400: '#94a3b8',  // Medium gray
          500: '#64748b',  // Base storm gray
          600: '#475569',  // Dark gray
          700: '#334155',  // Very dark gray
          800: '#1e293b',  // Almost black
          900: '#0f172a',  // Deep storm black
        },
        lightning: {
          50: '#f0f9ff',   // Very light blue
          100: '#e0f2fe',  // Light blue
          200: '#bae6fd',  // Medium light blue
          300: '#7dd3fc',  // Electric light blue
          400: '#38bdf8',  // Electric blue
          500: '#0ea5e9',  // Base electric blue
          600: '#0284c7',  // Dark electric blue
          700: '#0369a1',  // Very dark blue
          800: '#075985',  // Deep blue
          900: '#0c4a6e',  // Deepest blue
        },
        thunder: {
          50: '#fefce8',   // Very light yellow
          100: '#fef3c7',  // Light yellow
          200: '#fde68a',  // Medium light yellow
          300: '#fcd34d',  // Electric yellow
          400: '#fbbf24',  // Thunder yellow
          500: '#f59e0b',  // Base thunder
          600: '#d97706',  // Dark thunder
          700: '#b45309',  // Very dark orange
          800: '#92400e',  // Deep orange
          900: '#78350f',  // Deepest orange
        },
      },
      fontSize: {
        xs: "10px",
        sm: "12px",
        base: "14px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        "4xl": "40px",
        "5xl": "48px",
        "6xl": "56px",
        "7xl": "64px",
        "8xl": "72px",
        "9xl": "80px",
      },
    },
  },
  darkMode: "class",
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      const spacing = theme("spacing");

      // space-{n}  ->  gap: {n}
      matchUtilities(
        { space: (value) => ({ gap: value }) },
        { values: spacing, type: ["length", "number", "percentage"] }
      );

      // space-x-{n}  ->  column-gap: {n}
      matchUtilities(
        { "space-x": (value) => ({ columnGap: value }) },
        { values: spacing, type: ["length", "number", "percentage"] }
      );

      // space-y-{n}  ->  row-gap: {n}
      matchUtilities(
        { "space-y": (value) => ({ rowGap: value }) },
        { values: spacing, type: ["length", "number", "percentage"] }
      );
    }),
  ],
};
