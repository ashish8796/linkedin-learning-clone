import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteChapter } from "../../store/teacher/actions";
import { IChapter, ILecture } from "../../store/teacher/teacherReducer";
import { State } from "../../store/tsTypes";
import ShowLecture from "./ShowLecture";
import UploadLecture from "./UploadLecture";

interface IShowChapterProps {
  chapter: IChapter;
  index: number;
}

export default function ShowChapters({ chapter, index }: IShowChapterProps) {
  const dispatch = useDispatch();
  const { allLecturesOfCourse } = useSelector((state: State) => state.teacher);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const { title } = chapter;

  let allLecturesOfChapter: any = [];

  // if (chapter?._id) {
  //   allLecturesOfChapter = allLecturesOfCourse.filter(
  //     //@ts-ignore
  //     (lecture) => lecture.chapterId?._id === chapter?._id
  //   );
  // }

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleAddLecture = () => {
    setIsModalVisible(true);
  };

  const handleRemoveChapter = async () => {
    setIsLoading(true);
    try {
      const data = await dispatch(deleteChapter(chapter));

      //@ts-ignore
      if (data) {
        setIsLoading(false);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };
  // console.log({ allLecturesOfChapter, allLecturesOfCourse, allLectures });

  useEffect(() => {
    (async () => {
      // const {data} = await
    })();

    return () => {
      setIsError(false);
      setIsLoading(false);
      setIsModalVisible(false);
    };
  }, []);

  return (
    <ChapterBox>
      <ChapterTitleBox>
        <TitleBox>
          <span> Chapter {index}.</span> {title}
        </TitleBox>

        <div>
          <DeleteBtn onClick={handleRemoveChapter} disabled={isLoading}>
            Remove Chapter
          </DeleteBtn>
        </div>
      </ChapterTitleBox>
      
      {
        //@ts-ignore
        chapter?.videoIds.length > 0 &&
        //@ts-ignore
        chapter?.videoIds.map((lecture: any) => (
          <ShowLecture key={lecture._id} lecture={lecture} />
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
  margin: 20px auto;
  box-shadow: 0 0px 3px #cbcccc;
  padding: 10px;
`;

const ChapterTitleBox = styled.div`
  padding: 0 0 15px;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  span {
    font-weight: 500;
  }
`;

const TitleBox = styled.div``;

const Button = styled.button`
  display: block;
  margin-left: auto;
  color: #0073b1;
  box-shadow: inset 0 0 0 1px #0073b1;
  padding: 5px;
  border-radius: 1px;
  font-weight: 500;
  background-color: #fff;
`;

const DeleteBtn = styled(Button)`
  font-size: 14px;
`;

const AddLectureButton = styled(Button)`
  font-size: 16px;
`;
