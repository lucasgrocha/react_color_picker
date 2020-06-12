import React from "react";

import classes from "./PickedColor.module.css";

interface Props {
  pickedColor: string;
}

const pickedColor: React.FC<Props> = (props) => (
  <div className={classes.PickedColor}>{props.pickedColor}</div>
);

export default React.memo(pickedColor);
