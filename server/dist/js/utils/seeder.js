"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const video_1 = __importDefault(require("../models/video"));
const mongoose_1 = __importDefault(require("mongoose"));
const process_1 = __importDefault(require("process"));
const videos = require("../data/videos");
mongoose_1.default.connect("mongodb://localhost:27017/oyo-clone", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});
const seedVideos = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield video_1.default.deleteMany();
        console.log("delete many videos");
        yield video_1.default.insertMany(videos);
        process_1.default.exit();
    }
    catch (error) {
        console.log(error.message);
        process_1.default.exit();
    }
});
