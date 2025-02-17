import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    setActiveLink(path === "/" ? "Home" : path.substring(1).charAt(0).toUpperCase() + path.substring(2));

    const storedUsername = sessionStorage.getItem("username");
    if (storedUsername) setUser(storedUsername);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleLogout = () => {
    sessionStorage.removeItem("username");
    setUser(null);
    window.location.href = "/";
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-indigo-300 text-slate-800 shadow-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-8">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-slate-800">
          AI Dashboard
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {["Home", "Features", "Contact"].map((item) => (
            <a
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={`text-lg transition ${
                activeLink === item ? "text-rose-900" : "text-slate-800 hover:text-rose-900"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* User & Mobile Menu */}
        <div className="flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-3">
              <span className="text-slate-800">{user}</span>
              <button onClick={handleLogout} className="text-red-400 hover:text-red-300 text-sm">
                Logout
              </button>
            </div>
          ) : (
            <a href="/login" className="text-slate-800 hover:text-rose-900 text-sm">
              Login
            </a>
          )}

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-gray-400">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-slate-900 py-3 px-6 space-y-2 border-t border-gray-700">
          {["Home", "Features", "Contact"].map((item) => (
            <a
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="block text-gray-400 hover:text-blue-400 transition"
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
