import ITeacher from "../types/teacher";
import { Schema, model } from "mongoose";

const teacherSchema: Schema = new Schema(
  {
    qualification: {
      type: [String],
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
      ref: "user",
      required: [true, "uniqueId needed"],
    },
  },
  {
    timestamps: true,
  }
);

export default model<ITeacher>("teacher", teacherSchema);
