import React from 'react';
import style from '../css/compare.module.css';

export default function ItemToCompare(props) {
  return <div className={style.block}>
        <img className={style.icon}
          src={`./img/items/${props.item.path}.png`}
          alt=""
        />
        <div className={style.columnsText}>
          <p>{props.item.name}</p>
        </div>
        <div className={style.columnsText}>
          <p className={props.item.shop === "Boss" ? style.inactive : ""}>Магазин:</p>
          <p>{props.item.shop === "Boss" ? <br/> : props.item.shop}</p>
        </div>
        <div className={style.columnsText}>
          <p className={props.item.gold || props.item.allgold ? style.gold : style.inactive}>Золото</p>
          <p>{props.item.gold ? props.item.gold : props.item.allgold ? props.item.allgold : <br/>}</p>
        </div>
        <div className={style.columnsText}>
          <p className={props.item.lumber ||props.item.alllumber ? style.lumber : style.inactive}>Дерево</p>
          <p>{props.item.lumber ? props.item.lumber : props.item.alllumber ? props.item.alllumber : <br/>}</p>
        </div>
        <div className={props.item.act ? style.columnsText : `${style.columnsText} ${style.inactive}`}>
          <p>Активный:</p>
          <p>{props.item.act}</p>
        </div>
        <div className={props.item.pas ? style.columnsText : `${style.columnsText} ${style.inactive}`}>
          <p>Пассивный:</p>
          <p>{props.item.pas}</p>
        </div>
      </div>;
}