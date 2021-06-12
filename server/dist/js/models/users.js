"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import IStudent from "../types/student";
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
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
    },
    emailId: {
        type: String,
        // required: true
    },
    password: {
        type: String,
        // required: true
    },
    Image: [
        {
            url: {
                type: String
            },
            alt: {
                type: String
            }
        }
    ],
    flag: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
});
exports.default = mongoose_1.model("user", userSchema);
