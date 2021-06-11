"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedTeachers = void 0;
// import video from "../models/video";
const mongoose_1 = __importDefault(require("mongoose"));
const process_1 = __importDefault(require("process"));
// const videos = require("../../data/videos");
// import teachers from "./data/teachers";
const teachers = require("./data/teachers.json");
const teacher_1 = __importDefault(require("../models/teacher"));
mongoose_1.default.connect("mongodb+srv://linkdenlearning:linkdenLearningDB@cluster0.ldxhc.mongodb.net/linkdenVideos?retryWrites=true&w=majority", {
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
const seedTeachers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield teacher_1.default.deleteMany();
        console.log(teachers);
        yield teacher_1.default.insertMany(teachers);
        process_1.default.exit();
    }
    catch (error) {
        console.log(error);
        process_1.default.exit();
    }
});
exports.seedTeachers = seedTeachers;
// seedTeachers();
