import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Main from './components/Main';
import Showpanel from './components/Showpanel';
import Bookmark from './components/Bookmark';
import React from 'react';
import Compare from './components/Compare';
import Build from './components/Build';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';

export default function App() {

  const itemLibrary = require('./database.json')

  const bossDrop = {
    "Гром Задира":"Меч Крови","Визирь Саламандр":"Огненный Щит","Нага-Сирена":"Свиток Драконья Кожа",
    "Охранные Башни":"Сфера Яда","Вождь Драконидов":"Осколок Льда","Безликий Убийца":"Сердце Азуны",
    "Страж Преисподней":"Трезубец Азары","Предводитель Арахнидов":"Доспехи с Шипами","Белый Медведь":"Магический Щит",
    "Даларанская Нечисть":"Амулет Короля Саламандр","Алтарь Тьмы":"Знамя Орды",
    "Вождь Каменной Пасти":"Меч Огня","Огры Стражи":"Молот Грома","Чернокнижник":"Свиток Сфера Духов","Тяжелая Мортира":"Связка Ракет",
    "Коридор Смерти":"Труба Легиона","Высшая Башня Духов":"Свиток Сфера Стихий","Владыка Морей":"Королевская Корона",
    "Морское Чудовище":"Перстень Моря","Линкор Ночных Эльфов":"Живая Вода","Нага-Гвардеец":"Перстень Глубин",
    "Дух Бурь":"Сила Бури","Вождь Ледяных Троллей":"Ледяное Копье","Кристальный Голем":"Мертвая Вода",
    "Феникс":"Сила Магии","Воин Земли":"Свиток Золотая Сфера","Темный Феникс":"Сердце Темного Феникса",
    "Самуро":"Щит Смерти","Лесной Дракон":"Фиолетовый Кристалл","Грозный Совиный Медведь":"Меч Леса","Хранитель Леса":"Амулет Энергии",
    "Демон Огня":"Огненная Сфера","Искусительница":"Герб СССР","Порченное Древо":"Свиток Магический Рубин"
  }

  function reconstructDatabase(db){
    const newDB = {}
    
    db.forEach(e=>{
      const {name="", path="", shop="", color="",
        gold="", lumber="",
        str="", agi="", int="",
        hp="", hpb="", hpr="", hprb="", mp="", mpb="", mpr="", mprb="",
        dmg="", as="", arm="", armb="", ms="",
        act="", pas="",
        circle="", line="", number="",
        bossname="",
        allgold="", alllumber="",
        used=[]} = e

      newDB[name] = {
        name: name, path: path, shop: shop, color: color,
        hpb: hpb, hprb: hprb, mpb: mpb, mprb: mprb,
        act: act, pas: pas,
        circle: circle, line: line, number: number,
        bossname: bossname, used: used, comp: [],
        gold: gold, lumber: lumber,
        allgold: allgold, alllumber: alllumber,
        str: str, agi: agi, int: int,
        hp: hp, hpr: hpr, mp: mp, mpr: mpr, 
        dmg: dmg, as: as, arm: arm, armb: armb, ms: ms
      }
      newDB[name].value = calculateValue(e)
      for(let i = 1; i<7; i++){
        if (e.hasOwnProperty(`c${i}`)){
          newDB[name].comp.push(e[`c${i}`])
        }
      }
    })
    return newDB
  }

  const reconstrucktedLibrary = reconstructDatabase(itemLibrary)

  const [item, setItem] = React.useState(
    {
      name: "Выберите Предмет", path: "svitok", shop: "", color: "",
      hpb: "", hprb: "", mpb: "", mprb: "", armb: "",
      act: "", pas: "", used: [], comp: [], 
      circle: "", line: "", number: "",
      bossname: "",
      gold: "", lumber: "",
      allgold: "", alllumber: "",
      str: "", agi: "", int: "",
      hp: "", hpr: "", mp: "", mpr: "",
      dmg: "", as: "", arm: "", ms: "",
      value: 0
    }
  )

  const [compareItem, setCompareItem] = React.useState(
    {
      name: "Выберите Предмет", path: "svitok", shop: "", color: "",
      hpb: "", hprb: "", mpb: "", mprb: "", armb: "",
      act: "", pas: "", used: [], comp: [], 
      circle: "", line: "", number: "",
      bossname: "",
      gold: "", lumber: "",
      allgold: "", alllumber: "",
      str: "", agi: "", int: "",
      hp: "", hpr: "", mp: "", mpr: "",
      dmg: "", as: "", arm: "", ms: "",
      value: 0
    }
  )

  const [compare, setCompare] = React.useState({
    "str": [0,"n"],
    "agi": [0,"n"],
    "int": [0,"n"],
    "hp": [0,"n"],
    "hpr": [0,"n"],
    "mp": [0,"n"],
    "mpr": [0,"n"],
    "dmg": [0,"n"],
    "as": [0,"n"],
    "arm": [0,"n"],
    "ms": [0,"n"],
    "value": [0,"n"]
  })

  const [mainStat, setMainStat] = React.useState("str")

  const [mode, setMode] = React.useState(
    {
      showpanel : true,
      compare : false,
      build: false
    }
  )

  function chooseItem(e) {
    if (e.type === "click"){
      const item = reconstrucktedLibrary[e.target.title]
      if(mode.showpanel === true){
        calculateBonuses(item)
        setItem(item)
        window.scrollTo({top: 0});
      } else if (mode.compare === true) {
        setItem(item)
        calculateDifference(item, compareItem)
      }
    } else if (e.type === "contextmenu" && mode.compare === true){
      const clickedItem = reconstrucktedLibrary[e.target.title]
      setCompareItem(clickedItem)
      calculateDifference(item, clickedItem)
    }
  }

  function chooseBoss(e){
    const boss = e.target.innerText
    const drop = bossDrop[boss]
    const item = reconstrucktedLibrary[drop]
    calculateBonuses(item)
    setItem(item)
  }

  function chooseStat(e){
    const stat = e.target.textContent
    switch(stat){
      case "STR":
        setMainStat("str")
        break
      case "AGI":
        setMainStat("agi")
        break
      case "INT":
        setMainStat("int")
    }
  }

  function chooseMode(e){
    const choosenMode = e.target.innerText;
    switch(choosenMode){
      case "Список Артефактов":
        setMode({
          showpanel : true,
          compare : false,
          build : false
        })
        break
      case "Сравнение Артефактов":
        setMode({
          showpanel : false,
          compare : true,
          build : false
        })
        break
      case "Сборка":
        setMode({
          showpanel : false,
          compare : false,
          build : true
        })
    }

  }

  function calculateBonuses(item){
    if (item.str !== ""){
      const strInt = parseInt(item.str)
      item.hpb = (strInt*16).toString()
      item.hprb = (Math.floor(strInt*0.5)).toString()
    }
    if (item.agi !== ""){
      const agiInt = parseInt(item.agi)
      item.armb = (Math.floor(agiInt*0.07)).toString()
    }
    if (item.int !== ""){
      const intInt = parseInt(item.int)
      item.mpb = (intInt*15).toString()
      item.mprb = (Math.floor(intInt*0.5)).toString()
    }
  }

  function calculateValue(item){
    const statsInt = {
      str: (parseInt(item.str)||0), agi: (parseInt(item.agi)||0), int: (parseInt(item.int)||0),
      hp: (parseInt(item.hp)||0), hpr: (parseInt(item.hpr)||0), mp: (parseInt(item.mp)||0), mpr: (parseInt(item.mpr)||0),
      dmg: (parseInt(item.dmg)||0)
    }
    const value = statsInt.str*200 + statsInt.agi*175 + statsInt.int*113 + statsInt.hp*12.5 +
                  statsInt.mp*8 + statsInt.dmg*163 + statsInt.hpr*400 + statsInt.mpr*225
    return value
  }

  function calculateDifference(item, compareItem){
    const item1 = Object.entries(item)
    const item2 = Object.entries(compareItem)
    const diffObj = {}
    let diff;
    let lrn;
    for (let i = 20; i<item1.length; i++){
      diff = (parseInt(item1[i][1])||0) - (parseInt(item2[i][1])||0)
      if(diff > 0){
        lrn = "l"
      } else if (diff < 0){
        lrn = "r"
      } else {
        lrn = "n"
      }
      diffObj[item1[i][0]] = [Math.abs(diff), lrn]
    }
    setCompare(diffObj)
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Navbar />
        <Bookmark 
          click = {chooseMode}
          activeMode = {mode}  
        />
        {mode.showpanel && <Showpanel
          item = {item}
          items = {reconstrucktedLibrary}
          mainStat = {mainStat}
          click = {chooseStat}
          clickComp = {chooseItem}
          clickBoss = {chooseBoss}
        />}
        {mode.compare && <Compare
          item = {item}
          compareItem = {compareItem}
          compare = {compare}
        />}
        {mode.build && <Build

        />}
        <Main
          itemLibrary = {itemLibrary}
          click = {chooseItem}
        />
        <Footer />
      </div>
    </DndProvider>
  );
}
