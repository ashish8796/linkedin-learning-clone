import { Response, Request } from "express";
import AWS from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";
import { v4 as uuid } from "uuid";
const path = require("path");
import IVideo from "../../types/video";
import Video from "../../models/video";
import process from "process";
import chapter from "../../models/chapter";
require("dotenv").config();

AWS.config.update({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

const s3 = new AWS.S3({
  apiVersion: "2012-10-17",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

let upload = (bucketName: any) =>
  multer({
    storage: multerS3({
      s3: s3,
      bucket: bucketName,
      metadata: (req, file, cb) => {
        cb(null, { fieldName: file.fieldname });
      },
      key: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, `${uuid()}_${ext}`);
      },
    }),
  });

interface MulterRequest extends Request {
  file: Express.MulterS3.File;
}

export const getVideo = async (req: Request, res: Response): Promise<void> => {
  try {
    const videos: IVideo[] = await Video.find();
    res.status(202).json({ videos });
  } catch (error) {
    console.log(error);
  }
};

export const addVideo = async (
  req: MulterRequest,
  res: Response
): Promise<void> => {
  try {
    const uploadVideo = upload(`linkden-learning/newVideos`).single("video");
    uploadVideo(req, res, async (err) => {
      const { course, chapter } = req.body;

      let body = req.body as Pick<
        IVideo,
        | "title"
        | "description"
        | "content"
        | "authorId"
        | "chapterId"
        | "courseId"
        | "tags"
        | "url"
      >;

      if (err) {
        return res.status(400).json({ success: false, message: err.message });
      }

      const video: IVideo = new Video({
        title: body.title,
        description: body.description,
        url: req.file.location,
        authorId: body.authorId,
        chapterId: body.chapterId,
        courseId: body.courseId,
        tags: body.tags,
        content: body.content,
      });

      const newVideo: IVideo = await video.save();
      const allVideos: IVideo[] = await Video.find();

      updateChapterWithVideoId(body.chapterId, newVideo._id);

      res
        .status(203)
        .json({
          message: "new Vide o as been added ",
          newLecture: newVideo,
          allLectures: allVideos,
        });
    });
  } catch (error) {
    res.end();
    console.log(error);
  }
};

export const updateVideo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    console.log(body, id);
    const updatedVideo: IVideo | null = await Video.findByIdAndUpdate(
      { _id: id },
      body
    );
    // res.status(205).json({testing:"testing",blog: updatedBlog})
    const allVideos: IVideo[] = await Video.find();

    res.status(202).json({
      message: "new Video as been added ",
      video: updatedVideo,
      videos: allVideos,
    });
    // console.log("new")
  } catch (error) {
    console.log(error);
  }
};

export const getVideoId = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      params: { id },
    } = req;
    const video: IVideo | null = await Video.findById({ _id: id });
    res.status(202).json({ message: "found", lecture: video });
  } catch (error) {
    console.log(error);
  }
};

export const deleteVideo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const delete_video: IVideo | null = await Video.findByIdAndRemove(
      req.params.id
    );

    const allVideos: IVideo[] = await Video.find();
    res
      .status(200)
      .json({
        message: "Video Deleted",
        deleted_lecture: delete_video,
        allLectures: allVideos,
      });
  } catch (error) {
    console.log(error);
  }
};

const updateChapterWithVideoId = async (
  id: String | undefined,
  VId: String
) => {
  try {
    console.log(id, VId);
    await chapter.updateOne(
      { _id: id },
      {
        $push: {
          videoIds: {
            $each: [{ videoId: VId }],
            $sort: { updatedAt: -1 },
          },
        },
      }
    );
    console.log(await chapter.find({ _id: id }));
    // console.log("course data updated", data);
  } catch (error) {
    console.log(error);
  }
};
