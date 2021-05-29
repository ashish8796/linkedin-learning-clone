import {Document} from 'mongoose';

export default interface  IVideo extends Document{
    title:string;
    description:string;
    content:any;
    createdAt:any;
    authorId?:string;
    chapterId?:string;
    courseId?:string;
    userId?:string;
    tags:Array<string>;
}




