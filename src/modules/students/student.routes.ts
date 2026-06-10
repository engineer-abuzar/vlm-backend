import express from "express";
import asyncHandler from "express-async-handler";
import {createStudentProfile,getStudentProfile,updateStudentProfile} from '../students/student.controller.ts'
const studentRouter = express.Router();

studentRouter.post('/profile',asyncHandler(createStudentProfile))
studentRouter.get('/profile',asyncHandler(getStudentProfile))
studentRouter.patch('/profile',asyncHandler(updateStudentProfile))

export default studentRouter