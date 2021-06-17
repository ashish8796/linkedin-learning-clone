import { Response, Request } from "express";
import ICourse from "../../types/course";
import course from "../../models/course";
import answerBox from "../../models/answerBox";
import { uploadProfilePic } from "../utils/storeDataInAws";
// userSchema.plugin(encrypt, { secret: secret, encryptedFields: ["password"] });

interface MulterRequest extends Request {
  file: Express.MulterS3.File;
}

export const getCourse = async (req: Request, res: Response): Promise<void> => {
  try {
    const courses: ICourse[] = await course
      .find()
      // .populate({ path: "questionBlog", populate: { path: "question" } });
      // .populate("authorId");
      .populate({
        path: "authorId",
        populate: { path: "authorId uniqueId", select: "firstName lastName" },
      });
    // .select();
    // .populate({
    //   path: "questionBlog",
    //   populate: { path: "question", populate: { path: "userId" } },
    // })
    // .populate({
    //   path: "questionBlog",
    //   populate: {
    //     path: "question",
    //     populate: {
    //       path: "userId answers",
    //       populate: { path: "answer userId" },
    //     },
    //   },
    // });
    await res.status(202).json({ courses: courses });
  } catch (error) {
    console.log(error);
  }
};

export const getCourseByTeacherId = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { teacherId } = req.params;

    const courses = await course.find({ authorId: teacherId }).exec();
  } catch (error) {}
};

export const addCourse = async (
  req: MulterRequest,
  res: Response
): Promise<void> => {
  const uploadCourseThumbnails = uploadProfilePic(
    `linkden-learning/course-thumbnails/`
  ).single("image");

  uploadCourseThumbnails(req, res, async (err) => {
    try {
      // res.status(203).json({"name":"kota"})
      // const blog = await course.create(req.body)
      console.log(req.file.location);

      let body = req.body as Pick<
        ICourse,
        | "title"
        | "description"
        | "authorId"
        | "tags"
        | "questionBlog"
        | "image"
        | "blogId"
      >;
      console.log(body);
      const new_course: ICourse = new course({
        title: body.title,
        description: body.description,
        // createdAt:body.createdAt,
        authorId: body.authorId,
        tags: body.tags,
        questionBlog: body.questionBlog,
        blogId: body.blogId,
        image: req.file.location,
        // questionSession:body.questionSession,
        // chapterIds:body.chapterIds,
      });
      console.log(course);
      const newCourse: ICourse = await new_course.save();
      const allCourses: ICourse[] = await course.find();
      // let CommentBox: any = [];
      // allCourses.map((course) => {
      //   let { _id } = course;
      //   CommentBox.push(
      //     answerBox
      //       .find({ courseId: _id })
      //       .populate("questionId")
      //       .populate("userId")
      //   );
      // });
      res.status(203).json({
        message: "new course as been added ",
        course: newCourse,
        courses: allCourses,
        //   CommentBox: CommentBox,
      });
    } catch (error) {
      res.end();
      console.log(error);
    }
  });
};

export const updateCourse = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    console.log(body, id);
    const updatedCourse: ICourse | null = await course.findByIdAndUpdate(
      { _id: id },
      body
    );
    // res.status(205).json({testing:"testing",blog: updatedBlog})
    const allCourses: ICourse[] = await course.find();

    res.status(202).json({
      message: "new course as been added ",
      blog: updatedCourse,
      blogs: allCourses,
    });
    // console.log("new")
  } catch (error) {
    console.log(error);
  }
};
export const updateQuestion = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    console.log(body, id);
    const updatedQuestion: ICourse | null = await course.findByIdAndUpdate(
      { _id: id },
      body
    );
    // res.status(205).json({testing:"testing",blog: updatedBlog})
    const allCourses: ICourse[] = await course.find();

    res.status(202).json({
      message: "new question as been added ",
      blog: updatedQuestion,
      blogs: allCourses,
    });
    // console.log("new")
  } catch (error) {
    console.log(error);
  }
};

export const getCourseId = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      params: { id },
    } = req;
    const courses: ICourse | null = await course
      .findById({ _id: id })
      .populate({ path: "questionBlog", populate: { path: "question" } })
      .populate({
        path: "authorId",
        populate: { path: "authorId uniqueId", select: "firstName lastName" },
      });
    // let CommentBox: any = [];
    // // allCourses.map((course) => {
    // //   let { _id } = course;
    // CommentBox.push(
    //   answerBox.find({ courseId: id }).populate("questionId").populate("userId")
    // );
    // });
    res.status(200).json({ message: "found", course: courses });
  } catch (error) {
    res.end();
    console.log(error);
  }
};

export const deleteCourse = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const delete_course: ICourse | null = await course.findByIdAndRemove(
      req.params.id
    );
    const allCourses: ICourse[] = await course.find();
    res.status(200).json({
      message: "course Deleted",
      blog: delete_course,
      blogs: allCourses,
    });
  } catch (error) {
    console.log(error);
  }
};

const getComments = async (id: String) => {
  try {
    let data = await answerBox
      .find({ courseId: id })
      .populate("questionId")
      .populate("userId");
    console.log(data);
    return await data;
  } catch (error) {
    console.log(error);
  }
};
