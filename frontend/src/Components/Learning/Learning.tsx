import React from "react";
import CourseDescription from "../CourseDescription/CourseDescription";
import ChapterPlayer from "../Player/ChapterPlayer";
import Test from "../QuestionNAnswer/Test";

export default function Learning() {
  return (
    <section>
      <ChapterPlayer videoUrl="https://linkden-learning.s3.ap-south-1.amazonaws.com/newVideos/2315274c-36d7-4db2-8b4d-a5f71ae03875-.mp4" />
      <CourseDescription />
    </section>
  );
}
