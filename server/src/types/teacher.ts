import { Document } from "mongoose";

export default interface ITeacher extends Document {
  firstName: String;
  lastName: String;
  qualification?: Array<String>;
  uniqueId?: String;
  description?: String;
  DOB?: Date;
  specializations: Array<String>;
  Image?: Array<String>;
  linkedInProfile: string;
}
