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
exports.deleteUser = exports.getUserEmailId = exports.getUserId = exports.updateUser = exports.addUser = exports.getIndividualUser = exports.getUser = void 0;
const user_1 = __importDefault(require("../../models/user"));
const Index_1 = require("../utils/Index");
require("dotenv").config();
// const encrypt = require("mongoose-encryption");
// let secret = process.env.SECRET;
// user.plugin(encrypt, { secret: secret, encryptedFields: ["password"] });
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield user_1.default.find();
        res.status(200).json({ message: "all the users", users: students });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getUser = getUser;
const getIndividualUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const userDetail = yield user_1.default.findOne({ _id: id });
        res.status(200).json(userDetail);
    }
    catch (err) {
        console.log(err);
    }
});
exports.getIndividualUser = getIndividualUser;
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let body = req.body;
        console.log(body.emailId, "back end");
        let userExist = yield Index_1.checkMailId(body.emailId);
        console.log(userExist);
        if (!userExist) {
            const new_student = new user_1.default({
                firstName: body.firstName,
                lastName: body.lastName,
                qualification: body.qualification || [],
                savedCourseId: body.savedCourseId || [],
                interest: body.interests || [],
                flag: body.flag,
                emailId: body.emailId,
                password: body.password,
                // Image:body.Image,
                startOfProgram: body.startOfProgram || null,
            });
            let newStudent = yield new_student.save();
            let allStudents = yield user_1.default.find();
            res.status(200).json({
                message: "the user is added",
                user: newStudent,
                allStudents: allStudents,
            });
        }
        res.status(201).json({ message: "user already exists" });
    }
    catch (error) {
        console.log(error);
        // res.end();
    }
});
exports.addUser = addUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        // console.log(body, id);
        const updatedStudent = yield user_1.default.findByIdAndUpdate({ _id: id }, body, function (err, result) {
            if (err) {
                res.status(400).json({ message: "update failed", error: err });
            }
            else {
                res.status(200).json({ message: "user updated", result: result });
            }
        });
        console.log(updatedStudent);
        // res.status(200)
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateUser = updateUser;
const getUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, } = req;
        const students = yield user_1.default.findById({ _id: id });
        res.status(200).json({ message: "found", user: students });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getUserId = getUserId;
const getUserEmailId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const emailId = req.params.emailId;
        const students = yield user_1.default.findOne({ emailId: emailId });
        res.status(200).json({ message: "found", user: students });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getUserEmailId = getUserEmailId;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const delete_student = yield user_1.default.findByIdAndRemove(req.params.id);
        const allStudents = yield user_1.default.find();
        res.status(200).json({
            message: "user Deleted",
            user: delete_student,
            teachers: allStudents,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteUser = deleteUser;
