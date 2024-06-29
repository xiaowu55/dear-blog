/* eslint-disable no-undef */
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
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.0.0",
  plugins: ["@ianvs/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
};
