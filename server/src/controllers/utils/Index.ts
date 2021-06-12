import user from "../../models/user";
import express from 'express'

export const checkMailId = async ( req: express.Request, res: express.Response):Promise<void> =>{
    try{
        const {mail}= req.body;
         const data=await user.find({emailId:mail})

         if(data.length==0){
             res.status(200).send({message:"user doesn't exist"})
            }
            res.status(203).send({message:"user exist"})
            res.end()
    }catch(err){
        console.log(err);
        res.end()
    }
}