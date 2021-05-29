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
exports.deleteChapter = exports.getChapterId = exports.updateChapter = exports.addChapter = exports.getChapter = void 0;
const chapter_1 = __importDefault(require("../../models/chapter"));
// import { isTryStatement } from 'typescript';
const getChapter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const chapters = yield chapter_1.default.find();
        res.status(202).json({ chapters });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getChapter = getChapter;
const addChapter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // res.status(203).json({"name":"kota"})
        // const blog = await chapter.create(req.body)
        let body = req.body;
        console.log(body);
        const new_chapter = new chapter_1.default({
            title: body.title,
            description: body.description,
            createdAt: body.createdAt,
            authorId: body.authorId,
            videosId: body.videosId,
            courseId: body.courseId,
            content: body.content,
        });
        console.log(chapter_1.default);
        const newChapter = yield new_chapter.save();
        const allChapter = yield chapter_1.default.find();
        res.status(201).json({ message: "new chapter as been added ", chapter: newChapter, chapters: allChapter });
    }
    catch (error) {
        res.end();
        console.log(error);
    }
});
exports.addChapter = addChapter;
const updateChapter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body } = req;
        console.log(body, id);
        const updatedChapter = yield chapter_1.default.findByIdAndUpdate({ _id: id }, body);
        // res.status(205).json({testing:"testing",blog: updatedBlog})
        const allChapters = yield chapter_1.default.find();
        res.status(202).json({ message: "new chapter as been added ", chapter: updatedChapter, chapters: allChapters });
        // console.log("new")
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateChapter = updateChapter;
const getChapterId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id } } = req;
        const chapters = yield chapter_1.default.findById({ _id: id });
        res.status(202).json({ message: "found", chapters: chapters });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getChapterId = getChapterId;
const deleteChapter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const delete_chapter = yield chapter_1.default.findByIdAndRemove(req.params.id);
        const allChapters = yield chapter_1.default.find();
        res.status(200).json({ message: "chapter Deleted", chapter: delete_chapter, chapters: allChapters });
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteChapter = deleteChapter;
