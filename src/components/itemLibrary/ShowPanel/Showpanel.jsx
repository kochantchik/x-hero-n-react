import React from "react";

import LeftBlock from "./LeftBlock";
import CenterBlock from "./CenterBlock";
import RightBlock from "./RightBlock";

import style from "../css/showpanel.module.css";

export default function Showpanel(props) {
  return (
    <div className={style.maincontainer}>
      <LeftBlock item={props.item} />
      <CenterBlock
        item={props.item}
        click={props.click}
        mainStat={props.mainStat}
      />
      <RightBlock item={props.item} items={props.items} clickComp={props.clickComp} />
    </div>
  );
}
