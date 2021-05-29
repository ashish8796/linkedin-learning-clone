import {Document} from 'mongoose';

export default interface IStudent extends Document{
    firstName: string;
    lastName: string;
    description: string;
    qualification:Array<string>;
    startOfProgram?:Date;
    interest?: Array<string>; 
    savedCourseId?:Array<string>;
}