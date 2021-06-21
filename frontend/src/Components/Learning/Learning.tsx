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

  // const [videoUrl, setVideoUrl] = React.useState("");
  console.log(videoUrl);
  React.useEffect(() => {
    (async () => {
      let data = await axios
        .get(`/getFullCourseWithId/${id}`)
        .then(({ data }) => {
          return data.course;
          setVideoUrl(data.course[0].videoIds[0].videoId.url);
        });
      //@ts-ignore
      setVideoUrl(await data[0].videoIds[0].videoId.url);
    })();
  }, []);
  // ||"https://linkden-learning.s3.ap-south-1.amazonaws.com/newVideos/2315274c-36d7-4db2-8b4d-a5f71ae03875-.mp4"
  return (
    <section>
      {videoUrl !== "" && <ChapterPlayer videoUrl={videoUrl} />}
      {id !== 0 && <CourseDescription id={id} />}
    </section>
  );
}
