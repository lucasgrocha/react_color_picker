import React from "react";
import BoxColor from "./BoxColor/BoxColor";

import styled from "styled-components";

interface Props {
  colors: string[];
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
  
  @media (min-width: 1024px) {
    grid-gap: 0.9rem;
  }
`;

const Boxes: React.FC<Props> = (props) => {
  return (
    <Container>
      {props.colors.map((color) => (
        <BoxColor key={color} color={color} />
      ))}
    </Container>
  );
};

export default Boxes;
