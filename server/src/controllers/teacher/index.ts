import { Request, Response } from "express";
import ITeacher from "../../types/teacher";
import teacher from "../../models/teacher"
import user from '../../models/user'

export const getTeacher = async (req: Request, res: Response): Promise<void> => {
    try {
        const teachers = await user.find({ "flag": true });
        res.status(200).json({ message: "all the teachers", teachers: teachers })
    } catch (error) {
        console.log(error)
    }
}

export const addTeacher = async (req: Request, res: Response): Promise<void> => {
    try {
        let body = req.body as Pick<ITeacher, "firstName" | "lastName" | "qualification" | "description" | "DOB" | "specializations" | "Image" | "linkedInProfile">;
        const new_teacher: ITeacher = new teacher({
            firstName: body.firstName,
            lastName: body.lastName,
            qualification: body.qualification,
            DOB: body.DOB,
            specializations: body.specializations,
            description: body.description,
            Image: body.Image,
            linkedInProfile: body.linkedInProfile
        })

        let newTeacher: ITeacher = await new_teacher.save();
        let allTeachers: ITeacher[] = await teacher.find();
        res.status(202).json({ message: "the teacher is added", teacher: newTeacher, allTeachers: allTeachers });
    } catch (error) {
        res.end()
        console.log(error)
    }
}

export const updateTeacher = async (req: Request, res: Response): Promise<void> => {
    try {

        const { params: { id }, body } = req;
        console.log(body, id)
        const updatedTeacher: ITeacher | null = await teacher.findByIdAndUpdate({ _id: id }, body)
        // res.status(205).json({testing:"testing",blog: updatedBlog})
        const allTeachers: ITeacher[] = await teacher.find()

        res.status(202).json({ message: "new teacher as been added ", teacher: updatedTeacher, teachers: allTeachers })
        // console.log("new")

    } catch (error) {
        console.log(error)
    }
}

export const getTeacherId = async (req: Request, res: Response): Promise<void> => {
    try {
        const { params: { id } } = req;
        const teachers: ITeacher | null = await teacher.findById({ _id: id })
        res.status(202).json({ message: "found", teacher: teachers })
    } catch (error) {
        console.log(error)
    }
}


export const deleteTeacher = async (req: Request, res: Response): Promise<void> => {
    try {
        const delete_teacher: ITeacher | null = await teacher.findByIdAndRemove(req.params.id)
        const allTeachers: ITeacher[] = await teacher.find()
        res.status(200).json({ message: "teacher Deleted", teacher: delete_teacher, teachers: allTeachers })

    } catch (error) {
        console.log(error)
    }
}