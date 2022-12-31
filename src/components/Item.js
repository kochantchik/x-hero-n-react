import React from 'react'
import style from '../css/item.module.css'

export default function Item(props) {

  return (
    <div className={style.maincontainer}>
      <img
        src={'./img/items/' + props.path + '.png'}
        alt={props.alt}
        title={props.title}
        onClick={props.click}
        onContextMenu={props.click}
        className={style.image + " " + props.style}
      />
    </div>
  )
}