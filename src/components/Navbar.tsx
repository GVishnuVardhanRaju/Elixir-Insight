import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 w-full bg-black z-50 shadow-md">
      <nav className="flex justify-between items-center px-6 md:px-10 py-4 max-w-7xl mx-auto">

        {/* Logo */}
        <div className="text-lg font-semibold tracking-wide text-white">
          🍷 Elixir Insight
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm text-white">
          <li><a href="#home" className="hover:text-yellow-400 transition">Home</a></li>
          <li><a href="#benefits" className="hover:text-yellow-400 transition">Benefits</a></li>
          <li><a href="#drinks" className="hover:text-yellow-400 transition">Drinks</a></li>
          <li><a href="#about" className="hover:text-yellow-400 transition">About</a></li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 text-center bg-black py-6">
          <li><a href="#home" className="text-white hover:text-yellow-400" onClick={toggleMenu}>Home</a></li>
          <li><a href="#benefits" className="text-white hover:text-yellow-400" onClick={toggleMenu}>Benefits</a></li>
          <li><a href="#drinks" className="text-white hover:text-yellow-400" onClick={toggleMenu}>Drinks</a></li>
          <li><a href="#about" className="text-white hover:text-yellow-400" onClick={toggleMenu}>About</a></li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;