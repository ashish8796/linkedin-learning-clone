import answerBox from "../../models/answerBox";
import IAnswerBox from "../../types/answerBox";
import { Request, Response } from "express";
import questionSession from "../../models/questionSession";

export const getAnswers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const new_Answer = answerBox.find();
    res.status(200).json({ message: "all messages", Answers: new_Answer });
  } catch (error) {
    res.end();
    console.log(error);
  }
};
export const addAnswer = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<
      IAnswerBox,
      "answer" | "questionId" | "userId" | "courseId"
    >;
    const new_Answer = new answerBox({
      answer: body.answer,
      questionId: body.questionId,
      userId: body.userId,
      courseId: body.courseId,
    });
    const newAnswer: IAnswerBox = await new_Answer.save();
    const allAnswers: IAnswerBox[] = await answerBox.find({
      courseId: body.courseId,
    });
    await updateQuestionSession(body.questionId, newAnswer._id);
    //   .populate("questionId")
    //   .populate("courseId");
    res.status(202).json({
      message: "new Answer/ Reply is added",
      answer: newAnswer,
      allAnswers: allAnswers,
    });
  } catch (error) {
    res.end();
    console.log(error);
  }
};

export const getAnswersToQuestion = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      params: { id },
    } = req;
    const answers = answerBox.find({ questionId: id }).populate("questionId");

    res.status(200).json({ message: "answers to question", answers: answers });
  } catch (error) {
    console.log(error);
    res.end();
  }
};

export const getAnswersToCourse = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      params: { id },
    } = req;
    const answers = answerBox
      .find({ courseId: id })
      .populate("courseId")
      .populate("questionId");
    res
      .status(200)
      .json({ message: "the answers to that course", answers: answers });
  } catch (error) {
    console.log(error);
    res.end();
  }
};

const updateQuestionSession = async (QId: String | undefined, AId: String) => {
  try {
    let data = questionSession.updateOne(
      { _id: QId },
      { $push: { answers: { $each: [{ answer: AId }] } } }
    );
    console.log("updated the question collection", data);
  } catch (error) {
    console.log(error);
  }
};
