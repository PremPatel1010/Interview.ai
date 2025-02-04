import { useState } from 'react';
import { ShoppingCart, UserPlus, LogIn, LogOut, Lock, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from '../stores/user.store';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user, logout} = useUserStore();

 

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg z-40 transition-all duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-white flex items-center space-x-2 hover:text-blue-200 transition-colors"
          >
            Interview.ai
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-blue-200 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation Links - Desktop */}
          <nav className={`hidden lg:flex items-center space-x-6`}>
            <NavLinks  user={user} logout={logout} />
          </nav>
        </div>

        {/* Mobile Menu */}
        <nav
          className={`${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } lg:hidden overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className="py-4 space-y-4 flex flex-col items-start">
            <MobileNavLinks  user={user} logout={logout} />
          </div>
        </nav>
      </div>
    </header>
  );
};

const NavLinks = ({  user, logout }) => (
  <>
    <Link
      to={"/"}
      className="text-white hover:text-blue-200 transition-colors font-medium"
    >
      Home
    </Link>
    <Link
      to={"/about"}
      className="text-white hover:text-blue-200 transition-colors font-medium"
    >
      About
    </Link>
    <Link
      to={"/contact"}
      className="text-white hover:text-blue-200 transition-colors font-medium"
    >
      Contact
    </Link>

    {user ? (
      <button
        className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 rounded-lg flex items-center transition-colors shadow-md"
        onClick={logout}
      >
        <LogOut size={18} />
        <span className="ml-2">Log Out</span>
      </button>
    ) : (
      <>
        <Link
          to={"/signup"}
          className="bg-blue-800 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center transition-colors shadow-md"
        >
          <UserPlus className="mr-2" size={18} />
          Sign Up
        </Link>
        <Link
          to={"/login"}
          className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 rounded-lg flex items-center transition-colors shadow-md"
        >
          <LogIn className="mr-2" size={18} />
          Login
        </Link>
      </>
    )}
  </>
);

const MobileNavLinks = ({  user, logout }) => (
  <>
    <Link
      to={"/"}
      className="text-white hover:text-blue-200 transition-colors font-medium w-full"
    >
      Home
    </Link>
    <Link
      to={"/about"}
      className="text-white hover:text-blue-200 transition-colors font-medium w-full"
    >
      About
    </Link>
    <Link
      to={"/contact"}
      className="text-white hover:text-blue-200 transition-colors font-medium w-full"
    >
      Contact
    </Link>

    
    {user ? (
      <button
        className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 rounded-lg flex items-center transition-colors shadow-md w-full"
        onClick={logout}
      >
        <LogOut size={18} />
        <span className="ml-2">Log Out</span>
      </button>
    ) : (
      <>
        <Link
          to={"/signup"}
          className="bg-blue-800 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center transition-colors shadow-md w-full"
        >
          <UserPlus className="mr-2" size={18} />
          Sign Up
        </Link>
        <Link
          to={"/login"}
          className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 rounded-lg flex items-center transition-colors shadow-md w-full"
        >
          <LogIn className="mr-2" size={18} />
          Login
        </Link>
      </>
    )}
  </>
);

export default Navbar;