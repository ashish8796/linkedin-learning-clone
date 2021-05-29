import {Document} from 'mongoose';

export default interface IChapter extends Document{
    title:string;
    description:string;
    content:any;
    videosId?:Array<string>;
    courseId:string;
    authorId:string;
    createdAt?:Date;
}