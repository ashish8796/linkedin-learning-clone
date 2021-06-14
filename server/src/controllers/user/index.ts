import IUser from "../../types/user";
import { Request, Response } from "express";
import user from "../../models/user";
import { checkMailId } from "../utils/Index";

export const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const students: IUser[] = await user.find();
    res.status(200).json({ message: "all the users", users: students });
  } catch (error) {
    console.log(error);
  }
};

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
    let userExist = await checkMailId(body.emailId);
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
      res.status(202).json({
        message: "the user is added",
        user: newStudent,
        allStudents: allStudents,
      });
    }
    res.status(203).json({ message: "user already exists" });
  } catch (error) {
    res.end();
    console.log(error);
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
    console.log(body, id);
    const updatedStudent: IUser | null = await user.findByIdAndUpdate(
      { _id: id },
      body
    );
    // res.status(205).json({testing:"testing",blog: updatedBlog})
    const allStudents: IUser[] = await user.find();

    res.status(202).json({
      message: "new user as been added ",
      user: updatedStudent,
      teachers: allStudents,
    });
    // console.log("new")
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
    res.status(202).json({ message: "found", user: students });
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
