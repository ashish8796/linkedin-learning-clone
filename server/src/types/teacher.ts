import { Document } from "mongoose";

export default interface ITeacher extends Document {
    qualification?: Array<String>;
    description?: String;
    DOB?: Date;
    specializations: string;
    image?: Array<string>;
    linkedInProfile: string;
    uniqueId?: string;
}
