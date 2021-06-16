import ITeacher from "../types/teacher";
import { Schema, model } from "mongoose";

const teacherSchema: Schema = new Schema(
  {
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
      type: Schema.Types.ObjectId,
      ref: "users",
      required: [true, "uniqueId needed"],
    },
    linkedInProfile: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<ITeacher>("teacher", teacherSchema);
