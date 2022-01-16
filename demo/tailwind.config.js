const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
        signature: "Signature",
      },
    },
  },
  plugins: [],
}
