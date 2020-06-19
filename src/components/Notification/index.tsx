import React, { useState, useEffect } from "react";
import { CloseCircle } from "@styled-icons/evaicons-solid";

import "animate.css";

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
  autohide?: boolean;
  timeout?: number;
}

const Notification: React.FC<NotificationProps> = (props) => {
  const [show, setShow] = useState(true);
  const [dispose, setDispose] = useState(true);
  const [animationClass, setAnimationClass] = useState<string[]>([
    "animate__animated",
    "animate__fadeInDown",
  ]);

  const handleClosed = () => {
    setShow(false);
  };

  useEffect(() => {
    if (!show) {
      setInterval(() => {
        setDispose(false);
      }, 500);
    }
  }, [show]);

  useEffect(() => {
    if (!show && animationClass[1] === "animate__fadeInDown") {
      let updatedState = [...animationClass];

      updatedState[1] = "animate__fadeOutRight";

      setAnimationClass(updatedState);
    }
  }, [show, animationClass]);

  useEffect(() => {
    if (props.autohide && props.timeout !== undefined) {
      setTimeout(() => {
        setShow(false);
      }, props.timeout * 1000);
    }
  }, [props.autohide, props.timeout]);

  return (
    <div style={{ display: "flex" }}>
      {dispose && (
        <NotificationBox className={animationClass.join(" ")}>
          <CloseButton onClick={handleClosed}>
            <CloseCircle />
          </CloseButton>
          <Texts>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
          </Texts>
          <SideBar />
        </NotificationBox>
      )}
    </div>
  );
};

export default Notification;
