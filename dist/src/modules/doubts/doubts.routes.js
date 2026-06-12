import express from 'express';
import asyncHandler from 'express-async-handler';
import { createDoubt, getMyDoubts, getDoubtById, resolveDoubt, addDoubtMessage, } from "./doubts.controller.js";
import { authenticate } from "../../middleware/authenticate.js";
import { upload } from "../../middleware/upload.js";
const doubtsRouter = express.Router();
doubtsRouter.use(authenticate);
// Create a doubt (with optional image upload)
doubtsRouter.post('/', upload.array('images', 5), asyncHandler(createDoubt));
// Get current user's doubts (with filter/pagination)
doubtsRouter.get('/me', asyncHandler(getMyDoubts));
// Get single doubt
doubtsRouter.get('/:id', asyncHandler(getDoubtById));
// Resolve a doubt
doubtsRouter.patch('/:id/resolve', asyncHandler(resolveDoubt));
// Add a message/reply to a doubt thread
doubtsRouter.post('/:doubtId/messages', asyncHandler(addDoubtMessage));
export default doubtsRouter;
//# sourceMappingURL=doubts.routes.js.map