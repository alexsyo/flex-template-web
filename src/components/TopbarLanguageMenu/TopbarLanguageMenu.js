import React, { useState } from 'react';
import { LanguageSelection } from '../../components';
import css from './TopbarLanguageMenu.css';
import { translations } from '../../locale/config';

function TopbarLanguageMenu() {
  const [showMenu, setShowMenu] = useState(false)
  const [lang, setLang] = useState('en');

  const handleLanguageClick = (lang) => {
    setShowMenu(false)
    setLang(lang)
  }

  return (
    <div className={css.topbarLanguageMenuRoot}>
      <img
        className={css.topbarLanguageIcon}
        src={translations[lang].flag}
        onClick={() => setShowMenu(!showMenu)}
      />
      {showMenu && <LanguageSelection currentLang={lang} handleClick={handleLanguageClick} />}
    </div>
  );
}

export default TopbarLanguageMenu;