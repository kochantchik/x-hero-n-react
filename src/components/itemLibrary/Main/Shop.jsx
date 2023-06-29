import React from "react";
import style from "../css/main.module.css";

export default function Shop({goods, name}) {
  return (
    <div className={name === "Боссы" ? style.columnBoss : style.column}>
      <p>{name}</p>
      <div className={style.line}>{goods}</div>
    </div>
  );
}
