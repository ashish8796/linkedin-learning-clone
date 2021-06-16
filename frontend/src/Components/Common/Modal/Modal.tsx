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
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #80808028;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 60%;
  min-height: 70vh;
  height: fit-content;
  padding: 30px;
  box-shadow: 0px 0px 9px 4px #80808075;
  border-radius: 3px;
`;
