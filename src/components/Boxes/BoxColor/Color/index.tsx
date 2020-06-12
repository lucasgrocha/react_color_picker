import React from "react";

import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: ${(props) => props.color};
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin-bottom: 5px;
  cursor: pointer;
`;

interface Props {
  color: string;
  clicked: (arg0: string) => void;
}

const color: React.FC<Props> = (props) => (
  <StyledDiv color={props.color} onClick={() => props.clicked(props.color)} />
);

export default color;
