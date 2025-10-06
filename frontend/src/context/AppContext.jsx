import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL; // e.g., http://localhost:5000
axios.defaults.withCredentials = true; // needed if backend uses cookies

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [booksData, setBooksData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [cart, setCart] = useState([]);

  // --- Fetch Admin ---
  const fetchAdmin = async () => {
    try {
      const { data } = await axios.get("/admin/is-auth");
      setIsAdmin(!!data.success);
    } catch {
      setIsAdmin(false);
    }
  };

  // --- Fetch User ---
  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/user/is-auth");
      if (data.success) setUser(data.user);
      else setUser(null);
    } catch {
      setUser(null);
    } finally {
      setAuthLoading(false);
    }
  };

  // --- Fetch Books ---
  const fetchBooks = async () => {
    try {
      const { data } = await axios.get("/book/get-books");
      if (data.success) setBooksData(data.books);
    } catch (error) {
      toast.error(error.message);
    }
  };

  // --- Cart Functions ---
  const addToCart = (book) => {
    const existingBook = cart.find((item) => item._id === book._id);
    if (existingBook) {
      setCart((prev) =>
        prev.map((item) =>
          item._id === book._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
    }
    toast.success("Book added to cart");
  };

  const removeFromCart = (bookId) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item._id === bookId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
    toast.success("Book removed from cart");
  };

  const updateCart = (productId, newQty) => {
    setCart((prev) =>
      prev.map((item) =>
        item._id === productId ? { ...item, quantity: newQty } : item
      )
    );
    toast.success("Cart updated");
  };

  const cartCount = cart.reduce((t, i) => t + i.quantity, 0);
  const totalCartPrice = cart.reduce(
    (t, i) => t + i.offerPrice * i.quantity,
    0
  );

  // --- Logout ---
  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setUser(null);
    delete axios.defaults.headers.common["Authorization"];
    navigate("/login");
  };

  // --- Restore user/token on refresh ---
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const storedUser = localStorage.getItem("user");

    if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    if (storedUser) setUser(JSON.parse(storedUser));

    fetchBooks();
    fetchAdmin();

    if (token) fetchUser();
    else setAuthLoading(false);
  }, []);

  const value = {
    navigate,
    user,
    setUser,
    axios,
    isAdmin,
    setIsAdmin,
    booksData,
    setBooksData,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    addToCart,
    cart,
    removeFromCart,
    updateCart,
    cartCount,
    totalCartPrice,
    authLoading,
    logout, // added
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
