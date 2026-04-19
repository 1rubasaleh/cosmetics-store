import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <nav className="relative text-pink-600 px-3 py-3 h-14 flex justify-between items-center shadow-md font-poppins bg-pink-100">
      {/* Logo */}
      <img
        src={logo}
        alt="logo"
        className="h-24 w-auto mt-4 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
        onClick={() => handleNavigate("/")}
      />

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 text-sm font-medium">
        <button
          onClick={() => handleNavigate("/")}
          className="relative group hover:text-pink-500 transition"
        >
          Home
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
        </button>

        <button
          onClick={() => handleNavigate("/products")}
          className="relative group hover:text-pink-500 transition"
        >
          Products
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
        </button>

        <button
          onClick={() => handleNavigate("/cart")}
          className="relative group hover:text-pink-500 transition"
        >
          Cart
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
        </button>
      </div>

      {/* Mobile Button */}
      <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
        {open ? "✖" : "☰"}
      </button>

      {/* Mobile Menu (Slide Animation) */}
      <div
        className={`
          absolute top-16 left-0 w-full bg-pink-100 flex flex-col items-center gap-4 py-6 md:hidden shadow-md
          transition-all duration-300 ease-in-out
          ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}
        `}
      >
        <button
          className="hover:text-pink-500 transition"
          onClick={() => handleNavigate("/")}
        >
          Home
        </button>

        <button
          className="hover:text-pink-500 transition"
          onClick={() => handleNavigate("/products")}
        >
          Products
        </button>

        <button
          className="hover:text-pink-500 transition"
          onClick={() => handleNavigate("/cart")}
        >
          Cart
        </button>
      </div>
    </nav>
  );
}
