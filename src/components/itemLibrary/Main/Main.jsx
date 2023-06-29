import React from "react";
import style from "../css/main.module.css";
import Item from "../Item";
import Shop from "./Shop";

export default function Main({ itemLibrary, click }) {
  const alldata = itemLibrary;
  const shopGoods = [
    ["Обитель Духов"],
    ["Ящик Пандоры"],
    ["Светлячок"],
    ["Разведывательная Башня"],
    ["Призрак"],
    ["Боссы"],
    ["Другие"],
    ["Лавка Гоблина"],
  ];

  const shopsEnum = {
    "Обитель Духов": 0,
    "Ящик Пандоры": 1,
    "Светлячок": 2,
    "Разведывательная Башня": 3,
    "Призрак": 4,
    "Boss": 5,
    "Охотничий Зал": 6,
    "Древо Вечности": 6,
    "Лунный Колодец": 6,
    "Кузница": 6,
    "Обсерватория": 6,
    "Лавка Гоблина": 7,
  };

  for (const element of alldata) {
    let item = (
      <Item
        key={element.name}
        path={element.path}
        alt={element.name}
        click={click}
        title={element.name}
      />
    );
    if (element.path !== "scroll") {
      shopGoods[shopsEnum[element.shop]].push(item);
    }
  }

  const shops = shopGoods.map((shop) => (
    <Shop goods={shop.slice(1)} name={shop[0]} key={shop[0]} />
  ));

  return <div className={style.maincontainer}>{shops}</div>;
}
