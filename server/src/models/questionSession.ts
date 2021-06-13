import IQuestionSession from "../types/questionSession";
import { Schema, model } from "mongoose";

// _id
const questionSessionSchema: Schema = new Schema(
  {
    courseId: {
      type: Schema.Types.ObjectId,
      ref: "course",
      required: [true, "course Id"],
    },
    question: {
      type: String,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: [true, "user Id is needed"],
    },
    answers: [
      {
        answer: {
          type: Schema.Types.ObjectId,
          ref: "answerBox",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default model<IQuestionSession>(
  "questionSession",
  questionSessionSchema
);

// ["mvenevv","vaemvnoenv","vmoienv"]
