"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import ICourse from "../types/course";
const mongoose_1 = require("mongoose");
// import QnA from "./questionSession"
const courseSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, "Please Enter title"],
    },
    description: {
        type: String,
        required: [true, "enter description"],
    },
    tags: {
        type: Array,
    },
    authorId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "teacher",
        required: [true, "enter Teacher/ Author Id"],
    },
    Image: {
        type: String,
    },
    blogId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "blog",
    },
    questionBlog: [
        {
            question: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: "questionSession",
            },
        },
    ],
}, {
    timestamps: true,
});
exports.default = mongoose_1.model("course", courseSchema);
// ["vajnionvtvnoitnv","vm ndionov","vonitviiolw"]
