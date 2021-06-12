import IUser from "../types/user";
import {Schema,model} from "mongoose";

const userSchema:Schema = new Schema ({
    firstName:{
        type:String,
        required:[true, "Enter First Name"]
    },
    lastName:{
        type:String,
        required:[true, "Enter Second Name"]
    },
    qualification:{
        type:Array,
        required:[true, "qualification"]
    },
    //["Ph.D","M.tech"]
    startOfProgram:{
        type:Date,
    },
          
    interests:{ 
        type:Array
    },
    savedCourseId:{
        type:Array
    },
    emailId:{
        type: String,
    },
    password:{
        type: String,
    },
    Image:[
        {
            url:{
                type:String
            },
            alt:{
                type:String
            }
        }
    ],
    flag:{
        type: Boolean,
        default:false
    }
},{
    timestamps: true
})

export default model<IUser>("user",userSchema)