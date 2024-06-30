/* eslint-disable no-undef */
/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */

module.exports = {
  endOfLine: "lf",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(wagmi/(.*)$)|^(wagmi$)",
    "^(@mui/(.*)$)|^(@mui$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/styles/(.*)$",
    "^@/types/(.*)$",
    "^@/config/(.*)$",
    "^@/lib/(.*)$",
    "",
    "^@/app/(.*)$",
    "^@/hooks/(.*)$",
    "^@/components/ui/(.*)$",
    "^@/components/(.*)$",
    "^@/pages/(.*)$",
    "^@/(?!assets)(.*)$",
    "",
    "^[./]",
    "",
    "^@/assets/(.*)$",
  ],
  plugins: ["@ianvs/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss",],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.0.0",
  "importOrder": ["<BUILT_IN_MODULES>", "", "<THIRD_PARTY_MODULES>", "", "^[.]"],
  "importOrder": ["<THIRD_PARTY_MODULES>", "^(?!.*[.]css$)[./].*$", ".css$"]
};
