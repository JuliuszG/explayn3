const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  tabletL: '960px',
  laptop: '1024px',
  laptopM: '1280px',
  laptopL: '1440px',
  desktop: '2560px',
  /* Custom force break */
  tabletDown: '767px',
};

export const deviceMin = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  tabletL: `(min-width: ${size.tabletL})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopM: `(min-width: ${size.laptopM})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export const deviceMax = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  tabletL: `(max-width: ${size.tabletL})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopM: `(max-width: ${size.laptopM})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
  tabletDown: `(max-width: ${size.tabletDown})`,
};

/* Custom breakpoint */
export const forceBreak = {
  tabletDown: `(max-width: ${size.tabletDown})`,
};
