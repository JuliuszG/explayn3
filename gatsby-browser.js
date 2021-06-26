import React from 'react';
import AppContextProvider from './src/components/context';
import './src/styles/style.css'

export const wrapRootElement = ({ element }) => (
  <AppContextProvider>
    {element}
  </AppContextProvider>
);
