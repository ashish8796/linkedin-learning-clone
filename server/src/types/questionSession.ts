import {Document} from 'mongoose';

export default interface IQuestionSession extends Document{
    courseId?:String;
    questions?:any;
    userId?:String;
} 