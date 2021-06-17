import AWS from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";
import path from "path";
import { v4 as uuid } from "uuid";
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


// console.log({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
// })

export const uploadProfilePic = (bucketName: string) => {
  return multer({
    storage: multerS3({
      s3: s3,
      bucket: bucketName,

      metadata: (req, file, cb) => {
        cb(null, { fieldName: file.fieldname });
      },

      key: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, `${uuid()}_${ext}`);
      }
    })
  });
}

