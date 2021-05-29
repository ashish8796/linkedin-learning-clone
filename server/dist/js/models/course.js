"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import ICourse from "../types/course";
const mongoose_1 = require("mongoose");
const courseSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, "Please Enter title"]
    },
    description: {
        type: String,
        required: [true, "enter description"]
    },
    tags: {
        type: Array,
    },
    authorId: {
        type: String,
    },
    questionSession: {
        type: Array,
        default: undefined
    }
}, {
    timestamps: true
});
exports.default = mongoose_1.model("course", courseSchema);
