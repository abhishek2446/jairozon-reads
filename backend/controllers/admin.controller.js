import jwt from 'jsonwebtoken';


// Admin login => /admin/login
export const adminLogin = async(req, res) => {
  try {
      const { email, password } = req.body;
        if (!email || !password) {
          return res.status(400).json({ message: "Please fill all the fields", success: false });
      }
      // Check if the admin credentials are valid
      if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
          // Generate a JWT token
          const adminToken = jwt.sign({ email }, process.env.JWT_SECRET, {
              expiresIn: "1d",
          });
          res.cookie("adminToken", adminToken, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: process.env.NODE_ENV === "production" ? "none" : "strict", maxAge: 24 * 60 * 60 * 1000, });
          return res.status(200).json({ message: "Admin logged in successfully", success: true });
      }

      return res.status(401).json({ message: "Invalid credentials", success: false });
  } catch (error) {
      console.error("Error during admin login:", error);
      res.status(500).json({ message: "Internal server error", success: false });
  }
};

//check admin auth : /admin/is-auth
export const checkAuth = async(req, res) => {
    try {
   res.status(200).json({ success: true });
} catch (error) {
   console.error("Error during admin authentication:", error);
   res.status(500).json({ message: "Internal server error", success: false });
}
};

// Admin logout => /admin/logout
export const adminLogout = async(req, res) => {
  try {
      res.clearCookie("adminToken");
      return res.status(200).json({ message: "Admin logged out successfully", success: true });
  } catch (error) {
      console.error("Error during admin logout:", error);
      res.status(500).json({ message: "Internal server error", success: false });
  }
};
