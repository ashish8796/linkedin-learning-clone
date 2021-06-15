"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const encrypt = require("mongoose-encryption");
require("dotenv").config();
const userSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: [true, "Enter First Name"],
    },
    lastName: {
        type: String,
        required: [true, "Enter Second Name"],
    },
    //["Ph.D","M.tech"]
    startOfProgram: {
        type: Date,
    },
    interests: {
        type: Array,
    },
    savedCourseId: {
        type: Array,
    },
    emailId: {
        type: String,
    },
    password: {
        type: String,
    },
    flag: {
        type: Boolean,
        default: false,
    },
    Image: [
        {
            url: {
                type: String,
            },
            alt: {
                type: String,
            },
        },
    ],
}, {
    timestamps: true,
});
// export default model<IUser>("user", userSchema);
// let secret = process.env.SECRET;
// userSchema.plugin(encrypt, { secret: secret, encryptedFields: ["password"] });
exports.default = mongoose_1.model("user", userSchema);
// userSchema.plugin()
