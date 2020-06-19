import styled from "styled-components";

export const NotificationBox = styled.div`
  top: 20px;
  right: 20px;
  background-color: #3abd81;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 5px;
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

interface SideBarProps {
  timeout?: number;
}

export const SideBar = styled.div<SideBarProps>`
  position: relative;
  height: 10px;
  background-color: #60a72b;
  border-radius: 10px;
  animation: loading_bar ${props => !!props.timeout ? props.timeout : 1000 }s both ease-in-out;

  @keyframes loading_bar {
    from {
      width: 100%;
    } to {
      width: 0%;
    }
  }
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
    
  }
`