import React from "react";

const PopSound = () => (
  <audio
    autoPlay
    onPlay={() => {
      const audios = document.getElementsByTagName("audio");

      audios[audios.length - 1].volume = 0.5;
    }}
    src={require("../../../assets/sounds/pop_sound.mp3")}
  />
);

export default PopSound;
