import React from 'react';
import style from '../css/compare.module.css';
import ItemToCompare from './ItemToCompare';
import CompareItemStat from './CompareItemStat';

export default function Compare(props) {

  const stats = [
    ["str", "Сила"],
    ["agi", "Ловкость"],
    ["int", "Интеллект"],
    ["hp", "Здоровье"],
    ["hpr", "Регенерация Здоровья"],
    ["mp", "Мана"],
    ["mpr", "Регенерация Маны"],
    ["dmg", "Атака"],
    ["as", "Скорость Атаки"],
    ["arm", "Защита"],
    ["ms", "Скорость"],
    ["value", "Ценность"]
  ]

  const statsToCompare = stats.map(stat => {
    return (
      <CompareItemStat 
        compare={props.compare} 
        compareItem={props.compareItem} 
        item={props.item}
        name={stat[1]}
        stat={stat[0]}
        key={stat[0]}
      />
    )
  })

  return (
    <div className={style.maincontainer}>
      
      <ItemToCompare item={props.item}/>
      <div className={style.block}>
        {statsToCompare}
      </div>
      
      <ItemToCompare item={props.compareItem}/>
    </div>
  )
}
