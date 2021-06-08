"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import video from "../models/video";
const mongoose_1 = __importDefault(require("mongoose"));
// const videos = require("../../data/videos");
const teachers = require("../../data/teachers");
mongoose_1.default.connect("mongodb+srv://linkdenlearning:linkdenLearningDB@cluster0.ldxhc.mongodb.net/linkdenVideos?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});
// export const seedVideos=async()=>{
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
// export const seedTeachers=async ()=>{
//     try {
//         await teacher.deleteMany();
//         console.log("delete all old data");
//         await teacher.insertMany(teachers);
//         process.exit();
//     } catch (error) {
//         console.log(error)
//         process.exit();
//     }
// }
// seedTeachers()
console.log(teachers);
