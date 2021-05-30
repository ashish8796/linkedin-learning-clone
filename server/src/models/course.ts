// import ICourse from "../types/course";
import  {model, Schema} from 'mongoose';
import ICourse from "../types/course";
import QnA from "./questionSession"
const courseSchema :Schema = new Schema ({
    title:{
        type:String,
        required:[true,"Please Enter title"]
    },
    description:{
        type:String,
        required:[true,"enter description"]
    },
    tags:{
        type:Array,
    },
    authorId:{
        type:String,
    },
    questionSession:{
        type:Array,
        default:undefined
    }
},{
    timestamps: true
})


export default model<ICourse>("course",courseSchema)