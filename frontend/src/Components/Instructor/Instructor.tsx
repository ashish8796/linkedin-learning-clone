import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import styled from "styled-components";
import { setTeacher } from "../../store/teacher/actions";
import { State } from "../../store/tsTypes";
import InstructorProfile from "../InstructorProfile/InstructorProfile";

export default function Instructor() {
  const dispatch = useDispatch();
  // const { _id } = useSelector((state: State) => state.teacher);

  useEffect(() => {
    dispatch(setTeacher("60b1e81cef6c6531106e8247"));
  }, []);

  return (
    <InstructorWrapper>
      <UpperSection>
        <InstructorProfile />
      </UpperSection>
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
