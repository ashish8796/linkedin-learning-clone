import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled, { CSSProperties } from "styled-components";
import { deleteLecture } from "../../store/teacher/actions";
import { ILecture } from "../../store/teacher/teacherReducer";
import CreateButton from "../Common/CreateButton";
import CreateIcon from "../Common/CreateIcon/CreateIcon";

interface IShowLectureProps {
  lecture: ILecture;
}

export default function ShowLecture({ lecture }: IShowLectureProps) {
  const dispatch = useDispatch();
  // console.log(lecture);

  const [lectureData, setLectureData] = React.useState({})
  //@ts-ignore
  const { title, url, _id } = lectureData;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleDeleteLecture = async () => {
    console.log("Delete button pressed");

    setIsLoading(true);
    try {
      const data = await dispatch(deleteLecture(lecture));

      //@ts-ignore
      if (data) {
        setIsLoading(false);
      } else {
        setIsError(true);
        setIsLoading(false);
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };
  const axios = Axios.create({
    baseURL: "https://serene-glacier-19642.herokuapp.com/",

    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    },
  });
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

  useEffect(() => {
    (async () => {
      //@ts-ignore
      let { data } = await axios.get(`https://serene-glacier-19642.herokuapp.com/get-video/${lecture.videoId}`)
      setLectureData(data.lecture)
    })()
    return () => {
      setIsError(false);
      setIsLoading(false);
    };
  }, [lectureData]);

  return (
    <LectureBox>
      <LectureDetails>
        <p>{title}</p>
      </LectureDetails>

      <ButtonBox>
        <CreateButton
          label=""
          handleClick={handleDeleteLecture}
          disabled={isLoading}
          children={
            <CreateIcon
              path={
                require("./../../assets/svgs/common/deleteIcon.svg").default
              }
              iconStyles={deleteStyles}
              title="Delete Lecture"
            />
          }
        />
      </ButtonBox>
    </LectureBox>
  );
}

const deleteStyles: CSSProperties = {
  width: "18px",
  height: "18px",
};

const LectureBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0px 3px #cbcccc;
  border-radius: 2px;
  padding: 5px 10px;
  margin: 10px 10px 20px;

  button {
    display: flex;
    align-items: center;
  }
`;

const LectureDetails = styled.div`
  p {
    margin: 0;
  }
`;

const ButtonBox = styled.div`
  width: fit-content;
`;
