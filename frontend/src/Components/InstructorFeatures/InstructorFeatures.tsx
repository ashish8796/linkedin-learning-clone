import { CSSProperties } from "@material-ui/core/styles/withStyles";
import React, { useState } from "react";
import CreateButton from "../Common/CreateButton";
import CourseModal from "./CourseModal";

export default function InstructorFeatures() {
  const [isCourseModalVisible, setIsCourseModalVisible] =
    useState<boolean>(false);

  return (
    <div>
      <CreateButton
        label="Create New Course"
        handleClick={() => {
          setIsCourseModalVisible(true);
        }}
        styles={buttonStyles}
      />

      {isCourseModalVisible && (
        <CourseModal setIsCourseModalVisible={setIsCourseModalVisible} />
      )}
    </div>
  );
}

const buttonStyles: CSSProperties = {
  border: "1px solid blue",
  marginLeft:"12rem" ,
  marginTop:"3rem",
  padding: "8px 2rem",
  width: "fit-content",
  backgroundColor:" #0073b1",
  color: "#fff",
  borderRadius: "2px",
};
