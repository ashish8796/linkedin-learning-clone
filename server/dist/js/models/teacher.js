"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const teacherSchema = new mongoose_1.Schema({
    qualification: {
        type: [String],
    },
    image: {
        type: String,
    },
    description: {
        type: String,
    },
    DOB: {
        type: Date,
    },
    specializations: {
        type: [String],
    },
    uniqueId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user",
        required: [true, "uniqueId needed"],
    },
    linkedInProfile: {
        type: String,
    },
}, {
    timestamps: true,
    versionKey: false,
});
exports.default = mongoose_1.model("teacher", teacherSchema);
