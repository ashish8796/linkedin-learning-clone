"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const seeder_1 = require("../utils/seeder");
const index_1 = require("../controllers/course/index");
const index_2 = require("../controllers/video/index");
const teacher_1 = require("../controllers/teacher");
const index_3 = require("../controllers/student/index");
const index_4 = require("../controllers/chapter/index");
const user_1 = require("../controllers/user");
const index_5 = require("../controllers/answer/index");
const Index_1 = require("../controllers/utils/Index");
const login_1 = require("../controllers/login");
const question_1 = require("../controllers/question");
const answer_1 = require("../controllers/answer");
const stripes_1 = require("../Components/stripes");
const path = require("path");
// import {seedTeachers} from "../utils/seeder" ;
const route = express_1.Router();
function fn() { }
// getting all the videos, Courses, student, teacher
route.get("/users", user_1.getUser);
route.get("/videos", index_2.getVideo);
route.get("/courses", index_1.getCourse);
route.get("/students", index_3.getStudent);
route.get("/check-mail", Index_1.checkMailId);
route.get("/teachers", teacher_1.getTeacher);
route.get("/chapters", index_4.getChapter);
route.get("/check-status", stripes_1.checkStatus);
// route.get("/getAll",seedTeachers);
// posting the video,Course,student,teacher
route.post("/add-user", user_1.addUser);
route.post("/register", user_1.addUser);
route.post("/add-video", index_2.addVideo);
route.post("/add-course", index_1.addCourse);
route.post("/add-teacher", teacher_1.addTeacher);
route.post("/add-teacher", teacher_1.addTeacher);
route.post("/add-chapter", index_4.addChapter);
route.post("/add-answer", answer_1.addAnswer);
route.post("/add-question", question_1.addQuestion);
route.post("/payment", stripes_1.paymentWithCard);
// get them by Id
route.get("/get-user/:id", user_1.getUserId);
route.get("/get-video/:id", index_2.getVideoId);
route.get("/get-course/:id", index_1.getCourseId);
route.get("/get-student/:id", index_3.getStudentId);
route.get("/get-teacher/:id", teacher_1.getTeacherId);
route.get("/getQnAWithCourseId/:id", question_1.getQnAWithCourseId);
route.get("/getChapterNCourse/:id", index_4.getChapterByCourseId);
route.get("/get-chapter/:id", index_4.getChapterId);
// update the details
route.put("/update-user/:id", user_1.updateUser);
route.put("/update-video/:id", index_2.updateVideo);
route.put("/update-course/:id", index_1.updateCourse);
route.put("/update-student/:id", index_3.updateStudent);
route.put("/update-teacher/:id", teacher_1.updateTeacher);
route.put("/update-chapter/:id", index_4.updateChapter);
// delete
route.delete("/delete-user/:id", user_1.deleteUser);
route.delete("/delete-video/:id", index_2.deleteVideo);
route.delete("/delete-course/:id", index_1.deleteCourse);
route.delete("/delete-student/:id", index_3.deleteStudent);
route.delete("/delete-teacher/:id", teacher_1.deleteTeacher);
route.delete("/delete-chapter/:id", index_4.deleteChapter);
route.delete("/delete-answer/:id", index_5.deleteAnswer);
// the data of seeding
route.get("/seeding-data", seeder_1.seedTeachers);
// login
route.post("/login", login_1.loginUser);
exports.default = route;
