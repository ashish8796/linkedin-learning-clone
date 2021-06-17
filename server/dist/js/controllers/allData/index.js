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
exports.getAllData = void 0;
const course_1 = __importDefault(require("../../models/course"));
const user_1 = __importDefault(require("../../models/user"));
const getAllData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const search = req.params.search;
    console.log(typeof search);
    console.log(search);
    const userResult = yield user_1.default.find({ $text: { $search: search } });
    const courseResult = yield course_1.default.find({ $text: { $search: search } });
    res.status(200).json({ users: userResult, course: courseResult });
});
exports.getAllData = getAllData;
