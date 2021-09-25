import React, { useEffect, useState } from 'react';
import { Burger, BurgerScroll} from '../styled';

const MenuIcon = ({
  mainPage = true,
  darkMode,
  toggle,
  customWidth,
  customHeight,
}) => {
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100)
    })
  }, [window.scrollY])
  return (
    <React.Fragment>
      {scroll 
      ? <BurgerScroll
      customWidth={customWidth}
      customHeight={customHeight}
      onClick={toggle}
    >
      <svg
        viewBox="0 0 100 80"
        width={customWidth}
        fill={mainPage ? '#000000' : darkMode ? '#0000000' : '#ffffff'}
        height={customHeight}
      >
        <rect width="100" height="8"></rect>
        <rect y="30" width="100" height="8"></rect>
        <rect y="60" width="50" height="8"></rect>
      </svg>
    </BurgerScroll>
    :  <Burger
    customWidth={customWidth}
    customHeight={customHeight}
    onClick={toggle}
  >
    <svg
      viewBox="0 0 100 80"
      width={customWidth}
      fill={mainPage ? '#000000' : darkMode ? '#0000000' : '#ffffff'}
      height={customHeight}
    >
      <rect width="100" height="8"></rect>
      <rect y="30" width="100" height="8"></rect>
      <rect y="60" width="50" height="8"></rect>
    </svg>
  </Burger>
    }
    </React.Fragment>
  );
};

export default MenuIcon;
