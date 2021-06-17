import { Request, Response } from 'express';
import course from "../../models/course";
import user from "../../models/user";

export const getAllData = async (req: Request, res: Response)=>{
    const search = req.params.search;
    console.log(typeof search)
    console.log(search)
    const userResult = await user.find({$text: {$search: search}});
    const courseResult = await course.find({$text: {$search: search}});
    res.status(200).json({users: userResult, course: courseResult});
};