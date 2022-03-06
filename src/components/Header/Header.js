import React from 'react';
import styles from './Header.module.css';

export const Header = (props) => {
  return (
    <header className={`${styles.header}`}>
      {props.children}
    </header>
  );
};
