import express from "express";
import cors from "cors";
import authRouter from "./modules/auth/auth.routes.ts";
import studentRouter from "./modules/students/student.routes.ts";
import errorMiddleware  from "./utils/errorMiddleWare.ts";
import adminRouter from "./modules/admin/admin.route.ts";
const app=express();

app.use(cors({origin:"*",credentials:true}));

app.use(express.json());
app.get("/",(req,res)=>{
res.send("API running")
})

app.use("/api/v1/auth",authRouter);
app.use("/api/v1/student",studentRouter);
app.use('/api/v1/admin',adminRouter)

app.use(errorMiddleware);

export default app;