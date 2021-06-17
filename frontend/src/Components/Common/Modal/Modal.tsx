import React from "react";
import styled from "styled-components";

interface IModalProps {
  children?: any;
}

export default function Modal({ children }: IModalProps) {
  return (
    <ModalBox>
      <ContentBox>{children}</ContentBox>
    </ModalBox>
  );
}

const ModalBox = styled.div`
  position: fixed;
  bottom: 40px;
  left: 0;
  /* right: 0; */
  width: 100%;
  top: 0;
  height: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #80808028;
  backdrop-filter: blur(5px);
  /* transition: 1s backdrop-filter linear; */
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 60%;
  /* margin-top: 40vh; */
  min-height: 50vh;
  height: fit-content;
  padding: 30px;
  box-shadow: 0px 0px 9px 4px #80808075;
  border-radius: 3px;
`;
