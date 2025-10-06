import express from 'express';
import { logoutUser, Signup, loginUser, checkAuth } from '../controllers/user.controller.js';
import { authUser } from '../middlewares/authUser.js';
const userRouter = express.Router();

userRouter.post("/signup", Signup);
userRouter.post("/login", loginUser);
userRouter.get("/is-auth", authUser, checkAuth); // check login
userRouter.get("/me", authUser, (req, res) => {   // get current user
  res.json({ success: true, user: req.user });
});
userRouter.post("/logout", authUser, logoutUser); // logout
;

export default userRouter;