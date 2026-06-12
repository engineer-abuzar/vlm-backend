import express from 'express';
import asyncHandler from 'express-async-handler';
import { getMySessions, getSessionById, createFeedback } from "./sessions.controller.js";
import { authenticate } from "../../middleware/authenticate.js";
const sessionsRouter = express.Router();
sessionsRouter.use(authenticate);
sessionsRouter.get('/me', asyncHandler(getMySessions));
sessionsRouter.get('/:id', asyncHandler(getSessionById));
sessionsRouter.post('/feedback', asyncHandler(createFeedback));
export default sessionsRouter;
//# sourceMappingURL=sessions.routes.js.map