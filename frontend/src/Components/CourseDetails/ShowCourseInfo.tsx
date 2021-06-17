import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { State } from "../../store/tsTypes";

interface IShowCourseInfoProps {}

export default function ShowCourseInfo({}: IShowCourseInfoProps) {
  const { title, description, tags, image } = useSelector(
    (state: State) => state.teacher.course
  );

  return (
    <CourseInfoBox>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </CourseInfoBox>
  );
}

const CourseInfoBox = styled.div`
  width: 80%;
  margin: auto;
  padding: 2rem 0;
`;
