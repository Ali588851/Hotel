import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaRegHeart, FaCalendarCheck } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateWishlist = () => {
      const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
      setWishlistCount(saved.length);
    };
    updateWishlist();
    const interval = setInterval(updateWishlist, 500);
    return () => clearInterval(interval);
  }, []);

  const navLinkClasses = "hover:text-blue-300 transition";
  const isHomePage = location.pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isHomePage
          ? scrolled
            ? "bg-black shadow-md"
            : "bg-transparent"
          : "bg-black shadow-md"
      } border-b border-white/10 font-[Cinzel]`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div
          className="text-3xl font-bold text-white tracking-widest"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <NavLink to="/">Oce<span className="text-blue-400">an</span></NavLink>
        </motion.div>

        {/* Desktop Nav */}
        <motion.nav
          className="hidden md:flex items-center gap-8 text-lg font-medium text-white ml-auto"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <NavLink to="/" className={navLinkClasses}>Home</NavLink>
          <NavLink to="/about" className={navLinkClasses}>About</NavLink>
          <NavLink to="/services" className={navLinkClasses}>Services</NavLink>
          <NavLink to="/gallery" className={navLinkClasses}>Gallery</NavLink>
          <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>

          <div className="flex items-center gap-4 ml-6">
            <NavLink
              to="/book"
              className="flex items-center gap-2 text-white px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
            >
              <FaCalendarCheck />
              Book
            </NavLink>

            <NavLink
              to="/wishlist"
              className="relative p-2 border border-white rounded-full text-white hover:text-red-400 transition"
            >
              <FaRegHeart className="text-xl" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {wishlistCount}
                </span>
              )}
            </NavLink>
          </div>
        </motion.nav>

        {/* Mobile Toggle */}
        <motion.button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-white transition"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden px-6 overflow-hidden"
          >
            <nav className="flex flex-col gap-3 text-white font-medium py-4 text-lg font-[Cinzel]">
              <NavLink to="/" className={navLinkClasses}>Home</NavLink>
              <NavLink to="/about" className={navLinkClasses}>About</NavLink>
              <NavLink to="/services" className={navLinkClasses}>Services</NavLink>
              <NavLink to="/gallery" className={navLinkClasses}>Gallery</NavLink>
              <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>

              <NavLink
                to="/book"
                className="flex items-center gap-2 text-white px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
              >
                <FaCalendarCheck />
                Book
              </NavLink>

              <NavLink
                to="/wishlist"
                className="relative p-2 border border-white rounded-full text-white hover:text-red-400 transition w-fit"
              >
                <FaRegHeart className="text-xl" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {wishlistCount}
                  </span>
                )}
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
