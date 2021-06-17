import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IChapter, ILecture } from "../../store/teacher/teacherReducer";
import { State } from "../../store/tsTypes";
import UploadLecture from "./UploadLecture";

interface IShowChapterProps {
  chapter: IChapter;
  index: number;
}

export default function ShowChapters({ chapter, index }: IShowChapterProps) {
  const { allLecturesOfCourse } = useSelector((state: State) => state.teacher);
  const { title } = chapter;
  const allLecturesOfChapter = allLecturesOfCourse.filter(
    //@ts-ignore
    (lecture) => lecture.chapterId._id === chapter._id
  );
  // const [lectures, setLectures] =
  //   useState<Array<ILecture>>(allLecturesOfChapter);

  const [allLectures, setAllLectures] =
    useState<Array<ILecture>>(allLecturesOfChapter);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleAddLecture = () => {
    setIsModalVisible(true);
  };

  console.log({ allLecturesOfChapter, allLecturesOfCourse });

  useEffect(() => {
    (async () => {
      // const {data} = await
    })();
  }, []);

  return (
    <ChapterBox>
      <ChapterTitleBox>
        <span> Chapter {index}.</span> {title}
      </ChapterTitleBox>

      {allLectures.length > 0 &&
        allLectures.map((lecture) => (
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
  /* border: 1px solid red; */
  margin: 20px auto;
  box-shadow: 0 0px 3px #cbcccc;
  padding: 10px;
  /* background-color: #fff; */
`;

const ChapterTitleBox = styled.div`
  font-size: 18px;

  span {
    font-weight: 500;
  }
`;

const AddLectureButton = styled.button`
  display: block;
  margin-left: auto;
  color: #0073b1;
  box-shadow: inset 0 0 0 1px #0073b1;
  padding: 5px;
  border-radius: 1px;
  font-weight: 500;
  background-color: #fff;
`;
