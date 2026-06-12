import express from 'express';
import asyncHandler from 'express-async-handler';
import { getMySubscription, activateTrial, cancelSubscription, } from "./subscriptions.controller.js";
import { authenticate } from "../../middleware/authenticate.js";
const subscriptionsRouter = express.Router();
subscriptionsRouter.use(authenticate);
// GET /subscriptions/me  — current user's active subscription
subscriptionsRouter.get('/me', asyncHandler(getMySubscription));
// Legacy route (kept for backwards compat)
subscriptionsRouter.get('/student/:studentId', asyncHandler(getMySubscription));
// POST /subscriptions/trial
subscriptionsRouter.post('/trial', asyncHandler(activateTrial));
// DELETE /subscriptions/cancel
subscriptionsRouter.delete('/cancel', asyncHandler(cancelSubscription));
export default subscriptionsRouter;
//# sourceMappingURL=subscriptions.routes.js.map