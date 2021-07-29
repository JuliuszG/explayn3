import React, { useState } from 'react';
import { SwitchLangButton } from '../styled';

const LangSwitch = ({ color }) => {
  const [lang, setLang] = useState('pl');
  const handleSwitch = () => {
    if (lang === 'pl') {
      setLang('en');
    } else {
      setLang('pl');
    }
  };

  return (
    <SwitchLangButton color={color} onClick={handleSwitch}>
      {lang}
    </SwitchLangButton>
  );
};

export default LangSwitch;
