import React, {useContext} from 'react';
import style from './Menu.module.css';
import {AuthContext} from "../../context/authContext";

export const Menu = () => {
  const auth = useContext(AuthContext);

  const login = (e) => {
    e.preventDefault();
    auth.login();
  };

  const logout = (e) => {
    e.preventDefault();
    auth.logout();
  };
  return (
    <div className={`navbar ${style['menu-container']}`}>
      <ul className={style.menu}>
        <li className={style['menu-item']}>
          <a href="#">Home</a>
        </li>
        {auth.isAuthenticated
          ? <li className={style['menu-item']}>
            <a onClick={logout} href="#">Wyloguj</a>
          </li>
          : <li className={style['menu-item']}>
            <a onClick={login} href="#">Zaloguj</a>
          </li>
        }
      </ul>
    </div>
  );
};
