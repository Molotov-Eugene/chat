import React from 'react';
import { RouterProvider } from 'react-router-dom';
import i18n from 'i18next';
import { I18nextProvider, useTranslation, initReactI18next } from "react-i18next";
import router from './pages/main'

import resources from './locales/index';

const userLanguage = navigator.language.startsWith(('ru')) ? 'ru' : 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: userLanguage,
    fallbacklng: 'en',
  });


function Init() {
  const { t } = useTranslation();

  return (
    <>
      <I18nextProvider i18n={i18n}>
        <RouterProvider router={router}>
        </RouterProvider>
      </I18nextProvider>
    </>
  )
}

export default Init;
