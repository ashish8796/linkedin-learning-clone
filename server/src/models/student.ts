import IStudent from "../types/student";
import {Schema,model} from "mongoose";

const studentSchema:Schema = new Schema ({
    firstName:{
        type:String,
        required:[true, "Enter First Name"]
    },
    lastName:{
        type:String,
        required:[true, "Enter Second Name"]
    },
    description:{
        type:String,
        required:[true, "Enter Description"]
    },
    qualification:{
        type:Array,
        required:[true, "qualification"]
    },
    startOfProgram:{
        type:Date,
    },      
    interest:{ 
        type:Array
    },
    savedCourseId:{
        type:Array
    }
},{
    timestamps: true
})

export default model<IStudent>("student",studentSchema)