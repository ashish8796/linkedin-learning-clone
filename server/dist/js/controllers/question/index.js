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
exports.getQnAWithCourseId = exports.addQuestion = void 0;
const questionSession_1 = __importDefault(require("../../models/questionSession"));
const course_1 = __importDefault(require("../../models/course"));
const addQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let body = req.body;
        const new_Question = new questionSession_1.default({
            courseId: body.courseId,
            question: body.question,
            userId: body.userId,
        });
        let newQuestion = yield new_Question.save();
        updateCourseWithQuestionId(body.courseId, newQuestion._id);
        let allQuestions = yield questionSession_1.default.find({
            courseId: body.courseId,
        });
        //   .populate("courseId")
        //   .populate("userId");
        res.status(202).json({
            message: "the new Question is added",
            question: newQuestion,
            allQuestions: allQuestions,
        });
    }
    catch (error) {
        res.end();
        console.log(error);
    }
});
exports.addQuestion = addQuestion;
const updateCourseWithQuestionId = (id, QId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(id, QId);
        yield course_1.default.updateOne({ _id: id }, {
            $push: {
                questionBlog: {
                    $each: [{ question: QId }],
                    $sort: { updatedAt: -1 },
                },
            },
        });
        console.log(yield course_1.default.find({ _id: id }));
        // console.log("course data updated", data);
    }
    catch (error) {
        console.log(error);
    }
});
const getQnAWithCourseId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, } = req;
        let data = yield questionSession_1.default
            .find({ courseId: id })
            .populate({
            path: "userId answers",
            select: "firstName lastName question",
            populate: {
                path: "answer",
                populate: { path: "userId", select: "firstName lastName" },
            },
        })
            .select({ firstName: 1, lastName: 1, question: 1 })
            .exec();
        res
            .status(200)
            .json({ message: "the Course with Question and answer", QNA: data });
    }
    catch (error) {
        res.end();
        console.log(error);
    }
});
exports.getQnAWithCourseId = getQnAWithCourseId;
// const deleteQuestionAnswer = async(res:)
