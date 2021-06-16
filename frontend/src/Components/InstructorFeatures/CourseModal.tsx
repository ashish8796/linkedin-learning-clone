import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled, { CSSProperties } from "styled-components";
import { createNewCourse } from "../../store/teacher/actions";
import { State } from "../../store/tsTypes";
import CreateButton from "../Common/CreateButton";
import CreateInput from "./../Common/CreateInput/CrateInput";
import ShowCourseTags from "./ShowCourseTags";

export interface CourseInitState {
  title: string;
  description: string;
  tags: Array<string>;
  image?: Blob | null;
  questionBlog?: object[];
}

const initCourseState: CourseInitState = {
  title: "",
  description: "",
  tags: [],
  image: null,
};

interface ICourseModalProps {
  setIsCourseModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CourseModal({
  setIsCourseModalVisible,
}: ICourseModalProps) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { teacher } = useSelector((state: State) => state.teacher);

  const [courseData, setCourseData] =
    useState<CourseInitState>(initCourseState);
  const { title, description, tags, image } = courseData;

  const [tag, setTag] = useState<string>("");

  const handleOnChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const { name, type, value } = e.target as HTMLInputElement;

    if (name === "image") {
      setCourseData({
        ...courseData,
        //@ts-ignore
        [name]: new Blob([e.target.files![0]], { type: "image/jpeg" }),
      });
    } else {
      setCourseData({ ...courseData, [name]: value });
    }
  };

  const handleOnTagChange: React.ChangeEventHandler<HTMLInputElement> = async (
    e
  ) => {
    setTag(e.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    console.log(courseData);
    const payload = { ...courseData, authorId: teacher._id };
    const CourseFormData = new FormData();

    for (let key in payload) {
      if (key) {
        //@ts-ignore
        CourseFormData.append(key, payload[key]);
      }
    }

    try {
      const data = dispatch(createNewCourse(CourseFormData));

      //@ts-ignore
      if (data) {
        history.push("/instructor/courses/:id");
      }
    } catch (error) {}

    setIsCourseModalVisible(false);
    console.log("Form Submitted");
  };

  const handleAddTag: React.MouseEventHandler<HTMLButtonElement> = (
    e
  ): void => {
    e.preventDefault();

    if (tag) {
      tags.push(tag);
      setTag("");
    }
  };

  return (
    <Modal>
      <CourseDetailsWrapper>
        <Heading>Course Details</Heading>

        <Title></Title>

        <ModalForm onSubmit={handleSubmit}>
          <CreateInput
            label="Title"
            type="text"
            name="title"
            value={title}
            handleChange={handleOnChange}
            placeholder="Write title for the course*"
            required={true}
          />

          <CreateInput
            label="Description"
            type="textarea"
            name="description"
            value={description}
            handleChange={handleOnChange}
            placeholder="Write description for the course*"
            required={true}
          />

          <CreateInput
            label="Tags"
            type="text"
            name="tags"
            value={tag}
            handleChange={handleOnTagChange}
            placeholder="Write tag*"
            required={false}
          />

          <ShowCourseTags tags={tags} setCourseData={setCourseData} />

          <CreateButton
            label="Add Tag"
            handleClick={handleAddTag}
            styles={addTagStyles}
          />

          <CreateInput
            label="Course Thumbnail"
            type="file"
            name="image"
            //@ts-ignore
            value={image ? image?.name : ""}
            handleChange={handleOnChange}
            placeholder=""
            required={false}
          />

          <SubmitButton type="submit">Save Details</SubmitButton>
        </ModalForm>
      </CourseDetailsWrapper>
    </Modal>
  );
}

const addTagStyles: CSSProperties = {
  color: "#0073b1",
  boxShadow: " inset 0 0 0 1px #0073b1",
  padding: "5px",
  borderRadius: "1px",
  fontWeight: 500,
  margin: "10px 0",
};

const Modal = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #80808028;
`;

const CourseDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 60%;
  /* height: 70vh; */
  padding: 30px;

  box-shadow: 0px 0px 9px 4px #80808075;
  border-radius: 3px;
`;

const Heading = styled.h4``;
const Title = styled.div``;
const InfoBox = styled.div``;
const ModalForm = styled.form`
  /* flex: 1; */
`;

const SubmitButton = styled.button`
  display: block;
  margin-left: auto;
  padding: 10px 15px;
  background-color: #0073b1;
  color: #fff;
  border-radius: 2px;
`;
