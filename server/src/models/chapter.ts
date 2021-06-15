import IChapter from "../types/chapter";
import { Schema, model } from "mongoose";

const chapterSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: Object,
    },
    videoId: {
      type: Array,
    },
    courseId: {
      type: Schema.Types.ObjectId,
      ref: "course",
      required: [true, "Course ID id Required"],
    },
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "teacher",
      required: [true, "authorID or teacher Id is needed"],
    },
  },
  {
    timestamps: true,
  }
);

export default model<IChapter>("chapter", chapterSchema);
