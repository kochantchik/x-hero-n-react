import React from 'react'
import style from '../css/compare.module.css'

export default function Compare(props) {
  return (
    <div className={style.maincontainer}>
      <div className={style.block}>
        <img className={style.icon}
          src={'./img/' + props.item.path + '.png'}
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
        <div className={props.item.act ? style.columnsText : style.columnsText + " " + style.inactive}>
          <p>Активный:</p>
          <p>{props.item.act}</p>
        </div>
        <div className={props.item.pas ? style.columnsText : style.columnsText + " " + style.inactive}>
          <p>Пассивный:</p>
          <p>{props.item.pas}</p>
        </div>
      </div>
      <div className={style.block}>
        <div className={style.compareLine}>
          <p className={style.lineLeft + " " + 
            (props.compare.str[1] === "l" ? style.green : 
            props.compare.str[1] === "r" ? style.red : "")
          }>{props.item.str}</p>
          <div className={style.compareCenter}>
            <p>Сила</p>
            <p>{props.compare.str[0]}</p>
          </div>
          <p className={style.lineRight + " " + 
            (props.compare.str[1] === "r" ? style.green : 
            props.compare.str[1] === "l" ? style.red : "")
          }>{props.compareItem.str}</p>
        </div>
        <div className={style.compareLine}>
          <p className={style.lineLeft + " " + 
            (props.compare.agi[1] === "l" ? style.green : 
            props.compare.agi[1] === "r" ? style.red : "")
          }>{props.item.agi}</p>
          <div className={style.compareCenter}>
            <p>Ловкость</p>
            <p>{props.compare.agi[0]}</p>
          </div>
          <p className={style.lineRight + " " + 
            (props.compare.agi[1] === "r" ? style.green : 
            props.compare.agi[1] === "l" ? style.red : "")
          }>{props.compareItem.agi}</p>
        </div>
        <div className={style.compareLine}>
          <p className={style.lineLeft + " " + 
            (props.compare.int[1] === "l" ? style.green : 
            props.compare.int[1] === "r" ? style.red : "")
          }>{props.item.int}</p>
          <div className={style.compareCenter}>
            <p>Интеллект</p>
            <p>{props.compare.int[0]}</p>
          </div>
          <p className={style.lineRight + " " + 
            (props.compare.int[1] === "r" ? style.green : 
            props.compare.int[1] === "l" ? style.red : "")
          }>{props.compareItem.int}</p>
        </div>
        <div className={style.compareLine}>
          <p className={style.lineLeft + " " + 
            (props.compare.hp[1] === "l" ? style.green : 
            props.compare.hp[1] === "r" ? style.red : "")
          }>{props.item.hp}</p>
          <div className={style.compareCenter}>
            <p>Здоровье</p>
            <p>{props.compare.hp[0]}</p>
          </div>
          <p className={style.lineRight + " " + 
            (props.compare.hp[1] === "r" ? style.green : 
            props.compare.hp[1] === "l" ? style.red : "")
          }>{props.compareItem.hp}</p>
        </div>
        <div className={style.compareLine}>
          <p className={style.lineLeft + " " + 
            (props.compare.hpr[1] === "l" ? style.green : 
            props.compare.hpr[1] === "r" ? style.red : "")
          }>{props.item.hpr}</p>
          <div className={style.compareCenter}>
            <p>Регенерация Здоровья</p>
            <p>{props.compare.hpr[0]}</p>
          </div>
          <p className={style.lineRight + " " + 
            (props.compare.hpr[1] === "r" ? style.green : 
            props.compare.hpr[1] === "l" ? style.red : "")
          }>{props.compareItem.hpr}</p>
        </div>
        <div className={style.compareLine}>
          <p className={style.lineLeft + " " + 
            (props.compare.mp[1] === "l" ? style.green : 
            props.compare.mp[1] === "r" ? style.red : "")
          }>{props.item.mp}</p>
          <div className={style.compareCenter}>
            <p>Мана</p>
            <p>{props.compare.mp[0]}</p>
          </div>
          <p className={style.lineRight + " " + 
            (props.compare.mp[1] === "r" ? style.green : 
            props.compare.mp[1] === "l" ? style.red : "")
          }>{props.compareItem.mp}</p>
        </div>
        <div className={style.compareLine}>
          <p className={style.lineLeft + " " + 
            (props.compare.mpr[1] === "l" ? style.green : 
            props.compare.mpr[1] === "r" ? style.red : "")
          }>{props.item.mpr}</p>
          <div className={style.compareCenter}>
            <p>Регенерация Маны</p>
            <p>{props.compare.mpr[0]}</p>
          </div>
          <p className={style.lineRight + " " + 
            (props.compare.mpr[1] === "r" ? style.green : 
            props.compare.mpr[1] === "l" ? style.red : "")
          }>{props.compareItem.mpr}</p>
        </div>
        <div className={style.compareLine}>
          <p className={style.lineLeft + " " + 
            (props.compare.dmg[1] === "l" ? style.green : 
            props.compare.dmg[1] === "r" ? style.red : "")
          }>{props.item.dmg}</p>
          <div className={style.compareCenter}>
            <p>Атака</p>
            <p>{props.compare.dmg[0]}</p>
          </div>
          <p className={style.lineRight + " " + 
            (props.compare.dmg[1] === "r" ? style.green : 
            props.compare.dmg[1] === "l" ? style.red : "")
          }>{props.compareItem.dmg}</p>
        </div>
        <div className={style.compareLine}>
          <p className={style.lineLeft + " " + 
            (props.compare.as[1] === "l" ? style.green : 
            props.compare.as[1] === "r" ? style.red : "")
          }>{props.item.as}</p>
          <div className={style.compareCenter}>
            <p>Скорость Атаки</p>
            <p>{props.compare.as[0]}</p>
          </div>
          <p className={style.lineRight + " " + 
            (props.compare.as[1] === "r" ? style.green : 
            props.compare.as[1] === "l" ? style.red : "")
          }>{props.compareItem.as}</p>
        </div>
        <div className={style.compareLine}>
          <p className={style.lineLeft + " " + 
            (props.compare.arm[1] === "l" ? style.green : 
            props.compare.arm[1] === "r" ? style.red : "")
          }>{props.item.arm}</p>
          <div className={style.compareCenter}>
            <p>Защита</p>
            <p>{props.compare.arm[0]}</p>
          </div>
          <p className={style.lineRight + " " + 
            (props.compare.arm[1] === "r" ? style.green : 
            props.compare.arm[1] === "l" ? style.red : "")
          }>{props.compareItem.arm}</p>
        </div>
        <div className={style.compareLine}>
          <p className={style.lineLeft + " " + 
            (props.compare.ms[1] === "l" ? style.green : 
            props.compare.ms[1] === "r" ? style.red : "")
          }>{props.item.ms}</p>
          <div className={style.compareCenter}>
            <p>Скорость</p>
            <p>{props.compare.ms[0]}</p>
          </div>
          <p className={style.lineRight + " " + 
            (props.compare.ms[1] === "r" ? style.green : 
            props.compare.ms[1] === "l" ? style.red : "")
          }>{props.compareItem.ms}</p>
        </div>
        <div className={style.compareLine}>
          <p className={style.lineLeft + " " + 
            (props.compare.value[1] === "l" ? style.green : 
            props.compare.value[1] === "r" ? style.red : "")
          }>{props.item.value}</p>
          <div className={style.compareCenter}>
            <p>Ценность</p>
            <p>{props.compare.value[0]}</p>
          </div>
          <p className={style.lineRight + " " + 
            (props.compare.value[1] === "r" ? style.green : 
            props.compare.value[1] === "l" ? style.red : "")
          }>{props.compareItem.value}</p>
        </div>
      </div>
      <div className={style.block}>
        <img className={style.icon}
          src={'./img/' + props.compareItem.path + '.png'}
          alt=""
        />
        <div className={style.columnsText}>
          <p>{props.compareItem.name}</p>
        </div>
        <div className={style.columnsText}>
          <p className={props.compareItem.shop === "Boss" ? style.inactive : ""}>Магазин:</p>
          <p>{props.compareItem.shop === "Boss" ? <br/> : props.compareItem.shop}</p>
        </div>
        <div className={style.columnsText}>
          <p className={props.compareItem.gold || props.compareItem.allgold ? style.gold : style.inactive}>Золото</p>
          <p>{props.compareItem.gold ? props.compareItem.gold : props.compareItem.allgold ? props.compareItem.allgold : <br/>}</p>
        </div>
        <div className={style.columnsText}>
          <p className={props.compareItem.lumber ||props.compareItem.alllumber ? style.lumber : style.inactive}>Дерево</p>
          <p>{props.compareItem.lumber ? props.compareItem.lumber : props.compareItem.alllumber ? props.compareItem.alllumber : <br/>}</p>
        </div>
        <div className={props.compareItem.act ? style.columnsText : style.columnsText + " " + style.inactive}>
          <p>Активный:</p>
          <p>{props.compareItem.act}</p>
        </div>
        <div className={props.compareItem.pas ? style.columnsText : style.columnsText + " " + style.inactive}>
          <p>Пассивный:</p>
          <p>{props.compareItem.pas}</p>
        </div>
      </div>
    </div>
  )
}
