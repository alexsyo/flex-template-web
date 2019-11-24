// Actions
export const CHANGE_LOCALE = 'app/Locale/CHANGE_LOCALE';

// Reducer
export default function reducer(state = 'en', action = {}) {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_LOCALE: {
      return payload;
    }
    default:
      return state;
  }
}

// Action types
export const changeLocale = locale => ({ type: CHANGE_LOCALE, payload: locale });