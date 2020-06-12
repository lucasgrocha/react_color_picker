import React from 'react'
import BoxColor from './BoxColor/BoxColor'

interface Props {
  colors: string[];
}

const Boxes: React.FC<Props> = (props) => {
  return (
    <div>
      { props.colors.map(color => (
        <BoxColor key={color} color={color} />
      )) }
    </div>
  )
}

export default Boxes