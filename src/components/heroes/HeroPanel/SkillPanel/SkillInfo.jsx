import React from 'react';
import css from './skillinfo.module.css';
import SkillLevel from './SkillLevel';

export default function SkillInfo(props) {
  return <div className={css.skillinfo}>
    <div className={css.description}>
      <img src={`./img/skills/${props.skill.path}.png`} alt={props.skill.skill} />
      <div className={css.column}>
        {props.skill.cd && <div className={css.line}>
          <img src='./img/icons/time-left.png' alt='Cooldown:'/>
          <p>{props.skill.cd}</p>
        </div>}
        <p>{props.skill.description}</p>
      </div>
    </div>
    <div className={css.levels}>
      <SkillLevel level={props.skill.l1} manacost={props.skill.mc1}/>
      <SkillLevel level={props.skill.l2} manacost={props.skill.mc2}/>
      <SkillLevel level={props.skill.l3} manacost={props.skill.mc3}/>
      {props.skill.l4 && <SkillLevel level={props.skill.l4} manacost={props.skill.mc4}/>}
      {props.skill.l5 && <SkillLevel level={props.skill.l5} manacost={props.skill.mc5}/>}
    </div>
  </div>;
}