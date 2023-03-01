import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import uaTranslation from './locales/ua.json';

i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'en', // language to use
  resources: {
    en: {
      translation: enTranslation,
    },
    ua: {
      translation: uaTranslation,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
);
