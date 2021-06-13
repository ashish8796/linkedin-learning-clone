import IAnswerBox from "../types/answerBox";
import { Schema, model } from "mongoose";
import { v4 as uuid } from "uuid";
const answerBox: Schema = new Schema(
  {
    answer: {
      type: String,
      required: [true, "answer required"],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: [true, " user Id"],
    },
    replies: [
      {
        reply: {
          type: String,
        },
        uniqueId: {
          type: String,
          default: uuid(),
        },
        userId: {
          type: Schema.Types.ObjectId,
          ref: "user",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default model<IAnswerBox>("answerBox", answerBox);
