import React from 'react';
import css from './bosses.module.css';

export default function Bosses(props) {
  return <div className={css.bosses}>
    <img src='./img/peasant-warcraft3.gif' alt='...'/>
    <p>В разработке</p>
  </div>;
}