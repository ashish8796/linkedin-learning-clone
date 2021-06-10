import {Document} from 'mongoose';

export default interface IAnswerBox extends Document{
    answer: String,
    questionId:String,
    userId:String,
    courseId:String
}