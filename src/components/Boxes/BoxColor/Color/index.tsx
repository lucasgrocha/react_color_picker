import React from "react";

import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: ${(props) => props.color};
  width: 6rem;
  height: 6rem;
  border-radius: 7px;
  margin-bottom: 5px;
  cursor: pointer;
  transition: transform .2s;

  @media (min-width: 1024px) {
    width: 8rem;
    height: 8rem;
    margin-bottom: 10px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

interface Props {
  color: string;
  clicked: (arg0: string) => void;
}

const color: React.FC<Props> = (props) => (
  <StyledDiv color={props.color} onClick={() => props.clicked(props.color)} />
);

export default color;
