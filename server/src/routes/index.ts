import { Router } from "express";
import { seedTeachers } from "../utils/seeder";
import {
  addCourse,
  getCourse,
  updateCourse,
  deleteCourse,
  getCourseId,
  getCourseByTeacherId
} from "../controllers/course/index";
import {
  getVideo,
  addVideo,
  updateVideo,
  deleteVideo,
  getVideoId,
} from "../controllers/video/index";
import {
  getTeacher,
  updateTeacher,
  deleteTeacher,
  getTeacherId,
  addTeacher,
} from "../controllers/teacher";
import {
  getStudent,
  addStudent,
  updateStudent,
  deleteStudent,
  getStudentId,
} from "../controllers/student/index";
import {
  getChapter,
  addChapter,
  updateChapter,
  deleteChapter,
  getChapterId,
  getChapterByCourseId,
} from "../controllers/chapter/index";
import {
  addUser,
  deleteUser,
  getUser,
  getUserId,
  updateUser,
  getUserEmailId,
} from "../controllers/user";
import { deleteAnswer } from "../controllers/answer/index";
import { checkMailId } from "../controllers/utils/Index";
import { loginUser } from "../controllers/login";
import { addQuestion, getQnAWithCourseId } from "../controllers/question";
import { addAnswer } from "../controllers/answer";
import {
  checkStatus,
  getPaymentDetails,
  paymentWithCard,
} from "../Components/stripes";
import { uploadProfilePic } from "../controllers/utils/storeDataInAws";
import { getAllData } from "../controllers/allData";
const path = require("path");

// import {seedTeachers} from "../utils/seeder" ;
const route: Router = Router();

function fn() { }

route.get('/whole-data/:search', getAllData);

// getting all the videos, Courses, student, teacher

route.get("/users", getUser);

route.get("/videos", getVideo);

route.get("/courses", getCourse);

route.get("/students", getStudent);

route.get("/check-mail", checkMailId);

route.get("/teachers", getTeacher);

route.get("/chapters", getChapter);

route.get("/check-status", checkStatus);

// route.get("/getAll",seedTeachers);
// posting the video,Course,student,teacher

route.post("/add-user", addUser);
route.post("/register", addUser);

route.post("/add-video", addVideo);

route.post("/add-course", addCourse);

route.post("/add-teacher", addTeacher);

route.post("/add-teacher", addTeacher)

route.post("/add-chapter", addChapter);

route.post("/add-answer", addAnswer);

route.post("/add-question", addQuestion);

route.post("/payment", paymentWithCard);

// get them by Id

route.get("/get-user/:id", getUserId);

route.get('/get-user-detail/:emailId', getUserEmailId);

route.get("/get-video/:id", getVideoId);

route.get("/get-course/:id", getCourseId);

route.get("/get-course/:teacherId", getCourseByTeacherId)

route.get("/get-student/:id", getStudentId);

route.get("/get-teacher/:id", getTeacherId);

route.get("/getQnAWithCourseId/:id", getQnAWithCourseId);

route.get("/getChapterNCourse/:id", getChapterByCourseId);

route.get("/get-chapter/:id", getChapterId);

// update the details

route.put("/update-user/:id", updateUser);

route.put("/update-video/:id", updateVideo);

route.put("/update-course/:id", updateCourse);

route.put("/update-student/:id", updateStudent);

route.put("/update-teacher/:id", updateTeacher);

route.put("/update-chapter/:id", updateChapter);

// delete
route.delete("/delete-user/:id", deleteUser);

route.delete("/delete-video/:id", deleteVideo);

route.delete("/delete-course/:id", deleteCourse);

route.delete("/delete-student/:id", deleteStudent);

route.delete("/delete-teacher/:id", deleteTeacher);

route.delete("/delete-chapter/:id", deleteChapter);

route.delete("/delete-answer/:id", deleteAnswer);

// the data of seeding
route.get("/seeding-data", seedTeachers);

// login

route.post("/login", loginUser);

export default route;
