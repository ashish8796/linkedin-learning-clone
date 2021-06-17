import IUser from "../../types/user";
import { Request, Response } from "express";
import user from "../../models/user";
import { checkMailId } from "../utils/Index";
require("dotenv").config();
// const encrypt = require("mongoose-encryption");

// let secret = process.env.SECRET;

// user.plugin(encrypt, { secret: secret, encryptedFields: ["password"] });

export const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const students: IUser[] = await user.find();
    res.status(200).json({ message: "all the users", users: students });
  } catch (error) {
    console.log(error);
  }
};

export const getIndividualUser = async(req:Request, res: Response): Promise<void> =>{
  const id = req.params.id;
  try {
    const userDetail: any = await user.findOne({_id: id});
    res.status(200).json(userDetail);
  }
  catch (err) {
    console.log(err);
  }
}

export const addUser = async (req: Request, res: Response): Promise<void> => {
  try {
    let body = req.body as Pick<
      IUser,
      | "firstName"
      | "lastName"
      | "qualification"
      | "savedCourseId"
      | "interests"
      | "startOfProgram"
      | "emailId"
      | "password"
      | "Image"
      | "flag"
    >;
    console.log(body.emailId, "back end");
    let userExist = await checkMailId(body.emailId);
    console.log(userExist);
    if (!userExist) {
      const new_student: IUser = new user({
        firstName: body.firstName,
        lastName: body.lastName,
        qualification: body.qualification || [],
        savedCourseId: body.savedCourseId || [],
        interest: body.interests || [],
        flag: body.flag,
        emailId: body.emailId,
        password: body.password,
        // Image:body.Image,
        startOfProgram: body.startOfProgram || null,
      });
      let newStudent: IUser = await new_student.save();
      let allStudents: IUser[] = await user.find();
      res.status(200).json({
        message: "the user is added",
        user: newStudent,
        allStudents: allStudents,
      });
    }
    res.status(201).json({ message: "user already exists" });
  } catch (error) {
    console.log(error);
    // res.end();
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    // console.log(body, id);
    const updatedStudent: IUser | null = await user.findByIdAndUpdate(
      { _id: id },
      body,
      function (err, result) {
        if (err) {
          res.status(400).json({ message: "update failed", error: err });
        } else {
          res.status(200).json({ message: "user updated", result: result });
        }
      }
    );
    console.log(updatedStudent);
    // res.status(200)
  } catch (error) {
    console.log(error);
  }
};

export const getUserId = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
    } = req;
    const students: IUser | null = await user.findById({ _id: id });
    res.status(200).json({ message: "found", user: students });
  } catch (error) {
    console.log(error);
  }
};

export const getUserEmailId = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const emailId = req.params.emailId;
    const students = await user.findOne({ emailId: emailId });
    res.status(200).json({ message: "found", user: students });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const delete_student: IUser | null = await user.findByIdAndRemove(
      req.params.id
    );
    const allStudents: IUser[] = await user.find();
    res.status(200).json({
      message: "user Deleted",
      user: delete_student,
      teachers: allStudents,
    });
  } catch (error) {
    console.log(error);
  }
};
