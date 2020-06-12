import React from "react";

import classes from "./BoxColor.module.css";
import Color from "./Color";
import ColorContext from "../../../context/ColorContext";

interface Props {
  color: string;
}

const BoxColor: React.FC<Props> = (props) => {
  return (
    <div className={classes.BoxColor}>
      <ColorContext.Consumer>
        {(context) => (
          <Color color={props.color} clicked={context.pickedColor} />
        )}
      </ColorContext.Consumer>
      <p className={classes.colorTitle}>{props.color}</p>
    </div>
  );
};

export default BoxColor;
