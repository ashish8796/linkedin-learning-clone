import { Document } from 'mongoose';

export default interface IVideo extends Document {
    title: String;
    description?: String;
    content?: any;
    authorId?: String;
    chapterId: String;
    courseId: String;
    tags: Array<String>;
    url: string;
}




