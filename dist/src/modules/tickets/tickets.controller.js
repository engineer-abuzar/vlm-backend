import { prisma } from "../../config/prisma.js";
// ── POST /tickets ─────────────────────────────────────────────
export const createTicket = async (req, res) => {
    const userId = req.user?.userId;
    if (!userId) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }
    const { subject, description } = req.body;
    if (!subject || !description) {
        res.status(400).json({ error: 'subject and description are required' });
        return;
    }
    const ticket = await prisma.supportTicket.create({
        data: { userId, subject, description },
    });
    res.status(201).json({ message: 'Ticket created', ticket });
};
// ── GET /tickets/me ───────────────────────────────────────────
export const getMyTickets = async (req, res) => {
    const userId = req.user?.userId;
    if (!userId) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }
    const tickets = await prisma.supportTicket.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
    });
    res.status(200).json({ tickets });
};
// ── GET /tickets/:id ──────────────────────────────────────────
export const getTicketById = async (req, res) => {
    const id = String(req.params.id);
    const userId = req.user?.userId;
    const ticket = await prisma.supportTicket.findUnique({
        where: { id },
        include: { user: { select: { id: true, email: true, mobile: true, role: true } } },
    });
    if (!ticket) {
        res.status(404).json({ message: 'Ticket not found' });
        return;
    }
    // Users can only see their own tickets (admins can see all)
    if (ticket.userId !== userId && req.user?.role !== 'ADMIN') {
        res.status(403).json({ message: 'Forbidden' });
        return;
    }
    res.status(200).json({ ticket });
};
// ── PATCH /tickets/:id/status ─────────────────────────────────
export const updateTicketStatus = async (req, res) => {
    const id = String(req.params.id);
    const { status } = req.body;
    const allowed = ['OPEN', 'IN_PROGRESS', 'RESOLVED', 'CLOSED'];
    if (!allowed.includes(status)) {
        res.status(400).json({ error: `status must be one of: ${allowed.join(', ')}` });
        return;
    }
    const ticket = await prisma.supportTicket.update({
        where: { id },
        data: { status },
    });
    res.status(200).json({ message: 'Ticket updated', ticket });
};
//# sourceMappingURL=tickets.controller.js.map