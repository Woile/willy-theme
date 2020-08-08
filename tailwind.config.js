const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.css", "./src/**/*.js"],
  // purge: [],
  theme: {
    extend: {
      inset: {
        "1/2": "50%",
      },
      translate: {
        "-1/2": "-50%",
      },
      colors: {
        "primary-color": "var(--primary-color)",
        "default-color": "var(--default-color)",
        "inverse-color": "var(--inverse-color)",
      },
    },
  },
  variants: {
    fill: ["responsive", "hover", "focus"],
  },
  plugins: [
    plugin(function ({ addVariant, e }) {
      addVariant("checked", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`checked${separator}${className}`)}:checked`;
        });
      });
    }),
  ],
};
