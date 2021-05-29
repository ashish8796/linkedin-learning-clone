"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const studentSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: [true, "Enter First Name"]
    },
    lastName: {
        type: String,
        required: [true, "Enter Second Name"]
    },
    description: {
        type: String,
        required: [true, "Enter Description"]
    },
    qualification: {
        type: Array,
        required: [true, "qualification"]
    },
    startOfProgram: {
        type: Date,
    },
    interest: {
        type: Array
    },
    savedCourseId: {
        type: Array
    }
}, {
    timestamps: true
});
exports.default = mongoose_1.model("student", studentSchema);
