import React from "react";
import styled from "styled-components";

interface ICreateTagProps {
  tag: string;
  handleRemoveTag: (tag: string) => void;
}

export default function CreateTag({ tag, handleRemoveTag }: ICreateTagProps) {
  return (
    <TagBox>
      <TagName>{tag}</TagName>
      <RemoveTag
        onClick={() => {
          handleRemoveTag(tag);
        }}
      >
        x
      </RemoveTag>
    </TagBox>
  );
}

const TagBox = styled.div`
  /* border: 1px solid red; */
  width: fit-content;
  position: relative;
  padding: 8px 0;
  background-color: #0aa6d5;
  border-radius: 1px;
  margin-right: 5px;
`;
const TagName = styled.p`
  /* border: 1px solid blue; */
  padding: 0 10px;
  line-height: 16px;
  margin-bottom: 0;
  color: #fff;
`;

const RemoveTag = styled.p`
  font-size: 12px;
  line-height: 8px;
  padding: 0;
  color: #fff;
  position: absolute;
  top: 0;
  right: 1px;
  margin-bottom: 0;
  cursor: pointer;
  /* border: 1px solid green; */
`;
