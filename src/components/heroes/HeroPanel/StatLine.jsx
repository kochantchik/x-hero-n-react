import React from 'react';
import css from './statline.module.css';

export default function StatLine(props) {
  return <div className={css.statline}>
    <div className={css.statline}>
      {props.path && <img src={props.path} alt={props.stat}/>}
      <p>{props.stat}:</p>
    </div>
    <div className={css.statline}>
      {props.statStart && <p>{props.statStart}</p>}
      {props.atkType && <img src={props.atkType} alt={props.alt}/>}
      {props.statPL && <p className={css.perLevel}>{`+${props.statPL}`}</p>}
    </div>
  </div>;
}