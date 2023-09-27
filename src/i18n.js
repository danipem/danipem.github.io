import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import Backend from "i18next-xhr-backend"

// ruta a los archivos de idiomas
import common_en from "./locales/en/translation.json"
import common_es from "./locales/es/translation.json"

i18n
  .use(Backend)
  .use(LanguageDetector).init({
  fallbackLng: "es",
  debug: true,
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  // react i18next special options (optional)
  react: {
    wait: false,
    bindI18n: "languageChanged loaded",
    bindStore: "added removed",
    nsMode: "default",
    useSuspense: false
  },
  resources: {
    en: {
      translation: common_en,
    },
    es: {
      translation: common_es,
    },
  },
})
export default i18n