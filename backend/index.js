import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connectDB } from "./config/connectDB.js";
dotenv.config();
import userRouter from "./routes/user.routes.js";
import adminRouter from "./routes/admin.routes.js";
import addressRouter from "./routes/address.route.js";
import orderRouter from "./routes/order.routes.js";
import cartRouter from "./routes/cart.routes.js";
import bookRouter from "./routes/book.routes.js";
const app = express();
const PORT = process.env.PORT || 4000;
//connectDB
connectDB();
// Middlewares
const allowedOrigins = ['http://jairozon.com'];
app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());

//api endpoints
app.get("/", (req, res) => {
  res.send("Welcome to Jairozon Backend");
});
app.use("/images", express.static("uploads"));
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/book", bookRouter);
app.use("/cart", cartRouter);
app.use("/order", orderRouter);
app.use("/address", addressRouter);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});