import { Router } from 'express';
import { seedTeachers } from "../utils/seeder"
import { addCourse, getCourse, updateCourse, deleteCourse, getCourseId } from '../controllers/course/index';
import { getVideo, addVideo, updateVideo, deleteVideo, getVideoId } from '../controllers/video/index'
import { getTeacher, updateTeacher, deleteTeacher, getTeacherId, addTeacher } from '../controllers/teacher';
import { getStudent, addStudent, updateStudent, deleteStudent, getStudentId } from '../controllers/student/index'
import { getChapter, addChapter, updateChapter, deleteChapter, getChapterId } from "../controllers/chapter/index";
import { addUser, deleteUser, getUser, getUserId, updateUser } from '../controllers/user';
import { checkMailId } from '../controllers/utils/Index';
import { uploadProfilePic } from '../controllers/utils/storeDataInAws';
const path = require("path");


// import {seedTeachers} from "../utils/seeder" ;
const route: Router = Router();

function fn() { }


// getting all the videos, Courses, student, teacher

route.get("/users", getUser);

route.get("/videos", getVideo);

route.get("/courses", getCourse);

route.get('/students', getStudent);

route.get("/check-mail", checkMailId)

route.get("/teachers", getTeacher);

route.get("/chapters", getChapter);

// route.get("/getAll",seedTeachers)
// posting the video,Course,student,teacher

route.post("/add-user", addUser);
route.post("/register", addUser);

route.post("/add-video", addVideo)

route.post("/add-course", addCourse)

route.post("/add-teacher", uploadProfilePic("linkden-learning/profile-pics").single('image'), addTeacher)

route.post("/add-student", addStudent)

route.post("/add-chapter", addChapter)
// get them by Id

route.get('/get-user/:id', getUserId);

route.get("/get-video/:id", getVideoId)

route.get("/get-course/:id", getCourseId)

route.get("/get-student/:id", getStudentId)

route.get("/get-teacher/:id", getTeacherId)

route.get("/get-chapter/:id", getChapterId)

// update the details

route.put('/update-user/:id', updateUser);

route.put("/update-video/:id", updateVideo)

route.put("/update-course/:id", updateCourse)

route.put("/update-student/:id", updateStudent)

route.put("/update-teacher/:id", updateTeacher)

route.put('/update-chapter/:id', updateChapter)

// delete 
route.delete("/delete-user/:id", deleteUser);

route.delete("/delete-video/:id", deleteVideo)

route.delete("/delete-course/:id", deleteCourse)

route.delete("/delete-student/:id", deleteStudent)

route.delete("/delete-teacher/:id", deleteTeacher)

route.delete('/delete-chapter', deleteChapter)

// the data of seeding
route.get("/seeding-data", seedTeachers)

export default route;