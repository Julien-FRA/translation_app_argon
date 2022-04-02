import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from '../locales/en.json'
import fr from '../locales/fr.json'

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    resources: {
      fr: fr,
      en: en,
    },
    fallbackLng: 'fr',
    debug: true,
    ns: ['translations'],
    defaultNS: 'translations',
  });

export default i18n;
