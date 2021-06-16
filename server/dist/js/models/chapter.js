"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const chapterSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    content: {
        type: Object,
    },
    videoId: {
        type: Array,
    },
    courseId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "course",
        required: [true, "Course ID id Required"],
    },
    authorId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "teacher",
        required: [true, "authorID or teacher Id is needed"],
    },
}, {
    timestamps: true,
});
exports.default = mongoose_1.model("chapter", chapterSchema);
