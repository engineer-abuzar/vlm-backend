import express from 'express';
import asyncHandler from 'express-async-handler';
import { createOrGetChat, getStudentChats, getChatMessages, sendMessage, markMessageRead, } from "./chat.controller.js";
import { authenticate } from "../../middleware/authenticate.js";
import { upload } from "../../middleware/upload.js";
const chatRouter = express.Router();
chatRouter.post('/', authenticate, asyncHandler(createOrGetChat));
chatRouter.get('/student/:studentId', authenticate, asyncHandler(getStudentChats));
chatRouter.get('/:chatId/messages', authenticate, asyncHandler(getChatMessages));
chatRouter.post('/:chatId/messages', authenticate, upload.array('images', 5), asyncHandler(sendMessage));
chatRouter.patch('/messages/:messageId/read', authenticate, asyncHandler(markMessageRead));
export default chatRouter;
//# sourceMappingURL=chat.routes.js.map