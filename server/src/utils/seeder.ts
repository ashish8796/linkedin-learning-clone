// import video from "../models/video";
import mongoose from "mongoose";
import process from "process";
// const videos = require("../../data/videos");
// import teachers from "./data/teachers";
const teachers = require("./data/teachers.json")
import teacher from "../models/teacher";

mongoose.connect("mongodb+srv://linkdenlearning:linkdenLearningDB@cluster0.ldxhc.mongodb.net/linkdenVideos?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

// const seedVideos=async()=>{
//     try{
//         await video.deleteMany()
//         console.log("delete many videos")
//         await video.insertMany(videos);
//         process.exit();
//     }catch(error){
//         console.log(error.message);
//         process.exit();
//     }
// }
export const seedTeachers = async () => {
  try {
    await teacher.deleteMany();
    console.log(teachers);
    await teacher.insertMany(teachers);
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
};
// seedTeachers();