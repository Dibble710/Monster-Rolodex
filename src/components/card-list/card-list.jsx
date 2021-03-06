import React from "react";

import { Card } from '../card/card'

// Style Sheets
import "./card-list.styles.css";

export const CardList = (props) => {
  return <div className="card-list">
      {props.robots.map((monster) => (
          <Card key={monster.id} monster={monster} />
      ))}
  </div>;
};
