import React from 'react';
import AppContextProvider from './src/components/context';

export const wrapRootElement = ({ element }) => (
  <AppContextProvider>
    {element}
  </AppContextProvider>
);
