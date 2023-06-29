const emptyItem = {
  name: "Выберите Предмет", path: "scroll",
  shop: "", color: "",
  hpb: "", hprb: "", mpb: "", mprb: "",
  armb: "", act: "", pas: "",
  used: [], comp: [],
  circle: "", line: "", number: "", bossname: "",
  gold: "", lumber: "", allgold: "", alllumber: "",
  str: "", agi: "", int: "", 
  hp: "", hpr: "", mp: "", mpr: "",
  dmg: "", as: "", arm: "", ms: "", value: 0,
};

const compareItems = {
  str: [0, "n"],
  agi: [0, "n"],
  int: [0, "n"],
  hp: [0, "n"],
  hpr: [0, "n"],
  mp: [0, "n"],
  mpr: [0, "n"],
  dmg: [0, "n"],
  as: [0, "n"],
  arm: [0, "n"],
  ms: [0, "n"],
  value: [0, "n"],
}

function calculateBonuses(item) {
  if (item.str !== "") {
    const strInt = parseInt(item.str);
    item.hpb = (strInt * 16).toString();
    item.hprb = Math.floor(strInt * 0.5).toString();
  }
  if (item.agi !== "") {
    const agiInt = parseInt(item.agi);
    item.armb = Math.floor(agiInt * 0.07).toString();
  }
  if (item.int !== "") {
    const intInt = parseInt(item.int);
    item.mpb = (intInt * 15).toString();
    item.mprb = Math.floor(intInt * 0.5).toString();
  }
}

function calculateDifference(item, compareItem) {
  const item1 = Object.entries(item);
  const item2 = Object.entries(compareItem);
  const diffObj = {};
  let diff;
  let lrn;
  for (let i = 20; i < item1.length; i++) {
    diff = (parseInt(item1[i][1]) || 0) - (parseInt(item2[i][1]) || 0);
    if (diff > 0) {
      lrn = "l";
    } else if (diff < 0) {
      lrn = "r";
    } else {
      lrn = "n";
    }
    diffObj[item1[i][0]] = [Math.abs(diff), lrn];
  }
  return diffObj;
}

export { emptyItem, compareItems, calculateBonuses, calculateDifference };
