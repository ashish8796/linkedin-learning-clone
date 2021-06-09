"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const answerBox = new mongoose_1.Schema({
    answer: {
        type: String,
        required: [true, "answer required"]
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "student",
        required: [true, " user Id"]
    },
    questionId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "questionSession",
        required: [true, "question Id is true"]
    }
}, {
    timestamps: true
});
exports.default = mongoose_1.model("answerBox", answerBox);
