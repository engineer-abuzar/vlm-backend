import express from 'express';
import asyncHandler from 'express-async-handler';
import {
  createTicket,
  getMyTickets,
  getTicketById,
  updateTicketStatus,
} from './tickets.controller.ts';
import { authenticate } from '../../middleware/authenticate.ts';

const ticketsRouter = express.Router();

ticketsRouter.use(authenticate);

ticketsRouter.post('/', asyncHandler(createTicket));
ticketsRouter.get('/me', asyncHandler(getMyTickets));
ticketsRouter.get('/:id', asyncHandler(getTicketById));

// Admin only — update status
ticketsRouter.patch('/:id/status', asyncHandler(updateTicketStatus));

export default ticketsRouter;
