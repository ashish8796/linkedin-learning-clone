import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled, { CSSProperties } from "styled-components";
import { State } from "../../store/tsTypes";
import Modal from "../Common/Modal/Modal";
import CreateInput from "../Common/CreateInput/CrateInput";

interface IUploadLectureProps {
  setIsChapterUploadVisible: React.Dispatch<React.SetStateAction<boolean>>;
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
  setIsChapterUploadVisible,
}: IUploadLectureProps) {
  const { course } = useSelector((state: State) => state.teacher);
  const [lectureData, setLectureData] = useState<ILecture>(initLecture);

  const handleUplaodChapter = () => {};

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, type, value } = e.target;

    setLectureData({
      ...lectureData,
      [type === "file" ? "video" : "title"]:
        type === "file"
          ? new Blob([e.target.files![0]], { type: "video/mp4" })
          : value,
    });
  };

  return (
    <Modal>
      <UploadLectureBox>
        <CreateInput
          label="Lecture Title"
          value={lectureData.title}
          placeholder="Write title for the lecture*"
          name="lecture-title"
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
          name="lecture-file"
          required={true}
          handleChange={handleOnChange}
          type="file"
          labelStyles={lectureTitleLabelStyles}
        />

        <Cancel
          onClick={() => {
            setIsChapterUploadVisible(false);
          }}
        >
          Cancel
        </Cancel>

        <UploadLectureButton>Upload Lecture</UploadLectureButton>
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
