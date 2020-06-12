import React, { useState, useEffect } from "react";
import Boxes from "./components/Boxes";
import ColorContext from "./context/ColorContext";
import * as crypto from 'crypto';

const ColorPicker = () => {
  const [currentColor, setCurrentColor] = useState<string>("");
  const [randomColors, setRandomColors] = useState<string[]>([])
  
  const handlePickedColor = (color: string) => {
    setCurrentColor(color);
  };

  useEffect(() => {
    const colors = []
    for (let c = 0; c < 100; c++) {
      colors.push(`#${crypto.randomBytes(3).toString('hex')}`)
    }

    setRandomColors(colors)
  }, [])

  return (
    <div style={{width: '85vw', margin: 'auto auto'}}>
      <ColorContext.Provider
        value={{
          pickedColor: handlePickedColor,
        }}
      >
        <Boxes colors={randomColors} />
      </ColorContext.Provider>
    </div>
  );
};

export default ColorPicker;
