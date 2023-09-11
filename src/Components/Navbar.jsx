import { useState } from "react";
import { CrossIcon, Hamburger } from "../assets/icons";
import headerLogo from "../assets/food-cravings.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "recipes", label: "Recipes" },
    { href: "blog", label: "Blog" },
    { href: "contact", label: "Contact" },
    { href: "about-us", label: "About us" },
    { href: "sign-up", label: "Sign Up" },
    { href: "login", label: "Login" },
  ];

  return (
    <header className="padding-x shadow w-full py-8 absolute z-10">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="headerLogo" width={120} height={30} />
        </a>

        <ul className="flex flex-1 justify-center items-center max-lg:hidden gap-4">
          {navLinks?.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="text-lg text-slate-gray font-montserrat leading-normal mr-4"
                onClick={closeMenu}
              >
                {link.label}
              </a>
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
          <div className="bg-white absolute top-20 right-0 mt-2 w-40 shadow-lg rounded text-center border">
            <ul>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="block px-4 py-2 hover:bg-gray-200 text-slate-gray font-montserrat border-b-2"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
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
