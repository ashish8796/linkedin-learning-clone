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
exports.deleteCourse = exports.getCourseId = exports.updateQuestion = exports.updateCourse = exports.addCourse = exports.getCourse = void 0;
const course_1 = __importDefault(require("../../models/course"));
const answerBox_1 = __importDefault(require("../../models/answerBox"));
// userSchema.plugin(encrypt, { secret: secret, encryptedFields: ["password"] });
const getCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courses = yield course_1.default
            .find()
            // .populate({ path: "questionBlog", populate: { path: "question" } });
            // .populate("authorId");
            .populate({
            path: "authorId",
            populate: { path: "authorId uniqueId", select: "firstName lastName" },
        });
        // .select();
        // .populate({
        //   path: "questionBlog",
        //   populate: { path: "question", populate: { path: "userId" } },
        // })
        // .populate({
        //   path: "questionBlog",
        //   populate: {
        //     path: "question",
        //     populate: {
        //       path: "userId answers",
        //       populate: { path: "answer userId" },
        //     },
        //   },
        // });
        yield res.status(202).json({ courses: courses });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getCourse = getCourse;
const addCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // res.status(203).json({"name":"kota"})
        // const blog = await course.create(req.body)
        let body = req.body;
        console.log(body);
        const new_course = new course_1.default({
            title: body.title,
            description: body.description,
            // createdAt:body.createdAt,
            authorId: body.authorId,
            tags: body.tags,
            questionBlog: body.questionBlog,
            blogId: body.blogId,
            Image: body.Image,
            // questionSession:body.questionSession,
            // chapterIds:body.chapterIds,
        });
        console.log(course_1.default);
        const newCourse = yield new_course.save();
        const allCourses = yield course_1.default.find();
        // let CommentBox: any = [];
        // allCourses.map((course) => {
        //   let { _id } = course;
        //   CommentBox.push(
        //     answerBox
        //       .find({ courseId: _id })
        //       .populate("questionId")
        //       .populate("userId")
        //   );
        // });
        res.status(203).json({
            message: "new course as been added ",
            course: newCourse,
            courses: allCourses,
            //   CommentBox: CommentBox,
        });
    }
    catch (error) {
        res.end();
        console.log(error);
    }
});
exports.addCourse = addCourse;
const updateCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        console.log(body, id);
        const updatedCourse = yield course_1.default.findByIdAndUpdate({ _id: id }, body);
        // res.status(205).json({testing:"testing",blog: updatedBlog})
        const allCourses = yield course_1.default.find();
        res.status(202).json({
            message: "new course as been added ",
            blog: updatedCourse,
            blogs: allCourses,
        });
        // console.log("new")
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateCourse = updateCourse;
const updateQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        console.log(body, id);
        const updatedQuestion = yield course_1.default.findByIdAndUpdate({ _id: id }, body);
        // res.status(205).json({testing:"testing",blog: updatedBlog})
        const allCourses = yield course_1.default.find();
        res.status(202).json({
            message: "new question as been added ",
            blog: updatedQuestion,
            blogs: allCourses,
        });
        // console.log("new")
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateQuestion = updateQuestion;
const getCourseId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, } = req;
        const courses = yield course_1.default
            .findById({ _id: id })
            .populate({ path: "questionBlog", populate: { path: "question" } });
        // let CommentBox: any = [];
        // // allCourses.map((course) => {
        // //   let { _id } = course;
        // CommentBox.push(
        //   answerBox.find({ courseId: id }).populate("questionId").populate("userId")
        // );
        // });
        res.status(200).json({ message: "found", course: courses });
    }
    catch (error) {
        res.end();
        console.log(error);
    }
});
exports.getCourseId = getCourseId;
const deleteCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const delete_course = yield course_1.default.findByIdAndRemove(req.params.id);
        const allCourses = yield course_1.default.find();
        res.status(200).json({
            message: "course Deleted",
            blog: delete_course,
            blogs: allCourses,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteCourse = deleteCourse;
const getComments = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield answerBox_1.default
            .find({ courseId: id })
            .populate("questionId")
            .populate("userId");
        console.log(data);
        return yield data;
    }
    catch (error) {
        console.log(error);
    }
});
