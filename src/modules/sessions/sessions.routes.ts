import express from 'express';
import asyncHandler from 'express-async-handler';
import { getMySessions, getSessionById, createFeedback } from './sessions.controller.ts';
import { authenticate } from '../../middleware/authenticate.ts';

const sessionsRouter = express.Router();

sessionsRouter.use(authenticate);

sessionsRouter.get('/me', asyncHandler(getMySessions));
sessionsRouter.get('/:id', asyncHandler(getSessionById));
sessionsRouter.post('/feedback', asyncHandler(createFeedback));

export default sessionsRouter;
