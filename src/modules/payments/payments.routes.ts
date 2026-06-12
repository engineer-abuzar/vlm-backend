import express from 'express';
import asyncHandler from 'express-async-handler';
import { createOrder, verifyPayment, getPaymentHistory } from './payments.controller.ts';
import { authenticate } from '../../middleware/authenticate.ts';

const paymentsRouter = express.Router();

paymentsRouter.use(authenticate);

paymentsRouter.post('/create-order', asyncHandler(createOrder));
paymentsRouter.post('/verify', asyncHandler(verifyPayment));
paymentsRouter.get('/history', asyncHandler(getPaymentHistory));

export default paymentsRouter;
