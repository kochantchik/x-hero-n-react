import React from 'react'
import style from '../css/bookmark.module.css'

export default function Bookmark(props) {
  return (
    <div className={style.marks}>
      <p 
        onClick={props.click} 
        className={props.activeMode.showpanel ? style.active : style.inactive}
      >Список Артефактов</p>
      <p 
        onClick={props.click}
        className={props.activeMode.compare ? style.active : style.inactive}
      >Сравнение Артефактов</p>
      <p 
        onClick={props.click}
        className={props.activeMode.build ? style.active : style.inactive}
      >Сборка</p>
    </div>
  )
}
