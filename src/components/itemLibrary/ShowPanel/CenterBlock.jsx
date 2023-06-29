import React from "react";
import style from "../css/showpanel.module.css";
import MainStat from "./MainStat";
import SecondaryStat from "./SecondaryStat";

export default function CenterBlock(props) {
  return (
    <div className={style.columnBlock}>
      {/*Main Stats*/}
      <p className={style.title}>Характеристики</p>
      <div className={style.lines}>
        <MainStat click={props.click} mainStat={props.mainStat} item={props.item} stat="STR"/>
        <MainStat click={props.click} mainStat={props.mainStat} item={props.item} stat="AGI"/>
        <MainStat click={props.click} mainStat={props.mainStat} item={props.item} stat="INT"/>
      </div>

      <p className={`${style.textCenter} ${style.title}`}>
        Второстепенные <br /> Характеристики
      </p>
      <SecondaryStat 
        item={props.item} 
        color="red" 
        stat="hp" 
        bonus="hpb"
        scale="str"
        name="Здоровье"
      />
      <SecondaryStat 
        item={props.item} 
        color="red" 
        stat="hpr" 
        bonus="hprb"
        scale="str"
        name="Регенерация Здоровья"
      />
      <SecondaryStat 
        item={props.item} 
        color="blue" 
        stat="mp" 
        bonus="mpb"
        scale="int"
        name="Мана"
      />
      <SecondaryStat 
        item={props.item} 
        color="blue" 
        stat="mpr" 
        bonus="mprb"
        scale="int"
        name="Регенерация Маны"
      />
      <SecondaryStat 
        item={props.item}  
        stat="dmg"
        bonus={props.mainStat}
        scale={props.mainStat}
        name="Атака"
      />
      <SecondaryStat 
        item={props.item}  
        stat="as"
        name="Скорость Атаки"
      />
      <SecondaryStat 
        item={props.item}  
        stat="arm"
        bonus="armb"
        scale="agi"
        name="Защита"
      />
      <SecondaryStat 
        item={props.item}  
        stat="ms"
        name="Скорость"
      />
    </div>
  );
}
