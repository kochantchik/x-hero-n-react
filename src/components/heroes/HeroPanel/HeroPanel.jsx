import React from 'react';
import css from './heropanel.module.css';
import StatLine from './StatLine';
import Skills from './SkillPanel/Skills';

export default function HeroPanel(props) {

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

  return <div className={css.heropanel}>
    <div className={css.column}>
      <img src={`./img/heroes/${props.hero.path}.png`} alt={props.hero.name} title={props.hero.name} />
      <p className={`${css.bar} ${css.hp}`}>{props.hero.hp}</p>
      <p className={`${css.bar} ${css.mp}`}>{props.hero.mp}</p>
    </div>
    <div className={css.column}>
      <StatLine 
        path={props.hero.mainAtr === 'str' ? paths.strMainPath : paths.strPath}
        stat='Сила'
        statStart={props.hero.str}
        statPL={props.hero.strpl}
      />
      <StatLine 
        path={props.hero.mainAtr === 'agi' ? paths.agiMainPath : paths.agiPath}
        stat='Ловкость'
        statStart={props.hero.agi}
        statPL={props.hero.agipl}
      />
      <StatLine 
        path={props.hero.mainAtr === 'int' ? paths.intMainPath : paths.intPath}
        stat='Интеллект'
        statStart={props.hero.int}
        statPL={props.hero.intpl}
      />
    </div>
    <div className={css.column}>
      <StatLine 
        path={props.hero.atkType === 'R' ? paths.range : paths.melee}
        stat='Атака'
        statStart={`${props.hero.dmgMin} - ${props.hero.dmgMax}`}
      />
      <StatLine 
        path={paths.armor}
        stat='Защита'
        statStart={props.hero.arm}
      />
    </div>
    <Skills hero={props.hero} skill={props.skill} chooseSkill={props.chooseSkill}/>
  </div>;
}