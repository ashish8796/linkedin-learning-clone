"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const teacherSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: [true, "Please enter first name"]
    },
    lastName: {
        type: String,
        required: [true, "Please enter last name"]
    },
    qualification: {
        type: [String],
    },
    description: {
        type: String
    },
    DOB: {
        type: Date,
    },
    specializations: {
        type: [String],
    }
}, {
    timestamps: true
});
exports.default = mongoose_1.model("teacher", teacherSchema);
