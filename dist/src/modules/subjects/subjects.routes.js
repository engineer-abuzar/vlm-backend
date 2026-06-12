import express from 'express';
import asyncHandler from 'express-async-handler';
import { getSubjects, getChaptersBySubject } from "./subjects.controller.js";
const subjectsRouter = express.Router();
subjectsRouter.get('/', asyncHandler(getSubjects));
subjectsRouter.get('/:subjectId/chapters', asyncHandler(getChaptersBySubject));
export default subjectsRouter;
//# sourceMappingURL=subjects.routes.js.map