import React from "react";
import { CloseCircle } from '@styled-icons/evaicons-solid'

import {
  NotificationBox,
  Title,
  Description,
  Texts,
  SideBar,
  CloseButton,
} from "./styles";

interface NotificationProps {
  title: string;
  description?: string;
  type: string;
}

const Notification: React.FC<NotificationProps> = (props) => {
  return (
      <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
      <NotificationBox>
        <CloseButton>
          <CloseCircle />
        </CloseButton>
        <Texts>
          <Title>{props.title}</Title>
          <Description>{props.description}</Description>
        </Texts>
        <SideBar />
      </NotificationBox>
    </div>
  );
};

export default Notification;
