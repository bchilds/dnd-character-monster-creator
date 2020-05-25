import React from "react";
import { allStats } from "../character/stats";
import Row from "./row";

import style from "./style.module.scss";

const renderGridHeader = () => (
  <>
    <span>{/*Empty for stat name*/}</span>
    <span>Base</span>
    <span>Racial</span>
    <span>From Level</span>
    <span>User</span>
    <span>{/*Empty for = symbol*/}</span>
    <span>Total</span>
    <span>Mod</span>
  </>
);

const PointsGrid = () => (
  <div className={style["stats-grid"]}>
    {renderGridHeader()}
    {allStats.map(statName => (
      <Row key={statName} statName={statName} />
    ))}
  </div>
);

export default PointsGrid;
