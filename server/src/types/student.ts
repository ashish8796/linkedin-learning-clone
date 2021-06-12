import {Document} from 'mongoose';

export default interface IStudent extends Document{
    firstName: String;
    lastName: String;
    description: String;
    qualification:Array<String>;
    startOfProgram?:Date;
    interest?: Array<String>; 
    savedCourseId?:Array<String>;
}