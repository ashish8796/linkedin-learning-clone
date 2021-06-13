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
exports.getAnswersToCourse = exports.getAnswersToQuestion = exports.addAnswer = exports.getAnswers = void 0;
const answerBox_1 = __importDefault(require("../../models/answerBox"));
const questionSession_1 = __importDefault(require("../../models/questionSession"));
const getAnswers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const new_Answer = answerBox_1.default.find();
        res.status(200).json({ message: "all messages", Answers: new_Answer });
    }
    catch (error) {
        res.end();
        console.log(error);
    }
});
exports.getAnswers = getAnswers;
const addAnswer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const new_Answer = new answerBox_1.default({
            answer: body.answer,
            questionId: body.questionId,
            userId: body.userId,
            courseId: body.courseId,
        });
        const newAnswer = yield new_Answer.save();
        const allAnswers = yield answerBox_1.default.find({
            courseId: body.courseId,
        });
        yield updateQuestionSession(body.questionId, newAnswer._id);
        //   .populate("questionId")
        //   .populate("courseId");
        res.status(202).json({
            message: "new Answer/ Reply is added",
            answer: newAnswer,
            allAnswers: allAnswers,
        });
    }
    catch (error) {
        res.end();
        console.log(error);
    }
});
exports.addAnswer = addAnswer;
const getAnswersToQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, } = req;
        const answers = answerBox_1.default.find({ questionId: id }).populate("questionId");
        res.status(200).json({ message: "answers to question", answers: answers });
    }
    catch (error) {
        console.log(error);
        res.end();
    }
});
exports.getAnswersToQuestion = getAnswersToQuestion;
const getAnswersToCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, } = req;
        const answers = answerBox_1.default
            .find({ courseId: id })
            .populate("courseId")
            .populate("questionId");
        res
            .status(200)
            .json({ message: "the answers to that course", answers: answers });
    }
    catch (error) {
        console.log(error);
        res.end();
    }
});
exports.getAnswersToCourse = getAnswersToCourse;
const updateQuestionSession = (QId, AId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = questionSession_1.default.updateOne({ _id: QId }, { $push: { answers: { $each: [{ answer: AId }] } } });
        console.log("updated the question collection", data);
    }
    catch (error) {
        console.log(error);
    }
});
