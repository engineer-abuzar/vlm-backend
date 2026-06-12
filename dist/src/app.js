import 'dotenv/config';
import express from "express";
import cors from "cors";
import authRouter from "./modules/auth/auth.routes.js";
import studentRouter from "./modules/students/student.routes.js";
import adminRouter from "./modules/admin/admin.route.js";
import plansRouter from "./modules/plans/plans.routes.js";
import doubtsRouter from "./modules/doubts/doubts.routes.js";
import subscriptionsRouter from "./modules/subscriptions/subscriptions.routes.js";
import sessionsRouter from "./modules/sessions/sessions.routes.js";
import ticketsRouter from "./modules/tickets/tickets.routes.js";
import paymentsRouter from "./modules/payments/payments.routes.js";
import chatRouter from "./modules/chat/chat.routes.js";
import teacherRouter from "./modules/teacher/teacher.routes.js";
import subjectsRouter from "./modules/subjects/subjects.routes.js";
import errorMiddleware from "./utils/errorMiddleWare.js";
const app = express();
app.use(cors({
    // origin: process.env.CLIENT_URL || "*",
    origin: "*",
    credentials: true,
}));
app.use(express.json());
app.get("/", (_req, res) => {
    res.json({ message: "VLM API running", version: "1.0.0" });
});
// ── Auth ────────────────────────────────────────────────────
app.use("/api/v1/auth", authRouter);
// ── Student ─────────────────────────────────────────────────
app.use("/api/v1/student", studentRouter);
// ── Teacher ─────────────────────────────────────────────────
app.use("/api/v1/teacher", teacherRouter);
// ── Admin ───────────────────────────────────────────────────
app.use("/api/v1/admin", adminRouter);
// ── Subjects (public) ───────────────────────────────────────
app.use("/api/v1/subjects", subjectsRouter);
// ── Plans ───────────────────────────────────────────────────
app.use("/api/v1/plans", plansRouter);
// ── Subscriptions ───────────────────────────────────────────
app.use("/api/v1/subscriptions", subscriptionsRouter);
// ── Payments ────────────────────────────────────────────────
app.use("/api/v1/payments", paymentsRouter);
// ── Doubts ──────────────────────────────────────────────────
app.use("/api/v1/doubts", doubtsRouter);
// ── Chat ────────────────────────────────────────────────────
app.use("/api/v1/chat", chatRouter);
// ── Sessions ────────────────────────────────────────────────
app.use("/api/v1/sessions", sessionsRouter);
// ── Support Tickets ─────────────────────────────────────────
app.use("/api/v1/tickets", ticketsRouter);
// ── Global Error Handler ────────────────────────────────────
app.use(errorMiddleware);
export default app;
//# sourceMappingURL=app.js.map