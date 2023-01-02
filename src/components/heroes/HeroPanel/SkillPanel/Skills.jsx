import React from 'react';
import css from './skills.module.css';
import SkillInfo from './SkillInfo';
import SkillTab from './SkillTab';

export default function Skills(props) {
  return (
    <div className={css.skills}>
      <div className={css.tabs}>
        <SkillTab
          skillName={props.skill.skill}
          skill={props.hero.s1}
          chooseSkill={props.chooseSkill}
        />
        <SkillTab
          skillName={props.skill.skill}
          skill={props.hero.s2}
          chooseSkill={props.chooseSkill}
        />
        <SkillTab
          skillName={props.skill.skill}
          skill={props.hero.s3}
          chooseSkill={props.chooseSkill}
        />
        <SkillTab
          skillName={props.skill.skill}
          skill={props.hero.ult}
          chooseSkill={props.chooseSkill}
        />
      </div>
      <SkillInfo skill={props.skill} />
    </div>
  );
}
