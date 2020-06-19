import React, { useState, useEffect } from 'react';
import Boxes from './components/Boxes';
import ColorContext from './context/ColorContext';
import * as crypto from 'crypto';
import Notification from './components/Notification'

const ColorPicker = () => {
  const [currentColor, setCurrentColor] = useState<string>('');
  const [randomColors, setRandomColors] = useState<string[]>([]);

  const handlePickedColor = (color: string) => {
    setCurrentColor(color);
  };

  useEffect(() => {
    const colors = [];
    for (let c = 0; c < 100; c++) {
      colors.push(`#${crypto.randomBytes(3).toString('hex')}`);
    }

    setRandomColors(colors);
  }, []);

  return (
    <>
    <div style={{position: 'fixed', width: '300px', top: '10px', right: '15px'}}>
      <Notification title='Success' type='success' description='The copy get success' />
      <Notification title='Success' type='success' description='The copy get success' />
      <Notification title='Success' type='success' description='The copy get success' />
    </div>
      <div style={{ width: '85vw', margin: 'auto' }}>
        <ColorContext.Provider
          value={{
            pickedColor: handlePickedColor,
          }}
        >
          <Boxes colors={randomColors} />
        </ColorContext.Provider>
      </div>
    </>
  );
};

export default ColorPicker;
