import React from "react";
import style from "../css/showpanel.module.css";

export default function Cost(props) {
  return (
    <>
      <p className={props.item[`${props.type}`] || props.item[`all${props.type}`] ? style[`${props.type}`] : style.inactive}>
        {props.type === "gold" ? "Золото" : "Дерево"}
      </p>
      <p>
        {props.item[`${props.type}`] ? (props.item[`${props.type}`]) 
                                     : props.item[`all${props.type}`] ? (props.item[`all${props.type}`]) 
                                                                      : (<br />)}
      </p>
    </>
  );
}
