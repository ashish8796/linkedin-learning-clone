import questionSession from "../../models/questionSession";
import IQuestionSession from "../../types/questionSession";
import { Request, Response } from "express";
import course from "../../models/course";

export const addQuestion = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let body = req.body as Pick<
      IQuestionSession,
      "courseId" | "question" | "userId"
    >;
    const new_Question: IQuestionSession = new questionSession({
      courseId: body.courseId,
      question: body.question,
      userId: body.userId,
    });
    let newQuestion: IQuestionSession = await new_Question.save();
    updateCourseWithQuestionId(body.courseId, newQuestion._id);
    let allQuestions: IQuestionSession[] = await questionSession.find({
      courseId: body.courseId,
    });
    //   .populate("courseId")
    //   .populate("userId");

    res.status(202).json({
      message: "the new Question is added",
      question: newQuestion,
      allQuestions: allQuestions,
    });
  } catch (error) {
    res.end();
    console.log(error);
  }
};

const updateCourseWithQuestionId = async (
  id: String | undefined,
  QId: String
) => {
  try {
    console.log(id, QId);
    course.updateOne(
      { _id: id },
      { $push: { questionBlog: { $each: [QId] } } }
    );
    // console.log("course data updated", data);
  } catch (error) {
    console.log(error);
  }
};
