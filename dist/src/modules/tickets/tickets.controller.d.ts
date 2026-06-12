import type { Response } from 'express';
import type { AuthRequest } from '../../middleware/authenticate.ts';
export declare const createTicket: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getMyTickets: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getTicketById: (req: AuthRequest, res: Response) => Promise<void>;
export declare const updateTicketStatus: (req: AuthRequest, res: Response) => Promise<void>;
//# sourceMappingURL=tickets.controller.d.ts.map