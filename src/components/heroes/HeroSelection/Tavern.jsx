import React from 'react';
import css from './tavern.module.css';

export default function Tavern(props) {
  const heroes = [];
  props.tavernHeroes.forEach((hero, index) => {
    heroes.push(
      <img
        src={`./img/heroes/${hero.path}.png`}
        alt={hero.hero}
        title={hero.hero}
        key={200 + index}
        onClick={props.chooseHero}
        className={
          ((hero.mainAtr === 'str' && props.filter.str) || 
          (hero.mainAtr === 'agi' && props.filter.agi) ||
          (hero.mainAtr === 'int' && props.filter.int)) && css.opacity
        }
      />
    );
  });

  return (
    <div className={css.tavern}>
      <p>{props.tavernName}</p>
      <div className={css.heroes}>{heroes}</div>
    </div>
  );
}
