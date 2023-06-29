import React from 'react';
import style from '../css/compare.module.css';

export default function CompareItemStat(props) {
  return <div className={style.compareLine}>
  <p className={style.lineLeft + " " + 
    (props.compare[props.stat][1] === "l" ? style.green : 
    props.compare[props.stat][1] === "r" ? style.red : "")
  }>{props.item[props.stat]}</p>
  <div className={style.compareCenter}>
    <p>{props.name}</p>
    <p>{props.compare[props.stat][0]}</p>
  </div>
  <p className={style.lineRight + " " + 
    (props.compare[props.stat][1] === "r" ? style.green : 
    props.compare[props.stat][1] === "l" ? style.red : "")
  }>{props.compareItem[props.stat]}</p>
</div>;
}