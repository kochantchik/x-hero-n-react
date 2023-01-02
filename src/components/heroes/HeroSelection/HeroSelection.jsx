import React from 'react';
import css from './heroselection.module.css';
import Tavern from './Tavern';

export default function HeroSelection(props) {
  const taverns = {
    thunder: [],
    azara: [],
    deeps: [],
    kings: [],
  };

  for (const [key, value] of Object.entries(props.heroes)) {
    // eslint-disable-next-line default-case
    switch (value.tavern) {
      case 'Алтарь Бури':
        taverns.thunder.push(value);
        break;
      case 'Алтарь Азары':
        taverns.azara.push(value);
        break;
      case 'Алтарь Глубин':
        taverns.deeps.push(value);
        break;
      case 'Алтарь Королей':
        taverns.kings.push(value);
        break;
    }
  }

  return (
    <div className={css.heroselection}>
      <Tavern
        tavernName={'Алтарь Бури'}
        tavernHeroes={taverns.thunder}
        chooseHero={props.chooseHero}
      />
      <Tavern
        tavernName={'Алтарь Азары'}
        tavernHeroes={taverns.azara}
        chooseHero={props.chooseHero}
      />
      <Tavern
        tavernName={'Алтарь Глубин'}
        tavernHeroes={taverns.deeps}
        chooseHero={props.chooseHero}
      />
      <Tavern
        tavernName={'Алтарь Королей'}
        tavernHeroes={taverns.kings}
        chooseHero={props.chooseHero}
      />
    </div>
  );
}
