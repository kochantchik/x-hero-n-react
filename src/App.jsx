import "./App.css";
import { useCallback, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import Navbar from "./components/general/Navbar/Navbar";
import Footer from "./components/general/Footer/Footer";
import Main from "./components/itemLibrary/Main/Main";
import Showpanel from "./components/itemLibrary/ShowPanel/Showpanel";
import Bookmark from "./components/itemLibrary/Bookmark";
import Compare from "./components/itemLibrary/Compare/Compare";
import Build from "./components/itemLibrary/Build";
import Heroes from "./components/heroes/Heroes";
//json
import itemLibrary from "./json/itemLibrary.json";
import bossDrop from "./json/bossDrop.json";
//functions
import reconstructDatabase from "./js/reconstructDB";

import { emptyItem, compareItems, calculateBonuses, calculateDifference } from "./js/item";

export default function App(props) {
  const [item, setItem] = useState(emptyItem);
  const [compareItem, setCompareItem] = useState(emptyItem);

  const [mainStat, setMainStat] = useState("str");
  //active screen
  const [mode, setMode] = useState({
    showpanel: true,
    compare: false,
    build: false,
  });
  const [compare, setCompare] = useState(compareItems);

  const reconstructedLibrary = reconstructDatabase(itemLibrary);
  
  //show stats of chosen item in show mode. Or compare stats of 2 items in compare mode
  const chooseItem = useCallback((e) => {
    if (e.type === "click") {
      const item = reconstructedLibrary[e.target.title];
      if (mode.showpanel === true) {
        calculateBonuses(item);
        setItem(item);
        window.scrollTo({ top: 0 });
      } else if (mode.compare === true) {
        setItem(item);
        setDifference(item, compareItem);
      }
    } else if (e.type === "contextmenu" && mode.compare === true) {
      const clickedItem = reconstructedLibrary[e.target.title];
      setCompareItem(clickedItem);
      setDifference(item, clickedItem);
    }
  }, [item, compareItem, mode.compare, mode.showpanel, reconstructedLibrary])

  function setDifference(item, compareItem) {
    const diff = calculateDifference(item, compareItem)
    setCompare(diff);
  }

  function chooseBoss(e) {
    const boss = e.target.innerText;
    const drop = bossDrop[boss];
    const item = reconstructedLibrary[drop];
    calculateBonuses(item);
    setItem(item);
  }

  function chooseStat(e) {
    const stat = e.target.textContent;
    // eslint-disable-next-line default-case
    switch (stat) {
      case "STR":
        setMainStat("str");
        break;
      case "AGI":
        setMainStat("agi");
        break;
      case "INT":
        setMainStat("int");
    }
  }

  function chooseMode(e) {
    const chosenMode = e.target.innerText;
    // eslint-disable-next-line default-case
    switch (chosenMode) {
      case "Список Артефактов":
        setMode({
          showpanel: true,
          compare: false,
          build: false,
        });
        break;
      case "Сравнение Артефактов":
        setMode({
          showpanel: false,
          compare: true,
          build: false,
        });
        if (compareItem.name !== "Выберите Предмет" && item.name !== "Выберите Предмет") {
          setDifference(item, compareItem)
        }
        break;
    }
  }

  return (
    <BrowserRouter>
      <div>
        <Navbar className="navbar" />
        <Routes>
          <Route
            path="/"
            element={
              <div className="App">
                <Bookmark
                  click={chooseMode}
                  activeMode={mode}
                  className="bookmark"
                />
                <div className="panel">
                  {mode.showpanel && (
                    <Showpanel
                      item={item}
                      items={reconstructedLibrary}
                      mainStat={mainStat}
                      click={chooseStat}
                      clickComp={chooseItem}
                      clickBoss={chooseBoss}
                    />
                  )}
                  {mode.compare && (
                    <Compare
                      item={item}
                      compareItem={compareItem}
                      compare={compare}
                    />
                  )}
                  {mode.build && <Build />}
                </div>
                <Main
                  itemLibrary={itemLibrary}
                  click={chooseItem}
                  className="main"
                />
              </div>
            }
          />
          <Route
            path="/heroes"
            element={<Heroes heroes={props.heroes} skills={props.skills} />}
          />
        </Routes>
        <Footer className="footer" />
      </div>
    </BrowserRouter>
  );
}
