import ITeacher from '../types/teacher';
import {Schema, model} from "mongoose";

const teacherSchema:Schema = new Schema ({
    firstName:{
        type:String,
        required:[true,"Please enter first name"]
    },
    lastName:{
        type:String,
        required:[true,"Please enter last name"]
    },
    qualification:{
        type:[String],
    },
    description:{
        type:String
    },
    DOB:{ 
        type:Date,
    },
    specializations:{
        type:[String],
    }
},{
    timestamps: true
})

export default model<ITeacher>("teacher",teacherSchema)