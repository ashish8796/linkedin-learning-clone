import React from "react";
import styled from "styled-components";
import { CourseInitState } from "./CourseModal";
import CreateTag from "./CreateTag";

interface IShowCourseTagsProps {
  tags: string[];
  setCourseData: React.Dispatch<React.SetStateAction<CourseInitState>>;
}

export default function ShowCourseTags({
  tags,
  setCourseData,
}: IShowCourseTagsProps) {
  const handleRemoveTag = (tag: string) => {
    setCourseData((prev) => {
      const newArr = prev.tags.filter((cv) => cv !== tag);
      const newObj = { ...prev, tags: newArr };

      return newObj;
    });
  };

  return (
    <ShowTagsBox>
      {tags.length > 0 &&
        tags.map((tag) => (
          <CreateTag tag={tag} key={tag} handleRemoveTag={handleRemoveTag} />
        ))}
    </ShowTagsBox>
  );
}

const ShowTagsBox = styled.div`
  display: flex;
  margin-top: -10px;
  margin-bottom: 10px;
`;
