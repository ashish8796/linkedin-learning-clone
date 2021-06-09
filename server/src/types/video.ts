import {Document} from 'mongoose';

export default interface  IVideo extends Document{
    title:String;
    description:String;
    content:any;
    createdAt:any;
    authorId?:String;
    chapterId?:String;
    courseId?:String;
    userId?:String;
    tags:Array<String>;
}




