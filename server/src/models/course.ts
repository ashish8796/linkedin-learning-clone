// import ICourse from "../types/course";
import  {model, Schema} from 'mongoose';
import { isStringTextContainingNode } from 'typescript';
import ICourse from "../types/course";
// import QnA from "./questionSession"
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
        type:Schema.Types.ObjectId,
        ref:"teacher",
        required:[true,"enter Teacher/ Author Id"]
    },
    Image:[
        {
            url:{
                type:String,
                required:[true,"need the url"]
            },
            alt:{
                type:String,
            }
        }
    ],
    blogId:{
        type:Schema.Types.ObjectId,
        ref:"blog"
    },
    questionBlog:[
        {
            question:{
                type:Schema.Types.ObjectId,
                ref:"questionSession"
            }
        }
    ]
},{
    timestamps: true
})


export default model<ICourse>("course",courseSchema)