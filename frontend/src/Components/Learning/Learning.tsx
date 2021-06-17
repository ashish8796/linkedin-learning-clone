import React from "react";
import CourseDescription from "../CourseDescription/CourseDescription";
import ChapterPlayer from "../Player/ChapterPlayer";
import Test from "../QuestionNAnswer/Test";
import { useHistory , useParams } from "react-router";
import axios from "axios";

export default function Learning() {

  const {id}:any =useParams()
  console.log(id);

  const [videoUrl,setVideoUrl]= React.useState("")
  React.useEffect(()=>{
    axios.get(`/getFullCourseWithId/${id}`).then(({data})=>{
      console.log(data.course);
      setVideoUrl(data.course[0].videoIds[0].videoId.url)
    })
  },[])
  return (
    <section>
      <ChapterPlayer  videoUrl={videoUrl ||"https://linkden-learning.s3.ap-south-1.amazonaws.com/newVideos/2315274c-36d7-4db2-8b4d-a5f71ae03875-.mp4"} />
      <CourseDescription id={id}/>
    </section>
  );
}
