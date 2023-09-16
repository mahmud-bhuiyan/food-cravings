import { useState } from "react";
import { CrossIcon, Hamburger } from "../assets/icons";
import headerLogo from "../assets/food-cravings.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/recipes", label: "Recipes" },
    { href: "/chefs", label: "Chefs" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "About us" },
    // { href: "/sign-up", label: "Sign Up" },
    { href: "/login", label: "Login" },
  ];

  return (
    <header className="padding-x w-full pt-5 pb-4 fixed z-10 bg-white">
      <nav className="flex justify-between items-center max-container">
        <Link to="/">
          <img src={headerLogo} alt="headerLogo" width={120} height={30} />
        </Link>

        <ul className="flex flex-1 justify-center items-center max-lg:hidden gap-4">
          {navLinks?.map((link, index) => (
            <li key={index}>
              <Link
                to={link.href}
                className={`text-lg text-slate-gray font-montserrat leading-normal mr-4 ${
                  location.pathname === link.href
                    ? "text-purple-500 font-semibold"
                    : ""
                }`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex justify-center items-center max-lg:hidden gap-4">
          <a
            className="text-xl text-sky-500"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            className="text-xl text-red-500"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            className="text-xl text-sky-500"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </div>

        <div onClick={toggleMenu} className="cursor-pointer">
          {showMenu ? (
            <img
              className="hidden max-lg:block"
              src={CrossIcon}
              alt="crossIcon"
              width={25}
              height={25}
            />
          ) : (
            <img
              className="hidden max-lg:block"
              src={Hamburger}
              alt="hamburger"
              width={25}
              height={25}
            />
          )}
        </div>

        {showMenu && (
          <div className="bg-white absolute top-20 right-0 mt-2 w-44 mr-4 shadow-lg rounded text-center border lg:hidden">
            <ul>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className={`block px-4 py-2 hover:bg-gray-200 text-slate-gray font-montserrat border-b-2 text-lg  leading-normal ${
                      location.pathname === link.href
                        ? "text-purple-500 font-semibold"
                        : ""
                    }`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
