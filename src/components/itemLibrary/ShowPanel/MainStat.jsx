import React from "react";
import style from "../css/showpanel.module.css";

export default function MainStat(props) {

  const lowerCase = props.stat.toLowerCase();

  return (
    <div className={style.columnsText} onClick={props.click}>
      <p className={props.mainStat === lowerCase ? style.mainStat : style.stat}>
        {props.stat}
      </p>
      <p>{props.item[lowerCase] ? props.item[lowerCase] : <br />}</p>
    </div>
  );
}
