import IQuestionSession from "../types/questionSession";
import {Schema,model} from 'mongoose';

const questionSessionSchema:Schema = new Schema ({
    courseId:{
        type:String,
    },
    questions:{
        type:String
    },
    userId:{
        type:String
    }
},{
    timestamps: true
})

export default model<IQuestionSession>("QnA",questionSessionSchema)

