import IAnswerBox from "../types/answerBox";
import {Schema,model} from "mongoose";

const answerBox :Schema = new Schema({
    answer:{
        type:String,
        required:[true, "answer required"]
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:"student",
        required:[true, " user Id"]
    },
    questionId:{
        type:Schema.Types.ObjectId,
        ref:"questionSession",
        required:[true, "question Id is true"]
    }
},{
    timestamps: true
})

export default  model<IAnswerBox>("answerBox",answerBox)