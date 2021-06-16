import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IChapter, ILecture } from "../../store/teacher/teacherReducer";
import { State } from "../../store/tsTypes";
import UploadLecture from "./UploadLecture";

interface IShowChapterProps {
  chapter: IChapter;
}

export default function ShowChapters({ chapter }: IShowChapterProps) {
  const { allLecturesOfCourse } = useSelector((state: State) => state.teacher);
  const { title } = chapter;
  const allLecturesOfChapter = allLecturesOfCourse.filter(
    (lecture) => lecture.chapterId === chapter._id
  );

  const [allLectures, setAllLectures] = useState<Array<ILecture>>([]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleAddLecture = () => {
    setIsModalVisible(true);
  };

  useEffect(() => {
    (async () => {
      // const {data} = await
    })();
  }, []);

  return (
    <ChapterBox>
      <p>{title}</p>

      {allLecturesOfChapter.length > 0 &&
        allLecturesOfChapter.map((lecture) => (
          <div key={lecture._id}>{lecture.title}</div>
        ))}

      {isModalVisible && (
        <UploadLecture
          setIsModalVisible={setIsModalVisible}
          chapter={chapter}
        />
      )}

      <AddLectureButton onClick={handleAddLecture}>
        Add New Lecture
      </AddLectureButton>
    </ChapterBox>
  );
}

const ChapterBox = styled.div`
  width: 80%;
  border: 1px solid red;
  margin: auto;
`;
const AddLectureButton = styled.button`
  display: block;
  margin-left: auto;
`;
