import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { CSSProperties } from "styled-components";
import { State } from "../../store/tsTypes";
import Modal from "../Common/Modal/Modal";
import CreateInput from "../Common/CreateInput/CrateInput";
import { IChapter } from "../../store/teacher/teacherReducer";
import { uploadNewLecture } from "../../store/teacher/actions";

interface IUploadLectureProps {
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  chapter: IChapter;
}

interface ILecture {
  title: string;
  video: Blob | null;
}

const initLecture: ILecture = {
  title: "",
  video: null,
};

export default function UploadLecture({
  setIsModalVisible,
  chapter,
}: IUploadLectureProps) {
  const { course } = useSelector((state: State) => state.teacher);
  const dispatch = useDispatch();
  const [lectureData, setLectureData] = useState<ILecture>(initLecture);

  const handleUploadChapter = async () => {
    const videoFormData: FormData = new FormData();

    const payload = {
      ...lectureData,
      authorId: chapter.authorId,
      chapterId: chapter._id,
      courseId: chapter.courseId,
    };

    console.log(payload);

    for (let key in payload) {
      //@ts-ignore
      videoFormData.append(key, payload[key]);
    }

    try {
      const data = await dispatch(uploadNewLecture(videoFormData));

      //@ts-ignore
      if (data) {
        setIsModalVisible(false);
      }
    } catch (error) {}
  };

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;

    if (name === "title") {
      setLectureData({ ...lectureData, [name]: value });
    } else {
      setLectureData({
        ...lectureData,
        [name]: new Blob([e.target.files![0]], { type: "video/mp4" }),
      });
    }
  };

  useEffect(() => {
    return () => {
      setLectureData(initLecture);
    };
  }, []);

  return (
    <Modal>
      <UploadLectureBox>
        <CreateInput
          label="Lecture Title"
          value={lectureData.title}
          placeholder="Write title for the lecture*"
          name="title"
          required={true}
          handleChange={handleOnChange}
          type="text"
          labelStyles={lectureTitleLabelStyles}
        />

        <CreateInput
          label="Upload lecture video"
          //@ts-ignore
          value={lectureData.video ? lectureData.video.name : ""}
          placeholder="Write title for the lecture*"
          name="video"
          required={true}
          handleChange={handleOnChange}
          type="file"
          labelStyles={lectureTitleLabelStyles}
        />

        <Cancel
          onClick={() => {
            setIsModalVisible(false);
          }}
        >
          Cancel
        </Cancel>

        <UploadLectureButton onClick={handleUploadChapter}>
          Upload Lecture
        </UploadLectureButton>
      </UploadLectureBox>
    </Modal>
  );
}

const lectureTitleLabelStyles: CSSProperties = {
  fontWeight: 500,
  fontSize: "18px",
};

const UploadLectureBox = styled.div``;

const UploadLectureButton = styled.div`
  padding: 8px 2rem;
  width: fit-content;
  background-color: #0073b1;
  color: #fff;
  border-radius: 2px;
  margin: 10px 0;
  margin-left: auto;
  cursor: pointer;
`;

const Cancel = styled.button``;
