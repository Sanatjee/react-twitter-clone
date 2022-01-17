import React from "react";
import buttonStyles from "./RedButton.module.css";

export const RedButton = (props) => {
  return <button className={buttonStyles.button}>{props.title}</button>;
};

export default RedButton;
