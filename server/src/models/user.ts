import IUser from "../types/user";
import { Schema, model } from "mongoose";
const encrypt = require("mongoose-encryption");

const userSchema: Schema = new Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

export default model<IUser>("user", userSchema);

let secret = process.env.SECRET;

userSchema.plugin(encrypt, { secret: secret, encryptedFields: ["password"] });

export default model<IUser>("user", userSchema);
