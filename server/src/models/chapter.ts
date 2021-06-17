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
    },
    content: {
      type: Object,
    },
    videoIds: [
      {
        videoId: {
          type: Schema.Types.ObjectId,
          ref: "video",
        },
      },
    ],
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
