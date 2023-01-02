import React from 'react';
import css from './heroes.module.css';
import HeroPanel from './HeroPanel/HeroPanel';
import HeroSelection from './HeroSelection/HeroSelection';

export default function Heroes(props) {
  const [hero, setHero] = React.useState(props.heroes['Адмирал']);

  const [skill, setSkill] = React.useState(props.skills[hero.s1]);

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
      <HeroPanel hero={hero} skill={skill} chooseSkill={chooseSkill} />
      <HeroSelection heroes={props.heroes} chooseHero={chooseHero} />
    </div>
  );
}
