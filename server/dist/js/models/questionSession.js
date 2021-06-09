"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const questionSessionSchema = new mongoose_1.Schema({
    courseId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "course",
        required: [true, "course Id"]
    },
    questions: {
        type: String
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user",
        required: [true, "user Id is needed"]
    }
}, {
    timestamps: true
});
exports.default = mongoose_1.model("questionSession", questionSessionSchema);
