import {Document} from 'mongoose';
import IQuestionSession from "./questionSession"

export default interface ICourse extends Document{
    title:string;
    description:string;
    tags?:Array<string>;
    authorId?:string;
    questionSession?:any;
    createdAt? : Date;
    chapterIds?:Array<string>;
}