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
const allowedOrigins = [
  'https://jairozon.com',
  'https://www.jairozon.com',
  'https://jairozon.onrender.com',
  'http://localhost:5173', // optional for local dev
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
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
