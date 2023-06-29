export default function reconstructDatabase(db) {
  const newDB = {};

  db.forEach((e) => {
    const {
      name = "", path = "", shop = "", color = "",
      gold = "", lumber = "", str = "", agi = "", int = "",
      hp = "", hpb = "", hpr = "", hprb = "", mp = "", mpb = "", mpr = "", mprb = "",
      dmg = "", as = "", arm = "", armb = "", ms = "", act = "", pas = "",
      circle = "", line = "", number = "", bossname = "", allgold = "", alllumber = "",
      used = [],
    } = e;

    newDB[name] = {
      name, path, shop, color, hpb, hprb, mpb, mprb, act,
      pas, circle, line, number, bossname, used, comp: [],
      gold, lumber, allgold, alllumber, str, agi, int, hp, hpr,
      mp, mpr, dmg, as, arm, armb, ms 
    };
    
    newDB[name].value = calculateValue(e);
    for (let i = 1; i < 7; i++) {
      if (e.hasOwnProperty(`c${i}`)) {
        newDB[name].comp.push(e[`c${i}`]);
      }
    }
  });
  return newDB;
}

function calculateValue(item) {
  const statsInt = {
    str: parseInt(item.str) || 0,
    agi: parseInt(item.agi) || 0,
    int: parseInt(item.int) || 0,
    hp: parseInt(item.hp) || 0,
    hpr: parseInt(item.hpr) || 0,
    mp: parseInt(item.mp) || 0,
    mpr: parseInt(item.mpr) || 0,
    dmg: parseInt(item.dmg) || 0,
  };
  const value =
    statsInt.str * 200 +
    statsInt.agi * 175 +
    statsInt.int * 113 +
    statsInt.hp * 12.5 +
    statsInt.mp * 8 +
    statsInt.dmg * 163 +
    statsInt.hpr * 400 +
    statsInt.mpr * 225;
  return value;
}
