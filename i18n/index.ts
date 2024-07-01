import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

export enum Language {
  CN = "zh-CN",
  EN = "en-US",
}

export const languages = [
  { name: "CN", code: Language.CN },
  { name: "EN", code: Language.EN },
];

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    supportedLngs: ["zh-CN", "en-US"],
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    fallbackLng: "zh-CN",
    detection: {
      order: ["localStorage", "cookie", "navigator"],
      caches: ["localStorage", "cookie"],
    },
  });

export default i18n;
