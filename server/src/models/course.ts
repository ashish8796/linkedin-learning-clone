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
        type:String,
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
    // questionSession:{
    //     type:Array,
    //     default:undefined
    // },
    QnA:[
        {
            userId:{
                type:String,
            },
            question:{
                type:String
            },
            answers:[
                {
                    userId:{
                        type:String
                    },
                    answer:{
                        type:String
                    }   
                }
            ]
        }
    ]
    // videosId:{
    //     type:Array
    // }
},{
    timestamps: true
})


export default model<ICourse>("course",courseSchema)