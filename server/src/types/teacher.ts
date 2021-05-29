import {Document} from 'mongoose';

export default interface ITeacher extends Document{
    firstName: string;
    lastName: string;
    qualification?: Array<string>;
    description?: string;
    DOB?: Date;
    specializations:Array<string>;
}