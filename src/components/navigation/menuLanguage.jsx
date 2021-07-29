import React, { useState } from 'react';
import { LangMenu, LangButton } from '../styled';

const MenuLanguage = ({ color, active }) => {
  const [lang, setLang] = useState('pl');
  const handleChange = lang => setLang(lang);
  return (
    <LangMenu color={color} active={active}>
      <LangButton onClick={() => handleChange('en')} isActive={lang === 'en'}>
        en
      </LangButton>
      <span className="line"></span>
      <LangButton onClick={() => handleChange('pl')} isActive={lang === 'pl'}>
        pl
      </LangButton>
    </LangMenu>
  );
};

export default MenuLanguage;
