import React from 'react';
import css from './skilllevel.module.css';

export default function SkillLevel(props) {
  return <div className={css.skilllevel}>
    <p>{props.level}</p>
    {props.manacost && <p className={css.mana}>{props.manacost}</p>}
  </div>;
}