import React from 'react'
import style from '../css/main.module.css'
import Item from './Item'

export default function Main(props) {

  const alldata = props.itemLibrary
  const goblin = []
  const spirits = []
  const pandora = []
  const wisp = []
  const tower = []
  const ghost = []
  const boss = []
  const other = []

  for (let i = 0; i<alldata.length; i++) {
    
    let item = <Item
                  key = {i}
                  path = {alldata[i].path}
                  alt = {alldata[i].name}
                  click = {props.click}
                  title = {alldata[i].name}
                />
    if (alldata[i].path !== "svitok"){
      switch(alldata[i].shop){
        case("Лавка Гоблина"):
          goblin.push(item)
          break
        case("Обитель Духов"):
          spirits.push(item)
          break
        case("Ящик Пандоры"):
          pandora.push(item)
          break
        case("Светлячок"):
          wisp.push(item)
          break
        case("Разведывательная Башня"):
          tower.push(item)
          break
        case("Призрак"):
          ghost.push(item)
          break
        case("Boss"):
          boss.push(item)
          break
        default:
          other.push(item)
      }
    }
  }

  return (
    <div className={style.maincontainer}>
      <div className={style.column}>
        <p>Охотничий Зал / Древо Вечности / Лунный Колодец / Обсерватория</p>
        <div className={style.line}>
          {other}
        </div>
      </div>
      <div className={style.column}>
        <p>Лавка Гоблина</p>
        <div className={style.line}>
          {goblin}
        </div>
      </div>
      <div className={style.column}>
        <p>Обитель Духов</p>
        <div className={style.line}>
          {spirits}
        </div>
      </div>
      <div className={style.column}>
        <p>Ящик Пандоры</p>
        <div className={style.line}>
          {pandora}
        </div>
      </div>
      <div className={style.column}>
        <p>Светлячок</p>
        <div className={style.line}>
          {wisp}
        </div>
      </div>
      <div className={style.column}>
        <p>Разведывательная Башня</p>
        <div className={style.line}>
          {tower}
        </div>
      </div>
      <div className={style.column}>
        <p>Призрак</p>
        <div className={style.line}>
          {ghost}
        </div>
      </div>
      <div className={style.columnBoss}>
        <p>Дроп с боссов</p>
        <div className={style.line}>
          {boss}
        </div>
      </div>
    </div>
  )
}
