import React from 'react'
import Item from './Item'
import style from '../css/showpanel.module.css'

export default function Showpanel(props) {

  const bosses = [
    [
      ["Гром Задира","Визирь Саламандр","Нага-Сирена"],
      ["Охранные Башни","Вождь Драконидов","Безликий Убийца"],
      ["Страж Преисподней","Предводитель Арахнидов","Белый Медведь"],
      ["Даларанская Нечисть","Алтарь Тьмы"]
    ],
    [],
    [
      ["Вождь Каменной Пасти","Огры Стражи","Чернокнижник","Тяжелая Мортира"],
      ["Коридор Смерти","Высшая Башня Духов","Владыка Морей"],
      ["Морское Чудовище","Линкор Ночных Эльфов","Нага-Гвардеец"]
    ],
    [
      ["Дух Бурь","Вождь Ледяных Троллей","Кристальный Голем"],
      ["Феникс","Воин Земли","Темный Феникс"],
      ["Самуро","Лесной Дракон","Грозный Совиный Медведь","Хранитель Леса"],
      ["Демон Огня","Искусительница","Порченное Древо"]
    ]
  ]

  return (
    <div className={style.maincontainer}>
      
      <div className={style.columnBlock}> 
        <img className={style.icon}
          src={'./img/items/' + props.item.path + '.png'}
          alt=""
        />
        <div className={style.columnsText}>
          <p className={style.textCenter}>{props.item.name}</p>
        </div>
        <div className={style.columnsText}>
          <p className={props.item.shop === "Boss" ? style.inactive : ""}>Магазин:</p>
          <p className={style.textCenter}>{props.item.shop === "Boss" ? <br/> : props.item.shop}</p>
        </div>
        {props.item.gold ? <p>Цена</p> : <p>Общая цена</p>}
        <div className={style.columnsText}>
          <p className={props.item.gold || props.item.allgold ? style.gold : style.inactive}>Золото</p>
          <p>{props.item.gold ? props.item.gold : props.item.allgold ? props.item.allgold : <br/>}</p>
          <p className={props.item.lumber ||props.item.alllumber ? style.lumber : style.inactive}>Дерево</p>
          <p>{props.item.lumber ? props.item.lumber : props.item.alllumber ? props.item.alllumber : <br/>}</p>
        </div>
        <p className={props.item.value === 0 ? style.inactive : ""}>Ценность</p>
        <div className={style.columnsText}>
          {props.item.value !==0 ? <p>{props.item.value}</p> : <p><br/></p>}
        </div>
      </div>
      
      <div className={style.columnBlock}>
        <p className={style.title}>Характеристики</p>
        <div className={style.lines}>
          <div className={style.columnsText} onClick={props.click}>
            <p className={props.mainStat === "str" ? style.mainStat : style.stat} >STR</p>
            <p>{props.item.str ? props.item.str : <br/>}</p>
          </div>
          <div className={style.columnsText} onClick={props.click}>
            <p className={props.mainStat === "agi" ? style.mainStat : style.stat} >AGI</p>
            <p>{props.item.agi ? props.item.agi : <br/>}</p>
          </div>
          <div className={style.columnsText} onClick={props.click}>
            <p className={props.mainStat === "int" ? style.mainStat : style.stat} >INT</p>
            <p>{props.item.int ? props.item.int : <br/>}</p>
          </div>
        </div>
        <p className={style.textCenter + " " + style.title}>Второстепенные <br/> Характеристики</p>
          <div className={props.item.hp || props.item.hpb ? style.linesTextCHx2 + " " + style.red : style.linesTextCHx2 + " " + style.inactive}>
            <p>Здоровье</p>
            {props.item.str ? <div className={style.columnsZero}>
              <div className={style.linesZero}>
                <p>{props.item.hp ? props.item.hp : props.item.str ? "0" : <br/>}</p>
                <p>{props.item.str ? "+" + props.item.hpb : <br/>}</p>
              </div>
              <p>{props.item.hp || props.item.hpb ? ((parseInt(props.item.hp)||0) + (parseInt(props.item.hpb)||0)) : <br/>}</p>
            </div> : <p>{props.item.hp}</p>}
          </div>
          <div className={props.item.hpr || props.item.hprb ? style.linesTextCHx2 + " " + style.red : style.linesTextCHx2 + " " + style.inactive}>
            <p>Регенерация Здоровья</p>
            {props.item.str ? <div className={style.columnsZero}>
              <div className={style.linesZero}>
                <p>{props.item.hpr ? props.item.hpr : props.item.str ? "0" : <br/>}</p>
                <p>{props.item.str ? "+" + props.item.hprb : <br/>}</p>
              </div>
              <p>{props.item.hpr || props.item.hprb ? ((parseInt(props.item.hpr)||0) + (parseInt(props.item.hprb)||0)) : <br/>}</p>
            </div> : <p>{props.item.hpr}</p>}
          </div>
          <div className={props.item.mp || props.item.mpb ? style.linesTextCHx2 + " " + style.blue : style.linesTextCHx2 + " " + style.inactive}>
            <p>Мана</p>
            {props.item.int ? <div className={style.columnsZero}>
              <div className={style.linesZero}>
                <p>{props.item.mp ? props.item.mp : props.item.int ? "0" : <br/>}</p>
                <p>{props.item.int ? "+" + props.item.mpb : <br/>}</p>
              </div>
              <p>{props.item.mp || props.item.mpb ? ((parseInt(props.item.mp)||0) + (parseInt(props.item.mpb)||0)) : <br/>}</p>
            </div> : <p>{props.item.mp}</p>}
          </div>
          <div className={props.item.mpr || props.item.mprb ? style.linesTextCHx2 + " " + style.blue : style.linesTextCHx2 + " " + style.inactive}>
            <p>Регенерация Маны</p>
            {props.item.int ? <div className={style.columnsZero}>
              <div className={style.linesZero}>
                <p>{props.item.mpr ? props.item.mpr : props.item.int ? "0" : <br/>}</p>
                <p>{props.item.int ? "+" + props.item.mprb : <br/>}</p>
              </div>
              <p>{props.item.mpr || props.item.mprb ? ((parseInt(props.item.mpr)||0) + (parseInt(props.item.mprb)||0)) : <br/>}</p>
            </div> : <p>{props.item.mpr}</p>}
          </div>
          <div className={props.item.dmg || props.item[props.mainStat] ? style.linesTextCHx2 : style.linesTextCHx2 + " " + style.inactive}>
            <p>Атака</p>
            {props.item[props.mainStat] ? <div className={style.columnsZero}>
              <div className={style.linesZero}>
                <p>{props.item.dmg ? props.item.dmg : props.item[props.mainStat] ? "0" : <br/>}</p>
                <p>{props.item[props.mainStat] ? "+" + props.item[props.mainStat] : <br/>}</p>
              </div>
              <p>{props.item.dmg || props.item[props.mainStat] ? ((parseInt(props.item.dmg)||0) + (parseInt(props.item[props.mainStat])||0)) : <br/>}</p>
            </div> : <p>{props.item.dmg}</p>}
          </div>
          <div className={props.item.as ? style.linesTextCHx2 : style.linesTextCHx2 + " " + style.inactive}>
            <p>Скорость Атаки</p>
            <p>{props.item.as}</p>
          </div>
          <div className={props.item.arm || props.item.armb ? style.linesTextCHx2 : style.linesTextCHx2 + " " + style.inactive}>
            <p>Защита</p>
            {props.item.agi ? <div className={style.columnsZero}>
              <div className={style.linesZero}>
                <p>{props.item.arm ? props.item.arm : props.item.agi ? "0" : <br/>}</p>
                <p>{props.item.agi ? "+" + props.item.armb : <br/>}</p>
              </div>
              <p>{props.item.arm || props.item.armb ? ((parseInt(props.item.arm)||0) + (parseInt(props.item.armb)||0)) : <br/>}</p>
            </div> : <p>{props.item.arm}</p>}
          </div>
          <div className={props.item.ms ? style.linesTextCHx2 : style.linesTextCHx2 + " " + style.inactive}>
            <p>Скорость</p>
            <p>{props.item.ms}</p>
          </div>
      </div>

      <div className={style.columnBlock} id={style.last}>
        <div className={style.columnsText + " " + style.spaceAround}>
          <p className={props.item.used[0] === undefined ? style.inactive : ""}>Нужен для:</p>
          <div className={style.lines}>
            {props.item.used !== [] ? props.item.used.map((element, index) =>{
              return <Item 
                key = {index+160}
                path = {props.items[element].path}
                alt = {element}
                click = {props.clickComp}
                title = {element}
                style={style.smallImg}
              />})
            : ""}
          </div>
        </div>

        <div className={style.columns}>
          <p className={props.item.act || props.item.pas ? style.title : style.title + " " + style.inactive}>Эффекты</p>
          <div className={props.item.act ? style.linesEff : style.linesEff + " " + style.inactive}>
            <p>Активный:</p>
            <p>{props.item.act}</p>
          </div>
          <div className={props.item.pas ? style.linesEff : style.linesEff + " " + style.inactive}>
            <p>Пассивный:</p>
            <p>{props.item.pas}</p>
          </div>
        </div>

        {props.item.shop !== "Boss" && <div className={props.item.comp[0] !== undefined ? 
          style.columnsText + " " + style.spaceAround : 
          style.columnsText + " " + style.spaceAround + " " + style.inactive}>
          <p>Компоненты:</p>
            <div className={style.lines}>
              {props.item.comp !== [] ? props.item.comp.map((element, index) =>{
                  return <Item 
                    key = {index+170}
                    path = {props.items[element].path}
                    alt = {element}
                    click = {props.clickComp}
                    title = {element}
                    style={style.smallImg}
                  />})
                : ""}
            </div>
        </div>}
        {props.item.shop === "Boss" && <div className={style.columnsText + " " + style.bossHeight}>
          <p>{props.item.bossname === "Secret" ? "Секретный Босс" : 
            props.item.circle === "" ? "Босс с эвента" : "Номер круга: " + props.item.circle}
          </p>
          {props.item.bossname !== "Secret" && props.item.circle !== "" && props.item.circle !== "2"
            ? bosses[parseInt(props.item.circle)-1][parseInt(props.item.line)-1].map((element, index) =>{
              return <p key={index+180} 
              className={props.item.bossname === element ? style.activeBoss : style.inactiveBoss}
              onClick={props.clickBoss}>
              {element}
            </p>
          }) : props.item.circle === "2" ? <p className={style.activeBoss}>{props.item.bossname}</p> : ""}
        </div>}
      </div>
    </div>
  )
}
