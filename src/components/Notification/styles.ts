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
  autohide?: boolean;
}

export const SideBar = styled.div<SideBarProps>`
  position: relative;
  height: 10px;
  background-color: #2e981f;
  width: 100%;
  border-radius: 10px;

  ${props => !!props.timeout && props.autohide && (
    `animation: loading_bar ${props.timeout}s both ease;`
  )}

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
    transition: .5s;
  }

  &:hover {
    svg {
      transform: scale(1.1);
    }
  }
`