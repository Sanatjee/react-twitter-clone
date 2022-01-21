import React from "react";

import classes from "./GreyCard.module.css";

const GreyCard = (props) => {
  return <div className={classes.grey_card}>{props.children}</div>;
};

export default GreyCard;
