import React, { ReactHTMLElement } from "react";
import styled from "styled-components";

interface ICreateButtonProps {
  label: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  children?: any;
}

export default function CreateButton({
  label,
  handleClick,
  children,
}: ICreateButtonProps) {
  // console.log(children);

  if (children) {
    return <Button onClick={handleClick}>{children}</Button>;
  }

  return <Button onClick={handleClick}>{label}</Button>;
}

const Button = styled.button`
  background: none;
  width: fit-content;
  border: none;
  outline: none;
`;
