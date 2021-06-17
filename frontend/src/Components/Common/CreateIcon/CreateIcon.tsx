import React, { CSSProperties, ReactHTMLElement } from "react";
import styled from "styled-components";

interface ICreateIconProps {
  path: string;
  iconName?: string;
  iconStyles?: CSSProperties;
  title?: string;
}

export default function CreateIcon({
  path,
  iconName,
  iconStyles,
  title,
}: ICreateIconProps) {
  return (
    <Span
      path={path}
      id={`${iconName}`}
      style={iconStyles!}
      title={title ? title : ""}
      onClick={() => {}}
    ></Span>
  );
}

interface SpanProps {
  path: string;
}

const Span = styled.span`
  content: url(${(props: SpanProps) => props.path});
  width: 24px;
  height: 24px;
`;
