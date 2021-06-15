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
    await course.updateOne(
      { _id: id },
      {
        $push: {
          questionBlog: {
            $each: [{ question: QId }],
            $sort: { updatedAt: -1 },
          },
        },
      }
    );
    console.log(await course.find({ _id: id }));
    // console.log("course data updated", data);
  } catch (error) {
    console.log(error);
  }
};

export const getQnAWithCourseId = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      params: { id },
    } = req;
    let data = await questionSession
      .find({ courseId: id })
      .populate({
        path: "userId answers",
        select: "firstName lastName question",
        populate: {
          path: "answer",
          populate: { path: "userId", select: "firstName lastName" },
        },
      })
      .select({ firstName: 1, lastName: 1, question: 1 })
      .exec();
    res
      .status(200)
      .json({ message: "the Course with Question and answer", QNA: data });
  } catch (error) {
    res.end();
    console.log(error);
  }
};

// const deleteQuestionAnswer = async(res:)
