import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

//registe a new user => /user/signup
export const Signup = async (req, res) => {
    try{
        const { name, email, password } = req.body;
if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required", success: false });
}
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists", success: false });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = new User({
            name,
            email,
            password: hashedPassword,
        });

        // Save the user to the database
        await user.save();

        // Generate a JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });
        res.cookie("token", token, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: process.env.NODE_ENV === "production" ? "none" : "strict", maxAge: 24 * 60 * 60 * 1000, });
        // Send the token and user data in the response
        return res.status(201).json({ message: "User Registered successfully", success: true, user: { name: user.name, email: user.email },
         });
    }
    catch(error){
        console.error("Error during user signup:", error);
        res.status(500).json({ message: "Internal server error", success: false });
    }
};
//login user => /user/login
export const loginUser = async(req, res) => {
    try{
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required", success: false });
        }

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User Not Found", success: false });
        }

        // Check if the password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials", success: false });
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });
        res.cookie("token", token, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: process.env.NODE_ENV === "production" ? "none" : "strict", maxAge: 24 * 60 * 60 * 1000, });
        // Send the token and user data in the response
        return res.status(200).json({ message: "User logged in successfully", success: true, user: { name: user.name, email: user.email },
         });
    }
    catch(error){
        console.error("Error during user login:", error);
        res.status(500).json({ message: "Internal server error", success: false });
    }
};

// check auth => /user/is-auth

export const checkAuth = async (req, res) => {
    try{
        const userId = req.userId;
        const user = await User.findById(userId).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found", success: false });
        }
        return res.status(200).json({ message: "User is authenticated", success: true, user });

    }
    catch(error){
        console.error("Error during user authentication check:", error);
        res.status(500).json({ message: "Internal server error", success: false });
    }
};

//logout user => /user/logout
export const logoutUser = (req, res) => {
    try{
        res.clearCookie("token");
        return res.status(200).json({ message: "User logged out successfully", success: true });
    }
    catch(error){
        console.error("Error during user logout:", error);
        res.status(500).json({ message: "Internal server error", success: false });
    }
};