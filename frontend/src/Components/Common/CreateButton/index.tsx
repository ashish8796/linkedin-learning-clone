import React, { CSSProperties, ReactHTMLElement } from "react";
import styled from "styled-components";

interface ICreateButtonProps {
  label: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  children?: any;
  name?: string;
  styles?: CSSProperties;
}

export default function CreateButton({
  label,
  handleClick,
  children,
  name,
  styles,
}: ICreateButtonProps) {
  // console.log(children);

  if (children) {
    return (
      <Button onClick={handleClick} style={styles!}>
        {children}
      </Button>
    );
  }

  return (
    <Button onClick={handleClick} style={styles!}>
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
