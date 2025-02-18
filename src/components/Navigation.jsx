import { GiMountaintop } from "react-icons/gi";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  /* usestate to track the menu being open or closed */
  const [isOpen, setIsOpen] = useState(false);

  /* This is being used to toggle the open and closed state */
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav aria-label="Main navigation" className="navbar">
        <Link to={`/`}>
          <div className="logo">
            <GiMountaintop />
          </div>
        </Link>
        <div className="flex">
          <ul className={isOpen ? "nav-links open" : "nav-links"}>
            <li>
              <NavLink className="link" to="/" onClick={() => setIsOpen(false)}>
                home
              </NavLink>
              <NavLink className="link" to="/" onClick={() => setIsOpen(false)}>
                by Sofie bak
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          aria-label="Open menu"
          className="burger-menu"
          onClick={toggleMenu}
        >
          {/* Show close icon if menu is open, hamburger icon if closed */}
          {isOpen ? <IoClose size={30} /> : <CiMenuBurger size={30} />}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
