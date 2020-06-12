import React, { useState } from "react";
import Boxes from "./components/Boxes";
import ColorContext from "./context/ColorContext";

const ColorPicker = () => {
  const [currentColor, setCurrentColor] = useState<string>("");

  const handlePickedColor = (color: string) => {
    setCurrentColor(color);
  };

  return (
    <div>
      <ColorContext.Provider
        value={{
          pickedColor: handlePickedColor,
        }}
      >
        <Boxes colors={["#32a852", "#325fa8", "#4ca832", "#a84032"]} />
      </ColorContext.Provider>
    </div>
  );
};

export default ColorPicker;
