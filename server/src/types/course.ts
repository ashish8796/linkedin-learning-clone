import { Document } from "mongoose";
import IQuestionSession from "./questionSession";

export default interface ICourse extends Document {
  title: String;
  description: String;
  tags?: Array<String>;
  authorId?: String;
  questionBlog?: Array<Object>;
  createdAt?: Date;
  chapterIds?: Array<String>;
  Image?: Array<Object>;
  blogId?: String;
}
