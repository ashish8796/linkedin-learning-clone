import IChapter from "../types/chapter";
import {Schema,model} from "mongoose";

const chapterSchema:Schema = new Schema ({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    content:{
        type:Object,
    },
    videoId:{
        type:Array,
    },
    courseId:{
        type:String
    },
    authorId:{
        type:String
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
},{
    timestamps:true
})


export default model<IChapter>("chapter",chapterSchema) 