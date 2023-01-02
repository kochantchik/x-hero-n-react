import React from 'react';
import css from './skilltab.module.css';

export default function SkillTab(props) {
  return (
    <p
      className={
        props.skillName === props.skill
          ? `${css.skilltab} ${css.active}`
          : css.skilltab
      }
      onClick={props.chooseSkill}
    >
      {props.skill}
    </p>
  );
}
