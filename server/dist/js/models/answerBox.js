"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const uuid_1 = require("uuid");
const answerBox = new mongoose_1.Schema({
    answer: {
        type: String,
        required: [true, "answer required"],
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user",
        required: [true, " user Id"],
    },
    replies: [
        {
            reply: {
                type: String,
            },
            uniqueId: {
                type: String,
                default: uuid_1.v4(),
            },
            userId: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: "user",
            },
        },
    ],
}, {
    timestamps: true,
});
exports.default = mongoose_1.model("answerBox", answerBox);
