import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-scroll";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  const navItems = [
    { link: "Accueil", path: "accueil" },
    { link: "Services", path: "service" },
    { link: "Réalisations", path: "realisation" },
    { link: "Tarif", path: "tarif" },
    { link: "Nous", path: "about" },
    { link: "Contact", path: "contact" },
  ];
    
  return (
    <>
      <nav className=" bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-purple-500 fixed top-0 right-0 left-0 shadow-md">
        <div className=" text-lg container mx-auto flex justify-between items-center">
          <div className=" flex items-center space-x-10">
            <a href="#">
              <img
                className=" h-12"
                id="accueil"
                src="../../public/AB.png"
                alt="logo"
              />
            </a>

            {/* Show menu */}
            <ul className=" md:flex space-x-10 hidden">
              {navItems.map(({ link, path }) => (
                <Link
                  className=" block hover:text-[#c654c6] cursor-pointer"
                  onactiveclass='active'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  key={link}
                  to={path}
                >
                  {link}
                </Link>
              ))}
            </ul>
          </div>
          {/* Bouton connexion */}
          <div className=" space-x-12 hidden md:flex items-center">
            <button className=" bg-purple-500 py-2 px-4 translate-all duration-300 rounded-3xl text-white hover:border-2 hover:border-purple-500 hover:text-purple-500 hover:bg-white">
              Sign up
            </button>
          </div>
          {/* Show bouton menu */}
          <div className=" md:hidden">
            <button
              onClick={toggleMenu}
              className=" text-white focus:outline-none focus:text-[#c654c6]"
            >
              {showMenu ? (
                <FaXmark className=" h-8 w-8 text-[#c654c6] transition-all duration-700" />
              ) : (
                <BiMenuAltRight className=" h-10 w-10 text-[#c654c6] transition-all duration-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={` space-y-4 px-6 pt-24 pb-5 w-[150px] h-full bg-[#c654c6] ${
          showMenu ? "block fixed top-0 right-0 left-0" : "hidden "
        }`}
      >
        {navItems.map(({ link, path }) => (
          <Link
            spy={true}
            smooth={true}
            offset={-80}
            key={link}
            to={path}
            className=" block text-[#ecc6de] hover:text-[#ffffff] cursor-pointer"
            onClick={toggleMenu}
          >
            {link}
          </Link>
        ))}
        <div className=" space-x-12 md:flex items-center">
          <button className=" bg-[#ecc6de] py-2 px-4 translate-all duration-300 rounded-3xl text-[#c654c6] hover:border-2 hover:border-[#c654c6] hover:text-[#c654c6] hover:bg-white">
            Sign up
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar