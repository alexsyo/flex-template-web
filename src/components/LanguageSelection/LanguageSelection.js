import React from 'react';
import { translations } from '../../locale/config';
import css from './LanguageSelection.css';

const LanguageSelection = ({ currentLang, handleClick }) => (
  <ul className={css.languageDropdown}>
    {Object.keys(translations)
    .filter(c => c !== currentLang)
    .map(country => (
      <li key={country} className={css.languageSelection} onClick={() => handleClick(country)}>
        <img src={translations[country].flag} alt={country} />
      </li>
    ))}
  </ul>
)

export default LanguageSelection;
