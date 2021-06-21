import React, { useState } from "react";
import CourseDescription from "../CourseDescription/CourseDescription";
import ChapterPlayer from "../Player/ChapterPlayer";
import Test from "../QuestionNAnswer/Test";
import { useHistory, useParams } from "react-router";
import axios from "axios";
import { useSelector } from "react-redux";
import { State } from "../../store/tsTypes";

export default function Learning() {
  const { id }: any = useParams();
  const [course, setCourse] = useState([]);
  console.log(id);
  const { index } = useSelector((state: State) => state.currentVideo);

  const [videoUrl, setVideoUrl] = React.useState("");

  React.useEffect(() => {
    axios.get(`/getFullCourseWithId/${id}`).then(({ data }) => {
      console.log(data.course);

      setCourse(data.course);
      // setVideoUrl(data.course[0].videoIds[index].videoId.url);
    });
  }, []);

  return (
    <section>
      <ChapterPlayer
        videoUrl={
          //@ts-ignore
          course[0]?.videoIds[index].videoId?.url ||
          "https://linkden-learning.s3.ap-south-1.amazonaws.com/newVideos/2315274c-36d7-4db2-8b4d-a5f71ae03875-.mp4"
        }
      />
      <CourseDescription id={id} />
    </section>
  );
}
