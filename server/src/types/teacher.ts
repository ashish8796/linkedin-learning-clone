import { Document } from "mongoose";

export default interface ITeacher extends Document {
    qualification?: Array<String>;
    description?: String;
    DOB?: Date;
    specializations: string;
    image?: string;
    linkedInProfile: string;
    uniqueId?: string;
}
