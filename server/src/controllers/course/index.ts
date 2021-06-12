import {Response, Request} from 'express';
import ICourse from '../../types/course';
import course from '../../models/course';
// import { isTryStatement } from 'typescript';



export const getCourse = async (req:Request, res:Response):Promise<void>=>{
    try{
        const courses :ICourse[] = await course.find()
        res.status(202).json({courses})
    }catch(error){
        console.log(error)
    }
}

export const addCourse =async (req:Request, res:Response) :Promise<void>=>{
    try {
        // res.status(203).json({"name":"kota"})
        // const blog = await course.create(req.body)
        let body=req.body as Pick<ICourse, "title"|"description" | "authorId" | "tags"|"questionBlog"| "Image"|"blogId">
        console.log(body)
        const new_course:ICourse =new course({
            title:body.title,
            description:body.description,
            // createdAt:body.createdAt,
            authorId:body.authorId,
            tags:body.tags,
            questionBlog:body.questionBlog,
            blogId:body.blogId,
            Image:body.Image,
            // questionSession:body.questionSession,
            // chapterIds:body.chapterIds,
        })
        console.log(course)
        const newCourse : ICourse =await new_course.save();
        const allCourses:ICourse[]= await course.find()
        
        res.status(203).json({message: "new course as been added ", course: newCourse ,courses:allCourses})
    } catch (error) {
        res.end()
        console.log(error)
    }   
}


export const updateCourse=async (req: Request, res: Response):Promise<void>=>{
    try{
        
        const {params:{id}, body} =req;
        console.log(body,id)
        const updatedCourse:ICourse|null = await course.findByIdAndUpdate({_id:id},body)
        // res.status(205).json({testing:"testing",blog: updatedBlog})
        const allCourses:ICourse[]= await course.find()
        
        res.status(202).json({message: "new course as been added ", blog: updatedCourse ,blogs:allCourses})
        // console.log("new")
        
    }catch (error) {
        console.log(error)
    }
}
export const updateQuestion=async (req: Request, res: Response):Promise<void>=>{
    try{
        
        const {params:{id}, body} =req;
        console.log(body,id)
        const updatedQuestion:ICourse|null = await course.findByIdAndUpdate({_id:id},body)
        // res.status(205).json({testing:"testing",blog: updatedBlog})
        const allCourses:ICourse[]= await course.find()
        
        res.status(202).json({message: "new question as been added ", blog: updatedQuestion ,blogs:allCourses})
        // console.log("new")
        
    }catch (error) {
        console.log(error)
    }
}

export const getCourseId = async(req: Request, res: Response): Promise<void>=> {
    try {
        const {params:{id}} =req;
        const courses:ICourse |null = await course.findById({_id:id})
        res.status(202).json({message:"found",blog:courses})
    } catch (error) {
        console.log(error)
    }
}


export const deleteCourse = async (req: Request, res: Response):Promise<void>=> {
    try{
        const delete_course:ICourse|null = await course.findByIdAndRemove(req.params.id)
        const allCourses:ICourse[]= await course.find()
        res.status(200).json({message:"course Deleted" ,blog:delete_course,blogs:allCourses})
        
    }catch (error) {
        console.log(error)
    }
}