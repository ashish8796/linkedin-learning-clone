import IQuestionSession from "../types/questionSession";
import {Schema,model} from 'mongoose';

const questionSessionSchema:Schema = new Schema ({
    courseId:{
        type:Schema.Types.ObjectId,
        ref:"course",
        required:[true,"course Id"]
    },
    questions:{
        type:String
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:"user",
        required:[true,"user Id is needed"]
    }
},{
    timestamps: true
})

export default model<IQuestionSession>("questionSession",questionSessionSchema)

