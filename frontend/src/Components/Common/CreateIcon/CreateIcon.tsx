import React, { ReactHTMLElement } from "react";
import styled from "styled-components";

interface ICreateIconProps {
  path: string;
  iconName?: string;
}

export default function CreateIcon({ path, iconName }: ICreateIconProps) {
  return <Span path={path} id={`#${iconName}`}></Span>;
}

interface SpanProps {
  path: string;
}

const Span = styled.span`
  content: url(${(props: SpanProps) => props.path});
  width: 24px;
  height: 24px;
`;
