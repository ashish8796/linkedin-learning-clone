// import ICourse from "../types/course";
import { model, Schema } from "mongoose";
import { isStringTextContainingNode } from "typescript";
import ICourse from "../types/course";
// import QnA from "./questionSession"
const courseSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please Enter title"],
      text: true
    },
    description: {
      type: String,
      required: [true, "enter description"],
      text: true
    },
    tags: {
      type: Array,
    },
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "teacher",
      required: [true, "enter Teacher/ Author Id"],
    },
    image: {
      type: String,
    },
    blogId: {
      type: Schema.Types.ObjectId,
      ref: "blog",
    },
    questionBlog: [
      {
        question: {
          type: Schema.Types.ObjectId,
          ref: "questionSession",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default model<ICourse>("course", courseSchema);

// ["vajnionvtvnoitnv","vm ndionov","vonitviiolw"]
