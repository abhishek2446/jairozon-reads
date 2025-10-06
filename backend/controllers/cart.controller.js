import User from "../models/user.model.js";

//update user cartData: /cart/update
export const updateCart = async (req, res) => {
    try {
        const userId = req.user;
        const { cart } = req.body;

        const updatedCart = await User.findByIdAndUpdate(userId, { cartItems: cart });
        res.status(200).json({ message: "Cart data updated successfully", success: true });
    } catch (error) {
        console.error("Error updating cart data:", error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};