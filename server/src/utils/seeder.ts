import video from "../models/video";
import mongoose  from "mongoose";
import process from "process";
const videos = require("../data/videos");


mongoose.connect("mongodb://localhost:27017/oyo-clone", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const seedVideos=async()=>{
    try{
        await video.deleteMany()
        console.log("delete many videos")
        await video.insertMany(videos);
        process.exit();
    }catch(error){
        console.log(error.message);
        process.exit();
    }
}