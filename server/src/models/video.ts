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
    createdAt:{
        type:Date,
        default: Date.now
    },
    userId:{
        type:String
        // default : {"007"}
    },
    chapterId:{
        type:String
    },
    courseId:{
        type:String
    },
    tags:{
        type:Array
    }
},{
    timestamps: true
})


export  default model<IVideo>("video",videoSchema)