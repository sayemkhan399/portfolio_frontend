import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom"; // ✅ Added useLocation
import LanguageToggle from "../components/LanguageToggle";
import Logo from "../components/Logo";

// Helper to match current route
const getActiveLink = (pathname) => {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/all-projects")) return "work";
  if (pathname.startsWith("/blog")) return "blog";
  if (pathname.startsWith("/contact")) return "contact";
  return "";
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); 
  const activeLink = getActiveLink(location.pathname);

  const navItems = [
    { id: "home", label: "Home", to: "/" },
    { id: "work", label: "My Work", to: "/all-projects" },
    { id: "blog", label: "Blog", to: "/blog" },
    { id: "contact", label: "Contact", to: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full h-[70px] px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between 
                    bg-black/10 backdrop-blur-xl border-b border-emerald-400/20 
                    transition-all duration-300">
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center gap-2 text-white hover:opacity-90 transition"
      >
        <Logo />
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center gap-10 relative">
        {navItems.map((item) => (
          <li key={item.id} className="relative">
            <Link
              to={item.to}
              className={`relative z-10 px-3 py-1 rounded-lg transition-colors ${
                activeLink === item.id
                  ? "text-emerald-400 font-medium"
                  : "text-gray-300 hover:text-emerald-400"
              }`}
            >
              {item.label}
            </Link>
            {/* Glassy Bubble Indicator */}
            {activeLink === item.id && (
              <div className="absolute inset-0 bg-blue-500/20  backdrop-blur-md rounded-lg  -z-10 animate-fade-in" />
            )}
          </li>
        ))}
      </ul>

      {/* Desktop Language Toggle */}
      <div className="hidden md:block">
        <LanguageToggle />
      </div>

      {/* Mobile Menu Button */}
      <button
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen(!menuOpen)}
        className="inline-block md:hidden text-emerald-400 hover:text-emerald-300 transition active:scale-90"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-black/10 backdrop-blur-xl border-b border-emerald-400/20 p-6 md:hidden shadow-lg">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.id} className="relative">
                <Link
                  to={item.to}
                  className={`block px-4 py-2 rounded-lg transition-colors ${
                    activeLink === item.id
                      ? "text-emerald-400 bg-white/20 backdrop-blur-sm font-medium"
                      : "text-gray-300 hover:text-emerald-400"
                  }`}
                  onClick={() => setMenuOpen(false)} // Close menu on click
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-5">
            <LanguageToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;