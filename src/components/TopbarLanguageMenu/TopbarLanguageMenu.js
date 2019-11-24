import React, { useState } from 'react';
import { LanguageSelection } from '../../components';
import css from './TopbarLanguageMenu.css';
import { translations } from '../../locale/config';

function TopbarLanguageMenu({ currentLang, onChangeLocale }) {
  const [showMenu, setShowMenu] = useState(false)

  const handleLanguageClick = (lang) => {
    setShowMenu(false)
    onChangeLocale(lang)
  }

  return (
    <div className={css.topbarLanguageMenuRoot}>
      <img
        className={css.topbarLanguageIcon}
        src={translations[currentLang].flag}
        onClick={() => setShowMenu(!showMenu)}
      />
      {showMenu && <LanguageSelection currentLang={currentLang} handleClick={handleLanguageClick} />}
    </div>
  );
}

export default TopbarLanguageMenu;