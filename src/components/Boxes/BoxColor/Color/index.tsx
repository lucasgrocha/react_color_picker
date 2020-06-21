import React, { useState, useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { CheckmarkCircle } from "@styled-icons/evaicons-solid";

import "animate.css";

import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: ${(props) => props.color};
  width: 6rem;
  height: 6rem;
  border-radius: 7px;
  margin-bottom: 5px;
  cursor: pointer;
  transition: transform 0.2s;
  overflow: hidden;

  @media (min-width: 1024px) {
    width: 8rem;
    height: 8rem;
    margin-bottom: 10px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const CheckIcon = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0;

  > svg {
    width: 4rem;
    color: whitesmoke;
  }
`;

interface Props {
  color: string;
  clicked: (arg0: string) => void;
}

const Color: React.FC<Props> = (props) => {
  const [display, setDisplay] = useState(false);
  const [clicked, setClicked] = useState(false);

  const toggleDisplay = () => {
    setDisplay(true);

    setTimeout(() => {
      setDisplay(false);
    }, 800);
  };

  useEffect(() => {
    display && setClicked(true);
  }, [display]);

  useEffect(() => {
    if (!display) {
      setTimeout(() => {
        setClicked(false);
      }, 800);
    }
  }, [display]);

  return (
    <CopyToClipboard
      text={props.color}
      onCopy={() => props.clicked(props.color)}
    >
      <StyledDiv onClick={toggleDisplay} color={props.color}>
        {clicked && (
          <CheckIcon
            className={`animate__animated ${
              display ? "animate__fadeIn" : "animate__fadeOut"
            }`}
          >
            <CheckmarkCircle />
          </CheckIcon>
        )}
      </StyledDiv>
    </CopyToClipboard>
  );
};

export default Color;
