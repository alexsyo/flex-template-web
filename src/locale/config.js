import enTrans from '../translations/en.json';
import nlTrans from '../translations/nl.json';
import itTrans from '../translations/it.json';

import ukFlag from './svg/united-kingdom.svg';
import nlFlag from './svg/netherlands.svg';
import itFlag from './svg/italy.svg';

export const translations = {
  en: { messages: enTrans, flag: ukFlag },
  nl: { messages: nlTrans, flag: nlFlag },
  it: { messages: itTrans, flag: itFlag }
}
