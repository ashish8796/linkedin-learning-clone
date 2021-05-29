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
    createdAt: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: String
        // default : {"007"}
    },
    chapterId: {
        type: String
    },
    courseId: {
        type: String
    },
    tags: {
        type: Array
    }
}, {
    timestamps: true
});
exports.default = mongoose_1.model("video", videoSchema);
