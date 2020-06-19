import React from "react";

const PopSound = () => (
  <audio
    autoPlay
    onPlay={() => {
      const audios = document.getElementsByTagName("audio");

      for (let audio of audios as any) {
        audio.volume = 0.1;
      }
    }}
    src={require("../../../assets/sounds/pop_sound.mp3")}
  />
);

export default PopSound;
