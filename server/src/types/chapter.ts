import {Document} from 'mongoose';

export default interface IChapter extends Document{
    title:String;
    description:String;
    content:any;
    videosId?:Array<String>;
    courseId:String;
    authorId:String;
    createdAt?:Date;
}