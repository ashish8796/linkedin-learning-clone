import {Document} from 'mongoose';

export default interface IUser extends Document{
    firstName: String;
    lastName: String;
    qualification:Array<String>;
    startOfProgram?:Date;
    interests?: Array<String>; 
    savedCourseId?:Array<String>;
    emailId?:String;
    password?:String;
    Image?:any;
    flag?:Boolean;
}