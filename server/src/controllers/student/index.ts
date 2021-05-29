import IStudent from "../../types/student";
import  {Request, Response} from "express";
import student from '../../models/student';

export const getStudent = async (req: Request, res: Response):Promise<void>=>{
    try {
        const students : IStudent[] = await student.find();
        res.status(200).json({message:"all the teachers", teachers:students})
    } catch (error) {
        console.log(error)
    }
}

export const addStudent =async (req: Request, res: Response) : Promise<void>=> {
    try {
        let body= req.body as Pick<IStudent, "firstName"|"lastName"|"qualification"|"description"|"savedCourseId"|"interest"|"startOfProgram">;
        const new_student:IStudent= new  student({
            firstName: body.firstName,
            lastName: body.lastName,
            qualification: body.qualification,
            savedCourseId: body.savedCourseId,
            interest: body.interest,
            description: body.description,
            startOfProgram: body.startOfProgram,
        })
        let newStudent :IStudent= await new_student.save();
        let allStudents:IStudent[]= await student.find();
        res.status(202).json({message:"the student is added", student:newStudent, allStudents:allStudents});
    } catch (error) {
        res.end()
        console.log(error)   
    }
}

export const updateStudent=async (req: Request, res: Response):Promise<void>=>{
    try{
        
        const {params:{id}, body} =req;
        console.log(body,id)
        const updatedStudent:IStudent|null = await student.findByIdAndUpdate({_id:id},body)
        // res.status(205).json({testing:"testing",blog: updatedBlog})
        const allStudents:IStudent[]= await student.find()
        
        res.status(202).json({message: "new student as been added ", student: updatedStudent ,teachers:allStudents})
        // console.log("new")
        
    }catch (error) {
        console.log(error)
    }
}

export const getStudentId = async(req: Request, res: Response): Promise<void>=> {
    try {
        const {params:{id}} =req;
        const students:IStudent |null = await student.findById({_id:id})
        res.status(202).json({message:"found",student:students})
    } catch (error) {
        console.log(error)
    }
}


export const deleteStudent = async (req: Request, res: Response):Promise<void>=> {
    try{
        const delete_student:IStudent|null = await student.findByIdAndRemove(req.params.id)
        const allStudents:IStudent[]= await student.find()
        res.status(200).json({message:"student Deleted" ,student:delete_student,teachers:allStudents})
        
    }catch (error) {
        console.log(error)
    }
}