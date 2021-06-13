import {Document} from 'mongoose';

export default interface ITeacher extends Document{
    qualification?: Array<String>;
    description?: String;
    DOB?: Date;
    specializations:Array<String>;
    Image?:Array<String>;
    uniqueId:String
}

