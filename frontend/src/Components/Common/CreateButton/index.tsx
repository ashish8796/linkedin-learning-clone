import React, { CSSProperties, ReactHTMLElement } from "react";
import styled from "styled-components";

interface ICreateButtonProps {
  label: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  children?: any;
  name?: string;
  styles?: CSSProperties;
  disabled?: boolean;
}

export default function CreateButton({
  label,
  handleClick,
  children,
  name,
  styles,
  disabled,
}: ICreateButtonProps) {
  // console.log(children);

  // console.log(label);

  if (children) {
    return (
      <Button
        onClick={handleClick}
        style={styles!}
        disabled={disabled === undefined ? false : disabled}
      >
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
