import enTrans from '../translations/en.json';
import nlTrans from '../translations/nl.json';

import ukFlag from './svg/united-kingdom.svg';
import nlFlag from './svg/netherlands.svg';

export const translations = {
  en: { translation: enTrans, flag: ukFlag },
  nl: { translation: nlTrans, flag: nlFlag },
}

export const messagesInLocale = translations['nl'];