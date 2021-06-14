"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadProfilePic = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const multer_1 = __importDefault(require("multer"));
const multer_s3_1 = __importDefault(require("multer-s3"));
const path_1 = __importDefault(require("path"));
const uuid_1 = require("uuid");
aws_sdk_1.default.config.update({
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
    },
});
const s3 = new aws_sdk_1.default.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});
const uploadProfilePic = (bucketName) => {
    console.log(bucketName);
    return multer_1.default({
        storage: multer_s3_1.default({
            s3: s3,
            bucket: bucketName,
            metadata: (req, file, cb) => {
                console.log({ file });
                cb(null, { fieldName: file.fieldname });
            },
            key: (req, file, cb) => {
                const ext = path_1.default.extname(file.originalname);
                cb(null, `${uuid_1.v4()}_${ext}`);
            }
        })
    });
};
exports.uploadProfilePic = uploadProfilePic;
