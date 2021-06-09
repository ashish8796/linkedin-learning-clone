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
exports.deleteVideo = exports.getVideoId = exports.updateVideo = exports.addVideo = exports.getVideo = void 0;
const video_1 = __importDefault(require("../../models/video"));
// import { isTryStatement } from 'typescript';
const getVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const videos = yield video_1.default.find();
        res.status(202).json({ videos });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getVideo = getVideo;
const addVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // res.status(203).json({"name":"kota"})
        // const blog = await Video.create(req.body)
        let body = req.body;
        console.log(body);
        const video = new video_1.default({
            title: body.title,
            description: body.description,
            content: body.content,
            createdAt: body.createdAt,
            authorId: body.authorId,
            chapterId: body.chapterId,
            courseId: body.courseId,
            tags: body.tags
        });
        console.log(video);
        const newVideo = yield video.save();
        const allVideos = yield video_1.default.find();
        res.status(203).json({ message: "new Video as been added ", blog: newVideo, blogs: allVideos });
    }
    catch (error) {
        res.end();
        console.log(error);
    }
});
exports.addVideo = addVideo;
const updateVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body } = req;
        console.log(body, id);
        const updatedVideo = yield video_1.default.findByIdAndUpdate({ _id: id }, body);
        // res.status(205).json({testing:"testing",blog: updatedBlog})
        const allVideos = yield video_1.default.find();
        res.status(202).json({ message: "new Video as been added ", video: updatedVideo, videos: allVideos });
        // console.log("new")
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateVideo = updateVideo;
const getVideoId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id } } = req;
        const video = yield video_1.default.findById({ _id: id });
        res.status(202).json({ message: "found", blog: video });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getVideoId = getVideoId;
const deleteVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const delete_video = yield video_1.default.findByIdAndRemove(req.params.id);
        const allVideos = yield video_1.default.find();
        res.status(200).json({ message: "Video Deleted", blog: delete_video, blogs: allVideos });
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteVideo = deleteVideo;
