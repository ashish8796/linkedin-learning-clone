"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// _id
const questionSessionSchema = new mongoose_1.Schema({
    courseId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "course",
        required: [true, "course Id"],
    },
    question: {
        type: String,
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user",
        required: [true, "user Id is needed"],
    },
    answers: [
        {
            answer: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: "answerBox",
            },
        },
    ],
}, {
    timestamps: true,
});
exports.default = mongoose_1.model("questionSession", questionSessionSchema);
// ["mvenevv","vaemvnoenv","vmoienv"]
