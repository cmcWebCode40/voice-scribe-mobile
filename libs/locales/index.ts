import i18n from 'i18next'
import { Languages } from 'libs/types'
import { initReactI18next } from 'react-i18next'

import en from './en.json'
import fr from './fr.json'

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: Languages.FRENCH,
  fallbackLng: Languages.ENGLISH,
  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false,
  },
})
