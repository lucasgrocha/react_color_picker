import React from "react";

const colorContext = React.createContext({
  pickedColor: (arg: string) => {},
});

export default colorContext;
