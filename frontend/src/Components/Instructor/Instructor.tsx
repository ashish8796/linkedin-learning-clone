import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Dispatch } from "redux";
import styled from "styled-components";
import { setTeacher } from "../../store/teacher/actions";
import { State } from "../../store/tsTypes";
import InstructorFeatures from "../InstructorFeatures/InstructorFeatures";
import InstructorProfile from "../InstructorProfile/InstructorProfile";

export default function Instructor() {
  const dispatch = useDispatch();

  //@ts-ignore
  const { id } = useParams();

  const { teacher } = useSelector((state: State) => state.teacher);

  useEffect(() => {
    if (!teacher._id) {
      dispatch(setTeacher(id));
    }
  }, []);

  return (
    <InstructorWrapper>
      <UpperSection>
        <InstructorProfile />
      </UpperSection>

      <LowerSection>
        <InstructorFeatures />
      </LowerSection>
    </InstructorWrapper>
  );
}

const InstructorWrapper = styled.div`
  padding-top: 3rem;
  /* margin-top: 5rem; */
`;

const UpperSection = styled.section`
  background-color: #f3f6f8;
`;

const LowerSection = styled.div``;
