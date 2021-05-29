import {Document} from 'mongoose';

export default interface IQuestionSession extends Document{
    courseId?:string;
    questions?:any;
    userId?:string;
} 