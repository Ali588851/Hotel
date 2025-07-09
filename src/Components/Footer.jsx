import { FaFacebookF, FaTwitter, FaInstagram, FaHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white font-[Cinzel] px-6 py-10 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold tracking-widest text-blue-400">Ocean</h2>
          <p className="text-sm text-gray-400 mt-2">
            Experience luxury and comfort like never before. Welcome to your perfect getaway.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><NavLink to="/" className="hover:text-blue-300">Home</NavLink></li>
            <li><NavLink to="/about" className="hover:text-blue-300">About</NavLink></li>
            <li><NavLink to="/services" className="hover:text-blue-300">Services</NavLink></li>
            <li><NavLink to="/gallery" className="hover:text-blue-300">Gallery</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-blue-300">Contact</NavLink></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Email: info@oceanluxury.com</li>
            <li>Phone: +92 300 1234567</li>
            <li>Location: Lahore, Pakistan</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-blue-400 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Ocean Luxury Hotel. Made with <FaHeart className="inline text-red-500" /> by Ali Husnain.
      </div>
    </footer>
  );
}
