import express from 'express';
import asyncHandler from 'express-async-handler';
import { getSubjects, getChaptersBySubject } from './subjects.controller.ts';

const subjectsRouter = express.Router();

subjectsRouter.get('/', asyncHandler(getSubjects));
subjectsRouter.get('/:subjectId/chapters', asyncHandler(getChaptersBySubject));

export default subjectsRouter;
