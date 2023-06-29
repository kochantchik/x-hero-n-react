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

  const [filter, setFilter] = React.useState({
    str: false,
    agi: false,
    int: false,
  });

  function filterHeroes(e) {
    const button = e.target.title;

    switch (button) {
      case 'All':
        setFilter({
          str: false,
          agi: false,
          int: false,
        });
        break;
      case 'Сила':
        setFilter({
          str: false,
          agi: true,
          int: true,
        });
        break;
      case 'Ловкость':
        setFilter({
          str: true,
          agi: false,
          int: true,
        });
        break;
      case 'Интеллект':
        setFilter({
          str: true,
          agi: true,
          int: false,
        });
        break;
      default:
        break;
    }
  }

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
      <div className={css.filter}>
        <p
          className={filter.str || filter.agi || filter.int ? '' : css.gold}
          onClick={filterHeroes}
          title="All"
        >
          All
        </p>
        <img
          src={
            filter.str === false ? props.paths.strMainPath : props.paths.strPath
          }
          alt="Сила"
          title="Сила"
          onClick={filterHeroes}
        />
        <img
          src={
            filter.agi === false ? props.paths.agiMainPath : props.paths.agiPath
          }
          alt="Ловкость"
          title="Ловкость"
          onClick={filterHeroes}
        />
        <img
          src={
            filter.int === false ? props.paths.intMainPath : props.paths.intPath
          }
          alt="Интеллект"
          title="Интеллект"
          onClick={filterHeroes}
        />
      </div>
      <div className={css.taverns}>
        <Tavern
          tavernName={'Алтарь Бури'}
          tavernHeroes={taverns.thunder}
          chooseHero={props.chooseHero}
          filter={filter}
        />
        <Tavern
          tavernName={'Алтарь Азары'}
          tavernHeroes={taverns.azara}
          chooseHero={props.chooseHero}
          filter={filter}
        />
        <Tavern
          tavernName={'Алтарь Глубин'}
          tavernHeroes={taverns.deeps}
          chooseHero={props.chooseHero}
          filter={filter}
        />
        <Tavern
          tavernName={'Алтарь Королей'}
          tavernHeroes={taverns.kings}
          chooseHero={props.chooseHero}
          filter={filter}
        />
      </div>
    </div>
  );
}
