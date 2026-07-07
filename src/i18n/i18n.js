import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import es from "./locales/es.json";
import ca from "./locales/ca.json";
import en from "./locales/en.json";
import de from "./locales/de.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      ca: { translation: ca },
      en: { translation: en },
      de: { translation: de },
    },
    fallbackLng: "es",
    supportedLngs: ["es", "ca", "en", "de"],
    interpolation: {
      escapeValue: false, // React ya escapa por defecto, no hace falta que i18next lo haga también
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "portfolio_lang",
    },
  });

export default i18n;