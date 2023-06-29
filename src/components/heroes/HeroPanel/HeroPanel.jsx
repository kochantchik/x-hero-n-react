import React from 'react';
import css from './heropanel.module.css';
import StatLine from './StatLine';
import Skills from './SkillPanel/Skills';

export default function HeroPanel(props) {

  return <div className={css.heropanel}>
    <div className={css.column}>
      <p>{props.hero.hero}</p>
      <img src={`./img/heroes/${props.hero.path}.png`} alt={props.hero.name} title={props.hero.name} />
      <p className={`${css.bar} ${css.hp}`}>{props.hero.hp}</p>
      <p className={`${css.bar} ${css.mp}`}>{props.hero.mp}</p>
    </div>
    <div className={css.column}>
      <StatLine 
        path={props.hero.mainAtr === 'str' ? props.paths.strMainPath : props.paths.strPath}
        stat='Сила'
        statStart={props.hero.str}
        statPL={props.hero.strpl}
      />
      <StatLine 
        path={props.hero.mainAtr === 'agi' ? props.paths.agiMainPath : props.paths.agiPath}
        stat='Ловкость'
        statStart={props.hero.agi}
        statPL={props.hero.agipl}
      />
      <StatLine 
        path={props.hero.mainAtr === 'int' ? props.paths.intMainPath : props.paths.intPath}
        stat='Интеллект'
        statStart={props.hero.int}
        statPL={props.hero.intpl}
      />
      <StatLine 
        path={props.hero.atkType === 'R' ? props.paths.range : props.paths.melee}
        stat='Атака'
        statStart={`${props.hero.dmgMin} - ${props.hero.dmgMax}`}
      />
      <StatLine 
        path={props.paths.armor}
        stat='Защита'
        statStart={props.hero.arm}
      />
    </div>
    <Skills hero={props.hero} skill={props.skill} chooseSkill={props.chooseSkill}/>
  </div>;
}