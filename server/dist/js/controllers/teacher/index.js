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
exports.deleteTeacher = exports.getTeacherId = exports.updateTeacher = exports.addTeacher = exports.getTeacher = void 0;
const teacher_1 = __importDefault(require("../../models/teacher"));
const getTeacher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const teachers = yield teacher_1.default.find().populate("uniqueId");
        // .populate("uniqueId");
        res.status(200).json({ message: "all the teachers", teachers: teachers });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getTeacher = getTeacher;
const addTeacher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let body = req.body;
        const new_teacher = new teacher_1.default({
            qualification: body.qualification,
            DOB: body.DOB,
            specializations: body.specializations,
            description: body.description,
            Image: body.Image,
            uniqueId: body.uniqueId,
        });
        let newTeacher = yield new_teacher.save();
        let allTeachers = yield teacher_1.default.find().populate("uniqueId");
        res.status(202).json({
            message: "the teacher is added",
            teacher: newTeacher,
            allTeachers: allTeachers,
        });
    }
    catch (error) {
        res.end();
        console.log(error);
    }
});
exports.addTeacher = addTeacher;
const updateTeacher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        console.log(body, id);
        const updatedTeacher = yield teacher_1.default
            .findByIdAndUpdate({ _id: id }, body)
            .populate("uniqueId");
        // res.status(205).json({testing:"testing",blog: updatedBlog})
        const allTeachers = yield teacher_1.default.find();
        res.status(202).json({
            message: "new teacher as been added ",
            teacher: updatedTeacher,
            teachers: allTeachers,
        });
        // console.log("new")
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateTeacher = updateTeacher;
const getTeacherId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, } = req;
        const teachers = yield teacher_1.default
            .findById({ _id: id })
            .populate("uniqueId");
        res.status(202).json({ message: "found", teacher: teachers });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getTeacherId = getTeacherId;
const deleteTeacher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const delete_teacher = yield teacher_1.default.findByIdAndRemove(req.params.id);
        const allTeachers = yield teacher_1.default.find();
        res.status(200).json({
            message: "teacher Deleted",
            teacher: delete_teacher,
            teachers: allTeachers,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteTeacher = deleteTeacher;
