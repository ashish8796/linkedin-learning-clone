"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const questionSessionSchema = new mongoose_1.Schema({
    courseId: {
        type: String,
    },
    questions: {
        type: String
    },
    userId: {
        type: String
    }
}, {
    timestamps: true
});
exports.default = mongoose_1.model("QnA", questionSessionSchema);
