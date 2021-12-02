import React from 'react';
import AppContextProvider from './src/components/context';
import './src/styles/style.css';

export const wrapRootElement = ({ element }) => (
  <AppContextProvider>{element}</AppContextProvider>
);

const hash = window.location.hash;
if (hash) {
  const element = document.querySelector(`${hash}`);
  console.log(element);
}
