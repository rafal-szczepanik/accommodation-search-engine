import React, {useContext} from 'react';
import {ThemeContext} from '../../context/themeContext';

export const Footer = (props) => {
  const theme = useContext(ThemeContext);
  return (
    <footer className={`text-center m-3 text-${theme.theme}`}>
      noclegi {new Date().getFullYear()}
    </footer>
  );
};