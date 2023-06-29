import React from 'react';
import css from './heroes.module.css';
import HeroPanel from './HeroPanel/HeroPanel';
import HeroSelection from './HeroSelection/HeroSelection';

export default function Heroes(props) {
  const [hero, setHero] = React.useState(props.heroes['Адмирал']);

  const [skill, setSkill] = React.useState(props.skills[hero.s1]);

  const paths = {
    strPath: './img/icons/axe.png',
    strMainPath: './img/icons/axe-gold.png',
    agiPath: './img/icons/target.png',
    agiMainPath: './img/icons/target-gold.png',
    intPath: './img/icons/book.png',
    intMainPath: './img/icons/book-gold.png',
    armor: './img/icons/shield.png',
    range: './img/icons/archery.png',
    melee: './img/icons/sword.png',
  }

  function chooseSkill(e) {
    const skill = e.target.innerText;
    setSkill(props.skills[skill]);
  }

  function chooseHero(e) {
    const hero = e.target.title;
    setHero(props.heroes[hero]);
    setSkill(props.skills[props.heroes[hero].s1])
    window.scrollTo({top: 0});
  }

  return (
    <div className={css.heroes}>
      <HeroPanel paths={paths} hero={hero} skill={skill} chooseSkill={chooseSkill} />
      <HeroSelection paths={paths} heroes={props.heroes} chooseHero={chooseHero} />
    </div>
  );
}
