import IUser from "../types/user";
import { Schema, model } from "mongoose";
const encrypt = require("mongoose-encryption");

require("dotenv").config();

const userSchema: Schema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "Enter First Name"],
      text: true
    },
    lastName: {
      type: String,
      required: [true, "Enter Second Name"],
      text: true
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
    subscribe: {
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

// export default model<IUser>("user", userSchema);

// let secret = process.env.SECRET;

// userSchema.plugin(encrypt, { secret: secret, encryptedFields: ["password"] });

export default model<IUser>("user", userSchema);

// userSchema.plugin()
