import IVideo from '../types/video';
import {Schema,model} from 'mongoose';

const videoSchema :Schema = new Schema({
    title :{
        type: String,
        required: true,
    },
    description:{
        type:String,
        required: true,
    },
    content: {
        type:String,
        required: true,
    },
    userId:{
        type:String
    },
    chapterId:{
        type: Schema.Types.ObjectId,
        ref:"chapter",
        required: [true, "Chapter ID is required"]
    },
    courseId:{
        type:Schema.Types.ObjectId,
        ref:"course",
        required: [true, "Course ID id Required"]
    },
    tags:[
        {
        type:String
        }
    ]
},{
    timestamps: true
})


export  default model<IVideo>("video",videoSchema)