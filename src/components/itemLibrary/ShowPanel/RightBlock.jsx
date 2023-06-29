import React from 'react';
import Item from "../Item";
import style from '../css/showpanel.module.css';
import bosses from "../../../json/bosses.json";

export default function RightBlock(props) {
  return <div className={style.columnBlock} id={style.last}>
        {/*used for*/}
        <div className={`${style.columnsText} ${style.spaceAround}`}>
          <p className={props.item.used[0] === undefined ? style.inactive : ""}>
            Нужен для:
          </p>
          <div className={style.lines}>
            {props.item.used !== []
              ? props.item.used.map((element, index) => {
                  return (
                    <Item
                      key={index}
                      path={props.items[element].path}
                      alt={element}
                      click={props.clickComp}
                      title={element}
                      style={style.smallImg}
                    />
                  );
                })
              : ""}
          </div>
        </div>
        
        {/*effects*/}
        <div className={style.columns}>
          <p className={props.item.act || props.item.pas ? style.title : `${style.title} ${style.inactive}`}>
            Эффекты
          </p>
          <div className={props.item.act ? style.linesEff : `${style.linesEff} ${style.inactive}`}>
            <p>Активный:</p>
            <p>{props.item.act}</p>
          </div>
          <div className={props.item.pas ? style.linesEff : `${style.linesEff} ${style.inactive}`}>
            <p>Пассивный:</p>
            <p>{props.item.pas}</p>
          </div>
        </div>
        
        {/*components and bosses*/}
        {props.item.shop !== "Boss" && (
          <div
            className={
              props.item.comp[0] !== undefined
                ? `${style.columnsText} ${style.spaceAround}`
                : `${style.columnsText} ${style.spaceAround} ${style.inactive}`
            }
          >
            <p>Компоненты:</p>
            <div className={style.lines}>
              {props.item.comp !== []
                ? props.item.comp.map((element, index) => {
                    return (
                      <Item
                        key={index + 170}
                        path={props.items[element].path}
                        alt={element}
                        click={props.clickComp}
                        title={element}
                        style={style.smallImg}
                      />
                    );
                  })
                : ""}
            </div>
          </div>
        )}

        {props.item.shop === "Boss" && (
          <div className={`${style.columnsText} ${style.bossHeight}`}>
            <p>
              {props.item.bossname === "Secret"
                ? "Секретный Босс"
                : props.item.circle === ""
                ? "Босс с эвента"
                : "Номер круга: " + props.item.circle}
            </p>
            {props.item.bossname !== "Secret" &&
            props.item.circle !== "" &&
            props.item.circle !== "2" ? (
              bosses[parseInt(props.item.circle) - 1][
                parseInt(props.item.line) - 1
              ].map((element, index) => {
                return (
                  <p
                    key={index + 320}
                    className={
                      props.item.bossname === element
                        ? style.activeBoss
                        : style.inactiveBoss
                    }
                    onClick={props.clickBoss}
                  >
                    {element}
                  </p>
                );
              })
            ) : props.item.circle === "2" ? (
              <p className={style.activeBoss}>{props.item.bossname}</p>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
}