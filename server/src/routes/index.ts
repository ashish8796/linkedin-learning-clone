import {Router} from 'express';
import { addCourse, getCourse ,updateCourse ,deleteCourse, getCourseId } from '../controllers/course/index';
import {getVideo,addVideo, updateVideo,deleteVideo,getVideoId} from '../controllers/video/index'
import { getTeacher,updateTeacher,deleteTeacher,getTeacherId , addTeacher}  from '../controllers/teacher';
import {getStudent,addStudent,updateStudent,deleteStudent,getStudentId} from '../controllers/student/index'
import {getChapter, addChapter,updateChapter,deleteChapter,getChapterId} from "../controllers/chapter/index"
const route :Router =Router();



// getting all the videos, Courses, student, teacher
route.get("/videos",getVideo)

route.get("/courses",getCourse)

route.get('/students', getStudent)

route.get("/teachers", getTeacher)

route.get("/chapters",getChapter)

// posting the video,Course,student,teacher


route.post("/add-video",addVideo)

route.post("/add-course",addCourse)

route.post("/add-teacher",addTeacher)

route.post("/add-student",addStudent)

route.post("/add-chapter",addChapter)
// get them by Id
route.get("/get-video/:id",getVideoId)

route.get("get-course/:id",getCourseId)

route.get("get-student/:id",getStudentId)

route.get("get-teacher/:id",getTeacherId)

route.get("get-chapter/:id",getChapterId)

// update the details

route.put("/update-video/:id",updateVideo)

route.put("/update-course/:id",updateCourse)

route.put("/update-student/:id",updateStudent)

route.put("/update-teacher/:id",updateTeacher)

route.put('/update-chapter/:id',updateChapter)

// delete 
route.delete("/delete-video/:id",deleteVideo)

route.delete("/delete-course/:id",deleteCourse)

route.delete("/delete-student/:id",deleteStudent)

route.delete("/delete-teacher/:id",deleteTeacher)

route.delete('/delete-chapter',deleteChapter)

export default route;