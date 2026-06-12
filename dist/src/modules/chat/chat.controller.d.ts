import type { Request, Response, NextFunction } from 'express';
/**
 * POST /chat
 * Create or retrieve existing chat between a student and teacher.
 */
export declare const createOrGetChat: (req: Request, res: Response, next: NextFunction) => Promise<void>;
/**
 * GET /chat/student/:studentId
 * Get all chats for a student.
 */
export declare const getStudentChats: (req: Request, res: Response, next: NextFunction) => Promise<void>;
/**
 * GET /chat/:chatId/messages
 * Get paginated messages for a chat.
 */
export declare const getChatMessages: (req: Request, res: Response, next: NextFunction) => Promise<void>;
/**
 * POST /chat/:chatId/messages
 * Send a message in a chat (REST fallback; real-time via socket).
 */
export declare const sendMessage: (req: Request, res: Response, next: NextFunction) => Promise<void>;
/**
 * PATCH /chat/messages/:messageId/read
 * Mark a message as read.
 */
export declare const markMessageRead: (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=chat.controller.d.ts.map