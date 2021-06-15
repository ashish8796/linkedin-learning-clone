import { Document } from "mongoose";

export default interface IQuestionSession extends Document {
  courseId?: String;
  question: String;
  userId?: String;
  answers?: Array<Object>;
}
