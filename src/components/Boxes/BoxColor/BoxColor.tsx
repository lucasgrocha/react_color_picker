import React from 'react'

import classes from './BoxColor.module.css'
import Color from './Color'

interface Props {
  color: string;
}

const boxColor: React.FC<Props> = (props) => {
  return (
    <div className={classes.BoxColor}>
      <Color color={props.color} />
      <p className={classes.colorTitle}>{props.color}</p>
    </div>
  )
}

export default boxColor