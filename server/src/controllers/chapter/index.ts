import { Response, Request } from "express";
import IChapter from "../../types/chapter";
import chapter from "../../models/chapter";
import video from "../../models/video";
// import { isTryStatement } from 'typescript';

export const getChapter = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const chapters: IChapter[] = await chapter.find();
    res.status(202).json({ chapters });
  } catch (error) {
    console.log(error);
  }
};

export const addChapter = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // res.status(203).json({"name":"kota"})
    // const blog = await chapter.create(req.body)
    let body = req.body as Pick<
      IChapter,
      | "title"
      | "description"
      | "createdAt"
      | "authorId"
      | "courseId"
      | "content"
      | "videosId"
    >;
    console.log(body);
    const new_chapter: IChapter = new chapter({
      title: body.title,
      description: body.description,
      createdAt: body.createdAt,
      authorId: body.authorId,
      videosId: body.videosId,
      courseId: body.courseId,
      content: body.content,
    });
    console.log(chapter);
    const newChapter: IChapter = await new_chapter.save();
    const allChapter: IChapter[] = await chapter.find();

    res.status(201).json({
      message: "new chapter as been added ",
      chapter: newChapter,
      chapters: allChapter,
    });
  } catch (error) {
    res.end();
    console.log(error);
  }
};

export const updateChapter = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    console.log(body, id);
    const updatedChapter: IChapter | null = await chapter.findByIdAndUpdate(
      { _id: id },
      body
    );
    // res.status(205).json({testing:"testing",blog: updatedBlog})
    const allChapters: IChapter[] = await chapter.find();

    res.status(202).json({
      message: "new chapter as been added ",
      chapter: updatedChapter,
      chapters: allChapters,
    });
    // console.log("new")
  } catch (error) {
    console.log(error);
  }
};

export const getChapterId = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      params: { id },
    } = req;
    const chapters: IChapter | null = await chapter.findById({ _id: id });
    res.status(202).json({ message: "found", chapters: chapters });
  } catch (error) {
    console.log(error);
  }
};

export const deleteChapter = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const delete_chapter: IChapter | null = await chapter.findByIdAndRemove(
      req.params.id
    );
    const allChapters: IChapter[] = await chapter.find();
    res.status(200).json({
      message: "chapter Deleted",
      chapter: delete_chapter,
      chapters: allChapters,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getChapterByCourseId = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      params: { id },
    } = req;
    let chapterWithId = await chapter.find({ courseId: id });
    let courseWithId = await video
      .find({ courseId: id })
      .populate("chapterId")
      .populate("courseId");
    res.status(200).json({
      message: "the data of the course",
      chapter: chapterWithId,
      coursePopulate: courseWithId,
    });
  } catch (error) {}
};
