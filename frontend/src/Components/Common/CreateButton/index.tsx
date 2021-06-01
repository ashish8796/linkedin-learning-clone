import React, { ReactHTMLElement } from "react";
import styled from "styled-components";

interface ICreateButtonProps {
  label: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  children?: any;
  name?: string;
}

export default function CreateButton({
  label,
  handleClick,
  children,
  name,
}: ICreateButtonProps) {
  // console.log(children);

  if (children) {
    return (
      <Button onClick={handleClick} id={name}>
        {children}
      </Button>
    );
  }

  return (
    <Button onClick={handleClick} id={name}>
      {label}
    </Button>
  );
}

const Button = styled.button`
  background: none;
  width: fit-content;
  border: none;
  outline: none;
  cursor: pointer;
`;
