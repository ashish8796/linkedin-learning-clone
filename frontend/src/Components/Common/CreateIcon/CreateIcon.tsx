import React, { ReactHTMLElement } from "react";
import styled from "styled-components";

interface ICreateIconProps {
  path: string;
}

export default function CreateIcon({ path }: ICreateIconProps) {
  return <Span path={path}></Span>;
}

interface SpanProps {
  path: string;
}

const Span = styled.span`
  content: url(${(props: SpanProps) => props.path});
  width: 24px;
  height: 24px;
`;
