import React from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from '../util/reactIntl';
import { translations } from './config';
import difference from 'lodash/difference';
import mapValues from 'lodash/mapValues';
import moment from 'moment';

// If you want to change the language, change the imports to match the wanted locale:
//   1) Change the language in the config.js file!
//   2) Import correct locale rules for Moment library
//   3) Use the `messagesInLocale` import to add the correct translation file.
//   4) To support older browsers we need add the correct locale for intl-relativetimeformat to `util/polyfills.js`

// Note that there is also translations in './translations/countryCodes.js' file
// This file contains ISO 3166-1 alpha-2 country codes, country names and their translations in our default languages
// This used to collect billing address in StripePaymentAddress on CheckoutPage

// Step 2:
// If you are using a non-english locale with moment library,
// you should also import time specific formatting rules for that locale
// e.g. for French: import 'moment/locale/fr';

// Step 3:
// If you are using a non-english locale, point `messagesInLocale` to correct .json file
// import messagesInLocale from './messages';

// Flex template application uses English translations as default.
import defaultMessages from '../translations/en.json';

// If translation key is missing from `messagesInLocale` (e.g. fr.json),
// corresponding key will be added to messages from `defaultMessages` (en.json)
// to prevent missing translation key errors.
const addMissingTranslations = (sourceLangTranslations, targetLangTranslations) => {
  const sourceKeys = Object.keys(sourceLangTranslations);
  const targetKeys = Object.keys(targetLangTranslations);
  const missingKeys = difference(sourceKeys, targetKeys);

  const addMissingTranslation = (translations, missingKey) => ({
    ...translations,
    [missingKey]: sourceLangTranslations[missingKey],
  });

  return missingKeys.reduce(addMissingTranslation, targetLangTranslations);
};

const isTestEnv = process.env.NODE_ENV === 'test';

const setupLocaleMessages = (lang) => {
  const isDefaultLanguageInUse = lang === 'en';

  const messages = isDefaultLanguageInUse
    ? defaultMessages
    : addMissingTranslations(defaultMessages, translations[lang].messages);

  // Locale should not affect the tests. We ensure this by providing
  // messages with the key as the value of each message.
  const testMessages = mapValues(messages, (val, key) => key);
  const localeMessages = isTestEnv ? testMessages : messages;

  // Set the Moment locale globally
  // Use english as a default locale in tests
  // This affects app.test.js and app.node.test.js tests
  // See: http://momentjs.com/docs/#/i18n/changing-locale/
  moment.locale(isTestEnv ? lang : 'en');

  return localeMessages;
}

const LocalizationWrapper = ({ currentLang, children }) => {
  const localeMessages = setupLocaleMessages(currentLang);
  return (
    <IntlProvider locale={'en'} messages={localeMessages} textComponent="span">
      {children}
    </IntlProvider>
  );
}

const mapStateToProps = ({ Locale }) => ({
  currentLang: Locale
})

export default connect(mapStateToProps)(LocalizationWrapper);