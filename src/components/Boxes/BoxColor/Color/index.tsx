import React from "react";
import CopyToClipboard from 'react-copy-to-clipboard';

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

  <CopyToClipboard text={props.color} onCopy={() => props.clicked(props.color)}>
    <StyledDiv color={props.color} />
  </CopyToClipboard>
);

export default color;
