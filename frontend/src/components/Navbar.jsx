import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { AppContext } from "../context/AppContext";
import { toast } from "react-hot-toast";

// Unique underline animation for nav links
const Underline = () => (
  <span className="block h-[3px] w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-amber-400 via-yellow-400 to-emerald-400 rounded-full mt-1"></span>
);

// Improved, more colorful and attractive open book SVG logo
const Logo = () => (
  <span className="flex items-center gap-2 select-none">
    {/* Open Book Icon */}
    <svg width="38" height="38" viewBox="0 0 48 48" fill="none">
      <g>
        <path
          d="M24 10C27.5 7 38 7 44 12V38C38 33 27.5 33 24 36C20.5 33 10 33 4 38V12C10 7 20.5 7 24 10Z"
          fill="url(#bookGradient)"
          stroke="#fbbf24"
          strokeWidth="2"
        />
        <path
          d="M24 10V36"
          stroke="#34d399"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M24 10C20.5 7 10 7 4 12"
          stroke="#fbbf24"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M24 10C27.5 7 38 7 44 12"
          stroke="#fbbf24"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M24 36C27.5 33 38 33 44 38"
          stroke="#fbbf24"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M24 36C20.5 33 10 33 4 38"
          stroke="#fbbf24"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="bookGradient" x1="4" y1="7" x2="44" y2="38" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffe066" />
            <stop offset="0.5" stopColor="#fbbf24" />
            <stop offset="1" stopColor="#34d399" />
          </linearGradient>
        </defs>
      </g>
    </svg>
    <span className="font-extrabold text-2xl md:text-3xl tracking-tight bg-gradient-to-r from-amber-600 via-yellow-500 to-emerald-600 bg-clip-text text-transparent font-serif italic drop-shadow-lg relative">
      Jairozon
      <span className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-emerald-400 rounded-full animate-pulse opacity-70"></span>
    </span>
  </span>
);

const Navbar = () => {
  const { navigate, user, setUser, cartCount } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const logout = async () => {
    setUser(null);
     localStorage.removeItem("authToken");
  localStorage.removeItem("user");
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <nav
      className="w-full border-b border-yellow-200 shadow-sm fixed top-0 left-0 z-50"
      style={{
        background:
          "linear-gradient(90deg, #fffbe6 0%, #fbbf24 60%, #b7e4c7 100%)",
        backgroundImage:
          "linear-gradient(90deg, #fffbe6 0%, #fbbf24 60%, #b7e4c7 100%), url('https://www.transparenttextures.com/patterns/wood-pattern.png')",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-10 py-3 transition-all">
        {/* Logo & Brand */}
        <Link to="/" className="group flex items-center gap-2">
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8 font-semibold font-serif text-lg text-emerald-900 drop-shadow">
          <Link
            to="/"
            className="group relative hover:text-amber-700 transition-colors px-2 py-1 rounded-lg hover:bg-amber-100/60 tracking-wide"
            style={{ fontFamily: "'Outfit', 'Merriweather', serif" }}
          >
            Home
            <Underline />
          </Link>
          <Link
            to="/books"
            className="group relative hover:text-amber-700 transition-colors px-2 py-1 rounded-lg hover:bg-amber-100/60 tracking-wide"
            style={{ fontFamily: "'Outfit', 'Merriweather', serif" }}
          >
            Books
            <Underline />
          </Link>
          <Link
            to="/about"
            className="group relative hover:text-amber-700 transition-colors px-2 py-1 rounded-lg hover:bg-amber-100/60 tracking-wide"
            style={{ fontFamily: "'Outfit', 'Merriweather', serif" }}
          >
            About
            <Underline />
          </Link>
          <div
            onClick={() => navigate("/cart")}
            className="relative cursor-pointer group"
          >
            <BsCart2 className="w-7 h-7 group-hover:text-amber-600 transition-colors" />
            <span className="bg-amber-400 absolute -top-2 -right-3 text-xs text-white w-[20px] h-[20px] rounded-full flex items-center justify-center border-2 border-white font-bold shadow">
              {cartCount ? cartCount : 0}
            </span>
          </div>
          {user ? (
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  navigate("/my-orders");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="px-5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full cursor-pointer shadow btn-glow transition font-serif"
              >
                My Orders
              </button>
              <p
                onClick={logout}
                className="cursor-pointer hover:underline text-emerald-700 font-serif"
              >
                Logout
              </p>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="cursor-pointer px-7 py-2 bg-primary hover:bg- text-white rounded-full font-semibold shadow btn-glow transition font-serif"
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="sm:hidden focus:outline-none"
        >
          <svg
            width="24"
            height="18"
            viewBox="0 0 24 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="2" rx="1" fill="#10b981" />
            <rect y="8" width="18" height="2" rx="1" fill="#fbbf24" />
            <rect y="16" width="21" height="2" rx="1" fill="#10b981" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${open ? "flex" : "hidden"
          } sm:hidden absolute top-[60px] left-0 w-full bg-white/95 shadow-lg py-6 flex-col items-start gap-4 px-8 text-base z-40 rounded-b-2xl`}
      >
        <Link
          to="/"
          className="group relative hover:text-amber-700 transition-colors font-serif"
          style={{ fontFamily: "'Outfit', 'Merriweather', serif" }}
          onClick={() => setOpen(false)}
        >
          Home
          <Underline />
        </Link>
        <Link
          to="/books"
          className="group relative hover:text-amber-700 transition-colors font-serif"
          style={{ fontFamily: "'Outfit', 'Merriweather', serif" }}
          onClick={() => setOpen(false)}
        >
          Books
          <Underline />
        </Link>
        <Link
          to="/about"
          className="group relative hover:text-amber-700 transition-colors font-serif"
          style={{ fontFamily: "'Outfit', 'Merriweather', serif" }}
          onClick={() => setOpen(false)}
        >
          About
          <Underline />
        </Link>
        <div
          onClick={() => {
            navigate("/cart");
            setOpen(false);
          }}
          className="relative cursor-pointer flex items-center gap-2"
        >
          <BsCart2 className="w-6 h-6" />
          <span className="bg-amber-400 text-xs text-white w-[18px] h-[18px] rounded-full flex items-center justify-center border-2 border-white font-bold shadow">
            {cartCount ? cartCount : 0}
          </span>
          <span className="font-serif">Cart</span>
        </div>
        {user ? (
          <div className="flex flex-col gap-2 w-full">
            <button
              onClick={() => {
                navigate("/my-orders");
                window.scrollTo({ top: 0, behavior: "smooth" });
                setOpen(false);
              }}
              className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full cursor-pointer shadow btn-glow font-serif"
            >
              My Orders
            </button>
            <p
              onClick={() => {
                logout();
                setOpen(false);
              }}
              className="cursor-pointer hover:underline text-emerald-700 font-serif"
            >
              Logout
            </p>
          </div>
        ) : (
          <button
            onClick={() => {
              navigate("/login");
              setOpen(false);
            }}
            className="cursor-pointer px-8 py-2 bg-amber-400 hover:bg-amber-500 text-white rounded-full font-semibold shadow btn-glow font-serif"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
