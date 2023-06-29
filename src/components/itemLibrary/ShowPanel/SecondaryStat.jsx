import React from "react";
import style from "../css/showpanel.module.css";

export default function SecondaryStat(props) {
  return (
    <div className={props.item[props.stat] || props.item[props.bonus]
                    ? `${style.linesTextCHx2} ${style[props.color]}`
                    : `${style.linesTextCHx2} ${style.inactive}`}>
        <p>{props.name}</p>
        {/*if stat is scalable - show bonus*/}
        {props.item[props.scale] ? (
          <div className={style.columnsZero}>
            <div className={style.linesZero}>
              <p>
                {props.item[props.stat] ? props.item[props.stat] : props.item[props.scale] ? "0" : <br />}
              </p>
              <p>{props.item[props.scale] ? "+" + props.item[props.bonus] : <br />}</p>
            </div>
            <p>
              {props.item[props.stat] || props.item[props.bonus] ? (
                (parseInt(props.item[props.stat]) || 0) + (parseInt(props.item[props.bonus]) || 0)
              ) : (
                <br />
              )}
            </p>
          </div>
        ) : (
          <p>{props.item[props.stat]}</p>
        )}
      </div>
  );
}
