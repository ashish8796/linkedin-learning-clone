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

      {allChapters.length > 0 &&
        allChapters.map((chapter) => (
          <ShowChapters key={chapter._id} chapter={chapter} />
        ))}

      {isNewChapterVisible && (
        <NewChapterBox>
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

          <button onClick={handleStartNewChapter}>Start New Chapter</button>
        </NewChapterBox>
      )}

      <CreateButton label="Add Chapter" handleClick={handleChapterClick} />
    </CourseDetailsBox>
  );
}

const chapterTitleLabelStyles: CSSProperties = {
  fontWeight: 500,
  fontSize: "18px",
};

const CourseDetailsBox = styled.div`
  padding: 3rem 0;
`;

const NewChapterBox = styled.div`
  display: flex;
  border: 1px solid red;
  justify-content: center;
  align-items: center;

  button {
    height: fit-content;
    padding: 10px;
    margin-left: 10px;
  }
`;
