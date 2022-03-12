module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safeList: [
    /^bg-/,
    /^to-/,
    /^from-/,
    /^text-/
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
