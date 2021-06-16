"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const videoSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    authorId: {
        type: String,
    },
    chapterId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "chapter",
        required: [true, "Chapter ID is required"],
    },
    courseId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "course",
        required: [true, "Course ID id Required"],
    },
    url: {
        type: String,
        required: [true, "Lecture link is required"]
    },
    tags: [
        {
            type: String,
        },
    ],
}, {
    timestamps: true,
});
exports.default = mongoose_1.model("video", videoSchema);
