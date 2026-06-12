const errorMiddleware = (err, req, res, next) => {
    console.error(err.stack); // Server log me error dikhega
    // console.error("FULL ERROR =>", err);
    // console.error("ERROR CODE =>", err.code);
    // console.error("META =>", err.meta);
    // console.error("MESSAGE =>", err.message);
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        success: false,
        message: err.message || "Internal Server Error",
        // Development me stack trace dikhao, production me chhupa do
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined
    });
};
export default errorMiddleware;
//# sourceMappingURL=errorMiddleWare.js.map