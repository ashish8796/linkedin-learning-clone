import React, { CSSProperties, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  setAllChapters,
  setCourse,
  startNewChapter,
} from "../../store/teacher/actions";
import { State } from "../../store/tsTypes";
import CreateButton from "../Common/CreateButton";
import ShowCourseInfo from "./ShowCourseInfo";
import UploadLecture from "./UploadLecture";
import CreateInput from "./../Common/CreateInput/CrateInput";
import ShowChapters from "./ShowChapters";

type CourseParams = {
  id: string;
};

export default function CourseDetails() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { course, teacher, newChapter, allChapters } = useSelector(
    (state: State) => state.teacher
  );
  const { id } = useParams<CourseParams>();
  const [chapterTitle, setChapterTitle] = useState<string>("");

  const [isNewChapterVisible, setIsNewChapterVisible] =
    useState<boolean>(false);

  console.log({ course, newChapter, allChapters });

  const handleChapterClick = () => {
    setIsNewChapterVisible(true);
  };

  const handleStartNewChapter = async () => {
    if (chapterTitle) {
      const payload = {
        title: chapterTitle,
        courseId: course._id,
        authorId: course.authorId,
      };

      dispatch(startNewChapter(payload));
      setChapterTitle("");
      setIsNewChapterVisible(false);
    }
  };

  useEffect(() => {
    dispatch(setCourse(id));
    dispatch(setAllChapters(id));
  }, []);

  return (
    <CourseDetailsBox>
      <ShowCourseInfo />

      <UpdateCourseBox>
        {allChapters.length > 0 &&
          allChapters.map((chapter, index) => (
            <ShowChapters
              key={chapter._id}
              chapter={chapter}
              index={index + 1}
            />
          ))}

        {isNewChapterVisible && (
          <NewChapterBox>
            <div>
              <CreateInput
                label="Chapter Title"
                value={chapterTitle}
                placeholder="Write title for the chapter*"
                name="title"
                required={true}
                handleChange={(e) => {
                  setChapterTitle(e.target.value);
                }}
                type="text"
                labelStyles={chapterTitleLabelStyles}
              />

              <ButtonBox>
                <Cancel
                  onClick={() => {
                    setIsNewChapterVisible(false);
                  }}
                >
                  Cancel
                </Cancel>

                <StartNewChapterBtn onClick={handleStartNewChapter}>
                  Start New Chapter
                </StartNewChapterBtn>
              </ButtonBox>
            </div>
          </NewChapterBox>
        )}

        <CreateButton
          label="Add Chapter"
          handleClick={handleChapterClick}
          styles={addChapterBtnStyles}
        />
      </UpdateCourseBox>
    </CourseDetailsBox>
  );
}

const addChapterBtnStyles: CSSProperties = {
  color: "#0073b1",
  boxShadow: "inset 0 0 0 1px #0073b1",
  padding: "5px",
  borderRadius: "1px",
  fontWeight: 500,
  margin: "30px 0 10px",
};

const chapterTitleLabelStyles: CSSProperties = {
  fontWeight: 500,
  fontSize: "18px",
};

const CourseDetailsBox = styled.div`
  padding: 3rem 0;
  background-color: #f2f3f3;
`;

const UpdateCourseBox = styled.div`
  background-color: #fff;
  width: 80%;
  margin: auto;
  padding: 30px;
  border-radius: 3px;
  box-shadow: 0 0 10px 3px lightgrey;
`;

const NewChapterBox = styled.div`
  margin-top: 2rem;
  box-shadow: 0 0px 3px #cbcccc;
  padding: 10px;

  & > div {
    width: 60%;
  }
`;

const StartNewChapterBtn = styled.button`
  padding: 10px 15px;
  background-color: #0073b1;
  color: #fff;
  border-radius: 2px;
`;

const Cancel = styled.button`
  color: #0073b1;
  box-shadow: inset 0 0 0 1px #0073b1;
  font-weight: 500;
  background-color: #fff;
  margin-right: 20px;
  padding: 8px 2rem;
  border-radius: 2px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 30px;
`;
