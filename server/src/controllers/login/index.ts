import  {Request, Response} from "express";
import { checkPassword } from "../utils/Index";

export const loginUser = async (req: Request, res: Response):Promise<void>=>{
    const email = req.body.emailId;
    const password = req.body.password;

    const userStatus = await checkPassword(email, password);
    if(userStatus){
        res.status(200).json('access granted')
    }
    else {
        res.status(401).json('access denied')
    }
}