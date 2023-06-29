import React from "react";
import style from "../css/showpanel.module.css";
import Cost from "./Cost";

export default function LeftBlock(props) {
  return (
    <div className={style.columnBlock}>
      {/*Image*/}
      <img
        className={style.icon}
        src={"./img/items/" + props.item.path + ".png"}
        alt=""
      />
      
      {/*Item Name*/}
      <div className={style.columnsText}>
        <p className={style.textCenter}>{props.item.name}</p>
      </div>
      
      {/*Shop*/}
      <div className={style.columnsText}>
        <p className={props.item.shop === "Boss" ? style.inactive : ""}>
          Магазин:
        </p>
        <p className={style.textCenter}>
          {props.item.shop === "Boss" ? <br /> : props.item.shop}
        </p>
      </div>
      
      {/*Cost for simle items and value of composite items*/}
      {props.item.gold ? <p>Цена</p> : <p>Общая цена</p>}
      <div className={style.columnsText}>
        <Cost item={props.item} type={"gold"}/>
        <Cost item={props.item} type={"lumber"}/>
      </div>
      
      {/*Value*/}
      <p className={props.item.value === 0 ? style.inactive : ""}>Ценность</p>
      <div className={style.columnsText}>
        {props.item.value !== 0 ? (<p>{props.item.value}</p>) 
                                : (<p><br /></p>)}
      </div>
    </div>
  );
}
