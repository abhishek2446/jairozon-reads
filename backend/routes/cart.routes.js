import express from "express";
import { authUser } from "../middlewares/authUser.js";
import { updateCart } from "../controllers/cart.controller.js";
const cartRouter = express.Router();

// Update cart data
cartRouter.post("/update", authUser, updateCart);
export default cartRouter;