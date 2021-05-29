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
exports.deleteStudent = exports.getStudentId = exports.updateStudent = exports.addStudent = exports.getStudent = void 0;
const student_1 = __importDefault(require("../../models/student"));
const getStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield student_1.default.find();
        res.status(200).json({ message: "all the teachers", teachers: students });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getStudent = getStudent;
const addStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let body = req.body;
        const new_student = new student_1.default({
            firstName: body.firstName,
            lastName: body.lastName,
            qualification: body.qualification,
            savedCourseId: body.savedCourseId,
            interest: body.interest,
            description: body.description,
            startOfProgram: body.startOfProgram,
        });
        let newStudent = yield new_student.save();
        let allStudents = yield student_1.default.find();
        res.status(202).json({ message: "the student is added", student: newStudent, allStudents: allStudents });
    }
    catch (error) {
        res.end();
        console.log(error);
    }
});
exports.addStudent = addStudent;
const updateStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body } = req;
        console.log(body, id);
        const updatedStudent = yield student_1.default.findByIdAndUpdate({ _id: id }, body);
        // res.status(205).json({testing:"testing",blog: updatedBlog})
        const allStudents = yield student_1.default.find();
        res.status(202).json({ message: "new student as been added ", student: updatedStudent, teachers: allStudents });
        // console.log("new")
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateStudent = updateStudent;
const getStudentId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id } } = req;
        const students = yield student_1.default.findById({ _id: id });
        res.status(202).json({ message: "found", student: students });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getStudentId = getStudentId;
const deleteStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const delete_student = yield student_1.default.findByIdAndRemove(req.params.id);
        const allStudents = yield student_1.default.find();
        res.status(200).json({ message: "student Deleted", student: delete_student, teachers: allStudents });
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteStudent = deleteStudent;
