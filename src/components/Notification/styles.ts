import styled from "styled-components";

export const NotificationBox = styled.div`
  background-color: white;
  top: 20px;
  right: 20px;
  background-color: #3abd81;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 5px;
;
`

export const Texts = styled.div`
  font-size: 2.3rem;
  padding: 10px 15px;
  color: white;
`

export const Title = styled.h5`
  margin: 0;
  margin-bottom: 5px;
`

export const Description = styled.span`
  font-size: 0.7em;
`

export const SideBar = styled.div`
  position: relative;
  width: 100%;
  height: 10px;
  background-color: #60a72b;
`

export const CloseButton = styled.div`
  cursor: pointer;
  position: relative;

  svg {
    width: 20px;
    position: absolute;
    top: 10px;
    right: 8px;
    color: white;
  }

  &:active {
    svg {
      color: blue;
    }
  }
`