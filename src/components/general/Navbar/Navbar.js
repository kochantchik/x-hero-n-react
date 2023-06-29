import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import style from './navbar.module.css';

export default function Navbar(props) {

  const location = useLocation()

  return (
    <div className={style.navbar}>
      <div className={style.center}>
        <NavLink to="/">X-Hero-N</NavLink>
        <NavLink to="/">
          <p className={location.pathname === '/' ? style.active : ''}>Предметы</p>
        </NavLink>
        <NavLink to="/heroes">
          <p className={location.pathname === '/heroes' ? style.active : ''}>Герои</p>
        </NavLink>
        </div>
    </div>
  );
}
