import { useContext, useState } from "react";
import { CrossIcon, Hamburger } from "../assets/icons";
import headerLogo from "../assets/food-cravings.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const { user, logout } = useContext(AuthContext);

  const handleLogOut = () => {
    logout()
      .then(() => {
        console.log("Sign-out successful");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const commonLinkStyles = "text-lg font-montserrat leading-normal";

  const navLinks = (
    <>
      <li>
        <Link
          to="/"
          className={`${commonLinkStyles} ${
            location.pathname === "/"
              ? "text-purple-500 font-semibold border-b-2 border-purple-500"
              : ""
          }`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/recipes"
          className={`${commonLinkStyles} ${
            location.pathname === "/recipes"
              ? "text-purple-500 font-semibold border-b-2 border-purple-500"
              : ""
          }`}
        >
          Recipes
        </Link>
      </li>
      <li>
        <Link
          to="/chefs"
          className={`${commonLinkStyles} ${
            location.pathname === "/chefs"
              ? "text-purple-500 font-semibold border-b-2 border-purple-500"
              : ""
          }`}
        >
          Chefs
        </Link>
      </li>
      <li>
        <Link
          to="/blogs"
          className={`${commonLinkStyles} ${
            location.pathname === "/blogs"
              ? "text-purple-500 font-semibold border-b-2 border-purple-500"
              : ""
          }`}
        >
          Blogs
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className={`${commonLinkStyles} ${
            location.pathname === "/contact"
              ? "text-purple-500 font-semibold border-b-2 border-purple-500"
              : ""
          }`}
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className={`${commonLinkStyles} ${
            location.pathname === "/about"
              ? "text-purple-500 font-semibold border-b-2 border-purple-500"
              : ""
          }`}
        >
          About us
        </Link>
      </li>
      {user ? (
        <>
          <li>
            <Link onClick={handleLogOut} className={commonLinkStyles}>
              Logout
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link
              to="/login"
              className={`${commonLinkStyles} ${
                location.pathname === "/login"
                  ? "text-purple-500 font-semibold border-b-2 border-purple-500"
                  : ""
              }`}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className={`${commonLinkStyles} ${
                location.pathname === "/signup"
                  ? "text-purple-500 font-semibold border-b-2 border-purple-500"
                  : ""
              }`}
            >
              Sign Up
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <header className="padding-x w-full pt-5 pb-4 fixed z-10 bg-white">
      <nav className="flex justify-between items-center max-container">
        <Link to="/">
          <img src={headerLogo} alt="headerLogo" width={120} height={30} />
        </Link>

        <ul className="flex flex-1 justify-center items-center max-lg:hidden gap-4">
          {navLinks}
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
            <ul className="">{navLinks}</ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
