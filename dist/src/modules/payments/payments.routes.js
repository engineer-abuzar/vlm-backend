import express from 'express';
import asyncHandler from 'express-async-handler';
import { createOrder, verifyPayment, getPaymentHistory } from "./payments.controller.js";
import { authenticate } from "../../middleware/authenticate.js";
const paymentsRouter = express.Router();
paymentsRouter.use(authenticate);
paymentsRouter.post('/create-order', asyncHandler(createOrder));
paymentsRouter.post('/verify', asyncHandler(verifyPayment));
paymentsRouter.get('/history', asyncHandler(getPaymentHistory));
export default paymentsRouter;
//# sourceMappingURL=payments.routes.js.map